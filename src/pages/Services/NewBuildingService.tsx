import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import RepairTypesSection from "@/components/RepairTypesSection";
import newBuildingImage from "@/assets/major-repair-hero-new.jpg";

const NewBuildingService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Отделка новостройки под ключ | SPB-DSRemont</title>
        <meta name="description" content="Комплексная отделка новостройки от черновой до чистовой отделки. Подбор материалов, качественные работы от 8 200 ₽/м²." />
        <link rel="canonical" href="https://spb-dsremont.ru/services/new-building" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${newBuildingImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Отделка <span className="text-accent">новостройки</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg md:text-xl text-foreground/90 mb-8">
              <p>
                Комплексный ремонт новой квартиры без отделки или от предчистовой отделки до финиша, может включать закупку всех отделочных материалов.
              </p>
              
              <p>
                Полный цикл работ от черновой до чистовой отделки новой квартиры. Мы берем на себя все этапы: от разводки коммуникаций до финишной отделки и установки сантехники. Включает профессиональный подбор и закупку всех необходимых материалов с учетом вашего бюджета.
              </p>
              
              <p>
                Работаем строго по договору с фиксированными сроками и ценами. Предоставляем гарантию на все виды работ. Возможна поэтапная оплата по мере выполнения работ.
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

      <RepairTypesSection />

      <Footer />
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </main>
  );
};

export default NewBuildingService;
