"use client";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Filters from "./Filters";

// import { SlidersHorizontal, Clock, DollarSign, Star } from "lucide-react";

export default function FiltersSidebar() {
  return (
    <aside className="hidden md:block w-72 mt-20 bg-white rounded-2xl shadow-md p-5 h-fit space-y-6">
      {/* Header */}
      <Filters />
    </aside>
  );
}
