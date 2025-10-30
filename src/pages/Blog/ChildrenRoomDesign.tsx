import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogChildrenRoomHero from "@/assets/blog-children-room-hero.jpg";
import blogChildrenFurniture from "@/assets/blog-children-furniture-new.jpg";
import blogChildrenWallDecor from "@/assets/blog-children-wall-decor.jpg";

const ChildrenRoomDesign = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Дизайн детской комнаты СПб 2025 | Безопасность, зонирование | SPB-DSRemont</title>
        <meta name="description" content="Профессиональный дизайн детской комнаты в СПб: безопасные материалы, зонирование, выбор мебели. От 8500₽/м². Гарантия 3 года." />
        <meta name="keywords" content="дизайн детской комнаты СПб, ремонт детской, зонирование детской, безопасные материалы" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/dizayn-detskoy-komnaty" />
      </Helmet>

      <Header />

      <section className="relative overflow-hidden">
        <LazyImage src={blogChildrenRoomHero} alt="Дизайн детской комнаты" className="w-full h-[450px] object-cover brightness-75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Дизайн детской комнаты</h1>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />Вернуться к статьям
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-6">Обновлено: 25 февраля 2025</p>
            <p className="text-xl text-foreground/80 mb-8">Детская комната требует особого подхода к дизайну и безопасности.</p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6">Безопасность материалов</h2>
            <LazyImage src={blogChildrenFurniture} alt="Мебель для детской" className="w-full h-[400px] object-cover rounded-lg my-8" />
            <p className="text-foreground/80 mb-6">Используйте только сертифицированные материалы класса E0-E1, водоэмульсионные краски A+.</p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Зонирование пространства</h2>
            <LazyImage src={blogChildrenWallDecor} alt="Декор детской" className="w-full h-[400px] object-cover rounded-lg my-8" />
            <p className="text-foreground/80 mb-8">Создайте зоны для сна, учебы, игр и хранения. Стоимость ремонта детской — от 8500₽/м².</p>

            <div className="text-center pt-12 border-t mt-12">
              <Button size="lg" onClick={() => window.dispatchEvent(new CustomEvent("openContactDialog"))} className="text-lg px-10 py-6">
                Заказать ремонт детской
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default ChildrenRoomDesign;