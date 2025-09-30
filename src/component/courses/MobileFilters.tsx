// /components/MobileFilters.tsx
"use client";

import { useEffect, useState } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import Filters from "./Filters";

export default function MobileFilters() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [open]);

  return (
    <>
      <button
        className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl"
        onClick={() => setOpen(true)}
      >
        <LuSlidersHorizontal className="w-4 h-4" />
        Filters
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Sheet body that equals <Filters /> */}
          <div className="relative ml-0 h-full w-[85%] max-w-sm bg-white p-4 overflow-y-auto shadow-xl">
            <Filters />
          </div>
        </div>
      )}
    </>
  );
}
