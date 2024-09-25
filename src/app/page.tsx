import FeaturesSection from "@/components/landing/FeaturesSection";
import Hehe from "@/components/landing/Hehe";
import HeroSection from "@/components/landing/HeroSection";
import LatestNewsSection from "@/components/landing/LatestsNewsSection";
import ReviewSection from "@/components/landing/ReviewSection";
import ServicesSection from "@/components/landing/ServicesSection";
import MainLayout from "@/components/layouts/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyApp | Masa Depan Teknologi",
  description:
    "Masa Depan Teknologi bagi dunia metaverse yang menyenangkan anda bersama dengan teman-teman anda.",
  icons: {
    icon: "/images/logo-1.png",
  },
};

// app/page.tsx
export default function LandingPage() {
  return (
    <MainLayout>
      {/* <Hehe /> */}
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <ReviewSection />
      <LatestNewsSection />
    </MainLayout>
  );
}
