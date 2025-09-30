import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative lg:flex gap-5 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden md:px-10">
      {/* Background Pattern */}
      <div>
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/30"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                <FaPlayCircle className="mr-2" />
                New Courses Available
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Where
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                {" "}
                Possibilities Begin
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Transform your career with our industry-leading courses and expert
              instructors
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Courses
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                View Learning Paths
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className=" flex items-center justify-center p-5 pt-0">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt=""
          width={800}
          height={500}
          className="w-[600px] aspect-square object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
