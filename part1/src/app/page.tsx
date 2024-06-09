import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import FeaturedCourses from '../components/Cart'
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Home() {
  return (
    <main className="  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
   
    </main>
  );
}
