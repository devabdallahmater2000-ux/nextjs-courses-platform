import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link href={'/auth/login'}
        className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
        aria-label="Login"
      >
        Login
      </Link>
      <Link href={'/auth/signup'}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
        aria-label="Sign up"
      >
        Sign up
      </Link>
    </div>
  );
};

export default AuthButtons;
