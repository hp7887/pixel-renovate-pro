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
    <main className="min-h-screen">
      <Helmet>
        <title>Капитальный ремонт квартир в СПб под ключ | SPB-DSRemont</title>
        <meta name="description" content="Капитальный ремонт квартир в Санкт-Петербурге: полная замена инженерных систем, перепланировка, черновая и чистовая отделка. Гарантия 3 года." />
        <meta name="keywords" content="капитальный ремонт, ремонт под ключ, перепланировка квартиры, замена проводки, ремонт новостройки СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/major-repair" />
        <meta property="og:title" content="Капитальный ремонт квартир в СПб под ключ | SPB-DSRemont" />
        <meta property="og:description" content="Капитальный ремонт квартир в Санкт-Петербурге: полная замена инженерных систем, перепланировка, черновая и чистовая отделка. Гарантия 3 года." />
        <meta property="og:url" content="https://spb-dsremont.ru/services/major-repair" />
        <meta property="og:type" content="website" />
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
              }
            },
            "areaServed": "Санкт-Петербург",
            "offers": {
              "@type": "Offer",
              "price": "10000",
              "priceCurrency": "RUB",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "10000",
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Капитальный ремонт квартир под ключ
          </h1>
         
          <div className="max-w-4xl mx-auto mb-12">
            <LazyImage
              src={majorRepairHero}
              alt="Капитальный ремонт квартиры - современный интерьер"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              fallbackSrc="/placeholder.jpg"
            />
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Что такое капитальный ремонт?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Капитальный ремонт — это полное преобразование квартиры с заменой всех инженерных систем, выравниванием поверхностей и чистовой отделкой. Оптимальное решение для новостроек и вторичного жилья, требующего серьезного обновления.
              </p>
             
              <div className="grid md:grid-cols-2 gap-4 mb-8">
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
                  <div key={`${item}-${index}`} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Почему выбирают нас?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Официальный договор</h3>
                  <p className="text-gray-700">Все условия, сроки и гарантии фиксируются в договоре</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Опытные мастера</h3>
                  <p className="text-gray-700">Квалифицированные специалисты с опытом работы от 5 лет</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Гарантия 3 года</h3>
                  <p className="text-gray-700">Официальная гарантия на все выполненные работы</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Контроль онлайн</h3>
                  <p className="text-gray-700">Ежедневные фотоотчеты о ходе работ в личном кабинете</p>
                </div>
              </div>
            </section>
            <section className="my-12">
              <LazyImage
                src={majorRepairProcess}
                alt="Процесс капитального ремонта квартиры"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                fallbackSrc="/placeholder.jpg"
              />
            </section>
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Капитальный ремонт новостройки в СПб</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Капитальный ремонт новостройки — это комплекс работ, который превращает голые стены в уютное жилое пространство. В отличие от вторичного жилья, здесь вы начинаете с чистого листа и можете реализовать любые дизайнерские идеи.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Наша компания специализируется на ремонте новостроек в Санкт-Петербурге. Мы понимаем все особенности работы с новыми квартирами: необходимость правильной последовательности работ, важность качественной гидроизоляции, требования к вентиляции и многое другое.
                </p>
              </div>
            </section>
            <section className="bg-gray-50 p-8 rounded-2xl mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Основные виды работ при капитальном ремонте</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Черновые работы</h3>
                  <p className="text-gray-700">Возведение перегородок, прокладка электрики и сантехники, выравнивание стен и полов, установка окон и дверей. Это основа качественного ремонта.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Чистовая отделка</h3>
                  <p className="text-gray-700">Финишная отделка стен (покраска, обои, декоративная штукатурка), укладка напольных покрытий, монтаж потолков, установка сантехники и электрики.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Инженерные системы</h3>
                  <p className="text-gray-700">Замена или прокладка новой электропроводки, водоснабжения, канализации, отопления, вентиляции. Все работы выполняются с соблюдением норм и стандартов.</p>
                </div>
              </div>
            </section>
            <section className="mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Сколько времени занимает капитальный ремонт?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Сроки капитального ремонта зависят от площади квартиры и объема работ. В среднем:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Однокомнатная квартира (35-45 м²) — 2-3 месяца</li>
                <li>• Двухкомнатная квартира (50-65 м²) — 3-4 месяца</li>
                <li>• Трехкомнатная квартира (70-90 м²) — 4-5 месяцев</li>
                <li>• Четырехкомнатная квартира (100+ м²) — 5-6 месяцев</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Мы составляем детальный график работ и придерживаемся согласованных сроков. Каждый этап ремонта контролируется нашим прорабом.
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Этапы капитального ремонта</h2>
              <div className="space-y-6">
                {[
                  { title: "Замер и проектирование", desc: "Выезд инженера, составление проекта и сметы" },
                  { title: "Демонтажные работы", desc: "Снос перегородок, демонтаж старых покрытий" },
                  { title: "Черновые работы", desc: "Прокладка коммуникаций, выравнивание поверхностей" },
                  { title: "Чистовая отделка", desc: "Финишная отделка всех помещений" },
                  { title: "Установка сантехники", desc: "Монтаж сантехнических приборов и оборудования" },
                  { title: "Клининг и сдача", desc: "Генеральная уборка и приемка объекта" }
                ].map((step, index) => (
                  <div key={`${step.title}-${index}`} className="flex gap-4">
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
            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость капитального ремонта</h2>
              <p className="text-lg text-gray-700 mb-6">
                Итоговая цена зависит от объема работ, площади квартиры и выбранных материалов.
                Средняя стоимость капитального ремонта под ключ:
              </p>
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">От</p>
                  <p className="text-4xl font-bold text-cyan-600 mb-2">10 000 ₽/м²</p>
                  <p className="text-gray-600">с материалами и работой</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-gray-700 text-center">
                  При площади от 50 м² — дизайн-проект в подарок!
                </p>
              </div>
            </section>
            <section className="bg-gray-50 p-8 rounded-2xl mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Сколько стоит капитальный ремонт?</summary>
                  <p className="text-gray-700 mt-2">От 10 000 ₽/м², в зависимости от площади и материалов.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Как долго длится ремонт?</summary>
                  <p className="text-gray-700 mt-2">2-6 месяцев, в зависимости от размера квартиры.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Даете ли гарантию?</summary>
                  <p className="text-gray-700 mt-2">Да, 3 года на все работы.</p>
                </details>
              </div>
            </section>
            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                aria-label="Получить расчет стоимости"
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