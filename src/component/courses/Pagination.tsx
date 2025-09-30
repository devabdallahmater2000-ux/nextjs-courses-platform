"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({
  totalPages,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const pages =  Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 my-10">
      <Link
        href={
          currentPage > 1
            ? pathname +
              "?" +
              createQueryString("page", String(currentPage - 1))
            : "#"
        }
        aria-disabled={currentPage === 1}
        className={`flex items-center gap-1 px-3 py-2.5 rounded-lg bg-blue-100 
          ${
            currentPage === 1
              ? "pointer-events-none opacity-50"
              : "hover:bg-blue-600 hover:text-white"
          }`}
      >
        <FaChevronLeft className="w-4 h-4" />
      </Link>

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={pathname + "?" + createQueryString("page", String(page))}
            className={`px-3 py-1.5 rounded-lg bg-blue-100 
              ${
                page === currentPage
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-100    hover:bg-blue-600 hover:text-white"
              }`}
          >
            {page}
          </Link>
        ))}
      </div>

      <Link
        href={
          currentPage < totalPages? pathname +"?" + createQueryString("page", String(currentPage + 1)): "#"
        }
        aria-disabled={currentPage >= totalPages} // مجرد دلالة
        className={`flex items-center gap-1 px-3 py-2.5 rounded-lg  bg-blue-100
    ${
      currentPage >= totalPages
        ? "pointer-events-none opacity-50"
        : "hover:bg-blue-600 hover:text-white"
    }`}
      >
        <FaChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
