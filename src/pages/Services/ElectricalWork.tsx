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
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <LazyImage
            src={electricalHero}
            alt="Профессиональные электромонтажные работы в квартире"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Электромонтажные работы в Санкт-Петербурге
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  Полный комплекс услуг по монтажу электрики под ключ от опытных специалистов
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                  onClick={handleOrderClick}
                >
                  Заказать бесплатный расчет
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Что включают электромонтажные работы?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Основные виды работ</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Полная замена электропроводки в квартире или доме</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Проектирование и монтаж электрической сети</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Установка и подключение электрощитов, автоматов защиты</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Монтаж розеток, выключателей, распределительных коробок</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Прокладка кабельных линий (открытая и скрытая проводка)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Монтаж системы освещения (точечные светильники, люстры, подсветка)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Установка системы "умный дом"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span>Монтаж заземления и УЗО</span>
                  </li>
                </ul>
              </div>

              <div>
                <LazyImage
                  src={electricalInstallation}
                  alt="Процесс электромонтажных работ"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-primary p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Важно знать!</h4>
              <p className="text-gray-700">
                Электромонтажные работы должны выполняться только квалифицированными специалистами с допуском. 
                Неправильный монтаж электрики может привести к короткому замыканию, пожару и поражению электрическим током.
              </p>
            </div>
          </div>
        </section>

        {/* Our Advantages */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Наши преимущества
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">Опытные электрики</h3>
                <p className="text-gray-600">
                  Все наши специалисты имеют допуск к электромонтажным работам и опыт более 10 лет
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">Качественные материалы</h3>
                <p className="text-gray-600">
                  Используем только сертифицированную продукцию от ведущих производителей (ABB, Legrand, Schneider Electric)
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">Соблюдение норм</h3>
                <p className="text-gray-600">
                  Работаем строго по ПУЭ (Правила устройства электроустановок) и ГОСТ
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">Гарантия 3 года</h3>
                <p className="text-gray-600">
                  Даем официальную гарантию на все виды электромонтажных работ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Этапы электромонтажных работ
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">1. Проектирование и расчет</h3>
                <p className="text-gray-600">
                  Составляем схему электроснабжения, рассчитываем необходимую мощность, определяем количество линий и точек подключения. 
                  Учитываем все пожелания заказчика и современные стандарты безопасности.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">2. Подготовительные работы</h3>
                <p className="text-gray-600">
                  Демонтируем старую проводку (при необходимости), штробим стены под кабель-каналы, 
                  подготавливаем места для установки розеток, выключателей и распределительных коробок.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">3. Прокладка кабельных линий</h3>
                <p className="text-gray-600">
                  Прокладываем кабели согласно проекту, устанавливаем распределительные коробки, 
                  подрозетники и подготавливаем места под электрощит. Все работы выполняются с соблюдением норм ПУЭ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">4. Сборка и монтаж электрощита</h3>
                <p className="text-gray-600">
                  Устанавливаем электрощит, монтируем автоматические выключатели, УЗО, дифавтоматы. 
                  Производим коммутацию всех линий согласно схеме электроснабжения.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">5. Установка розеток и выключателей</h3>
                <p className="text-gray-600">
                  Монтируем розетки, выключатели, подключаем осветительные приборы. 
                  Проверяем правильность подключения и наличие заземления.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">6. Проверка и испытания</h3>
                <p className="text-gray-600">
                  Проводим измерение сопротивления изоляции, проверяем работоспособность всех линий, 
                  тестируем автоматы защиты и УЗО. Составляем акт приемки работ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Considerations */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Важные аспекты электромонтажа
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Выбор сечения кабеля</h3>
                <p className="text-gray-600 mb-4">
                  Правильный расчет сечения провода — основа безопасной электросети. Мы учитываем мощность 
                  подключаемых приборов и длину линии для каждой группы потребителей.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Освещение — 1,5 мм²</li>
                  <li>• Розетки — 2,5 мм²</li>
                  <li>• Электроплита — от 6 мм²</li>
                  <li>• Кондиционер — от 4 мм²</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Защита и безопасность</h3>
                <p className="text-gray-600 mb-4">
                  Обязательная установка защитных устройств предотвращает аварийные ситуации и обеспечивает 
                  безопасность жильцов.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Автоматические выключатели на каждую линию</li>
                  <li>• УЗО для защиты от утечки тока</li>
                  <li>• Заземление всех электроприборов</li>
                  <li>• Дифавтоматы в мокрых зонах</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Особенности старых домов</h3>
                <p className="text-gray-600">
                  В старых домах Санкт-Петербурга часто отсутствует заземление, а проводка алюминиевая. 
                  Требуется полная замена на медный кабель с современными системами защиты и заземлением 
                  через общий стояк или местный контур.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Современные решения</h3>
                <p className="text-gray-600">
                  Предлагаем установку систем "умный дом", диммеров, датчиков движения, 
                  таймеров и других современных устройств для комфорта и экономии электроэнергии.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Стоимость электромонтажных работ
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2">Базовый</h3>
                <p className="text-3xl font-bold text-primary mb-4">от 2 500 ₽/м²</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Замена проводки на медную</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Установка простого электрощита</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Монтаж розеток и выключателей</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Базовая система освещения</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-lg transform scale-105">
                <div className="bg-primary text-white text-center py-1 px-3 rounded-full text-sm inline-block mb-2">
                  Популярный
                </div>
                <h3 className="text-xl font-bold mb-2">Стандартный</h3>
                <p className="text-3xl font-bold text-primary mb-4">от 3 500 ₽/м²</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Все из базового пакета</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Установка УЗО и дифавтоматов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Современная фурнитура (Legrand, ABB)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Точечное освещение</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Проектирование электросети</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2">Премиум</h3>
                <p className="text-3xl font-bold text-primary mb-4">от 5 000 ₽/м²</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Все из стандартного пакета</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Система "умный дом"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Премиальная фурнитура (Gira, Jung)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Дизайнерское освещение</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Дополнительные системы безопасности</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-3 text-center">Специальное предложение</h3>
              <p className="text-center text-gray-700">
                При заказе комплексного ремонта квартиры с электромонтажными работами — 
                <span className="font-bold text-primary"> скидка 15% на электрику!</span>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Доверьте электромонтаж профессионалам
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Получите бесплатную консультацию и точный расчет стоимости электромонтажных работ
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              onClick={handleOrderClick}
            >
              Заказать расчет стоимости
            </Button>
          </div>
        </section>

        {/* SEO Article */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">
                Электромонтажные работы в квартире: что нужно знать
              </h2>
              
              <p>
                Электромонтажные работы — это комплекс мероприятий по прокладке электропроводки, 
                установке электрооборудования и подключению электроприборов. Качественно выполненный 
                электромонтаж — это основа безопасности и комфорта в вашей квартире.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Когда необходима замена электропроводки?
              </h3>
              
              <p>
                В старых домах Санкт-Петербурга, построенных в советское время, электропроводка 
                часто не соответствует современным требованиям. Алюминиевый провод со временем 
                окисляется и теряет свои свойства, что может привести к перегреву и пожару.
              </p>

              <p>
                Признаки того, что пора менять проводку:
              </p>
              
              <ul>
                <li>Возраст проводки более 20-25 лет</li>
                <li>Частое срабатывание автоматов защиты</li>
                <li>Искрение в розетках и выключателях</li>
                <li>Запах горелой изоляции</li>
                <li>Потемнение розеток или выключателей</li>
                <li>Увеличение количества электроприборов в квартире</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Планирование электросети в квартире
              </h3>
              
              <p>
                Перед началом электромонтажных работ важно составить подробный план электроснабжения. 
                Необходимо определить расположение розеток, выключателей, светильников, 
                учесть мощность электроприборов и разделить потребителей на группы.
              </p>

              <p>
                Современные стандарты рекомендуют разделение на следующие группы:
              </p>
              
              <ul>
                <li>Освещение (отдельные линии для разных комнат)</li>
                <li>Розетки жилых комнат</li>
                <li>Розетки кухни</li>
                <li>Розетки ванной комнаты (через УЗО или дифавтомат)</li>
                <li>Мощные потребители (электроплита, стиральная машина, кондиционер) — отдельные линии</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Выбор материалов для электромонтажа
              </h3>
              
              <p>
                Качество материалов напрямую влияет на безопасность и долговечность электросети. 
                Мы рекомендуем использовать:
              </p>
              
              <ul>
                <li>Медный кабель с маркировкой ВВГнг-LS (негорючий, с пониженным дымовыделением)</li>
                <li>Автоматические выключатели и УЗО от известных производителей (ABB, Schneider Electric, Legrand)</li>
                <li>Качественные розетки и выключатели с заземлением</li>
                <li>Металлические подрозетники для бетонных стен</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Почему важно доверить работу профессионалам?
              </h3>
              
              <p>
                Электромонтажные работы требуют глубоких знаний и опыта. Ошибки в электромонтаже 
                могут привести к серьезным последствиям: от выхода из строя дорогой техники до пожара.
              </p>

              <p>
                Наши специалисты:
              </p>
              
              <ul>
                <li>Имеют допуск к электромонтажным работам</li>
                <li>Знают все требования ПУЭ и ГОСТ</li>
                <li>Проводят точные расчеты нагрузок и сечений кабелей</li>
                <li>Используют профессиональное оборудование для проверки качества работ</li>
                <li>Предоставляют гарантию на выполненные работы</li>
              </ul>

              <p className="mt-8 p-6 bg-yellow-50 border-l-4 border-primary rounded">
                <strong>Закажите бесплатный выезд специалиста</strong> для составления сметы и 
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
