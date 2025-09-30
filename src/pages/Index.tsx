import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkStepsSection from "@/components/WorkStepsSection";
import PersonalCabinetSection from "@/components/PersonalCabinetSection";
import StatsSection from "@/components/StatsSection";
import DesignDetailsSection from "@/components/DesignDetailsSection";
import CalculatorSection from "@/components/CalculatorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WorkStepsSection />
      <PersonalCabinetSection />
      <StatsSection />
      <DesignDetailsSection />
      <CalculatorSection />
      <Footer />
    </main>
  );
};

export default Index;
