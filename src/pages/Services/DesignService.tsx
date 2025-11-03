import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import DesignPricingSection from "@/components/DesignPricingSection";
import DesignProjectsGallery from "@/components/DesignProjectsGallery";
import designImage from "@/assets/interior-design-hero.jpg";

const DesignService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Дизайн интерьера квартир | SPB-DSRemont</title>
        <meta name="description" content="Профессиональный дизайн интерьера от опытных специалистов. Разработка дизайн-проекта от 1 500 ₽/м², срок от 7 рабочих дней." />
        <link rel="canonical" href="https://spb-dsremont.ru/services/design" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${designImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Дизайн интерьера <span className="text-accent">квартир</span>
            </h1>
          </div>
        </div>
      </section>

      <DesignPricingSection />

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg md:text-xl text-foreground/90 mb-8">
              <p>
                Качественно от профессионалов ремонта. По стандартам современного дизайна. Рабочий дизайн-проект от 1 500 ₽/м², срок от 7 рабочих дней.
              </p>
              
              <p>
                В нашей команде дипломированные дизайнеры с практическим опытом от 7 до 20 лет в ремонте квартир, домов и помещений. Мы создаем не просто красивые интерьеры, но и функциональные пространства, которые идеально соответствуют вашему образу жизни.
              </p>
              
              <p>
                Наши проекты учитывают все нюансы: от эргономики и освещения до подбора материалов и цветовых решений. Мы работаем в разных стилях и готовы реализовать любые ваши идеи.
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8"
              onClick={() => setIsContactOpen(true)}
            >
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>
      
      <DesignProjectsGallery />

      <Footer />
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </main>
  );
};

export default DesignService;
