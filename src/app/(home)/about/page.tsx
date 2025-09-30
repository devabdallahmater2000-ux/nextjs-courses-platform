import CoursesSection from "@/component/about/CoursesSection";
import Header from "@/component/about/Header";
import Hero from "@/component/about/Hero";
import Impact from "@/component/about/Impact";
import Mission from "@/component/about/Mission";
import Stats from "@/component/about/Stats";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Mission />
      <Impact />
      <Stats />
      <CoursesSection />
    </div>
  )
}