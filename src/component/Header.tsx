import { FaMedal } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

const Header = () => {
  // const stripeKey = process.env.STRIPE_PUBLISHABLE_KEY;
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
      {/* {'stripeKey' + stripeKey} */}
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Advance Your Skills with Premium Online Courses
            </h1>
            <p className="text-lg mb-6 text-blue-100">
              Join thousands of students who have transformed their careers
              through our specialized courses in various fields.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                Explore Courses
              </button>
              <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-12 h-12    bg-yellow-400 rounded-full flex items-center justify-center">
                <FaMedal className="fas fa-medal text-white text-xl" />
              </div>
              <div className="bg-white rounded-xl shadow-2xl p-6 text-gray-800">
                <h3 className="text-xl font-bold mb-4">
                  Join Our Learning Community
                </h3>
                <p className="mb-4">Get 20% off on your first subscription</p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUserGraduate className="fas fa-user-graduate text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">+50,000 Students</p>
                    <p className="text-sm text-gray-600">Joined us this year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
