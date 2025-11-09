import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import projectKitchen from "@/assets/project-kitchen-2.jpg";

const KitchenRepair = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт кухни под ключ в СПб - Цены, Фото, Гарантия | SPB-DSRemont</title>
        <meta name="description" content="Профессиональный ремонт кухни в Санкт-Петербурге под ключ. Укладка плитки, установка кухонного гарнитура, замена коммуникаций. Цены от 15 000 ₽/м². Гарантия 1 год." />
        <meta name="keywords" content="ремонт кухни СПб, ремонт кухни под ключ, укладка плитки на кухне, установка кухонного гарнитура, ремонт кухни цена" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/kitchen-repair" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ремонт кухни под ключ в СПб - Цены, Фото, Гарантия | SPB-DSRemont" />
        <meta property="og:description" content="Профессиональный ремонт кухни в Санкт-Петербурге под ключ. Укладка плитки, установка кухонного гарнитура, замена коммуникаций. Цены от 15 000 ₽/м². Гарантия 1 год." />
        <meta property="og:url" content="https://spb-dsremont.ru/services/kitchen-repair" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={projectKitchen} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт кухни под ключ в СПб - Цены, Фото, Гарантия | SPB-DSRemont" />
        <meta name="twitter:description" content="Профессиональный ремонт кухни в Санкт-Петербурге под ключ. Укладка плитки, установка кухонного гарнитура, замена коммуникаций. Цены от 15 000 ₽/м². Гарантия 1 год." />
        <meta name="twitter:image" content={projectKitchen} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ремонт кухни",
            "name": "Ремонт кухни под ключ в Санкт-Петербурге",
            "description": "Профессиональный ремонт кухни в СПб под ключ: планировка, укладка плитки, установка кухонного гарнитура, замена коммуникаций, электрика. Цены от 15000₽/м². Гарантия 1 год.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SPB-DSRemont",
              "telephone": "+78122099885",
              "email": "digitalstroy@inbox.ru",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Кузнецовская улица, 52к8Ж",
                "addressLocality": "Санкт-Петербург",
                "addressCountry": "RU"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Санкт-Петербург"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Ремонт кухни под ключ",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ремонт кухни под ключ"
                  },
                  "price": "15000",
                  "priceCurrency": "RUB",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "15000",
                    "priceCurrency": "RUB",
                    "unitText": "за квадратный метр"
                  },
                  "availableAtOrFrom": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Санкт-Петербург",
                      "addressCountry": "RU"
                    }
                  }
                }
              ]
            },
            "serviceOutput": "Полностью готовая к использованию кухня",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            },
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="relative h-[500px] md:h-[600px] overflow-hidden mb-12">
            <LazyImage
              src={projectKitchen}
              alt="Ремонт кухни под ключ - современный дизайн"
              className="w-full h-full object-cover rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 rounded-b-3xl flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Ремонт кухни под ключ в Санкт-Петербурге
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                    Профессиональный ремонт с гарантией 1 год. От планировки до установки техники
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  >
                    Получить бесплатный расчет
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Что включает ремонт кухни */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Что включает ремонт кухни под ключ?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ремонт кухни — это комплексная работа, требующая особого внимания к деталям. Кухня — это сердце дома, где важна не только красота, но и функциональность. Мы выполняем полный цикл работ от демонтажа до финальной уборки.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Демонтаж старой отделки и сантехники",
                  "Замена электропроводки и розеток",
                  "Монтаж водопровода и канализации",
                  "Выравнивание стен и потолка",
                  "Укладка плитки на фартук и пол",
                  "Установка натяжного или гипсокартонного потолка",
                  "Установка кухонного гарнитура",
                  "Подключение бытовой техники"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Этапы ремонта кухни */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Этапы ремонта кухни</h2>
              <div className="space-y-6">
                {[
                  { 
                    title: "Замер и планировка", 
                    desc: "Бесплатный выезд замерщика, обсуждение планировки, расположения розеток и техники. Составление дизайн-проекта." 
                  },
                  { 
                    title: "Демонтаж", 
                    desc: "Удаление старой отделки, сантехники, демонтаж старого кухонного гарнитура. Вывоз строительного мусора." 
                  },
                  { 
                    title: "Электрика и сантехника", 
                    desc: "Прокладка новых коммуникаций: электрические кабели, водопровод, канализация. Установка розеток и выключателей." 
                  },
                  { 
                    title: "Черновая отделка", 
                    desc: "Выравнивание стен штукатуркой, стяжка пола, монтаж потолка. Подготовка поверхностей под чистовую отделку." 
                  },
                  { 
                    title: "Чистовая отделка", 
                    desc: "Укладка плитки на пол и фартук, покраска или поклейка обоев, установка плинтусов и наличников." 
                  },
                  { 
                    title: "Установка кухни и техники", 
                    desc: "Сборка и установка кухонного гарнитура, монтаж мойки, смесителя, варочной панели, духового шкафа и другой техники." 
                  },
                  { 
                    title: "Сдача объекта", 
                    desc: "Финальная уборка, проверка всех систем, сдача объекта заказчику с гарантией на все выполненные работы." 
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Особенности ремонта кухни */}
            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Особенности ремонта кухни</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Влагостойкие материалы</h3>
                  <p className="text-gray-700">Используем только влагостойкий гипсокартон, водостойкую штукатурку и грунтовку для защиты от повышенной влажности</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Усиленная вентиляция</h3>
                  <p className="text-gray-700">Обязательная установка вытяжки с выводом в вентиляционную шахту или с рециркуляцией воздуха</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Электробезопасность</h3>
                  <p className="text-gray-700">Все розетки защищены УЗО, отдельные линии для мощных электроприборов: духовки, посудомоечной машины, варочной панели</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Эргономика пространства</h3>
                  <p className="text-gray-700">Планируем расположение техники и мебели по принципу «рабочего треугольника» для максимального удобства</p>
                </div>
              </div>
            </section>

            {/* Популярные решения */}
            <section className="bg-gray-50 p-8 rounded-2xl mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Популярные решения для кухни</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Кухня-гостиная</h3>
                  <p className="text-gray-700">Объединение кухни с гостиной — популярное решение для увеличения пространства. Требует согласования перепланировки.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Кухонный остров</h3>
                  <p className="text-gray-700">Дополнительная рабочая поверхность в центре кухни. Подходит для кухонь от 15 м² и требует грамотного планирования коммуникаций.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Встроенная техника</h3>
                  <p className="text-gray-700">Духовой шкаф, посудомоечная машина, холодильник скрываются за фасадами гарнитура для создания единого стиля.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Умная кухня</h3>
                  <p className="text-gray-700">Установка датчиков освещения, сенсорных смесителей, управление техникой через мобильное приложение.</p>
                </div>
              </div>
            </section>

            {/* Стоимость */}
            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость ремонта кухни</h2>
              <p className="text-lg text-gray-700 mb-6">
                Цена ремонта кухни зависит от площади, объема работ и выбранных материалов.
                Средняя стоимость ремонта кухни под ключ в Санкт-Петербурге:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Эконом</h3>
                  <p className="text-3xl font-bold text-cyan-600 mb-2">15 000 ₽/м²</p>
                  <p className="text-gray-600 text-sm">Базовые материалы, простая планировка</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-cyan-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Стандарт</h3>
                  <p className="text-3xl font-bold text-cyan-600 mb-2">25 000 ₽/м²</p>
                  <p className="text-gray-600 text-sm">Качественные материалы, современный дизайн</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Премиум</h3>
                  <p className="text-3xl font-bold text-cyan-600 mb-2">от 35 000 ₽/м²</p>
                  <p className="text-gray-600 text-sm">Премиальные материалы, сложная планировка</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                * Окончательная стоимость рассчитывается после замера и обсуждения всех деталей проекта
              </p>
            </section>

            {/* FAQ */}
            <section className="bg-gray-50 p-8 rounded-2xl mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Сколько времени занимает ремонт кухни?</summary>
                  <p className="text-gray-700 mt-2">В среднем 3-4 недели для кухни площадью 8-10 м². Сроки зависят от объема работ и сложности проекта.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Нужно ли согласовывать перенос кухни?</summary>
                  <p className="text-gray-700 mt-2">Да, перенос кухни в другую комнату или объединение с гостиной требует согласования в жилищной инспекции. Мы поможем с оформлением документов.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Какую плитку лучше выбрать для кухни?</summary>
                  <p className="text-gray-700 mt-2">Для фартука подходит керамическая плитка или керамогранит с низкой пористостью. Для пола — керамогранит с противоскользящим покрытием.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Вы устанавливаете кухонный гарнитур?</summary>
                  <p className="text-gray-700 mt-2">Да, мы выполняем полный цикл работ: от изготовления гарнитура по индивидуальным размерам до установки и подключения всей техники.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Какая гарантия на ремонт?</summary>
                  <p className="text-gray-700 mt-2">Гарантия на все выполненные работы — 3 года. Гарантия на материалы — согласно гарантии производителя.</p>
                </details>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
              >
                Заказать бесплатный замер
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default KitchenRepair;
