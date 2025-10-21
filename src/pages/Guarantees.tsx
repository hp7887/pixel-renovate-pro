import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, FileText, Clock, Award, CheckCircle, Phone, Calendar, Wrench } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/work-renovation-new.jpg";

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

  const warrantyProcess = [
    {
      icon: Phone,
      title: "Обращение",
      description: "Позвоните нам или оставьте заявку на сайте"
    },
    {
      icon: Calendar,
      title: "Диагностика",
      description: "Выезд мастера в течение 24 часов"
    },
    {
      icon: Wrench,
      title: "Устранение",
      description: "Бесплатное устранение дефекта"
    },
    {
      icon: CheckCircle,
      title: "Приемка",
      description: "Подписание акта выполненных работ"
    }
  ];

  const faqItems = [
    {
      question: "Что входит в гарантию?",
      answer: "Гарантия распространяется на все виды выполненных работ: отделочные работы, электромонтаж, сантехнические работы, установку дверей и окон. Мы бесплатно устраним любые дефекты, возникшие по нашей вине."
    },
    {
      question: "Как воспользоваться гарантией?",
      answer: "Позвоните нам по телефону или оставьте заявку на сайте. Наш специалист приедет к вам в течение 24 часов, проведет диагностику и бесплатно устранит проблему, если она является гарантийным случаем."
    },
    {
      question: "На материалы тоже есть гарантия?",
      answer: "Да, на все материалы предоставляются гарантийные талоны от производителей. Срок гарантии зависит от типа материала и указан в документации."
    },
    {
      question: "Что не входит в гарантию?",
      answer: "Гарантия не распространяется на дефекты, возникшие в результате неправильной эксплуатации, механических повреждений, действий третьих лиц или форс-мажорных обстоятельств."
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
      
      {/* Hero Section with Image */}
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden mb-12 animate-fade-in">
            <LazyImage
              src={heroImage}
              alt="Гарантии качества SPB-DSRemont - надежность и ответственность"
              className="w-full h-full object-cover rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-b-3xl flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Гарантии качества
                  </h1>
                  <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
                    Мы несем полную ответственность за результат и предоставляем комплексные гарантии 
                    на все виды работ. Официальный договор и 1 год гарантии.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
                      <div className="text-3xl font-bold text-white">1 год</div>
                      <div className="text-sm text-white/90">гарантии на работы</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
                      <div className="text-3xl font-bold text-white">24 часа</div>
                      <div className="text-sm text-white/90">время реакции</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-sm text-white/90">ответственность</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Guarantees */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Наши гарантии
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-400 group hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Process */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Как работает гарантия
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {warrantyProcess.map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {index < warrantyProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 z-0"></div>
                  )}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-cyan-600 mb-2">Шаг {index + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Conditions */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Условия гарантии
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {warrantyConditions.map((condition, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
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

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-xl font-bold text-gray-900">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed text-lg">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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