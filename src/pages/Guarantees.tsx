import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, FileText, Clock, Award } from "lucide-react";

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Гарантия на работы - 5 лет",
      description: "Мы уверены в качестве нашей работы и предоставляем расширенную гарантию на все виды выполненных работ. В течение 5 лет мы бесплатно устраним любые дефекты, возникшие по нашей вине."
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
    "Гарантия распространяется на все виды выполненных работ",
    "Бесплатное устранение дефектов в течение гарантийного срока",
    "Выезд мастера в течение 24 часов с момента обращения",
    "Гарантия действует при соблюдении правил эксплуатации",
    "Гарантийный талон предоставляется после завершения работ"
  ];

  const insuranceCases = [
    {
      title: "Страхование объекта",
      description: "Ваш объект застрахован от повреждений на время проведения работ на сумму до 5 млн рублей"
    },
    {
      title: "Страхование ответственности",
      description: "Гражданская ответственность нашей компании застрахована на сумму до 10 млн рублей"
    },
    {
      title: "Защита от рисков",
      description: "В случае форс-мажора вы получите полную компенсацию согласно договору страхования"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/10 via-yellow-50 to-white">
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center mb-6">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Conditions */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Условия гарантии
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg">
              <ul className="space-y-4">
                {warrantyConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 text-lg">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Страхование
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {insuranceCases.map((insurance, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary/5 to-yellow-50 rounded-xl p-6 border-l-4 border-primary"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{insurance.title}</h3>
                <p className="text-gray-600">{insurance.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Остались вопросы о гарантиях?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подробно расскажем о всех условиях и гарантийных обязательствах
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Guarantees;