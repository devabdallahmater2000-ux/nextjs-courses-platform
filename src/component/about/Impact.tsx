import { FaGlobeAmericas, FaUsers, FaBuilding } from "react-icons/fa";

export default function Impact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 md:px-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl">
                <FaGlobeAmericas className="text-3xl text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <FaUsers className="text-blue-600 text-sm" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Creating Impact 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Around The World
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            With our global catalog spanning the latest skills and topics, people and organizations 
            everywhere are able to adapt to change and thrive in the digital economy.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <FaUsers className="text-3xl text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">190+</div>
              <div className="text-gray-600 font-medium">Countries Reached</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <FaGlobeAmericas className="text-3xl text-indigo-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">15M+</div>
              <div className="text-gray-600 font-medium">Learners Impacted</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <FaBuilding className="text-3xl text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">8K+</div>
              <div className="text-gray-600 font-medium">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}