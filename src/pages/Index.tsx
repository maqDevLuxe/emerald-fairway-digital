import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import CourseDetailsSection from "@/components/home/CourseDetailsSection";
import ClubhouseSection from "@/components/home/ClubhouseSection";
import MetricsSection from "@/components/home/MetricsSection";
import ProShopSection from "@/components/home/ProShopSection";
import DiningSection from "@/components/home/DiningSection";
import LushGreenSection from "@/components/home/LushGreenSection";
import TournamentsSection from "@/components/home/TournamentsSection";
import JournalSection from "@/components/home/JournalSection";
import MembershipCriteriaSection from "@/components/home/MembershipCriteriaSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <FloatingElements />
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <CourseDetailsSection />
        <ClubhouseSection />
        <MetricsSection />
        <ProShopSection />
        <DiningSection />
        <LushGreenSection />
        <TournamentsSection />
        <JournalSection />
        <MembershipCriteriaSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
