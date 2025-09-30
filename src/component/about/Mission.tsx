import { FaKey, FaPlayCircle, FaRocket } from "react-icons/fa";

export default function Mission() {
  return (
    <section className="py-20 bg-white md:px-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaKey className="text-2xl text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <FaRocket className="text-xs text-white" />
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills Are The Key To 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}Unlocking Potential
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Whether you want to learn a new skill, train your teams, or share what you know with the world, 
              you're in the right place. As a leader in online learning, we're here to help you achieve your 
              goals and transform your life through quality education.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Advancement</h3>
              <p className="text-gray-600">Accelerate your career growth with industry-relevant skills</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaKey className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Mastery</h3>
              <p className="text-gray-600">Master in-demand skills through hands-on projects</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaPlayCircle className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Learn at your own pace with our flexible schedule options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}