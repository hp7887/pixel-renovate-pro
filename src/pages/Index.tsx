import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkStepsSection from "@/components/WorkStepsSection";
import PersonalCabinetSection from "@/components/PersonalCabinetSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import CalculatorSection from "@/components/CalculatorSection";
import DesignDetailsSection from "@/components/DesignDetailsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WorkStepsSection />
      <PersonalCabinetSection />
      <ReviewsSection />
      <GallerySection />
      <CalculatorSection />
      <DesignDetailsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
