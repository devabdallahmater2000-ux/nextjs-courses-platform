import Header from "@/component/courseContant/Header";
import QuestionForm from "@/component/courseContant/QuestionForm";
import CourseContentSidebar from "@/component/courseContant/Sidbar";
import { COURSES_DATA } from "@/utils/constant";

const CourseContentPage = async ({params}: {params: Promise<{id: string}>}) =>{
  const {id} =await params;
  const course = COURSES_DATA.find(course => course.id === parseInt(id));
  console.log({course});
  
  if(!course){
    return <div>Course not found</div>
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Header  title={course.title}/>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3">
            

            <video src="/video.mp4" controls className="w-full rounded-lg mb-6">
              Your browser does not support the video tag.
            </video>

            {/* Question Form */}
            <QuestionForm />
          </div>

          {/* Sidebar - Course Content */}
          <div className="lg:w-1/3">
            <CourseContentSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContentPage