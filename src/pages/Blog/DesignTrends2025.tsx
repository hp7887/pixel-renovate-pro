import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogDesignTrends from "@/assets/blog-design-trends.jpg";

const DesignTrends2025 = () => {
  const trends = [
    {
      title: "Натуральные материалы и текстуры",
      description:
        "В 2025 году дизайнеры делают акцент на природных материалах: дерево, камень, ротанг, лен, хлопок. Эко-тренд продолжается — люди хотят окружить себя естественными текстурами.",
      tips:
        "Используйте необработанное дерево для акцентных стен, каменные столешницы, плетеную мебель, натуральный текстиль для штор и подушек.",
    },
    {
      title: "Тёплый минимализм (Japandi)",
      description:
        "Сочетание японской эстетики и скандинавского уюта. Минимум мебели, натуральные материалы, теплые нейтральные тона, функциональность каждой детали.",
      tips:
        "Выбирайте низкую мебель простых форм, добавьте теплое дерево, бежевые и терракотовые оттенки, откажитесь от лишнего декора.",
    },
    {
      title: "Curved furniture (обтекаемая мебель)",
      description:
        "Плавные изгибы и округлые формы в мебели и декоре вытесняют острые углы. Арки, круглые столы, изогнутые диваны — главные герои интерьера 2025.",
      tips:
        "Арочные проемы вместо прямоугольных дверей, круглые зеркала, обтекаемые кресла и диваны, волнообразные полки.",
    },
    {
      title: "Цвет года: тёплые земляные оттенки",
      description:
        "В тренде терракота, охра, глиняные оттенки, теплый бежевый, оливковый. Эти цвета создают атмосферу спокойствия и связи с природой.",
      tips:
        "Используйте терракоту для акцентной стены, оливковый для текстиля, бежевый как базу. Избегайте холодных серых тонов.",
    },
    {
      title: "Максимализм возвращается",
      description:
        "Богатые текстуры, смелые цветовые сочетания, паттерны, многослойность. Максимализм — для тех, кто устал от строгого минимализма.",
      tips:
        "Смешивайте разные текстуры и паттерны, используйте насыщенные цвета (изумруд, сапфир, бургунди), добавьте металлические акценты (латунь, медь).",
    },
    {
      title: "Биофильный дизайн",
      description:
        "Интеграция природы в интерьер: живые растения, зеленые стены, большие окна, природные материалы. Доказано, что такие интерьеры снижают стресс.",
      tips:
        "Создайте зеленый уголок, используйте вертикальное озеленение, выбирайте мебель из натурального дерева, максимизируйте естественное освещение.",
    },
    {
      title: "Умный дом как стандарт",
      description:
        "Автоматизация освещения, климат-контроль, умные шторы, голосовое управление — это уже не роскошь, а норма для современного интерьера.",
      tips:
        "Установите умное освещение с регулировкой яркости и цвета, датчики движения, систему управления климатом, автоматические жалюзи.",
    },
    {
      title: "Ретро 70-х и 80-х",
      description:
        "Возвращаются бархатные диваны, геометрические паттерны, яркие акцентные цвета, латунная фурнитура, винтажные постеры.",
      tips:
        "Добавьте бархатное кресло горчичного или изумрудного цвета, геометрический ковер, латунные светильники, винтажные аксессуары.",
    },
    {
      title: "Мультифункциональные пространства",
      description:
        "Квартиры-студии и трансформируемые зоны становятся нормой. Одно помещение — несколько функций: гостиная-спальня, кабинет-гардеробная.",
      tips:
        "Используйте складную и трансформируемую мебель, стеклянные перегородки, раздвижные двери, зонирование цветом и светом.",
    },
    {
      title: "Акцент на локальное производство",
      description:
        "Поддержка местных производителей, handmade-детали, уникальные предметы искусства вместо массового декора.",
      tips:
        "Покупайте мебель и декор у локальных дизайнеров и мастеров, заказывайте уникальные предметы, поддерживайте российских производителей.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Helmet>
        <title>
          Топ-10 трендов дизайна интерьера в 2025 году | SPB-DSRemont
        </title>
        <meta
          name="description"
          content="Топ-10 трендов дизайна интерьера 2025 года — Japandi, биофильный дизайн, умный дом, натуральные материалы и другие свежие идеи. Создайте современный интерьер в СПБ."
        />
        <link
          rel="canonical"
          href="https://spb-dsremont.ru/blog/trendy-dizayna-interera-2025"
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <LazyImage
          src={blogDesignTrends}
          alt="Современный дизайн интерьера 2025"
          className="w-full h-[450px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Топ-10 трендов дизайна интерьера 2025
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl">
            Вдохновляйтесь свежими идеями и создавайте интерьер, который отражает ваш стиль.
          </p>
        </div>
      </section>

      {/* Main Article */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться к статьям
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              2025 год приносит новые акценты в интерьерный дизайн: сочетание природных материалов,
              мягких форм и технологий. Мы собрали <strong>10 ключевых трендов</strong>, которые помогут
              вам создать современный, стильный и уютный дом.
            </p>

            <div className="space-y-10">
              {trends.map((trend, index) => (
                <div
                  key={index}
                  className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {index + 1}. {trend.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {trend.description}
                  </p>
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-400 p-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">
                      💡 Как применить:
                    </p>
                    <p className="text-blue-800">{trend.tips}</p>
                  </div>
                </div>
              ))}
            </div>

            <section className="mt-16 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Как выбрать подходящий тренд?
              </h2>
              <p className="text-gray-700 mb-4">
                Не обязательно следовать всем трендам одновременно. Выберите те, которые соответствуют вашему стилю жизни:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Для любителей спокойствия:</strong> Japandi, натуральные материалы, тёплые оттенки.
                </li>
                <li>
                  <strong>Для творческих натур:</strong> Максимализм, ретро 70-х, яркие акценты.
                </li>
                <li>
                  <strong>Для практичных людей:</strong> Умный дом, биофильный дизайн, зонирование.
                </li>
                <li>
                  <strong>Для эстетов:</strong> Curved furniture, локальное производство, handmade-декор.
                </li>
              </ul>
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Заключение
              </h2>
              <p className="text-gray-700 mb-4">
                Главная тенденция 2025 года — индивидуальность. Интерьер должен быть не просто красивым,
                а отражать ваш образ жизни и приносить удовольствие каждый день.
              </p>
              <p className="text-gray-700">
                Команда <strong>SPB-DSRemont</strong> поможет создать современный интерьер по вашим
                предпочтениям. Мы разработаем профессиональный дизайн-проект и реализуем его под ключ.
              </p>
            </section>

            <div className="text-center pt-12 border-t mt-12">
              <Button
                size="lg"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openContactDialog"))
                }
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Заказать дизайн-проект
              </Button>
              <p className="text-gray-600 mt-3 text-sm">
                Бесплатная консультация дизайнера в Санкт-Петербурге
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default DesignTrends2025;
