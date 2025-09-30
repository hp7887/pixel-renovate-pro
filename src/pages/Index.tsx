import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkStepsSection from "@/components/WorkStepsSection";
import CalculatorSection from "@/components/CalculatorSection";
import PersonalCabinetSection from "@/components/PersonalCabinetSection";
import StatsSection from "@/components/StatsSection";
import DesignDetailsSection from "@/components/DesignDetailsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WorkStepsSection />
      <CalculatorSection />
      <PersonalCabinetSection />
      <StatsSection />
      <DesignDetailsSection />
      <Footer />
    </main>
  );
};

export default Index;
