import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const MajorRepair = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Капитальный ремонт квартир в СПб под ключ | SPB-DSRemont</title>
        <meta name="description" content="Капитальный ремонт квартир в Санкт-Петербурге: полная замена инженерных систем, перепланировка, черновая и чистовая отделка. Гарантия 3 года." />
        <meta name="keywords" content="капитальный ремонт, ремонт под ключ, перепланировка квартиры, замена проводки, ремонт новостройки СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/major-repair" />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Капитальный ремонт квартир под ключ
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <LazyImage
              src="/placeholder.svg"
              alt="Капитальный ремонт квартиры - современный интерьер"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
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
                  <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Почему выбирают нас?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">📋 Официальный договор</h3>
                  <p className="text-gray-700">Все условия, сроки и гарантии фиксируются в договоре</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">👷 Опытные мастера</h3>
                  <p className="text-gray-700">Квалифицированные специалисты с опытом работы от 5 лет</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🛡️ Гарантия 3 года</h3>
                  <p className="text-gray-700">Официальная гарантия на все выполненные работы</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">📱 Контроль онлайн</h3>
                  <p className="text-gray-700">Ежедневные фотоотчеты о ходе работ в личном кабинете</p>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость капитального ремонта</h2>
              <p className="text-lg text-gray-700 mb-6">
                Итоговая цена зависит от объема работ, площади квартиры и выбранных материалов. 
                Средняя стоимость капитального ремонта под ключ:
              </p>
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">От</p>
                  <p className="text-4xl font-bold text-cyan-600 mb-2">8 000 ₽/м²</p>
                  <p className="text-gray-600">с материалами и работой</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-gray-700 text-center">
                  🎁 При площади от 50 м² — дизайн-проект в подарок!
                </p>
              </div>
            </section>

            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
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
