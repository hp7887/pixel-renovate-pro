import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import majorRepairHero from "@/assets/major-repair-hero.jpg";
import bathroomWork from "@/assets/bathroom-work.jpg";
import designStudio from "@/assets/design-studio.jpg";

const articles = [
  {
    id: 1,
    slug: "kak-vybrat-materialy-dlya-remonta",
    title: "Как правильно выбрать материалы для ремонта квартиры",
    excerpt: "Подробное руководство по выбору качественных материалов для ремонта. Разбираем основные критерии выбора напольных покрытий, обоев, красок и других отделочных материалов.",
    image: majorRepairHero,
    date: "15 января 2025",
    readTime: "8 мин"
  },
  {
    id: 2,
    slug: "oshibki-pri-remonte-vannoy",
    title: "10 частых ошибок при ремонте ванной комнаты",
    excerpt: "Узнайте о самых распространенных ошибках, которые допускают при ремонте ванной комнаты, и как их избежать. Практические советы от профессионалов.",
    image: bathroomWork,
    date: "10 января 2025",
    readTime: "6 мин"
  },
  {
    id: 3,
    slug: "trendy-dizayna-interera-2025",
    title: "Топ-10 трендов дизайна интерьера в 2025 году",
    excerpt: "Актуальные тренды в дизайне интерьера: от цветовых решений до инновационных материалов. Вдохновляйтесь свежими идеями для вашего ремонта.",
    image: designStudio,
    date: "5 января 2025",
    readTime: "10 мин"
  }
];

const Blog = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Статьи о ремонте квартир - Советы и рекомендации | SPB-DSRemont</title>
        <meta name="description" content="Полезные статьи о ремонте квартир в Санкт-Петербурге: советы по выбору материалов, дизайну интерьера, распространенные ошибки и актуальные тренды 2025 года." />
        <meta name="keywords" content="статьи о ремонте, советы по ремонту, выбор материалов, дизайн интерьера, ремонт квартиры советы" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog" />
        
        <meta property="og:title" content="Статьи о ремонте квартир - Советы и рекомендации | SPB-DSRemont" />
        <meta property="og:description" content="Полезные статьи о ремонте квартир в Санкт-Петербурге: советы по выбору материалов, дизайну интерьера, распространенные ошибки и актуальные тренды 2025 года." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Статьи о ремонте квартир - Советы и рекомендации | SPB-DSRemont" />
        <meta name="twitter:description" content="Полезные статьи о ремонте квартир в Санкт-Петербурге: советы по выбору материалов, дизайну интерьера, распространенные ошибки и актуальные тренды 2025 года." />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Статьи о ремонте
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Полезные советы, рекомендации и актуальные тренды в мире ремонта и дизайна интерьера
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article) => (
                <Link key={article.id} to={`/blog/${article.slug}`}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                    <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
                      <LazyImage
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-500 mb-3">{article.date}</div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                        Читать далее
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default Blog;
