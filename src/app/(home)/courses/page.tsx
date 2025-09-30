import Contant from "@/component/courses/Contant";
import { COURSES_DATA } from "@/utils/constant";

export default function CoursesPage() {
  const courses = COURSES_DATA;
  return (
   <Contant courses={courses}/>
  );
}
