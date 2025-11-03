import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import SecondaryPricingSection from "@/components/SecondaryPricingSection";
import WorkPhotosGallery from "@/components/WorkPhotosGallery";
import secondaryImage from "@/assets/cosmetic-repair-hero-new.jpg";

const SecondaryService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт вторички под ключ | SPB-DSRemont</title>
        <meta name="description" content="Капитальный ремонт квартир вторичного жилья. Замена коммуникаций, электрики, полная отделка от 9 800 ₽/м²." />
        <link rel="canonical" href="https://spb-dsremont.ru/services/secondary" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${secondaryImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ремонт <span className="text-accent">вторички</span>
            </h1>
          </div>
        </div>
      </section>

      <SecondaryPricingSection />

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg md:text-xl text-foreground/90 mb-8">
              <p>
                Капитальное преображение квартиры в хрущевке, брежневке или старом фонде СПб с ремонтом коммуникаций и электропроводки, заменой отделки.
              </p>
              
              <p>
                Комплексное обновление квартир в старом фонде, хрущевках и брежневках с полной заменой коммуникаций, электрики и отделки. Мы специализируемся на работе со старыми домами и знаем все особенности таких объектов.
              </p>
              
              <p>
                Выполняем демонтаж старой отделки, замену всех коммуникаций (водопровод, канализация, отопление), полную замену электропроводки, выравнивание стен и потолков, финишную отделку. Возможна перепланировка с согласованием в БТИ.
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

      <WorkPhotosGallery />

      <Footer />
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </main>
  );
};

export default SecondaryService;
