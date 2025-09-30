import { categories } from "@/utils/constant";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Popular Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a wide range of specialties and choose what suits your
            interests and career goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} rounded-xl p-6 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between h-full`}
            >
              <div>
                <div
                  className={`w-14 h-14 ${category.iconBg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <category.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
              </div>

              <Link
                href={category.href}
                className={`${category.textColor} justify-center text-white p-2 rounded-md  font-medium flex items-center group hover:underline`}
              >
                Explore Courses
                {/* <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-200"></i> */}
                <FaArrowRightLong className="ms-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
