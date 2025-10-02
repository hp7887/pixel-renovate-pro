import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react"; // Добавлено: для consistency с предыдущими страницами
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
        {/* Добавлено для SEO: Open Graph и Twitter Cards */}
        <meta property="og:title" content="Электромонтажные работы в Санкт-Петербурге | Профессиональный монтаж электрики под ключ" />
        <meta property="og:description" content="Электромонтажные работы в СПб: полная замена проводки, установка электрощитов, монтаж розеток и выключателей. Опытные электрики, гарантия качества, доступные цены." />
        <meta property="og:url" content="https://spb-dsremont.ru/services/electrical-work" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={electricalHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Электромонтажные работы в Санкт-Петербурге | Профессиональный монтаж электрики под ключ" />
        <meta name="twitter:description" content="Электромонтажные работы в СПб: полная замена проводки, установка электрощитов, монтаж розеток и выключателей. Опытные электрики, гарантия качества, доступные цены." />
        <meta name="twitter:image" content={electricalHero} />
        {/* Добавлено для SEO: Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Электромонтажные работы под ключ",
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
              "name": "Варианты электромонтажа",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Базовый", "offers": { "@type": "Offer", "price": "2500", "priceCurrency": "RUB", "unitCode": "MTK" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Стандартный", "offers": { "@type": "Offer", "price": "3500", "priceCurrency": "RUB", "unitCode": "MTK" } } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Премиум", "offers": { "@type": "Offer", "price": "5000", "priceCurrency": "RUB", "unitCode": "MTK" } } }
              ]
            }
          })}
        </script>
      </Helmet>
     
      <Header />
     
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <LazyImage
            src={electricalHero}
            alt="Профессиональные электромонтажные работы в квартире"
            className="w-full h-full object-cover"
            fallbackSrc="/placeholder.jpg"  // Добавлено: fallback
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
                  aria-label="Заказать бесплатный расчет"  // Добавлено: доступность
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
                    <li key={`${item}-${index}`} className="flex items-start">  // Добавлено: unique key
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mr-2" aria-hidden="true" />  // Добавлено: Check для consistency
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <LazyImage
                  src={electricalInstallation}
                  alt="Процесс электромонтажных работ"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                  fallbackSrc="/placeholder.jpg"  // Добавлено: fallback
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
              {[
                { title: "Опытные электрики", desc: "Все наши специалисты имеют допуск к электромонтажным работам и опыт более 10 лет" },
                { title: "Качественные материалы", desc: "Используем только сертифицированную продукцию от ведущих производителей (ABB, Legrand, Schneider Electric)" },
                { title: "Соблюдение норм", desc: "Работаем строго по ПУЭ (Правила устройства электроустановок) и ГОСТ" },
                { title: "Гарантия 3 года", desc: "Даем официальную гарантию на все виды электромонтажных работ" }
              ].map((item, index) => (
                <div key={`${item.title}-${index}`} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">  // Добавлено: unique key
                  <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
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
              {[
                { title: "1. Проектирование и расчет", desc: "Составляем схему электроснабжения, рассчитываем необходимую мощность, определяем количество линий и точек подключения. Учитываем все пожелания заказчика и современные стандарты безопасности." },
                { title: "2. Подготовительные работы", desc: "Демонтируем старую проводку (при необходимости), штробим стены под кабель-каналы, подготавливаем места для установки розеток, выключателей и распределительных коробок." },
                { title: "3. Прокладка кабельных линий", desc: "Прокладываем кабели согласно проекту, устанавливаем распределительные коробки, подрозетники и подготавливаем места под электрощит. Все работы выполняются с соблюдением норм ПУЭ." },
                { title: "4. Сборка и монтаж электрощита", desc: "Устанавливаем электрощит, монтируем автоматические выключатели, УЗО, дифавтоматы. Производим коммутацию всех линий согласно схеме электроснабжения." },
                { title: "5. Установка розеток и выключателей", desc: "Монтируем розетки, выключатели, подключаем осветительные приборы. Проверяем правильность подключения и наличие заземления." },
                { title: "6. Проверка и испытания", desc: "Проводим измерение сопротивления изоляции, проверяем работоспособность всех линий, тестируем автоматы защиты и УЗО. Составляем акт приемки работ." }
              ].map((step, index) => (
                <div key={`${step.title}-${index}`} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">  // Добавлено: unique key
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
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
                  {[
                    "Освещение — 1,5 мм²",
                    "Розетки — 2,5 мм²",
                    "Электроплита — от 6 мм²",
                    "Кондиционер — от 4 мм²"
                  ].map((item, index) => (
                    <li key={`${item}-${index}`}>• {item}</li>  // Добавлено: unique key
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Защита и безопасность</h3>
                <p className="text-gray-600 mb-4">
                  Обязательная установка защитных устройств предотвращает аварийные ситуации и обеспечивает
                  безопасность жильцов.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Автоматические выключатели на каждую линию",
                    "УЗО для защиты от утечки тока",
                    "Заземление всех электроприборов",
                    "Дифавтоматы в мокрых зонах"
                  ].map((item, index) => (
                    <li key={`${item}-${index}`}>• {item}</li>  // Добавлено: unique key
                  ))}
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
                  {[
                    "Замена проводки на медную",
                    "Установка простого электрощита",
                    "Монтаж розеток и выключателей",
                    "Базовая система освещения"
                  ].map((item, index) => (
                    <li key={`${item}-${index}`} className="flex items-start">  // Добавлено: unique key
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-lg transform scale-105">
                <div className="bg-primary text-white text-center py-1 px-3 rounded-full text-sm inline-block mb-2">
                  Популярный
                </div>
                <h3 className="text-xl font-bold mb-2">Стандартный</h3>
                <p className="text-3xl font-bold text-primary mb-4">от 3 500 ₽/м²</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Все из базового пакета",
                    "Установка УЗО и дифавтоматов",
                    "Современная фурнитура (Legrand, ABB)",
                    "Точечное освещение",
                    "Проектирование электросети"
                  ].map((item, index) => (
                    <li key={`${item}-${index}`} className="flex items-start">  // Добавлено: unique key
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2">Премиум</h3>
                <p className="text-3xl font-bold text-primary mb-4">от 5 000 ₽/м²</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Все из стандартного пакета",
                    "Система 'умный дом'",
                    "Премиальная фурнитура (Gira, Jung)",
                    "Дизайнерское освещение",
                    "Дополнительные системы безопасности"
                  ].map((item, index) => (
                    <li key={`${item}-${index}`} className="flex items-start">  // Добавлено: unique key
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
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
              aria-label="Заказать расчет стоимости"  // Добавлено: доступность
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
                {[
                  "Возраст проводки более 20-25 лет",
                  "Частое срабатывание автоматов защиты",
                  "Искрение в розетках и выключателях",
                  "Запах горелой изоляции",
                  "Потемнение розеток или выключателей",
                  "Увеличение количества электроприборов в квартире"
                ].map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>  // Добавлено: unique key
                ))}
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
                {[
                  "Освещение (отдельные линии для разных комнат)",
                  "Розетки жилых комнат",
                  "Розетки кухни",
                  "Розетки ванной комнаты (через УЗО или дифавтомат)",
                  "Мощные потребители (электроплита, стиральная машина, кондиционер) — отдельные линии"
                ].map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>  // Добавлено: unique key
                ))}
              </ul>
              <h3 className="text-2xl font-bold mt-8 mb-4">
                Выбор материалов для электромонтажа
              </h3>
             
              <p>
                Качество материалов напрямую влияет на безопасность и долговечность электросети.
                Мы рекомендуем использовать:
              </p>
             
              <ul>
                {[
                  "Медный кабель с маркировкой ВВГнг-LS (негорючий, с пониженным дымовыделением)",
                  "Автоматические выключатели и УЗО от известных производителей (ABB, Schneider Electric, Legrand)",
                  "Качественные розетки и выключатели с заземлением",
                  "Металлические подрозетники для бетонных стен"
                ].map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>  // Добавлено: unique key
                ))}
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
                {[
                  "Имеют допуск к электромонтажным работам",
                  "Знают все требования ПУЭ и ГОСТ",
                  "Проводят точные расчеты нагрузок и сечений кабелей",
                  "Используют профессиональное оборудование для проверки качества работ",
                  "Предоставляют гарантию на выполненные работы"
                ].map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>  // Добавлено: unique key
                ))}
              </ul>
              <p className="mt-8 p-6 bg-yellow-50 border-l-4 border-primary rounded">
                <strong>Закажите бесплатный выезд специалиста</strong> для составления сметы и
                консультации по электромонтажным работам. Мы поможем выбрать оптимальное решение
                для вашей квартиры с учетом бюджета и пожеланий.
              </p>
            </div>
          </div>
        </section>
        {/* Добавлено: FAQ для контента/SEO */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Часто задаваемые вопросы
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-xl cursor-pointer">Сколько стоит электромонтаж?</summary>
                <p className="mt-2 text-gray-600">От 2 500 ₽/м², в зависимости от пакета и сложности.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-xl cursor-pointer">Как долго длится работа?</summary>
                <p className="mt-2 text-gray-600">Зависит от объема, но обычно 1-2 недели для квартиры.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-xl cursor-pointer">Даете ли гарантию?</summary>
                <p className="mt-2 text-gray-600">Да, 3 года на все работы.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
     
      <Footer />
    </>
  );
};
export default ElectricalWork;