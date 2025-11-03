import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import SecondaryPricingSection from "@/components/SecondaryPricingSection";
import WorkPhotosGallery from "@/components/WorkPhotosGallery";
import secondaryImage from "@/assets/secondary-renovation-hero.jpg";

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
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${secondaryImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full mb-6">
              <span className="text-accent font-semibold">Капитальное обновление</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ремонт{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                вторички
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Преображаем квартиры старого фонда с полной заменой коммуникаций
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
                  Специализация на <span className="text-accent">старом фонде</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Капитальное преображение квартиры в хрущевке, брежневке или старом фонде СПб с ремонтом коммуникаций и электропроводки, заменой отделки.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Комплексное обновление квартир в старом фонде, хрущевках и брежневках с полной заменой коммуникаций, электрики и отделки.
                </p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Полный комплекс <span className="text-accent">услуг</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы специализируемся на работе со старыми домами и знаем все особенности таких объектов.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Выполняем демонтаж старой отделки, замену всех коммуникаций (водопровод, канализация, отопление), полную замену электропроводки, выравнивание стен и потолков, финишную отделку. Возможна перепланировка с согласованием в БТИ.
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

      <SecondaryPricingSection />

      <WorkPhotosGallery />

      <Footer />
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </main>
  );
};

export default SecondaryService;
