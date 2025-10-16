import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import blogKitchenRenovation from "@/assets/blog-kitchen-renovation.jpg";
import blogSmartHome from "@/assets/blog-smart-home.jpg";
import blogRoomPlanning from "@/assets/blog-room-planning.jpg";
import blogEcoMaterials from "@/assets/blog-eco-materials.jpg";
import blogRenovationPitfalls from "@/assets/blog-renovation-pitfalls.jpg";
import blogBudgetPlanning from "@/assets/blog-budget-planning.jpg";
import blogMaterialsChoice from "@/assets/blog-materials-choice.jpg";
import blogBathroomRenovation from "@/assets/blog-bathroom-renovation.jpg";
import blogDesignTrends from "@/assets/blog-design-trends.jpg";
import blogLightingDesign from "@/assets/blog-lighting-design.jpg";
import blogBalconyRenovation from "@/assets/blog-balcony-renovation.jpg";

const articles = [
  {
    id: 1,
    slug: "remont-balkona",
    title: "Ремонт и утепление балкона: превращаем в уютное пространство",
    excerpt: "Балкон может стать полноценной комнатой, кабинетом или зоной отдыха. Рассказываем, как правильно провести ремонт и утепление балкона с максимальной пользой.",
    image: blogBalconyRenovation,
    date: "20 февраля 2025",
    readTime: "12 мин"
  },
  {
    id: 2,
    slug: "osveshchenie-v-kvartire",
    title: "Освещение в квартире: как создать идеальный световой дизайн",
    excerpt: "Правильное освещение способно полностью преобразить пространство. Разбираем все тонкости светового дизайна от основ до современных технологий.",
    image: blogLightingDesign,
    date: "15 февраля 2025",
    readTime: "15 мин"
  },
  {
    id: 3,
    slug: "remont-kuhni",
    title: "Ремонт кухни: пошаговое руководство от планировки до финиша",
    excerpt: "Полное руководство по ремонту кухни: планировка, выбор материалов, последовательность работ, типичные ошибки. Создайте функциональную и красивую кухню.",
    image: blogKitchenRenovation,
    date: "10 февраля 2025",
    readTime: "14 мин"
  },
  {
    id: 4,
    slug: "umnyy-dom",
    title: "Умный дом: с чего начать и как не переплатить в 2025 году",
    excerpt: "Полное руководство по внедрению системы умный дом: умное освещение, климат-контроль, безопасность, автоматизация. Обзор лучших систем и цены.",
    image: blogSmartHome,
    date: "5 февраля 2025",
    readTime: "13 мин"
  },
  {
    id: 3,
    slug: "planirovka-pomeshcheniy",
    title: "Планировка помещений при ремонте: как правильно организовать пространство",
    excerpt: "Профессиональное руководство по планировке: зонирование, эргономика, оптимизация пространства. Создайте функциональный и удобный интерьер.",
    image: blogRoomPlanning,
    date: "1 февраля 2025",
    readTime: "11 мин"
  },
  {
    id: 4,
    slug: "ekologichnye-materialy",
    title: "Экологичные материалы для ремонта: что выбрать для здоровья",
    excerpt: "Гид по экологичным материалам для ремонта квартиры: натуральные краски, безопасные покрытия, сертификаты качества. Создайте здоровый дом для всей семьи.",
    image: blogEcoMaterials,
    date: "28 января 2025",
    readTime: "7 мин"
  },
  {
    id: 5,
    slug: "podvodnye-kamni-remonta",
    title: "Подводные камни ремонта: чего ожидать и как подготовиться",
    excerpt: "Скрытые проблемы при ремонте квартиры: от старой проводки до проблем с соседями. Как выявить риски заранее и избежать неприятных сюрпризов.",
    image: blogRenovationPitfalls,
    date: "25 января 2025",
    readTime: "9 мин"
  },
  {
    id: 6,
    slug: "raschet-byudzheta-na-remont",
    title: "Как рассчитать бюджет на ремонт квартиры в 2025 году",
    excerpt: "Подробная инструкция по расчету бюджета на ремонт: статьи расходов, средние цены на материалы и работы, способы экономии без потери качества.",
    image: blogBudgetPlanning,
    date: "20 января 2025",
    readTime: "12 мин"
  },
  {
    id: 7,
    slug: "kak-vybrat-materialy-dlya-remonta",
    title: "Как правильно выбрать материалы для ремонта квартиры",
    excerpt: "Подробное руководство по выбору качественных материалов для ремонта. Разбираем основные критерии выбора напольных покрытий, обоев, красок и других отделочных материалов.",
    image: blogMaterialsChoice,
    date: "15 января 2025",
    readTime: "8 мин"
  },
  {
    id: 8,
    slug: "oshibki-pri-remonte-vannoy",
    title: "10 частых ошибок при ремонте ванной комнаты",
    excerpt: "Узнайте о самых распространенных ошибках, которые допускают при ремонте ванной комнаты, и как их избежать. Практические советы от профессионалов.",
    image: blogBathroomRenovation,
    date: "10 января 2025",
    readTime: "6 мин"
  },
  {
    id: 9,
    slug: "trendy-dizayna-interera-2025",
    title: "Топ-10 трендов дизайна интерьера в 2025 году",
    excerpt: "Актуальные тренды в дизайне интерьера: от цветовых решений до инновационных материалов. Вдохновляйтесь свежими идеями для вашего ремонта.",
    image: blogDesignTrends,
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
