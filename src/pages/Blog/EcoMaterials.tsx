import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogEcoMaterials from "@/assets/blog-eco-materials.jpg";

const EcoMaterials = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Экологичные материалы для ремонта: что выбрать для здоровья | SPB-DSRemont</title>
        <meta name="description" content="Гид по экологичным материалам для ремонта квартиры: натуральные краски, безопасные покрытия, сертификаты качества. Создайте здоровый дом для всей семьи." />
        <meta name="keywords" content="экологичные материалы, безопасные материалы для ремонта, эко ремонт, натуральные материалы для дома" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/ekologichnye-materialy" />
        
        <meta property="og:title" content="Экологичные материалы для ремонта: что выбрать для здоровья | SPB-DSRemont" />
        <meta property="og:description" content="Гид по экологичным материалам для ремонта квартиры: натуральные краски, безопасные покрытия, сертификаты качества." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/ekologichnye-materialy" />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Вернуться к статьям
            </Link>
            
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-4">28 января 2025 • 7 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Экологичные материалы для ремонта: что выбрать для здоровья
              </h1>
            </div>
            
            <LazyImage
              src={blogEcoMaterials}
              alt="Экологичные и натуральные материалы для безопасного ремонта"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Здоровье семьи начинается с выбора безопасных материалов. Некачественная отделка может выделять токсичные вещества годами. Разберем, какие материалы действительно экологичны.
              </p>
              
              <section className="mb-8 bg-green-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">На что обращать внимание</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Сертификаты: ЭкоМатериал, EcoLabel, FSC</li>
                  <li>Класс эмиссии формальдегида: E0 или E1</li>
                  <li>Отсутствие ЛОС (летучих органических соединений)</li>
                  <li>Натуральный состав без синтетики</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Лучшие экоматериалы</h2>
                <p className="text-gray-700 mb-4">Натуральное дерево, пробка, льняное масло, глиняные штукатурки, краски на водной основе без ЛОС.</p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button size="lg" onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6">
                  Консультация по экоматериалам
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default EcoMaterials;