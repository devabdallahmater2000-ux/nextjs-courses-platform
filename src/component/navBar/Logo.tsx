import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa6";

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center cursor-pointer group">
      <FaGraduationCap className="text-blue-600 text-2xl mr-2 group-hover:text-blue-700 transition-colors duration-200" />
      <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
        LearnAcademy
      </span>
    </Link>
  );
};
export default Logo;
