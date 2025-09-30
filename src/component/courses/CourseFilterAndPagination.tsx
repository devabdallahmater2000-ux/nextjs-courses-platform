"use client";
import React, { useState, useEffect } from "react";
import { Course } from "@/utils/type";
import Pagination from "./Pagination";

interface CourseFilterAndPaginationProps {
  courses: Course[];
  searchParams?: {
    page?: string;
    rating?: string;
    level?: string[];
    duration?: string;
    free?: string;
  };
  children: (filteredCourses: Course[]) => React.ReactNode;
}

const CourseFilterAndPagination = ({ 
  courses, 
  searchParams, 
  children 
}: CourseFilterAndPaginationProps) => {
  // استخراج معلمات التصفية
  const filterRating: string = searchParams?.rating || "";
  const filterLevel: string[] = searchParams?.level || [];
  const filterDuration: { start: number; end: number }[] = (
    searchParams?.duration ? searchParams.duration.split(",") : []
  )
    .map((d: string) => {
      const parts = d.split("-");
      const start = Number(parts[0]);
      const end = parts[1] ? Number(parts[1]) : start;
      return { start, end };
    })
    .filter((d) => !isNaN(d.start) && !isNaN(d.end));
  const filterIsFree: string = searchParams?.free || "";

  // تصفية الدورات
  const filteredCourses = courses.filter((course) => {
    if (filterRating && course.rating < Number(filterRating)) {
      return false;
    }
    if (filterLevel.length > 0 && !filterLevel.includes(course.level)) {
      return false;
    }
    if (filterDuration.length > 0) {
      const courseDuration =
        typeof course.duration === "number"
          ? course.duration
          : parseFloat(course.duration);
      if (isNaN(courseDuration)) return false;

      const match = filterDuration.some(
        (d) => courseDuration >= d.start && courseDuration <= d.end
      );
      if (!match) return false;
    }
    if (filterIsFree === "1" && course.price > 0) {
      return false;
    }
    if (filterIsFree === "0" && course.price === 0) {
      return false;
    }
    return true;
  });

  // إعدادات التصفح
  const [perPage, setPerPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>();
  const page = Number(searchParams?.page) || 1;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredCourses.length / perPage));
  }, [perPage, filteredCourses.length]);

  return (
    <div>
      {/* عرض عدد الدورات في كل صفحة */}
      <div className="p-2 space-x-1 flex justify-end items-center mb-3">
        <span>show Courses : </span>
        <input
          type="number"
          className="w-16 p-2 border-gray-600 rounded-md border"
          value={perPage}
          onChange={(e) => {
            setPerPage(parseInt(e.target.value));
          }}
        />
      </div>

      {/* عرض الدورات المصفاة والمصفحة */}
      <div className="space-y-6">
        {children(paginatedCourses)}

        {/* عرض التصفح */}
        <Pagination totalPages={totalPages || 1} />
      </div>
    </div>
  );
};

export default CourseFilterAndPagination;
