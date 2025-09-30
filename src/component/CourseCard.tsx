import { categories } from "@/utils/constant";
import { Course, Category } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar, FaClock } from "react-icons/fa";

interface IProps {
  course: Course;
}

const CourseCard = ({ course }: IProps) => {
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const foundCategory = categories.find(
      (cat) => cat.id === course.categoryId
    );
    setCategory(foundCategory || null);
  }, [course.categoryId]);

  return (
    <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition course-card">

    <Link href={`/courses/${course.id}`} className="bg-white ">
      <div className="relative">
        <Image
          src={course.image || ''}
          alt={course.title}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
        {course.rating && (
          <div className="absolute top-4 right-4 flex items-center space-x-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            <p>{course.rating}</p>
            <FaStar />
          </div>
        )}
        {course.isNew && (
          <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            New
          </div>
        )}
      </div>

      <div className="p-6 pt-4">
        <div className="flex items-center pb-2">
          <FaClock className="text-gray-400 mr-2" />
          <span className="text-gray-600">{course.duration}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 ${category?.iconBg} rounded-lg flex items-center justify-center `}
            >
              {category && <category.icon className="text-white text-2xl" />}
            </div>
            <div>
              <p className="font-medium  text-gray-600">Dr. Ahmed Mohamed</p>
              {category && (
                <p className="text-sm text-gray-600">{category.title}</p>
              )}
            </div>
          </div>
          <div className="text-blue-600 font-bold">{course.price}</div>
        </div>
      </div>
    </Link>
        </div>

  );
};

export default CourseCard;
