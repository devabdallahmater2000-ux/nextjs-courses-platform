import { User } from "@/utils/type";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { IoLogOut, IoPerson } from "react-icons/io5";
import LogoutButton from "../auth/LogoutButton";
import { useAuth } from "../auth/AuthProvider";

const UserProfile = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const { user } = useAuth();
    console.log("user from UserProfile:", user);
    
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open user menu"
        >
          <div className="relative">
            {/* {(user as any).avatar ? (
              <Image
                src={(user as any).avatar}
                alt={user.name}
                width={24}
                height={24}
                className="w-8 h-8 rounded-full object-cover border-2 border-blue-100"
              />
            ) : ( */}
              <FaUserCircle className="w-8 h-8 text-blue-600" />
            
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
          </div>
          <HiChevronDown
            className={`text-gray-400 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
  
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 mt-1">{user?.email}</p>
              <div className="mt-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                  {user?.role}
                </span>
              </div>
            </div>
  
            <div className="py-2">
              <button
                onClick={() => setIsDropdownOpen(false)}
                className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center space-x-3 transition-all duration-200 group"
              >
                <div className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-colors duration-200">
                  <IoPerson className="text-base" />
                </div>
                <span className="font-medium">Profile</span>
              </button>
  
              {/* <button
                onClick={handleLogout}
                className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3 transition-all duration-200 group"
              >
                <div className="p-1.5 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors duration-200">
                  <IoLogOut className="text-base" />
                </div>
                <span className="font-medium">Logout</span>
              </button> */}
              <LogoutButton variant="outline"  />
            </div>
          </div>
        )}
      </div>
    );
  };

  export default UserProfile ;