import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import electricalHero from "@/assets/electrical-work-hero.jpg";
import electricalInstallation from "@/assets/electrical-installation.jpg";

const ElectricalWork = () => {
  const handleOrderClick = () => {
    window.dispatchEvent(new CustomEvent('openContactDialog'));
  };

  return (
    <>
      <Helmet>
        <title>Электромонтажные работы в Санкт-Петербурге | Профессиональный монтаж электрики под ключ</title>
        <meta name="description" content="Электромонтажные работы в СПб: полная замена проводки, установка электрощитов, монтаж розеток и выключателей. Опытные электрики, гарантия качества, доступные цены." />
        <meta name="keywords" content="электромонтажные работы, замена проводки, монтаж электрики, установка электрощита, электрик СПб, проводка в квартире" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/electrical-work" />
        <meta property="og:title" content="Электромонтажные работы в Санкт-Петербурге | SPB-DSRemont" />
        <meta property="og:description" content="Электромонтажные работы в СПб: полная замена проводки, установка электрощитов, монтаж розеток и выключателей. Опытные электрики, гарантия качества." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/services/electrical-work" />
        <meta property="og:image" content={electricalHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Электромонтажные работы в Санкт-Петербурге | SPB-DSRemont" />
        <meta name="twitter:description" content="Электромонтажные работы в СПб: полная замена проводки, установка электрощитов, монтаж розеток и выключателей." />
        <meta name="twitter:image" content={electricalHero} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Электромонтажные работы",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SPB-DSRemont",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Санкт-Петербург",
                "addressCountry": "RU"
              },
              "telephone": "+7 812 209-98-85"
            },
            "areaServed": "Санкт-Петербург",
            "offers": {
              "@type": "Offer",
              "priceRange": "2500-5000 ₽/м²"
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <LazyImage
            src={electricalHero}
            alt="Профессиональные электромонтажные работы в квартире"
            className="w-full h-full object-cover rounded-b-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/60 rounded-b-3xl flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Электромонтажные работы в Санкт-Петербурге
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                  Полный комплекс услуг по монтажу электрики под ключ от опытных специалистов
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  onClick={handleOrderClick}
                >
                  Заказать бесплатный расчет
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Что включают электромонтажные работы?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-cyan-600">Основные виды работ</h3>
                <ul className="space-y-4 text-gray-700">
                  {[
                    "Полная замена электропроводки в квартире или доме",
                    "Проектирование и монтаж электрической сети",
                    "Установка и подключение электрощитов, автоматов защиты",
                    "Монтаж розеток, выключателей, распределительных коробок",
                    "Прокладка кабельных линий (открытая и скрытая проводка)",
                    "Монтаж системы освещения (точечные светильники, люстры, подсветка)",
                    "Установка системы 'умный дом'",
                    "Монтаж заземления и УЗО"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <LazyImage
                  src={electricalInstallation}
                  alt="Процесс электромонтажных работ"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-lg mb-2 text-gray-900">Важно знать!</h4>
              <p className="text-gray-700 leading-relaxed">
                Электромонтажные работы должны выполняться только квалифицированными специалистами с допуском. 
                Неправильный монтаж электрики может привести к короткому замыканию, пожару и поражению электрическим током.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Наши преимущества
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Опытные электрики", desc: "Все наши специалисты имеют допуск к электромонтажным работам и опыт более 10 лет" },
                { title: "Качественные материалы", desc: "Используем только сертифицированную продукцию от ведущих производителей (ABB, Legrand, Schneider Electric)" },
                { title: "Соблюдение норм", desc: "Работаем строго по ПУЭ (Правила устройства электроустановок) и ГОСТ" },
                { title: "Гарантия 1 год", desc: "Даем официальную гарантию на все виды электромонтажных работ" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-cyan-600">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Этапы электромонтажных работ
            </h2>
            
            <div className="max-w-4xl mx-auto relative space-y-8">
              {[
                { title: "Проектирование и расчет", desc: "Составляем схему электроснабжения, рассчитываем необходимую мощность, определяем количество линий и точек подключения. Учитываем все пожелания заказчика и современные стандарты безопасности." },
                { title: "Подготовительные работы", desc: "Демонтируем старую проводку (при необходимости), штробим стены под кабель-каналы, подготавливаем места для установки розеток, выключателей и распределительных коробок." },
                { title: "Прокладка кабельных линий", desc: "Прокладываем кабели согласно проекту, устанавливаем распределительные коробки, подрозетники и подготавливаем места под электрощит. Все работы выполняются с соблюдением норм ПУЭ." },
                { title: "Сборка и монтаж электрощита", desc: "Устанавливаем электрощит, монтируем автоматические выключатели, УЗО, дифавтоматы. Производим коммутацию всех линий согласно схеме электроснабжения." },
                { title: "Установка розеток и выключателей", desc: "Монтируем розетки, выключатели, подключаем осветительные приборы. Проверяем правильность подключения и наличие заземления." },
                { title: "Проверка и испытания", desc: "Проводим измерение сопротивления изоляции, проверяем работоспособность всех линий, тестируем автоматы защиты и УЗО. Составляем акт приемки работ." }
              ].map((step, index) => (
                <div key={index} className={`flex gap-4 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
                    {index + 1}
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-md flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Важные аспекты электромонтажа
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-600">Выбор сечения кабеля</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Правильный расчет сечения провода — основа безопасной электросети. Мы учитываем мощность 
                  подключаемых приборов и длину линии для каждой группы потребителей.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">• Освещение — 1,5 мм²</li>
                  <li className="flex items-center gap-2">• Розетки — 2,5 мм²</li>
                  <li className="flex items-center gap-2">• Электроплита — от 6 мм²</li>
                  <li className="flex items-center gap-2">• Кондиционер — от 4 мм²</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-600">Защита и безопасность</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Обязательная установка защитных устройств предотвращает аварийные ситуации и обеспечивает 
                  безопасность жильцов.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">• Автоматические выключатели на каждую линию</li>
                  <li className="flex items-center gap-2">• УЗО для защиты от утечки тока</li>
                  <li className="flex items-center gap-2">• Заземление всех электроприборов</li>
                  <li className="flex items-center gap-2">• Дифавтоматы в мокрых зонах</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-600">Особенности старых домов</h3>
                <p className="text-gray-600 leading-relaxed">
                  В старых домах Санкт-Петербурга часто отсутствует заземление, а проводка алюминиевая. 
                  Требуется полная замена на медный кабель с современными системами защиты и заземлением 
                  через общий стояк или местный контур.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-600">Современные решения</h3>
                <p className="text-gray-600 leading-relaxed">
                  Предлагаем установку систем "умный дом", диммеров, датчиков движения, 
                  таймеров и других современных устройств для комфорта и экономии электроэнергии.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Стоимость электромонтажных работ
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-3xl p-6 hover:border-cyan-400 transition-colors shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Базовый</h3>
                <p className="text-3xl font-bold text-cyan-600 mb-4">от 2 500 ₽/м²</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">• Замена проводки на медную</li>
                  <li className="flex items-start gap-2">• Установка простого электрощита</li>
                  <li className="flex items-start gap-2">• Монтаж розеток и выключателей</li>
                  <li className="flex items-start gap-2">• Базовая система освещения</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-500 rounded-3xl p-6 shadow-2xl transform scale-105 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-center py-1 px-4 rounded-full text-sm font-bold">
                  Популярный
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Стандартный</h3>
                <p className="text-3xl font-bold text-cyan-600 mb-4">от 3 500 ₽/м²</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">• Все из базового пакета</li>
                  <li className="flex items-start gap-2">• Установка УЗО и дифавтоматов</li>
                  <li className="flex items-start gap-2">• Современная фурнитура (Legrand, ABB)</li>
                  <li className="flex items-start gap-2">• Точечное освещение</li>
                  <li className="flex items-start gap-2">• Проектирование электросети</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-3xl p-6 hover:border-cyan-400 transition-colors shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Премиум</h3>
                <p className="text-3xl font-bold text-cyan-600 mb-4">от 5 000 ₽/м²</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">• Все из стандартного пакета</li>
                  <li className="flex items-start gap-2">• Система 'умный дом'</li>
                  <li className="flex items-start gap-2">• Премиальная фурнитура (Gira, Jung)</li>
                  <li className="flex items-start gap-2">• Дизайнерское освещение</li>
                  <li className="flex items-start gap-2">• Дополнительные системы безопасности</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 max-w-4xl mx-auto shadow-md">
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">Специальное предложение</h3>
              <p className="text-center text-gray-700 font-semibold">
                При заказе комплексного ремонта квартиры с электромонтажными работами — 
                <span className="text-cyan-600"> скидка 15% на электрику!</span>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-500 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Доверьте электромонтаж профессионалам
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Получите бесплатную консультацию и точный расчет стоимости электромонтажных работ
            </p>
            <Button 
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-gray-100 px-12 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
              onClick={handleOrderClick}
            >
              Заказать расчет стоимости
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Электромонтажные работы в квартире: что нужно знать
              </h2>
              
              <p className="leading-relaxed mb-6">
                Электромонтажные работы — это комплекс мероприятий по прокладке электропроводки, 
                установке электрооборудования и подключению электроприборов. Качественно выполненный 
                электромонтаж — это основа безопасности и комфорта в вашей квартире.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                Когда необходима замена электропроводки?
              </h3>
              
              <p className="leading-relaxed mb-4">
                В старых домах Санкт-Петербурга, построенных в советское время, электропроводка 
                часто не соответствует современным требованиям. Алюминиевый провод со временем 
                окисляется и теряет свои свойства, что может привести к перегреву и пожару.
              </p>

              <p className="leading-relaxed mb-4">
                Признаки того, что пора менять проводку:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Возраст проводки более 20-25 лет</li>
                <li>Частое срабатывание автоматов защиты</li>
                <li>Искрение в розетках и выключателях</li>
                <li>Запах горелой изоляции</li>
                <li>Потемнение розеток или выключателей</li>
                <li>Увеличение количества электроприборов в квартире</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                Планирование электросети в квартире
              </h3>
              
              <p className="leading-relaxed mb-4">
                Перед началом электромонтажных работ важно составить подробный план электроснабжения. 
                Необходимо определить расположение розеток, выключателей, светильников, 
                учесть мощность электроприборов и разделить потребителей на группы.
              </p>

              <p className="leading-relaxed mb-4">
                Современные стандарты рекомендуют разделение на следующие группы:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Освещение (отдельные линии для разных комнат)</li>
                <li>Розетки жилых комнат</li>
                <li>Розетки кухни</li>
                <li>Розетки ванной комнаты (через УЗО или дифавтомат)</li>
                <li>Мощные потребители (электроплита, стиральная машина, кондиционер) — отдельные линии</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                Выбор материалов для электромонтажа
              </h3>
              
              <p className="leading-relaxed mb-4">
                Качество материалов напрямую влияет на безопасность и долговечность электросети. 
                Мы рекомендуем использовать:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Медный кабель с маркировкой ВВГнг-LS (негорючий, с пониженным дымовыделением)</li>
                <li>Автоматические выключатели и УЗО от известных производителей (ABB, Schneider Electric, Legrand)</li>
                <li>Качественные розетки и выключатели с заземлением</li>
                <li>Металлические подрозетники для бетонных стен</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                Почему важно доверить работу профессионалам?
              </h3>
              
              <p className="leading-relaxed mb-4">
                Электромонтажные работы требуют глубоких знаний и опыта. Ошибки в электромонтаже 
                могут привести к серьезным последствиям: от выхода из строя дорогой техники до пожара.
              </p>

              <p className="leading-relaxed mb-4">
                Наши специалисты:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Имеют допуск к электромонтажным работам</li>
                <li>Знают все требования ПУЭ и ГОСТ</li>
                <li>Проводят точные расчеты нагрузок и сечений кабелей</li>
                <li>Используют профессиональное оборудование для проверки качества работ</li>
                <li>Предоставляют гарантию на выполненные работы</li>
              </ul>

              <p className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-md leading-relaxed">
                <strong className="text-gray-900">Закажите бесплатный выезд специалиста</strong> для составления сметы и 
                консультации по электромонтажным работам. Мы поможем выбрать оптимальное решение 
                для вашей квартиры с учетом бюджета и пожеланий.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ElectricalWork;