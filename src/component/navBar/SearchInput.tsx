"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Course } from "@/utils/type";
import { COURSES_DATA } from "@/utils/constant";
import Image from "next/image";

const SearchInput = ({ className }: { className?: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCourses, setSearchCourses] = useState<Course[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmedQuery = searchQuery.trim();
      if (trimmedQuery) {
        router.push(`/search/${encodeURIComponent(trimmedQuery)}`);
        setSearchQuery("");
      }
    },
    [searchQuery, router]
  );

  useEffect(() => {
    if (!searchQuery) {
      setSearchCourses([]);
      return;
    }

    const handler = setTimeout(() => {
      const courses = COURSES_DATA.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchCourses(courses);
    }, 1500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchQuery) {
        setSearchQuery("");
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [searchQuery]);

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          aria-label="Search for courses and instructors"
          placeholder="Search for courses and instructors..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200"
          autoComplete="off"
        />
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <IoClose className="text-lg" />
          </button>
        )}
      </form>

      {searchCourses.length > 0 && isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
          {searchCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="border-b border-gray-200 w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center space-x-3 group"
            >
              <div className="flex gap-3 items-center ">
                <Image src={course.image ?? ''} alt={course.title} width={50} height={30} className="rounded-md"/>
                <span className="font-medium">{course.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
