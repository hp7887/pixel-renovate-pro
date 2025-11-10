import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Palette, Ruler } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import designerRepairHero from "@/assets/designer-repair-hero.jpg";
import designerRepairProcess from "@/assets/designer-repair-process.jpg";

const DesignerRepair = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Дизайнерский ремонт квартир в СПб | Эксклюзивные интерьеры | SPB-DSRemont</title>
        <meta name="description" content="Дизайнерский ремонт квартир в Санкт-Петербурге: эксклюзивные интерьеры, премиум материалы, авторский дизайн. Создаем уникальные пространства под ваш стиль жизни." />
        <meta name="keywords" content="дизайнерский ремонт, элитный ремонт, премиум ремонт, эксклюзивный интерьер, авторский дизайн СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/designer-repair" />
        <meta property="og:title" content="Дизайнерский ремонт квартир в СПб | Эксклюзивные интерьеры | SPB-DSRemont" />
        <meta property="og:description" content="Дизайнерский ремонт квартир в Санкт-Петербурге: эксклюзивные интерьеры, премиум материалы, авторский дизайн. Создаем уникальные пространства под ваш стиль жизни." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/services/designer-repair" />
        <meta property="og:image" content={designerRepairHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Дизайнерский ремонт квартир в СПб | Эксклюзивные интерьеры | SPB-DSRemont" />
        <meta name="twitter:description" content="Дизайнерский ремонт квартир в Санкт-Петербурге: эксклюзивные интерьеры, премиум материалы, авторский дизайн. Создаем уникальные пространства под ваш стиль жизни." />
        <meta name="twitter:image" content={designerRepairHero} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://spb-dsremont.ru"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Услуги",
                "item": "https://spb-dsremont.ru/#services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Дизайнерский ремонт",
                "item": "https://spb-dsremont.ru/services/designer-repair"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Дизайнерский ремонт квартир",
            "name": "Дизайнерский ремонт квартир в Санкт-Петербурге",
            "description": "Эксклюзивный дизайнерский ремонт квартир в СПб: авторский дизайн-проект, премиум материалы, элитная отделка. Создаем уникальные интерьеры под ваш стиль жизни.",
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
              "name": "Дизайнерский ремонт квартир",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Дизайнерский ремонт квартиры"
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
            "serviceOutput": "Эксклюзивный авторский интерьер",
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
          <section className="relative h-[500px] md:h-[600px] overflow-hidden mb-12">
            <LazyImage
              src={designerRepairHero}
              alt="Дизайнерский ремонт квартиры - элитный интерьер"
              className="w-full h-full object-cover rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 rounded-b-3xl flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Дизайнерский ремонт квартир в СПб
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                    Эксклюзивные интерьеры, созданные специально для вас
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  >
                    Заказать дизайн-проект
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Что такое дизайнерский ремонт?</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Дизайнерский ремонт — это создание эксклюзивного интерьера по авторскому проекту с использованием премиальных материалов и нестандартных решений. Каждая деталь продумана и согласована с вашими предпочтениями и стилем жизни.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Авторский дизайн-проект",
                  "3D-визуализация интерьера",
                  "Подбор премиум материалов",
                  "Эксклюзивная мебель на заказ",
                  "Дизайнерские светильники",
                  "Декоративные элементы",
                  "Текстильное оформление",
                  "Авторский надзор"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Стили дизайнерского ремонта</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Современный минимализм", desc: "Чистые линии, функциональность, много света и пространства" },
                  { title: "Неоклассика", desc: "Сочетание классических форм с современными технологиями" },
                  { title: "Скандинавский стиль", desc: "Уют, натуральные материалы, светлые тона" },
                  { title: "Лофт", desc: "Индустриальная эстетика с элементами роскоши" },
                  { title: "Ар-деко", desc: "Роскошь, геометрия, богатство декора" },
                  { title: "Эклектика", desc: "Смелое сочетание разных стилей и эпох" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="relative rounded-3xl overflow-hidden shadow-2xl">
              <LazyImage
                src={designerRepairProcess}
                alt="Процесс создания дизайн-проекта"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-emerald-900/40" />
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                <p className="text-2xl font-bold text-white">Процесс создания дизайн-проекта</p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Ruler className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Этапы дизайнерского ремонта</h2>
              </div>
              <div className="relative space-y-8">
                {[
                  { title: "Знакомство и обмер", desc: "Встреча с дизайнером, обсуждение пожеланий, замеры помещений" },
                  { title: "Создание концепции", desc: "Разработка нескольких вариантов стилистических решений" },
                  { title: "Дизайн-проект", desc: "Детальная проработка всех элементов интерьера с чертежами" },
                  { title: "3D-визуализация", desc: "Фотореалистичные изображения будущего интерьера" },
                  { title: "Комплектация", desc: "Подбор всех материалов, мебели и декора" },
                  { title: "Реализация проекта", desc: "Ремонтные работы под контролем дизайнера" },
                  { title: "Финальная стилизация", desc: "Расстановка мебели, декорирование, финальные штрихи" }
                ].map((step, index) => (
                  <div key={index} className={`flex gap-4 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
                      {index + 1}
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex-1 border-2 border-green-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества дизайнерского ремонта</h2>
              <div className="space-y-6">
                {[
                  { 
                    title: "Индивидуальность", 
                    desc: "Ваш интерьер будет уникальным, созданным специально под ваш образ жизни и предпочтения. Никаких шаблонных решений — только авторский подход." 
                  },
                  { 
                    title: "Оптимизация пространства", 
                    desc: "Дизайнер знает, как рационально использовать каждый метр площади, создать функциональные зоны и визуально расширить пространство." 
                  },
                  { 
                    title: "Экономия времени и средств", 
                    desc: "Профессиональный проект помогает избежать ошибок и переделок. Дизайнер подберет оптимальные решения в рамках вашего бюджета." 
                  },
                  { 
                    title: "Высокое качество", 
                    desc: "Работа с проверенными поставщиками премиальных материалов, контроль качества на всех этапах реализации проекта." 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость дизайнерского ремонта</h2>
              <p className="text-lg text-gray-700 mb-6">
                Стоимость дизайнерского ремонта зависит от площади квартиры, сложности проекта и уровня отделки. 
                Средняя стоимость работ по дизайнерскому ремонту:
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
                <p className="text-gray-600 mb-2 text-lg">От</p>
                <p className="text-5xl font-bold text-green-600 mb-2">15 000 ₽/м²</p>
                <p className="text-gray-600 text-lg">стоимость работ без материалов</p>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-2">В стоимость входит:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Дизайн-проект</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> 3D-визуализация</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Авторский надзор</li>
                  </ul>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Дополнительные услуги:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Мебель на заказ</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Эксклюзивный декор</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Умный дом</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Почему выбирают нас?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Опытные дизайнеры", desc: "Наши дизайнеры — дипломированные специалисты с портфолио реализованных премиум-проектов" },
                  { title: "Индивидуальный подход", desc: "Каждый проект уникален, мы не используем шаблонные решения" },
                  { title: "Премиум материалы", desc: "Работаем с лучшими поставщиками элитных отделочных материалов" },
                  { title: "Гарантия качества", desc: "Официальная гарантия на все работы и авторский надзор на всех этапах" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Заказать дизайн-проект
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default DesignerRepair;
