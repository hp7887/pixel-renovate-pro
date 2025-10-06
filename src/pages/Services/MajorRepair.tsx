import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import majorRepairHero from "@/assets/major-repair-hero.jpg";
import majorRepairProcess from "@/assets/major-repair-process.jpg";

const MajorRepair = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Капитальный ремонт квартир в СПб под ключ | SPB-DSRemont</title>
        <meta name="description" content="Капитальный ремонт квартир в Санкт-Петербурге: полная замена инженерных систем, перепланировка, черновая и чистовая отделка. Гарантия 3 года." />
        <meta name="keywords" content="капитальный ремонт, ремонт под ключ, перепланировка квартиры, замена проводки, ремонт новостройки СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/major-repair" />
        <meta property="og:title" content="Капитальный ремонт квартир в СПб под ключ | SPB-DSRemont" />
        <meta property="og:description" content="Капитальный ремонт квартир в Санкт-Петербурге: полная замена инженерных систем, перепланировка, черновая и чистовая отделка. Гарантия 3 года." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/services/major-repair" />
        <meta property="og:image" content={majorRepairHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Капитальный ремонт квартир в СПб под ключ | SPB-DSRemont" />
        <meta name="twitter:description" content="Капитальный ремонт квартир в Санкт-Петербурге: полная замена инженерных систем, перепланировка, черновая и чистовая отделка. Гарантия 3 года." />
        <meta name="twitter:image" content={majorRepairHero} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Капитальный ремонт квартир под ключ",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SPB-DSRemont",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Санкт-Петербург",
                "addressCountry": "RU"
              },
              "telephone": "+7 915 220-55-56"
            },
            "areaServed": "Санкт-Петербург",
            "offers": {
              "@type": "Offer",
              "price": "8000",
              "priceCurrency": "RUB",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "8000",
                "priceCurrency": "RUB",
                "unitCode": "MTK"
              }
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <section className="relative h-[500px] md:h-[600px] overflow-hidden mb-12">
            <LazyImage
              src={majorRepairHero}
              alt="Капитальный ремонт квартиры - современный интерьер"
              className="w-full h-full object-cover rounded-b-3xl"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/60 rounded-b-3xl flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Капитальный ремонт квартир под ключ
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                  Полное преобразование вашего пространства с гарантией качества
                </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  >
                    Получить расчет стоимости
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Что такое капитальный ремонт?</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Капитальный ремонт — это полное преобразование квартиры с заменой всех инженерных систем, выравниванием поверхностей и чистовой отделкой. Оптимальное решение для новостроек и вторичного жилья, требующего серьезного обновления.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Демонтаж старых конструкций",
                  "Перепланировка (при необходимости)",
                  "Замена электропроводки",
                  "Замена сантехнических систем",
                  "Установка новых окон и дверей",
                  "Выравнивание стен и потолков",
                  "Стяжка и выравнивание полов",
                  "Полная чистовая отделка"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Почему выбирают нас?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Официальный договор", desc: "Все условия, сроки и гарантии фиксируются в договоре" },
                  { title: "Опытные мастера", desc: "Квалифицированные специалисты с опытом работы от 5 лет" },
                  { title: "Гарантия 3 года", desc: "Официальная гарантия на все выполненные работы" },
                  { title: "Контроль онлайн", desc: "Ежедневные фотоотчеты о ходе работ в личном кабинете" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="relative rounded-3xl overflow-hidden shadow-2xl">
              <LazyImage
                src={majorRepairProcess}
                alt="Процесс капитального ремонта квартиры"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-blue-900/40" />
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                <p className="text-2xl font-bold text-white">Процесс ремонта от А до Я</p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Капитальный ремонт новостройки в СПб</h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Капитальный ремонт новостройки — это комплекс работ, который превращает голые стены в уютное жилое пространство. В отличие от вторичного жилья, здесь вы начинаете с чистого листа и можете реализовать любые дизайнерские идеи.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Наша компания специализируется на ремонте новостроек в Санкт-Петербурге. Мы понимаем все особенности работы с новыми квартирами: необходимость правильной последовательности работ, важность качественной гидроизоляции, требования к вентиляции и многое другое.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Основные виды работ при капитальном ремонте</h2>
              <div className="space-y-6">
                {[
                  { title: "Черновые работы", desc: "Возведение перегородок, прокладка электрики и сантехники, выравнивание стен и полов, установка окон и дверей. Это основа качественного ремонта." },
                  { title: "Чистовая отделка", desc: "Финишная отделка стен (покраска, обои, декоративная штукатурка), укладка напольных покрытий, монтаж потолков, установка сантехники и электрики." },
                  { title: "Инженерные системы", desc: "Замена или прокладка новой электропроводки, водоснабжения, канализации, отопления, вентиляции. Все работы выполняются с соблюдением норм и стандартов." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Сколько времени занимает капитальный ремонт?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Сроки капитального ремонта зависят от площади квартиры и объема работ. В среднем:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Однокомнатная квартира (35-45 м²) — 2-3 месяца",
                  "Двухкомнатная квартира (50-65 м²) — 3-4 месяца",
                  "Трехкомнатная квартира (70-90 м²) — 4-5 месяцев",
                  "Четырехкомнатная квартира (100+ м²) — 5-6 месяцев"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">
                Мы составляем детальный график работ и придерживаемся согласованных сроков. Каждый этап ремонта контролируется нашим прорабом.
              </p>
            </section>

            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Этапы капитального ремонта</h2>
              <div className="relative space-y-8 before:absolute before:left-6 before:top-0 before:bottom-0 before:w-0.5 before:bg-cyan-200 md:before:left-1/2 md:before:-translate-x-1/2">
                {[
                  { title: "Замер и проектирование", desc: "Выезд инженера, составление проекта и сметы" },
                  { title: "Демонтажные работы", desc: "Снос перегородок, демонтаж старых покрытий" },
                  { title: "Черновые работы", desc: "Прокладка коммуникаций, выравнивание поверхностей" },
                  { title: "Чистовая отделка", desc: "Финишная отделка всех помещений" },
                  { title: "Установка сантехники", desc: "Монтаж сантехнических приборов и оборудования" },
                  { title: "Клининг и сдача", desc: "Генеральная уборка и приемка объекта" }
                ].map((step, index) => (
                  <div key={index} className={`flex gap-4 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
                      {index + 1}
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость капитального ремонта</h2>
              <p className="text-lg text-gray-700 mb-6">
                Итоговая цена зависит от объема работ, площади квартиры и выбранных материалов. 
                Средняя стоимость капитального ремонта под ключ:
              </p>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl text-center">
                <p className="text-gray-600 mb-2 text-lg">От</p>
                <p className="text-5xl font-bold text-cyan-600 mb-2">8 000 ₽/м²</p>
                <p className="text-gray-600 text-lg">с материалами и работой</p>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-center text-gray-700 font-semibold">
                При площади от 50 м² — дизайн-проект в подарок!
              </div>
            </section>

            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Получить расчет стоимости
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default MajorRepair;