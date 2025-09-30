import { 
  FaUserGraduate, 
  FaBuilding, 
  FaBook, 
  FaClipboardList, 
  FaThLarge, 
  FaLanguage 
} from "react-icons/fa";

const stats = [
  { 
    number: '230K+', 
    label: 'Active Learners', 
    icon: <FaUserGraduate className="text-3xl" />,
    color: 'from-blue-500 to-blue-600'
  },
  { 
    number: '6K+', 
    label: 'Organizations', 
    icon: <FaBuilding className="text-3xl" />,
    color: 'from-indigo-500 to-indigo-600'
  },
  { 
    number: '20K+', 
    label: 'Quality Courses', 
    icon: <FaBook className="text-3xl" />,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    number: '576K+', 
    label: 'Successful Enrollments', 
    icon: <FaClipboardList className="text-3xl" />,
    color: 'from-blue-600 to-indigo-600'
  },
  { 
    number: '135+', 
    label: 'Expert Categories', 
    icon: <FaThLarge className="text-3xl" />,
    color: 'from-indigo-600 to-purple-600'
  },
  { 
    number: '5+', 
    label: 'Global Languages', 
    icon: <FaLanguage className="text-3xl" />,
    color: 'from-purple-600 to-pink-600'
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white md:px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted By Millions of
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Learners Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing community of learners and organizations transforming their futures through education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <div className="text-gray-600 font-semibold text-lg">
                {stat.label}
              </div>
              
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}