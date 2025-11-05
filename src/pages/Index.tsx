import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesPreviewSection from "@/components/ServicesPreviewSection";
import WorkStepsSection from "@/components/WorkStepsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CalculatorSection from "@/components/CalculatorSection";
import PersonalCabinetSection from "@/components/PersonalCabinetSection";
import StatsSection from "@/components/StatsSection";
import DesignDetailsSection from "@/components/DesignDetailsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт квартир под ключ в Санкт-Петербурге | SPB-DSRemont</title>
        <meta name="description" content="Профессиональный ремонт квартир в Санкт-Петербурге: капитальный, косметический и дизайнерский ремонт под ключ. Бесплатный замер и консультация, гарантия качества." />
        <meta name="keywords" content="ремонт квартир СПб, ремонт под ключ Санкт-Петербург, капитальный ремонт, дизайнерский ремонт, косметический ремонт, ремонт офиса, отделка квартир" />
        <link rel="canonical" href="https://spb-dsremont.ru/" />
        <meta property="og:title" content="SPB-DSRemont - Ремонт квартир под ключ в Санкт-Петербурге" />
        <meta property="og:description" content="Качественный ремонт квартир в Санкт-Петербурге. Современный дизайн, прозрачные цены и гарантия до 3 лет." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SPB-DSRemont - Ремонт квартир под ключ в Санкт-Петербурге" />
        <meta name="twitter:description" content="Качественный ремонт квартир в Санкт-Петербурге. Современный дизайн, прозрачные цены и гарантия до 3 лет." />
        <meta name="twitter:image" content="https://spb-dsremont.ru/og-image.jpg" />
      </Helmet>
      <Header />
      <HeroSection />
      <ServicesPreviewSection />
      <WorkStepsSection />
      <StatsSection />
      <BeforeAfterSection />
      <PersonalCabinetSection />
      <DesignDetailsSection />
      <CalculatorSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
