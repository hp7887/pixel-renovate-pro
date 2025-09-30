import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Portfolio = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/10 via-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Портфолио наших работ
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Более 500 успешно реализованных проектов. Каждый из них - это уникальное решение, 
            созданное с учетом пожеланий заказчика.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Хотите такой же результат?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут для обсуждения вашего проекта
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto"
            onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
          >
            <Phone className="mr-2 h-5 w-5" />
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;