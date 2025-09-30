

"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { buildFiltersQuery } from "@/utils/filtersQuery";

const Filters = () => {
  const [filterRating, setFilterRating] = useState<string>("");
  const [filterLevel, setFilterLevel] = useState<string[]>([]);
  const [filterDuration, setFilterDuration] = useState<
    { start: number; end: number }[]
  >([]);
  const [filterIsFree, setFilterIsFree] = useState<boolean | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Apply filters: update URL
  const handleApplyFilters = () => {
    const query = buildFiltersQuery({
      filterRating,
      filterLevel,
      filterDuration,
      filterIsFree,
    });
    router.push(`${pathname}${query ? "?" + query : ""}`);
  };


  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl flex items-center gap-2">Filters</h2>
        <button className="text-[15px] text-blue-500 font-semibold cursor-pointer t hover:underline">
          Reset All
        </button>
      </div>

      {/* Rating */}
      <div className="border-b pb-4">
        <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
          Rating
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          {[4.5, 4, 3].map((stars) => (
            <label
              key={stars}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                className="accent-blue-500 w-4 h-4 cursor-pointer"
                name="rating"
                value={stars}
                onClick={() => setFilterRating(String(stars))}
              />
              <div className="flex gap-0.5 items-center">
                {Array.from({ length: stars }, (_, index) => (
                  <span key={index} className="text-yellow-400 text-lg">
                    <FaStar />
                  </span>
                ))}

                {Array.from({ length: 5 - stars }, (_, index) => (
                  <span key={index + 5} className="text-yellow-400 text-lg">
                    <FaRegStar />
                  </span>
                ))}
                {stars > 4 && (
                  <span key={10} className="text-yellow-400 text-lg">
                    <FaStarHalfAlt />
                  </span>
                )}
                <span className="text-[17px] text-gray-500 ml-2">
                  {stars} & above
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Level */}
      <div className="border-b pb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Level</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
            <input
              type="checkbox"
              className="accent-blue-500 w-4 h-4"
              value="Beginner"
              checked={filterLevel.includes("Beginner")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilterLevel([...filterLevel, "Beginner"]);
                } else {
                  setFilterLevel(
                    filterLevel.filter((level) => level !== "Beginner")
                  );
                }
              }}
            />{" "}
            Beginner
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
            <input
              type="checkbox"
              className="accent-blue-500 w-4 h-4 "
              checked={filterLevel.includes("Intermediate")}
              value="Intermediate"
              onChange={(e) => {
                if (e.target.checked) {
                  setFilterLevel([...filterLevel, "Intermediate"]);
                } else {
                  setFilterLevel(
                    filterLevel.filter((level) => level !== "Intermediate")
                  );
                }
              }}
            />{" "}
            Intermediate
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
            <input
              type="checkbox"
              className="accent-blue-500 w-4 h-4 "
              value="Advanced"
              checked={filterLevel.includes("Advanced")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilterLevel([...filterLevel, "Advanced"]);
                } else {
                  setFilterLevel(
                    filterLevel.filter((level) => level !== "Advanced")
                  );
                }
              }}
            />{" "}
            Advanced
          </label>
        </div>
      </div>

      {/* Duration */}
      <div className="border-b pb-4">
        <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
          Duration
        </h3>
        {filterDuration.map((d) => `${d.start}-${d.end}`)}
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
            <input
              type="checkbox"
              className="accent-blue-500 w-4 h-4"
              value={2}
              checked={filterDuration.some((d) => d.start === 0 && d.end === 2)}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilterDuration([...filterDuration, { start: 0, end: 2 }]);
                } else {
                  setFilterDuration(
                    filterDuration.filter(
                      (duration) =>
                        !(duration.start === 0 && duration.end === 2)
                    )
                  );
                }
              }}
            />{" "}
            &lt; 2 hours
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
            <input
              type="checkbox"
              className="accent-blue-500 w-4 h-4"
              value={3}
              checked={filterDuration.some((d) => d.start === 2 && d.end === 6)}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilterDuration([...filterDuration, { start: 2, end: 6 }]);
                } else {
                  setFilterDuration(
                    filterDuration.filter(
                      (duration) =>
                        !(duration.start === 2 && duration.end === 6)
                    )
                  );
                }
              }}
            />{" "}
            2–6 hours
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
            <input
              type="checkbox"
              className="accent-blue-500 w-4 h-4"
              value={6}
              checked={filterDuration.some(
                (d) => d.end === 12 && d.start === 6
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilterDuration([...filterDuration, { start: 6, end: 12 }]);
                } else {
                  setFilterDuration(
                    filterDuration.filter(
                      (duration) =>
                        !(duration.start === 6 && duration.end === 12)
                    )
                  );
                }
              }}
            />{" "}
            6–12 hours
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
            <input
              type="checkbox"
              className="accent-blue-500 w-4 h-4"
              value={12}
              checked={filterDuration.some(
                (d) => d.start === 12 && d.end === Infinity
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilterDuration([
                    ...filterDuration,
                    { start: 12, end: Infinity },
                  ]);
                } else {
                  setFilterDuration(
                    filterDuration.filter(
                      (duration) =>
                        !(duration.start === 12 && duration.end === Infinity)
                    )
                  );
                }
              }}
            />{" "}
            12+ hours
          </label>
        </div>
      </div>

      {/* Price */}
      <div className="pb-4">
        <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
          Price
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
            <input
              type="radio"
              name="price"
              className="accent-blue-500 w-4 h-4 "
              value={"Free"}
              checked={filterIsFree === true}
              onChange={() => setFilterIsFree(true)}
            />{" "}
            Free
            <label className="flex items-center gap-2 cursor-pointer text-[17px] text-gray-500">
              <input
                type="radio"
                name="price"
                className="accent-blue-500 w-4 h-4 "
                value={"Paid"}
                checked={filterIsFree === false}
                onChange={() => setFilterIsFree(false)}
              />{" "}
              Paid
            </label>
          </label>
        </div>
      </div>

      {/* Apply button */}
      <button
        onClick={handleApplyFilters}
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
