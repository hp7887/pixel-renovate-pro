import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import designStudio from "@/assets/design-studio.jpg";

const DesignTrends2025 = () => {
  const trends = [
    {
      title: "Натуральные материалы и текстуры",
      description: "В 2025 году дизайнеры делают акцент на природных материалах: дерево, камень, ротанг, лен, хлопок. Эко-тренд продолжается — люди хотят окружить себя естественными текстурами.",
      tips: "Используйте необработанное дерево для акцентных стен, каменные столешницы, плетеную мебель, натуральный текстиль для штор и подушек."
    },
    {
      title: "Теплый минимализм (Japandi)",
      description: "Сочетание японской эстетики и скандинавского уюта. Минимум мебели, натуральные материалы, теплые нейтральные тона, функциональность каждой детали.",
      tips: "Выбирайте низкую мебель простых форм, добавьте теплое дерево, бежевые и терракотовые оттенки, откажитесь от лишнего декора."
    },
    {
      title: "Curved furniture (обтекаемая мебель)",
      description: "Плавные изгибы и округлые формы в мебели и декоре вытесняют острые углы. Арки, круглые столы, изогнутые диваны — главные герои интерьера 2025.",
      tips: "Арочные проемы вместо прямоугольных дверей, круглые зеркала, обтекаемые кресла и диваны, волнообразные полки."
    },
    {
      title: "Цвет года: теплые земляные оттенки",
      description: "В тренде терракота, охра, глиняные оттенки, теплый бежевый, оливковый. Эти цвета создают атмосферу спокойствия и связи с природой.",
      tips: "Используйте терракоту для акцентной стены, оливковый для текстиля, бежевый как базу. Избегайте холодных серых тонов."
    },
    {
      title: "Максимализм возвращается",
      description: "Богатые текстуры, смелые цветовые сочетания, паттерны, многослойность. Максимализм — для тех, кто устал от строгого минимализма.",
      tips: "Смешивайте разные текстуры и паттерны, используйте насыщенные цвета (изумруд, сапфир, бургунди), добавьте металлические акценты (латунь, медь)."
    },
    {
      title: "Биофильный дизайн",
      description: "Интеграция природы в интерьер: живые растения, зеленые стены, большие окна, природные материалы. Доказано, что такие интерьеры снижают стресс.",
      tips: "Создайте зеленый уголок, используйте вертикальное озеленение, выбирайте мебель из натурального дерева, максимизируйте естественное освещение."
    },
    {
      title: "Умный дом как стандарт",
      description: "Автоматизация освещения, климат-контроль, умные шторы, голосовое управление — это уже не роскошь, а норма для современного интерьера.",
      tips: "Установите умное освещение с регулировкой яркости и цвета, датчики движения, систему управления климатом, автоматические жалюзи."
    },
    {
      title: "Ретро 70-х и 80-х",
      description: "Возвращаются бархатные диваны, геометрические паттерны, яркие акцентные цвета, латунная фурнитура, винтажные постеры.",
      tips: "Добавьте бархатное кресло горчичного или изумрудного цвета, геометрический ковер, латунные светильники, винтажные аксессуары."
    },
    {
      title: "Мультифункциональные пространства",
      description: "Квартиры-студии и трансформируемые зоны становятся нормой. Одно помещение — несколько функций: гостиная-спальня, кабинет-гардеробная.",
      tips: "Используйте складную и трансформируемую мебель, стеклянные перегородки, раздвижные двери, зонирование цветом и светом."
    },
    {
      title: "Акцент на локальное производство",
      description: "Поддержка местных производителей, handmade-детали, уникальные предметы искусства вместо массового китайского декора.",
      tips: "Покупайте мебель и декор у локальных дизайнеров и мастеров, заказывайте уникальные предметы, поддерживайте российских производителей."
    }
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Топ-10 трендов дизайна интерьера в 2025 году | SPB-DSRemont</title>
        <meta name="description" content="Актуальные тренды в дизайне интерьера 2025: натуральные материалы, Japandi, curved furniture, биофильный дизайн, умный дом. Вдохновляйтесь свежими идеями для вашего ремонта." />
        <meta name="keywords" content="тренды дизайна 2025, дизайн интерьера 2025, модный интерьер, современный дизайн квартиры, Japandi стиль" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/trendy-dizayna-interera-2025" />
        
        <meta property="og:title" content="Топ-10 трендов дизайна интерьера в 2025 году | SPB-DSRemont" />
        <meta property="og:description" content="Актуальные тренды в дизайне интерьера 2025: натуральные материалы, Japandi, curved furniture, биофильный дизайн, умный дом." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/trendy-dizayna-interera-2025" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={designStudio} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Топ-10 трендов дизайна интерьера в 2025 году | SPB-DSRemont" />
        <meta name="twitter:description" content="Актуальные тренды в дизайне интерьера 2025: натуральные материалы, Japandi, curved furniture, биофильный дизайн, умный дом." />
        <meta name="twitter:image" content={designStudio} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Топ-10 трендов дизайна интерьера в 2025 году",
            "datePublished": "2025-01-05",
            "author": {
              "@type": "Organization",
              "name": "SPB-DSRemont"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SPB-DSRemont",
              "logo": {
                "@type": "ImageObject",
                "url": "https://spb-dsremont.ru/logo.png"
              }
            },
            "image": designStudio
          })}
        </script>
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
              <div className="text-sm text-gray-500 mb-4">5 января 2025 • 10 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Топ-10 трендов дизайна интерьера в 2025 году
              </h1>
            </div>
            
            <LazyImage
              src={designStudio}
              alt="Современный дизайн интерьера 2025"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                2025 год приносит свежие идеи в мир дизайна интерьера. Тренды этого года балансируют между уютом и функциональностью, природностью и технологичностью, минимализмом и максимализмом. Мы собрали топ-10 главных направлений, которые будут определять дизайн интерьеров в этом году.
              </p>
              
              <div className="space-y-8">
                {trends.map((trend, index) => (
                  <div key={index} className="border-l-4 border-cyan-500 pl-6 py-4 bg-gradient-to-r from-cyan-50 to-transparent rounded-r-xl">
                    <div className="flex items-start gap-3 mb-3">
                      <Sparkles className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        {index + 1}. {trend.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {trend.description}
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-blue-900 mb-1">💡 Как применить:</p>
                      <p className="text-blue-800">{trend.tips}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <section className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Как выбрать подходящий тренд?</h2>
                <p className="text-gray-700 mb-4">
                  Не обязательно следовать всем трендам одновременно. Выберите те, которые резонируют с вашим образом жизни и предпочтениями:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Для любителей спокойствия:</strong> Japandi, натуральные материалы, теплые земляные оттенки.</li>
                  <li><strong>Для творческих натур:</strong> Максимализм, ретро 70-х, смелые цветовые сочетания.</li>
                  <li><strong>Для практичных людей:</strong> Умный дом, мультифункциональные пространства, биофильный дизайн.</li>
                  <li><strong>Для эстетов:</strong> Curved furniture, локальное производство, уникальные handmade-детали.</li>
                </ul>
              </section>
              
              <section className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 mb-4">
                  Главный принцип дизайна интерьера 2025 — создание пространства, которое отражает вашу индивидуальность и делает жизнь комфортнее. Тренды — это источник вдохновения, а не строгие правила. Смело миксуйте стили, экспериментируйте с цветом и фактурами, создавайте уникальный интерьер, в котором вам будет приятно находиться.
                </p>
                <p className="text-gray-700">
                  Наши дизайнеры помогут вам создать современный интерьер с учетом актуальных трендов и ваших личных предпочтений. Мы разработаем уникальный дизайн-проект и воплотим его в жизнь с гарантией качества.
                </p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                >
                  Заказать дизайн-проект
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

export default DesignTrends2025;
