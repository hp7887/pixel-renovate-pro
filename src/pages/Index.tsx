import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>DigitalSTROY - Ремонт квартир под ключ в Санкт-Петербурге | Капитальный и дизайнерский ремонт</title>
        <meta name="description" content="Профессиональный ремонт квартир и офисов в СПб под ключ. Капитальный, дизайнерский, косметический ремонт. Гарантия 5 лет. Цены от 7000₽/м². Бесплатная консультация и выезд замерщика." />
        <meta name="keywords" content="ремонт квартир СПб, ремонт под ключ, капитальный ремонт, дизайнерский ремонт, косметический ремонт, ремонт офиса, отделка квартир" />
        <link rel="canonical" href="https://digitalstroy.ru/" />
        <meta property="og:title" content="DigitalSTROY - Профессиональный ремонт квартир под ключ в СПб" />
        <meta property="og:description" content="Качественный ремонт квартир любой сложности. Гарантия 5 лет. Более 500 выполненных проектов." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitalstroy.ru/" />
      </Helmet>
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
