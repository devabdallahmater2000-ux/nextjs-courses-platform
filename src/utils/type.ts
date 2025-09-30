export type Category = {
  id: number;
  title: string;
  slug: string;
  icon: React.ElementType;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  iconBg: string;
  textColor: string;
  href: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "student" | "instructor" | "admin";
};

export type Course = {
  id: number; // 👈 بدل string إلى number
  title: string;
  image?: string;
  video?: string;
  description: string;
  categoryId: number;
  instructor: string;
  rating: number;
  reviews: number;
  duration: string;
  level: string;
  language: string;
  price: number;
  originalPrice: number;
  lastUpdated: string; // أو Date
  isNew?: boolean;
};
