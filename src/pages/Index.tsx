import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PersonalCabinetSection from "@/components/PersonalCabinetSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import CalculatorSection from "@/components/CalculatorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PersonalCabinetSection />
      <ReviewsSection />
      <GallerySection />
      <CalculatorSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
