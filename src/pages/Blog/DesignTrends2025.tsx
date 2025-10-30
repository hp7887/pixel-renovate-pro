import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogDesignTrends from "@/assets/blog-design-trends.jpg";
import blogTrendsJapandi from "@/assets/blog-trends-japandi.jpg";
import blogTrendsCurved from "@/assets/blog-trends-curved.jpg";
import blogTrendsBiophilic from "@/assets/blog-trends-biophilic.jpg";
import blogTrendsMaximalism from "@/assets/blog-trends-maximalism.jpg";

const DesignTrends2025 = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>
          Топ-10 трендов дизайна интерьера 2025 | Japandi, биофильный дизайн, умный дом | СПб
        </title>
        <meta
          name="description"
          content="Актуальные тренды дизайна интерьера 2025 года в Санкт-Петербурге: Japandi стиль, обтекаемая мебель, биофильный дизайн, максимализм, умный дом. Профессиональный дизайн-проект от 3500₽/м². Консультация дизайнера бесплатно."
        />
        <meta
          name="keywords"
          content="тренды дизайна интерьера 2025, дизайн интерьера СПб, Japandi стиль, биофильный дизайн, curved furniture, умный дом, натуральные материалы в интерьере, максимализм в интерьере, дизайн-проект квартиры СПб, современный интерьер 2025"
        />
        <link
          rel="canonical"
          href="https://spb-dsremont.ru/blog/trendy-dizayna-interera-2025"
        />
        <meta property="og:title" content="Топ-10 трендов дизайна интерьера 2025 | SPB-DSRemont" />
        <meta property="og:description" content="Актуальные тренды дизайна интерьера 2025: Japandi, биофильный дизайн, умный дом, обтекаемая мебель. Дизайн-проект от 3500₽/м² в СПб." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/trendy-dizayna-interera-2025" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Топ-10 трендов дизайна интерьера 2025",
            "description": "Актуальные тренды дизайна интерьера 2025 года: Japandi, биофильный дизайн, умный дом, curved furniture и другие современные решения",
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "author": {
              "@type": "Organization",
              "name": "SPB-DSRemont"
            }
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <LazyImage
          src={blogDesignTrends}
          alt="Современный дизайн интерьера 2025 года — стильная гостиная с актуальными трендами"
          className="w-full h-[450px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Топ-10 трендов дизайна интерьера 2025
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl">
            Вдохновляйтесь свежими идеями и создавайте интерьер, который отражает ваш стиль
          </p>
        </div>
      </section>

      {/* Main Article */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться к статьям
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-6">
              Обновлено: 15 января 2025
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              2025 год приносит новые акценты в интерьерный дизайн: сочетание природных материалов, мягких форм и технологий. Мы собрали <strong>10 ключевых трендов</strong>, которые помогут вам создать современный, стильный и уютный дом в Санкт-Петербурге.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              1. Натуральные материалы и текстуры
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              В 2025 году дизайнеры делают акцент на природных материалах: дерево, камень, ротанг, лен, хлопок. Эко-тренд продолжается — люди хотят окружить себя естественными текстурами, которые создают ощущение спокойствия и связи с природой.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Используйте необработанное дерево для акцентных стен, каменные столешницы на кухне, плетеную мебель (кресла, корзины), натуральный текстиль для штор и подушек. В Санкт-Петербурге популярны изделия из карельской березы и гранита.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              2. Тёплый минимализм — Japandi стиль
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Japandi — это сочетание японской эстетики и скандинавского уюта. Минимум мебели, натуральные материалы, теплые нейтральные тона, функциональность каждой детали. Этот стиль идеально подходит для петербургских квартир, где ценится свет и пространство.
            </p>

            <LazyImage
              src={blogTrendsJapandi}
              alt="Интерьер в стиле Japandi — теплый минимализм с натуральными материалами и простыми формами"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />

            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Выбирайте низкую мебель простых форм, добавьте теплое дерево, бежевые и терракотовые оттенки, откажитесь от лишнего декора. Japandi — это баланс между функциональностью и эстетикой.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              3. Curved furniture — обтекаемая мебель
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Плавные изгибы и округлые формы в мебели и декоре вытесняют острые углы. Арки, круглые столы, изогнутые диваны — главные герои интерьера 2025 года. Этот тренд делает пространство более мягким и уютным.
            </p>

            <LazyImage
              src={blogTrendsCurved}
              alt="Гостиная с обтекаемой мебелью — плавные изгибы дивана и круглое зеркало"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />

            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Замените прямоугольные дверные проемы на арочные, повесьте круглые зеркала, выберите обтекаемые кресла и диваны, установите волнообразные полки. Curved furniture визуально смягчает пространство.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              4. Цвет года — тёплые земляные оттенки
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              В тренде терракота, охра, глиняные оттенки, теплый бежевый, оливковый. Эти цвета создают атмосферу спокойствия и связи с природой. Они особенно актуальны в северных городах вроде Санкт-Петербурга, где не хватает солнечного тепла.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Используйте терракоту для акцентной стены в гостиной, оливковый для текстиля (подушки, пледы), бежевый как базовый цвет стен. Избегайте холодных серых тонов — они делают интерьер неуютным.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              5. Максимализм возвращается
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Богатые текстуры, смелые цветовые сочетания, паттерны, многослойность — максимализм возвращается для тех, кто устал от строгого минимализма. Это стиль для творческих людей, которые хотят выразить свою индивидуальность через интерьер.
            </p>

            <LazyImage
              src={blogTrendsMaximalism}
              alt="Максимализм в интерьере — богатые текстуры, смелые цвета, бархатная мебель и латунные акценты"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />

            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Смешивайте разные текстуры и паттерны, используйте насыщенные цвета (изумрудный, сапфировый, бургунди), добавьте металлические акценты (латунь, медь). Не бойтесь экспериментировать с цветом и декором.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              6. Биофильный дизайн
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Интеграция природы в интерьер: живые растения, зеленые стены, большие окна, природные материалы. Научно доказано, что биофильный дизайн снижает уровень стресса, улучшает настроение и повышает продуктивность.
            </p>

            <LazyImage
              src={blogTrendsBiophilic}
              alt="Биофильный дизайн — гостиная с вертикальным озеленением, живыми растениями и большими окнами"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />

            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Создайте зеленый уголок с крупными растениями (монстера, фикус), используйте вертикальное озеленение, выбирайте мебель из натурального дерева, максимизируйте естественное освещение. Для Санкт-Петербурга особенно важно дополнительное освещение растений фитолампами.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              7. Умный дом как стандарт
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Автоматизация освещения, климат-контроль, умные шторы, голосовое управление — это уже не роскошь, а норма для современного интерьера. Системы умного дома делают жизнь комфортнее и экономят энергию.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Установите умное освещение с регулировкой яркости и цвета (Philips Hue, Yeelight), датчики движения для экономии энергии, систему управления климатом, автоматические жалюзи. Стоимость базовой системы умного дома для двухкомнатной квартиры в СПб — от 80 000 рублей.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              8. Ретро 70-х и 80-х годов
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Возвращаются бархатные диваны, геометрические паттерны, яркие акцентные цвета, латунная фурнитура, винтажные постеры. Ретро-стиль добавляет интерьеру характер и индивидуальность.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Добавьте бархатное кресло горчичного или изумрудного цвета, постелите геометрический ковер, установите латунные светильники, повесьте винтажные постеры или фотографии. Ретро-элементы хорошо сочетаются с современной мебелью.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              9. Мультифункциональные пространства
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Квартиры-студии и трансформируемые зоны становятся нормой, особенно в новостройках Санкт-Петербурга. Одно помещение выполняет несколько функций: гостиная-спальня, кабинет-гардеробная, кухня-столовая.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Используйте складную и трансформируемую мебель (диван-кровать, раскладной стол), стеклянные перегородки для визуального разделения зон, раздвижные двери, зонирование цветом и светом. Правильное зонирование делает даже небольшую квартиру функциональной.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              10. Акцент на локальное производство
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Поддержка местных производителей, handmade-детали, уникальные предметы искусства вместо массового декора. Локальное производство — это не только тренд, но и осознанное потребление.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как применить:</strong> Покупайте мебель и декор у петербургских дизайнеров и мастеров, заказывайте уникальные предметы интерьера у ремесленников, поддерживайте российских производителей. В Санкт-Петербурге много мастерских, создающих авторскую мебель и декор.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">
              Как выбрать подходящий тренд для своего интерьера?
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Не обязательно следовать всем трендам одновременно. Выберите те, которые соответствуют вашему стилю жизни и предпочтениям:
            </p>
            <ul className="space-y-3 text-foreground/80 mb-8 list-disc pl-6">
              <li>
                <strong>Для любителей спокойствия и минимализма:</strong> Japandi, натуральные материалы, тёплые оттенки, биофильный дизайн.
              </li>
              <li>
                <strong>Для творческих натур:</strong> Максимализм, ретро 70-х, яркие акценты, локальное производство.
              </li>
              <li>
                <strong>Для практичных людей:</strong> Умный дом, мультифункциональные пространства, зонирование.
              </li>
              <li>
                <strong>Для эстетов:</strong> Curved furniture, натуральные текстуры, handmade-декор.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">
              Заключение
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Главная тенденция 2025 года — индивидуальность и осознанность. Интерьер должен быть не просто красивым, а отражать ваш образ жизни, ценности и приносить удовольствие каждый день. Не бойтесь смешивать разные стили и создавать свой уникальный интерьер.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Команда <strong>SPB-DSRemont</strong> поможет создать современный интерьер по вашим предпочтениям. Мы разработаем профессиональный дизайн-проект с учетом актуальных трендов 2025 года и реализуем его под ключ. Стоимость дизайн-проекта — от 3500 рублей за м².
            </p>

            <div className="text-center pt-12 border-t mt-12">
              <Button
                size="lg"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openContactDialog"))
                }
                className="text-lg px-10 py-6"
              >
                Заказать дизайн-проект
              </Button>
              <p className="text-muted-foreground mt-3 text-sm">
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
