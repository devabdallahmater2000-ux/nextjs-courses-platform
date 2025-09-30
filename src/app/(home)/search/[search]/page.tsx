"use client";
import { COURSES_DATA } from "@/utils/constant";
import React, { use, useMemo } from "react";
import Contant from "@/component/courses/Contant";

const page = ({
  params,
  searchParams,
}: {
  params: Promise<{ search: string }>;
  searchParams?: Promise<{ page?: string }>;
}) => {
  const { search } = use(params);
  const resolvedSearchParams = use(searchParams || Promise.resolve({}));

  const filteredCourses = useMemo(() => {
    const normalizedQuery = search.trim().toLowerCase();

    if (!normalizedQuery) {
      return COURSES_DATA;
    }

    return COURSES_DATA.filter((course) => {
      const titleMatch = course.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = course.description
        .toLowerCase()
        .includes(normalizedQuery);

      return titleMatch || descriptionMatch;
    });
  }, [search]);

  return (
    <div className="bg-gray-50">
      <div className="px-9 pt-10  space-y-2">
        <h1 className="text-3xl font-bold">Search Results</h1>
        <p className="text-gray-600 text-lg">
          Found {filteredCourses.length} courses for "{search}"
        </p>
      </div>
       <Contant courses={filteredCourses} searchParams={resolvedSearchParams} />
    </div>
  );
};

export default page;
