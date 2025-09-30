"use client";
import React, { useState, useCallback } from "react";
import { IoClose, IoLogOut, IoPerson } from "react-icons/io5";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { categories, mockUser } from "@/utils/constant";
import SearchInput from "./navBar/SearchInput";
import Logo from "./navBar/Logo";
import AuthButtons from "./navBar/AuthButtons";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "./auth/AuthProvider";
import UserProfile from "./navBar/UserProfile";

const Navbar2 = () => {
  const [openBar, setOpenBar] = useState<boolean>(false);
  // const [isLoggedIn] = useState<boolean>(false);
  const {isAuthenticated} = useAuth();
  const toggleSidebar = useCallback(() => {
    setOpenBar((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setOpenBar(false);
  }, []);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openBar) {
        closeSidebar();
      }
    };

    if (openBar) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [openBar, closeSidebar]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Categories Dropdown */}
          <div className="relative group hidden md:block">
            <button className="flex items-center justify-between w-full p-3 text-left bg-white  rounded-lg text-gray-900 hover:text-blue-600 transition-all duration-200">
              <span className="font-medium ">Categories</span>
              <HiChevronDown className="text-gray-400 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="absolute  top-full left-0 w-[250px] mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50">
              <ul className="py-2 min-w-fit">
                {categories.map((category, index) => (
                  <li key={category.id} >
                    <button
                      className=" text-left px-4 py-3 text-gray-700 hover:bg-blue-50 min-w-fit hover:text-blue-600 w-full
                       transition-all duration-200 flex items-center space-x-3 group/item"
                      onClick={closeSidebar}
                    >
                      <div className="w-2 h-2 bg-blue-100 rounded-full group-hover/item:bg-blue-500 transition-colors duration-200"></div>
                      <Link href={category.href} className="font-medium">{category.title}</Link>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <SearchInput className="" />
          </div>

          {/* User Profile or Auth Buttons - Desktop */}
          <div className="hidden md:block">
            {isAuthenticated  ? (
              <UserProfile  />
            ) : (
              <AuthButtons />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="block md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
            aria-expanded={openBar}
          >
            <FaBars className="text-xl text-gray-700" />
          </button>
        </div>
      </div>
      {/* Mobile Sidebar */}
      {openBar && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-end z-50"
          onClick={closeSidebar}
        >
          <div
            className="bg-white shadow-xl w-full max-w-sm sm:w-96 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <Logo />
                <button
                  onClick={closeSidebar}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close menu"
                >
                  <IoClose className="text-xl text-gray-600" />
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <SearchInput className="" />
              </div>

              {/* User Profile or Auth Buttons - Mobile */}
              <div className="mb-6">
                {isAuthenticated && mockUser ? (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="relative">
                      {mockUser.avatar ? (
                        <Image
                          src={mockUser.avatar}
                          alt={mockUser.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                        />
                      ) : (
                        <FaUserCircle className="w-10 h-10 text-blue-600" />
                      )}
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {mockUser.name}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">
                        {mockUser.role}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium">
                      Login
                    </button>
                    <button className="w-full border border-blue-600 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium">
                      Sign up
                    </button>
                  </div>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Categories
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-gray-700 text-left group"
                      onClick={closeSidebar}
                    >
                      <Link href={category.href} className="flex items-center space-x-2 cursor-pointer">
                        <div className="w-2 h-2 bg-blue-100 rounded-full group-hover:bg-blue-500 transition-colors duration-200"></div>
                        <span className="font-medium text-sm">
                          {category.title}
                        </span>
                      </Link>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
