import Categories from "@/component/Categories";
import CoursesSection from "@/component/CoursesSection";
import Header from "@/component/Header";
import { getBestsellerCourses, getLatestCourses } from "@/utils/constant";
import { Course } from "@/utils/type";

export default function Home() {
  const BestsellerCourses: Course[] = getBestsellerCourses();
  const LatestCourses: Course[] = getLatestCourses(10);


  return (
    <div className="">
      <Header />
      <Categories />
      <div className="bg-gray-50">
      <CoursesSection
        title="Highest Rated Courses"
        subtitle="Courses that received the best ratings from our students"
        courses={BestsellerCourses}
        showViewAll={true}
      />
      </div>
      <CoursesSection 
        title="Latest Courses"
        subtitle="Discover the newest additions to our educational library"
        courses={LatestCourses}
        showViewAll={true}
      />
    </div>
  );
}
