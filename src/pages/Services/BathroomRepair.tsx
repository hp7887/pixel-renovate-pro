import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const BathroomRepair = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт ванной комнаты под ключ в СПб | SPB-DSRemont</title>
        <meta name="description" content="Ремонт ванной комнаты и санузла в Санкт-Петербурге: укладка плитки, замена сантехники, гидроизоляция. Гарантия 3 года, фиксированные цены." />
        <meta name="keywords" content="ремонт ванной СПб, ремонт санузла, укладка плитки, замена сантехники, гидроизоляция ванной" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/bathroom-repair" />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Ремонт ванной комнаты под ключ
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <LazyImage
              src="/placeholder.svg"
              alt="Ремонт ванной комнаты - современный дизайн"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
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
                  <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наши преимущества</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">💧 Качественная гидроизоляция</h3>
                  <p className="text-gray-700">Используем современные материалы для надежной защиты от протечек</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🎨 Идеальная укладка плитки</h3>
                  <p className="text-gray-700">Работаем с любой плиткой: керамогранит, мозаика, крупноформат</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🔧 Профессиональная сантехника</h3>
                  <p className="text-gray-700">Монтаж скрытых систем, установка современного оборудования</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">⏱️ Соблюдение сроков</h3>
                  <p className="text-gray-700">Ремонт стандартной ванной комнаты за 2-3 недели</p>
                </div>
              </div>
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

            <section className="bg-yellow-50 p-8 rounded-2xl border-2 border-yellow-400/30">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">⚠️ Важно знать</h2>
              <div className="space-y-3 text-gray-700">
                <p>• Качественная гидроизоляция — залог долговечности ремонта</p>
                <p>• Правильная вентиляция предотвращает появление плесени</p>
                <p>• Экономия на материалах может привести к протечкам</p>
                <p>• Все работы должны выполняться по технологии</p>
              </div>
            </section>

            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
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
