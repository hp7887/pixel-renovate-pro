import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import cosmeticRepairHero from "@/assets/cosmetic-repair-hero.jpg";
import cosmeticRepairProcess from "@/assets/cosmetic-repair-process.jpg";

const CosmeticRepair = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Косметический ремонт квартир в СПб под ключ | SPB-DSRemont</title>
        <meta name="description" content="Косметический ремонт квартир в Санкт-Петербурге: быстро, качественно и недорого. Покраска стен, поклейка обоев, замена напольных покрытий. Гарантия качества." />
        <meta name="keywords" content="косметический ремонт, ремонт квартиры недорого, покраска стен, поклейка обоев, ремонт комнаты СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/cosmetic-repair" />
        {/* Добавлено для SEO: Open Graph и Twitter Cards */}
        <meta property="og:title" content="Косметический ремонт квартир в СПб под ключ | SPB-DSRemont" />
        <meta property="og:description" content="Косметический ремонт квартир в Санкт-Петербурге: быстро, качественно и недорого. Покраска стен, поклейка обоев, замена напольных покрытий. Гарантия качества." />
        <meta property="og:url" content="https://spb-dsremont.ru/services/cosmetic-repair" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={cosmeticRepairHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Косметический ремонт квартир в СПб под ключ | SPB-DSRemont" />
        <meta name="twitter:description" content="Косметический ремонт квартир в Санкт-Петербурге: быстро, качественно и недорого. Покраска стен, поклейка обоев, замена напольных покрытий. Гарантия качества." />
        <meta name="twitter:image" content={cosmeticRepairHero} />
        {/* Добавлено для SEO: Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Косметический ремонт квартир под ключ",
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
              "price": "6000",
              "priceCurrency": "RUB",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "6000",
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
              src={cosmeticRepairHero}
              alt="Косметический ремонт квартиры - результат работы"
              className="w-full h-full object-cover rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/60 rounded-b-3xl flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                    Косметический ремонт квартир в СПб
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                    Быстрое обновление интерьера с гарантией качества
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  >
                    Заказать бесплатный замер
                  </Button>
                </div>
              </div>
            </div>
          </section>
         
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Что включает косметический ремонт?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Косметический ремонт — это обновление внешнего вида помещения без изменения планировки и коммуникаций. Идеальное решение для освежения интерьера, подготовки квартиры к продаже или сдаче в аренду.
              </p>
             
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Покраска стен и потолков",
                  "Поклейка обоев",
                  "Укладка напольных покрытий",
                  "Замена плинтусов и наличников",
                  "Установка розеток и выключателей",
                  "Монтаж осветительных приборов",
                  "Покраска радиаторов и труб",
                  "Косметический ремонт санузла"
                ].map((item, index) => (
                  <div key={`${item}-${index}`} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества косметического ремонта</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Быстрые сроки</h3>
                  <p className="text-gray-700">Ремонт однокомнатной квартиры занимает всего 2-3 недели</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Доступная цена</h3>
                  <p className="text-gray-700">Стоимость значительно ниже капитального ремонта</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Минимум неудобств</h3>
                  <p className="text-gray-700">Можно проживать в квартире во время ремонта во время других комнат</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Свежий вид</h3>
                  <p className="text-gray-700">Квартира преображается и выглядит как новая</p>
                </div>
              </div>
            </section>
            <section className="my-12">
              <LazyImage
                src={cosmeticRepairProcess}
                alt="Процесс косметического ремонта квартиры"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </section>
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Когда нужен косметический ремонт?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Косметический ремонт квартиры в Санкт-Петербурге — это оптимальное решение для тех, кто хочет обновить интерьер без значительных финансовых вложений и длительных сроков работ. Он подходит в следующих случаях:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Подготовка к продаже или сдаче в аренду:</strong> Свежий ремонт значительно повышает привлекательность недвижимости и позволяет установить более высокую цену.</li>
                  <li><strong>Обновление устаревшего интерьера:</strong> Если основные коммуникации в порядке, но внешний вид помещения требует обновления.</li>
                  <li><strong>Устранение мелких дефектов:</strong> Трещины на стенах, потертости, выцветшие обои — все это легко исправляется косметическим ремонтом.</li>
                  <li><strong>Быстрое преображение:</strong> Когда нужно освежить квартиру в сжатые сроки перед важным событием.</li>
                </ul>
              </div>
            </section>
            <section className="bg-gray-50 p-8 rounded-2xl mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Популярные работы при косметическом ремонте</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Покраска стен и потолков</h3>
                  <p className="text-gray-700">Современная альтернатива обоям. Широкая палитра цветов, экологичность, простота в уходе. Особенно популярны матовые и бархатистые текстуры.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Поклейка обоев</h3>
                  <p className="text-gray-700">От классических бумажных до современных флизелиновых и виниловых. Возможность создания акцентных стен с использованием фотообоев или декоративных покрытий.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Укладка ламината и линолеума</h3>
                  <p className="text-gray-700">Быстрая замена напольного покрытия без демонтажа стяжки. Большой выбор текстур и цветов, имитация натурального дерева и камня.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Замена дверей и плинтусов</h3>
                  <p className="text-gray-700">Установка межкомнатных дверей, замена наличников и плинтусов. Эти детали значительно влияют на общее восприятие интерьера.</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Этапы работы</h2>
              <div className="space-y-6">
                {[
                  { title: "Консультация и замер", desc: "Бесплатный выезд специалиста, обсуждение пожеланий" },
                  { title: "Составление сметы", desc: "Подробный расчет стоимости материалов и работ" },
                  { title: "Подготовка помещения", desc: "Защита мебели, демонтаж старых покрытий" },
                  { title: "Отделочные работы", desc: "Выполнение всех запланированных работ" },
                  { title: "Уборка и сдача объекта", desc: "Финальная уборка и приемка работ заказчиком" }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость косметического ремонта</h2>
              <p className="text-lg text-gray-700 mb-6">
                Цена зависит от площади помещения, состояния поверхностей и выбранных материалов.
                Средняя стоимость косметического ремонта под ключ:
              </p>
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">От</p>
                  <p className="text-4xl font-bold text-cyan-600 mb-2">6 000 ₽/м²</p>
                  <p className="text-gray-600">с материалами и работой</p>
                </div>
              </div>
            </section>
            <section className="bg-gray-50 p-8 rounded-2xl mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Сколько стоит косметический ремонт?</summary>
                  <p className="text-gray-700 mt-2">От 6 000 ₽/м², в зависимости от площади и материалов.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Как долго длится ремонт?</summary>
                  <p className="text-gray-700 mt-2">Для однокомнатной квартиры — 2-3 недели.</p>
                </details>
                <details className="bg-white p-4 rounded-lg">
                  <summary className="font-semibold text-gray-900 cursor-pointer">Даете ли гарантию?</summary>
                  <p className="text-gray-700 mt-2">Да, гарантия на работы и материалы.</p>
                </details>
              </div>
            </section>
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
export default CosmeticRepair;