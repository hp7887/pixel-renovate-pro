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
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://spb-dsremont.ru"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Услуги",
                "item": "https://spb-dsremont.ru/#services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Отделка новостройки",
                "item": "https://spb-dsremont.ru/services/new-building"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${newBuildingImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full mb-6">
              <span className="text-accent font-semibold">Комплексная отделка</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Отделка{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                новостройки
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              От черновой до чистовой отделки — полный цикл работ под ключ
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Полный цикл <span className="text-accent">работ</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Комплексный ремонт новой квартиры без отделки или от предчистовой отделки до финиша, может включать закупку всех отделочных материалов.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Полный цикл работ от черновой до чистовой отделки новой квартиры. Мы берем на себя все этапы: от разводки коммуникаций до финишной отделки и установки сантехники.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Гарантии и <span className="text-accent">качество</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Включает профессиональный подбор и закупку всех необходимых материалов с учетом вашего бюджета.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Работаем строго по договору с фиксированными сроками и ценами. Предоставляем гарантию на все виды работ. Возможна поэтапная оплата по мере выполнения работ.
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

      <RepairTypesSection />

      <Footer />
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </main>
  );
};

export default NewBuildingService;
