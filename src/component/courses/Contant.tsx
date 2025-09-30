"use client";
import React, { useEffect, useMemo, useState } from "react";
import FiltersSidebar from "./FiltersSidebar";
import MobileFilters from "./MobileFilters";
import Card from "./Card";
import { Course } from "@/utils/type";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";

interface IProps {
  courses: Course[];
  // searchParams is no longer needed for reactivity but kept optional for backward compatibility
  searchParams?: {
    page?: string;
    rating?: string;
    level?: string[] | string;
    duration?: string;
    free?: string;
  };
}
const Contant = ({ courses }: IProps) => {
  const searchParams = useSearchParams();

  const filterRating: string = searchParams.get("rating") || "";
  const filterLevel: string[] = (searchParams.get("level") || "")
    .split(",")
    .filter(Boolean);
  const filterDuration: { start: number; end: number }[] = (
    searchParams.get("duration")?.split(",") || []
  )
    .map((d: string) => {
      const parts = d.split("-");
      const start = Number(parts[0]);
      const end = parts[1] ? Number(parts[1]) : start;
      return { start, end };
    })
    .filter((d) => !isNaN(d.start) && !isNaN(d.end));
  const filterIsFree: string = searchParams.get("free") || "";

  const filteredCourses = useMemo(() => courses.filter((course) => {
    if (filterRating && course.rating < Number(filterRating)) {
      return false;
    }
    if (filterLevel.length > 0 && !filterLevel.includes(course.level)) {
      return false;
    }
    if (filterDuration.length > 0) {
      // يمكنك دعم أكثر من مدة إذا أردت
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
      // أظهر فقط المجاني
      return false;
    }
    if (filterIsFree === "0" && course.price === 0) {
      // أظهر فقط المدفوع
      return false;
    }
    return true; // مهم جداً
  }), [courses, filterRating, filterLevel, filterDuration, filterIsFree]);

  const [perPage, setPerPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>();
  const pageParam = searchParams.get("page");
  const page = Number(pageParam) || 1;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex);
  useEffect(() => {
    setTotalPages(Math.ceil(filteredCourses.length / perPage));
  }, [perPage, filteredCourses.length]);

  return (
    <div>
      <div className=" px-4 pb-5 md:px-8 flex gap-6 bg-gray-50">
        <FiltersSidebar />

        <main className="flex-1">
          <div className="flex justify-end items-center mb-4">
            <MobileFilters />
          </div>
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
          <div className="space-y-6 ">
            {paginatedCourses.map((course) => (
              <Card key={course.id} course={course} />
            ))}
            <Pagination totalPages={totalPages || 1} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contant;
