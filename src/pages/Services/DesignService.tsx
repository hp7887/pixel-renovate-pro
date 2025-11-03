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
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${designImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full mb-6">
              <span className="text-accent font-semibold">Профессиональное проектирование</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Дизайн интерьера{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                квартир
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Создаем уникальные интерьеры с учетом ваших пожеланий и современных трендов
            </p>
          </div>
        </div>
      </section>

      <DesignPricingSection />

      {/* Content Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Профессиональный <span className="text-accent">подход</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Качественно от профессионалов ремонта. По стандартам современного дизайна. Рабочий дизайн-проект от 1 500 ₽/м², срок от 7 рабочих дней.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  В нашей команде дипломированные дизайнеры с практическим опытом от 7 до 20 лет в ремонте квартир, домов и помещений.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Комплексные <span className="text-accent">решения</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы создаем не просто красивые интерьеры, но и функциональные пространства, которые идеально соответствуют вашему образу жизни.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Наши проекты учитывают все нюансы: от эргономики и освещения до подбора материалов и цветовых решений. Мы работаем в разных стилях и готовы реализовать любые ваши идеи.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsContactOpen(true)}
              >
                Отправить заявку
              </Button>
            </div>
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
