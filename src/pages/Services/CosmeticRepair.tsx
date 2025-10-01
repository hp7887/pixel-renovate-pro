import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const CosmeticRepair = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Косметический ремонт квартир в СПб под ключ | SPB-DSRemont</title>
        <meta name="description" content="Косметический ремонт квартир в Санкт-Петербурге: быстро, качественно и недорого. Покраска стен, поклейка обоев, замена напольных покрытий. Гарантия качества." />
        <meta name="keywords" content="косметический ремонт, ремонт квартиры недорого, покраска стен, поклейка обоев, ремонт комнаты СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/cosmetic-repair" />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Косметический ремонт квартир в СПб
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <LazyImage
              src="/placeholder.svg"
              alt="Косметический ремонт квартиры - результат работы"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

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
                  <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества косметического ремонта</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">⚡ Быстрые сроки</h3>
                  <p className="text-gray-700">Ремонт однокомнатной квартиры занимает всего 2-3 недели</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">💰 Доступная цена</h3>
                  <p className="text-gray-700">Стоимость значительно ниже капитального ремонта</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🏠 Минимум неудобств</h3>
                  <p className="text-gray-700">Можно проживать в квартире во время ремонта других комнат</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">✨ Свежий вид</h3>
                  <p className="text-gray-700">Квартира преображается и выглядит как новая</p>
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

            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость косметического ремонта</h2>
              <p className="text-lg text-gray-700 mb-6">
                Цена зависит от площади помещения, состояния поверхностей и выбранных материалов. 
                Средняя стоимость косметического ремонта под ключ:
              </p>
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">От</p>
                  <p className="text-4xl font-bold text-cyan-600 mb-2">2 500 ₽/м²</p>
                  <p className="text-gray-600">с материалами и работой</p>
                </div>
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
