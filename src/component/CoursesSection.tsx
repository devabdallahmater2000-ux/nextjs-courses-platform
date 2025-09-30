"use client";
import { Course } from "@/utils/type";
import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface IProps {
  title: string;
  subtitle: string;
  courses: Course[];
  isNew?: boolean;
  showViewAll?: boolean;
}
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const CoursesSection = ({
  title,
  subtitle,
  courses,
}: IProps) => {
  return (
    <section className="py-16  md:px-8 px-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          
        </div>

       
        <div className="relative bg-re-600 px-3">
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            // pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 }, // md
              1024: { slidesPerView: 3 }, // lg
            }}
            className="pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide className="p-2" key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* أزرار مخصصة */}
          <button className="swiper-button-prev-custom absolute top-1/2 -left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition">
            <FaCircleChevronLeft className="h-8 w-8 text-blue-700" />
          </button>

          <button className="swiper-button-next-custom absolute top-1/2 -right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition">
            <FaCircleChevronRight className="h-8 w-8 text-blue-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
