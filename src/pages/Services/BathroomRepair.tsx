import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import bathroomRepairHero from "@/assets/bathroom-repair-hero.jpg";
import bathroomWork from "@/assets/bathroom-work.jpg";

const BathroomRepair = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт ванной комнаты под ключ в СПб | SPB-DSRemont</title>
        <meta name="description" content="Ремонт ванной комнаты и санузла в Санкт-Петербурге: укладка плитки, замена сантехники, гидроизоляция. Гарантия 3 года, фиксированные цены." />
        <meta name="keywords" content="ремонт ванной СПб, ремонт санузла, укладка плитки, замена сантехники, гидроизоляция ванной" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/bathroom-repair" />
        {/* Добавлено для SEO: Open Graph и Twitter Cards */}
        <meta property="og:title" content="Ремонт ванной комнаты под ключ в СПб | SPB-DSRemont" />
        <meta property="og:description" content="Ремонт ванной комнаты и санузла в Санкт-Петербурге: укладка плитки, замена сантехники, гидроизоляция. Гарантия 3 года, фиксированные цены." />
        <meta property="og:url" content="https://spb-dsremont.ru/services/bathroom-repair" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={bathroomRepairHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт ванной комнаты под ключ в СПб | SPB-DSRemont" />
        <meta name="twitter:description" content="Ремонт ванной комнаты и санузла в Санкт-Петербурге: укладка плитки, замена сантехники, гидроизоляция. Гарантия 3 года, фиксированные цены." />
        <meta name="twitter:image" content={bathroomRepairHero} />
        {/* Добавлено для SEO: Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ремонт ванной комнаты под ключ",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SPB-DSRemont",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Санкт-Петербург",
                "addressCountry": "RU"
              }
            },
            "areaServed": "Санкт-Петербург",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Варианты ремонта",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Эконом", "offers": { "@type": "Offer", "price": "45000", "priceCurrency": "RUB" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Стандарт", "offers": { "@type": "Offer", "price": "75000", "priceCurrency": "RUB" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Премиум", "offers": { "@type": "Offer", "price": "120000", "priceCurrency": "RUB" } } }
              ]
            }
          })}
        </script>
      </Helmet>
     
      <Header />
     
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto mb-12">
            <LazyImage
              src={bathroomRepairHero}
              alt="Ремонт ванной комнаты - современный дизайн"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              fallbackSrc="/placeholder.jpg"  // Добавлено: fallback для производительности/ошибок
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center">
                Ремонт ванной комнаты под ключ
              </h1>
            </div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Комплексный ремонт ванной комнаты</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ремонт ванной комнаты требует особого подхода и профессионализма. Мы выполняем все работы от демонтажа до установки сантехники с соблюдением технологий гидроизоляции и вентиляции.
              </p>
             
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Демонтаж старой сантехники и плитки",
                  "Выравнивание стен и пола",
                  "Гидроизоляция всех поверхностей",
                  "Укладка керамической плитки",
                  "Монтаж сантехнических систем",
                  "Установка ванны, душевой кабины",
                  "Монтаж освещения и вентиляции",
                  "Установка мебели и аксессуаров"
                ].map((item, index) => (
                  <div key={`${item}-${index}`} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">  {/* Улучшено: уникальный key */}
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наши преимущества</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Качественная гидроизоляция</h3>
                  <p className="text-gray-700">Используем современные материалы для надежной защиты от протечек</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Идеальная укладка плитки</h3>
                  <p className="text-gray-700">Работаем с любой плиткой: керамогранит, мозаика, крупноформат</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Профессиональная сантехника</h3>
                  <p className="text-gray-700">Монтаж скрытых систем, установка современного оборудования</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Соблюдение сроков</h3>
                  <p className="text-gray-700">Ремонт стандартной ванной комнаты за 2-3 недели</p>
                </div>
              </div>
            </section>
            <section className="my-12">
              <LazyImage
                src={bathroomWork}
                alt="Процесс ремонта ванной комнаты"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                fallbackSrc="/placeholder.jpg"  // Добавлено: fallback
              />
            </section>
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Варианты ремонта</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-400 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Эконом</h3>
                  <p className="text-2xl font-bold text-cyan-600 mb-4">от 45 000 ₽</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Базовые материалы</li>
                    <li>✓ Стандартная плитка</li>
                    <li>✓ Простая сантехника</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-400">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Стандарт</h3>
                  <p className="text-2xl font-bold text-cyan-600 mb-4">от 75 000 ₽</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Качественные материалы</li>
                    <li>✓ Керамогранит</li>
                    <li>✓ Хорошая сантехника</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-400 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Премиум</h3>
                  <p className="text-2xl font-bold text-cyan-600 mb-4">от 120 000 ₽</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Премиум материалы</li>
                    <li>✓ Дизайнерская плитка</li>
                    <li>✓ Элитная сантехника</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Этапы работы</h2>
              <div className="space-y-6">
                {[
                  { title: "Замер и составление сметы", desc: "Бесплатный выезд специалиста, расчет стоимости" },
                  { title: "Демонтажные работы", desc: "Демонтаж старой плитки, сантехники, подготовка" },
                  { title: "Черновые работы", desc: "Выравнивание, гидроизоляция, прокладка коммуникаций" },
                  { title: "Облицовочные работы", desc: "Укладка плитки на стены и пол" },
                  { title: "Сантехнические работы", desc: "Установка сантехники, подключение оборудования" },
                  { title: "Финишные работы", desc: "Затирка швов, герметизация, монтаж аксессуаров" }
                ].map((step, index) => (
                  <div key={`${step.title}-${index}`} className="flex gap-4">  {/* Улучшено: уникальный key */}
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
            <section className="bg-yellow-50 p-8 rounded-2xl border-2 border-yellow-400/30">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Важно знать</h2>
              <div className="space-y-3 text-gray-700">
                <p>• Качественная гидроизоляция — залог долговечности ремонта</p>
                <p>• Правильная вентиляция предотвращает появление плесени</p>
                <p>• Экономия на материалах может привести к протечкам</p>
                <p>• Все работы должны выполняться по технологии</p>
              </div>
            </section>
            <section className="mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Особенности ремонта ванной комнаты в СПб</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ремонт ванной комнаты в квартирах Санкт-Петербурга имеет свои особенности. Старый фонд требует особого внимания к состоянию коммуникаций, а в новостройках важно правильно выполнить все работы с первого раза.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Основные проблемы, с которыми мы сталкиваемся:</strong>
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li><strong>Старые коммуникации:</strong> Во многих домах требуется полная замена водопровода и канализации.</li>
                  <li><strong>Неровные стены:</strong> Необходимо тщательное выравнивание перед укладкой плитки.</li>
                  <li><strong>Проблемы с вентиляцией:</strong> Часто требуется установка принудительной вентиляции.</li>
                  <li><strong>Маленькая площадь:</strong> Нужно грамотно использовать каждый сантиметр пространства.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Наша команда имеет большой опыт работы с квартирами разных типов и знает, как решить любую проблему. Мы используем только проверенные материалы и технологии, которые гарантируют долговечность ремонта.
                </p>
              </div>
            </section>
            <section className="bg-gray-50 p-8 rounded-2xl mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Популярные решения для ванной комнаты</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Душевая кабина или ванна?</h3>
                  <p className="text-gray-700">Душевая кабина экономит пространство и воду, современные модели выглядят стильно. Ванна подходит для семей с детьми и любителей расслабиться после работы.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Теплый пол</h3>
                  <p className="text-gray-700">Электрический теплый пол делает ванную комнату комфортной в любое время года. Особенно актуально для квартир с холодными полами.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Скрытые системы инсталляции</h3>
                  <p className="text-gray-700">Подвесные унитазы и биде с инсталляцией экономят место и облегчают уборку. Современное решение для любой ванной комнаты.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Светодиодное освещение</h3>
                  <p className="text-gray-700">Многоуровневое LED-освещение создает комфортную атмосферу и экономит электроэнергию. Влагозащищенные светильники служат долго.</p>
                </div>
              </div>
            </section>
            {/* Добавлено: Раздел FAQ для дополнительного контента/SEO */}
            <section className="bg-gray-50 p-8 rounded-2xl mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Сколько стоит ремонт ванной под ключ?</summary>
                  <p className="text-gray-700 mt-2">От 45 000 ₽ в зависимости от пакета (Эконом, Стандарт, Премиум) и площади.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Как долго длится ремонт?</summary>
                  <p className="text-gray-700 mt-2">Стандартная ванная — 2-3 недели, с учетом всех этапов.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Даете ли гарантию?</summary>
                  <p className="text-gray-700 mt-2">Да, 3 года на все работы и материалы.</p>
                </details>
              </div>
            </section>
            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                aria-label="Заказать ремонт ванной комнаты"  // Добавлено: для доступности
              >
                Заказать ремонт ванной
              </Button>
            </div>
          </div>
        </div>
      </article>
     
      <Footer />
    </main>
  );
};
export default BathroomRepair;