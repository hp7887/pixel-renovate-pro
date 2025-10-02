import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import interiorDesignHero from "@/assets/interior-design-hero.jpg";
import designStudio from "@/assets/design-studio.jpg";

const InteriorDesign = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Дизайн интерьера квартир в СПб | Дизайн-проект под ключ | SPB-DSRemont</title>
        <meta name="description" content="Профессиональный дизайн интерьера в Санкт-Петербурге: 3D-визуализация, планировка, подбор материалов. Дизайн-проект в подарок при заказе ремонта от 50 м²." />
        <meta name="keywords" content="дизайн интерьера СПб, дизайн-проект квартиры, 3D визуализация, планировка квартиры, дизайнер интерьера" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/interior-design" />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Дизайн интерьера квартир в Санкт-Петербурге
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <LazyImage
              src={interiorDesignHero}
              alt="Современный дизайн интерьера квартиры"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Что включает дизайн-проект?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Профессиональный дизайн-проект — это не просто красивые картинки. Это полный комплект документации для ремонта, который поможет избежать ошибок и переделок, а также сэкономит ваше время и деньги.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Планировочное решение",
                  "3D-визуализация всех помещений",
                  "Развертки стен с размерами",
                  "План расстановки мебели",
                  "Электрика и освещение",
                  "Схемы теплых полов",
                  "Спецификация материалов",
                  "Комплектация мебели и декора"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-400/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Специальное предложение</h2>
                <p className="text-xl text-gray-800 font-semibold">
                  Дизайн-проект в подарок при заказе ремонта от 50 м²!
                </p>
              </div>
            </section>

            <section className="my-12">
              <LazyImage
                src={designStudio}
                alt="Работа над дизайн-проектом интерьера"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Зачем нужен дизайн-проект квартиры?</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Многие считают, что дизайн-проект — это роскошь, без которой можно обойтись. Однако профессиональный проект помогает избежать множества ошибок и в итоге экономит ваши деньги и время.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Что дает дизайн-проект:</strong>
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Оптимизация пространства:</strong> Дизайнер поможет грамотно использовать каждый квадратный метр, учитывая ваш образ жизни и потребности.</li>
                  <li><strong>Экономия на материалах:</strong> Точные расчеты позволяют купить нужное количество материалов без излишков.</li>
                  <li><strong>Единая концепция:</strong> Все элементы интерьера гармонично сочетаются друг с другом.</li>
                  <li><strong>Избежание ошибок:</strong> Все технические решения продуманы заранее, что исключает переделки.</li>
                  <li><strong>Реалистичная визуализация:</strong> 3D-модели позволяют увидеть будущий интерьер до начала ремонта.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стили интерьера</h2>
              <p className="text-lg text-gray-700 mb-6">Мы работаем со всеми популярными стилями:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Современный", desc: "Минимализм и функциональность" },
                  { name: "Скандинавский", desc: "Светлые тона и уют" },
                  { name: "Лофт", desc: "Индустриальный шик" },
                  { name: "Классический", desc: "Элегантность и роскошь" },
                  { name: "Неоклассика", desc: "Сочетание традиций и современности" },
                  { name: "Эко-стиль", desc: "Природные материалы" }
                ].map((style, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-400 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{style.name}</h3>
                    <p className="text-gray-600">{style.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Этапы создания дизайн-проекта</h2>
              <div className="space-y-6">
                {[
                  { title: "Встреча и замеры", desc: "Знакомство, обсуждение пожеланий, замеры помещения" },
                  { title: "Концепция", desc: "Создание 2-3 вариантов планировочных решений" },
                  { title: "3D-визуализация", desc: "Детальная прорисовка каждого помещения в 3D" },
                  { title: "Рабочая документация", desc: "Чертежи, развертки, спецификации" },
                  { title: "Авторский надзор", desc: "Контроль реализации проекта на объекте" }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость дизайн-проекта</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Стандартный пакет</h3>
                  <p className="text-3xl font-bold text-cyan-600 mb-4">от 1 500 ₽/м²</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Планировочное решение</li>
                    <li>✓ 3D-визуализация</li>
                    <li>✓ Спецификация материалов</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-400">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Расширенный пакет</h3>
                  <p className="text-3xl font-bold text-cyan-600 mb-4">от 2 500 ₽/м²</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Все из стандартного пакета</li>
                    <li>✓ Рабочая документация</li>
                    <li>✓ Авторский надзор</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Как мы работаем с клиентами</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Процесс создания дизайн-проекта — это совместная работа дизайнера и клиента. Мы стремимся понять ваши потребности, вкусы и образ жизни, чтобы создать интерьер, который будет вам по-настоящему комфортен.
              </p>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Что важно обсудить на первой встрече:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Состав семьи и привычки всех членов семьи</li>
                  <li>• Бюджет на ремонт и покупку мебели</li>
                  <li>• Предпочтения по стилю и цветовой гамме</li>
                  <li>• Необходимость зонирования пространства</li>
                  <li>• Особые пожелания (домашний офис, гардеробная, система умный дом)</li>
                  <li>• Планируемые сроки реализации проекта</li>
                </ul>
              </div>
            </section>

            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
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

export default InteriorDesign;
