import Contant from "@/component/courses/Contant";
import { categories, COURSES_DATA } from "@/utils/constant";
import Link from "next/link";
import React from "react";
import { TbAlertTriangleFilled } from "react-icons/tb";

const page = ({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams?: {
    page?: string;
    rating?: string;
    level?: string[];
    duration?: string;
    free?: string;
  };
}) => {
  const { id } = params;
  const category = categories.find((cat) => cat.id === Number(id));
  const courses = COURSES_DATA.filter(
    (course) => course.categoryId === Number(id)
  );

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <TbAlertTriangleFilled className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Category Not Found
        </h1>
        <p className="text-gray-500 mb-6">
          The category you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 ">
      <div className="px-9 pt-10  space-y-2">
        <h1 className="text-3xl font-bold">{category.title}</h1>
        <h1 className="text-gray-600 text-lg">{category.description}</h1>
      </div>
      <Contant courses={courses} searchParams={searchParams} />
    </div>
  );
};

export default page;
