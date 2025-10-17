import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, FileText, Clock, Award } from "lucide-react";

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Гарантия на работы - 1 год",
      description: "Мы уверены в качестве нашей работы и предоставляем гарантию на все виды выполненных работ. В течение года мы бесплатно устраним любые дефекты, возникшие по нашей вине."
    },
    {
      icon: FileText,
      title: "Договор и документы",
      description: "Все отношения закрепляются официальным договором. Вы получаете полный пакет документов: смету, график работ, акты выполненных работ, гарантийные талоны."
    },
    {
      icon: Clock,
      title: "Соблюдение сроков",
      description: "Мы фиксируем сроки выполнения работ в договоре. За каждый день просрочки предусмотрена неустойка. Контролируйте прогресс в реальном времени через мобильное приложение."
    },
    {
      icon: Award,
      title: "Качество материалов",
      description: "Работаем только с проверенными поставщиками. Все материалы имеют сертификаты качества. Предоставляем гарантийные талоны от производителей материалов."
    }
  ];

  const warrantyConditions = [
    {
      title: "Гарантия распространяется на все виды выполненных работ",
      description: "Включая отделку, электрику, сантехнику и другие виды работ"
    },
    {
      title: "Бесплатное устранение дефектов в течение гарантийного срока",
      description: "Все работы по гарантии выполняются за наш счет"
    },
    {
      title: "Выезд мастера в течение 24 часов с момента обращения",
      description: "Оперативно реагируем на все гарантийные случаи"
    },
    {
      title: "Гарантия действует при соблюдении правил эксплуатации",
      description: "Предоставляем инструкции по правильной эксплуатации"
    },
    {
      title: "Гарантийный талон предоставляется после завершения работ",
      description: "Официальный документ с печатью компании"
    }
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Гарантии на ремонт квартир SPB-DSRemont | Гарантия 1 год на все работы</title>
        <meta name="description" content="Официальная гарантия 1 год на все виды ремонтных работ. Договор с фиксированными сроками. Полная ответственность за результат." />
        <meta name="keywords" content="гарантия на ремонт квартиры, гарантия ремонт СПб, договор ремонт, гарантийные обязательства" />
        <link rel="canonical" href="https://spb-dsremont.ru/guarantees" />
        <meta property="og:title" content="Гарантии SPB-DSRemont - 1 год на все работы" />
        <meta property="og:description" content="Комплексные гарантии на ремонт: 1 год на работы, официальный договор." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/guarantees" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Гарантии SPB-DSRemont - 1 год на все работы" />
        <meta name="twitter:description" content="Комплексные гарантии на ремонт: 1 год на работы, официальный договор." />
        <meta name="twitter:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ремонт с гарантией",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SPB-DSRemont"
            },
            "warranty": {
              "@type": "WarrantyPromise",
              "durationOfWarranty": {
                "@type": "QuantitativeValue",
                "value": "1",
                "unitCode": "ANN"
              }
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Гарантии качества
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Мы несем полную ответственность за результат и предоставляем комплексные гарантии 
            на все виды работ
          </p>
        </div>
      </section>

      {/* Main Guarantees */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Conditions */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Условия гарантии
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {warrantyConditions.map((condition, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{condition.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{condition.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Остались вопросы о гарантиях?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подробно расскажем о всех условиях и гарантийных обязательствах
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
            className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Получить консультацию
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Guarantees;