// 'use client'
import { COURSES_DATA } from "@/utils/constant";
import { notFound } from "next/navigation";
import CourseCurriculum from "./components/CourseCurriculum";
import ReviewsSection from "./components/ReviewsSection";
import InstructorSection from "./components/InstructorSection";
import RelatedCourses from "./components/RelatedCourses";
import Link from "next/link";
import CheckoutButton from "@/component/CheckoutButton";

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const course = COURSES_DATA.find((c) => c.id === Number(id));
  if (!course) return notFound();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Hero Section */}
      <div className="course-hero bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  {course.isNew && (
                    <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </span>
                  )}
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Web Development
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {course.title}
                </h1>

                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-6 text-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span>
                      {course.rating} ({course.reviews.toLocaleString()}{" "}
                      reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                    <span>{course.language}</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 w-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-3xl font-bold">
                        ${course.price}
                      </span>
                      <span className="text-xl line-through opacity-70">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <div className="text-green-300 font-semibold text-lg">
                      50% OFF - Limited Time
                    </div>
                  </div>

                  {course.price !==0 ?
                  <CheckoutButton items={[{ name: course.title, price: course.price, quantity: 1 }]} title="Enroll Now"
                  className="cursor-pointer w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 mb-4 shadow-lg" />
                  // <Link href={"/"} className="cursor-pointer">
                  //   <button className="cursor-pointer w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 mb-4 shadow-lg">
                  //     Enroll Now
                  //   </button>
                  // </Link>
                  // <Link href={"/"} className="cursor-pointer">
                  //   <button className="cursor-pointer w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 mb-4 shadow-lg">
                  //     Enroll Now
                  //   </button>
                  // </Link>
                  :
                  <Link href={"/course/content/"+course.id} className="cursor-pointer">
                    <button className="cursor-pointer w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 mb-4 shadow-lg">
                      Go to Course
                    </button>
                  </Link>
                  // <PaymentButton course={course} />
                  }
                  <div className="text-center text-sm opacity-90">
                    <p>30-day money-back guarantee</p>
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Access on mobile and TV</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Master React fundamentals and component architecture",
                    "State management with useState and useReducer",
                    "Event handling and forms in React",
                    "Client-side routing with React Router",
                    "API integration with fetch and axios",
                    "Global state management with Context API & Redux",
                    "Testing with Jest and React Testing Library",
                    "Deployment strategies for React applications",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <CourseCurriculum />

              {/* Instructor */}
              <InstructorSection />

              {/* Reviews */}
              <ReviewsSection />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Preview */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <div className="bg-gray-800 rounded-xl h-48 flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600 mb-2">FREE PREVIEW</div>
                  <div className="font-bold text-gray-800">
                    Introduction to React and Its Features
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition mb-4">
                  Enroll to Watch Full Course
                </button>
                <div className="text-center text-sm text-gray-600 space-y-2">
                  <div className="font-semibold">This course includes:</div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      </svg>
                      <span>32 hours on-demand video</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>45 articles and resources</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Full lifetime access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Courses */}
              <RelatedCourses />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
