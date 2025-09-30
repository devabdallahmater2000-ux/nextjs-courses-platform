"use client";

import Link from "next/link";
import { FaGraduationCap, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-blue-400 text-2xl mr-2" />
              <span className="text-xl font-bold">LearnAcademy</span>
            </div>
            <p className="text-gray-400 mb-4">
              We offer the best training courses in various fields to develop your skills and achieve your career goals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <FaFacebookF />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition">
                <FaTwitter />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <FaYoutube />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href={'/categories/1'} className="text-gray-400 hover:text-white transition">Software Development</Link></li>
              <li><Link href={'/categories/2'} className="text-gray-400 hover:text-white transition">Digital Marketing</Link></li>
              <li><Link href={'/categories/3'} className="text-gray-400 hover:text-white transition">Graphic Design</Link></li>
              <li><Link href={'/categories/4'} className="text-gray-400 hover:text-white transition">Business Management</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest offers and new courses.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2023 LearnAcademy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
