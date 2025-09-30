const RelatedCourses = () => {
  const courses = [
    {
      title: "Advanced JavaScript",
      instructor: "John Smith",
      rating: 4.7,
      image: "/api/placeholder/80/60",
    },
    {
      title: "Node.js from Scratch",
      instructor: "Sarah Wilson",
      rating: 5.0,
      image: "/api/placeholder/80/60",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="font-bold text-lg mb-4 text-gray-800">Related Courses</h3>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex gap-3 group cursor-pointer">
            <div className="w-20 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex-shrink-0 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-800 group-hover:text-blue-600 transition">
                {course.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {course.instructor}
              </div>
              <div className="flex items-center mt-1">
                <div className="text-yellow-400 text-xs flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  {course.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
