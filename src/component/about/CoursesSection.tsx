import { FaChalkboardTeacher, FaLaptopCode, FaCertificate, FaUserTie } from "react-icons/fa";

export default function CoursesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 md:px-10 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Learning
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted learning paths designed to help you achieve your professional goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FaChalkboardTeacher className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Courses Enrollment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We help organizations of all types and sizes prepare for the path ahead. Our curated collection 
                  of business and technical courses helps companies, governments, and nonprofits go further by 
                  placing learning at the center of their strategies.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <FaCertificate className="text-blue-500 text-xl" />
              <span className="text-gray-700 font-medium">Industry-recognized certifications</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FaLaptopCode className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">E-Learning Platform</h3>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to our comprehensive learning ecosystem where you'll expand your knowledge across 
                  popular topics. Our platform introduces you to a wide range of information and skills 
                  essential for professional growth in today's digital landscape.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <FaUserTie className="text-indigo-500 text-xl" />
              <span className="text-gray-700 font-medium">Expert-led course content</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaCertificate className="text-blue-600 text-xl" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Certification</h4>
            <p className="text-gray-600 text-sm">Earn recognized certificates</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaUserTie className="text-indigo-600 text-xl" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Instructors</h4>
            <p className="text-gray-600 text-sm">Learn from industry leaders</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaLaptopCode className="text-purple-600 text-xl" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Flexible Access</h4>
            <p className="text-gray-600 text-sm">Learn anytime, anywhere</p>
          </div>
        </div>
      </div>
    </section>
  );
}