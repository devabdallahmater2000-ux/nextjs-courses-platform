import { FaGraduationCap, FaUser, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <span className="bg-white rounded-full p-2 shadow-md">
                <FaGraduationCap className="text-2xl text-indigo-600" />
              </span>
              <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow">E-learning</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#" className="text-white/80 hover:text-white font-semibold transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10">Categories</a>
              <a href="#" className="text-white/80 hover:text-white font-semibold transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10">My learning</a>
              <a href="#" className="text-white font-bold border-b-2 border-white pb-1">About Us</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/80 rounded-full px-4 py-2 w-64 shadow-inner focus-within:ring-2 focus-within:ring-pink-400">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search for anything"
                className="bg-transparent w-full focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                <FaUser className="text-indigo-600 text-xl" />
              </div>
              <span className="hidden md:block text-white font-semibold drop-shadow">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}