// /components/CourseCard.tsx
"use client";

import { Course } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaClock, FaSignal, FaGlobe } from "react-icons/fa";

export default function Card({ course }: { course: Course }) {
  return (
    <div className="course-row bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer">
      <Link href={`/courses/${course.id}`}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-4/12">
            <Image
              src={course.image || ""}
              alt="Web Development"
              className="course-image w-full h-53"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-3/4 p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {course.title}
                  </h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    Bestseller
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>
                      {course.rating} ({course.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaSignal className="mr-1" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <FaGlobe className="mr-1" />
                    <span>{course.language}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Instructor"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="text-gray-700 font-medium">
                    {course.instructor}
                  </span>
                </div>
                {course.price === 0 ? (
                  <p className="text-2xl font-bold text-gray-800">Free</p>
                ) : (
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">
                      ${course.price}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      ${course.originalPrice}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
