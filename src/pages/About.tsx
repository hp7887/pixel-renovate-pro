import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Качество работ",
      description: "Используем только сертифицированные материалы и современные технологии. Каждый этап работ проходит строгий контроль качества."
    },
    {
      icon: Users,
      title: "Профессиональная команда",
      description: "Наши специалисты имеют многолетний опыт и регулярно проходят обучение. В команде работают дизайнеры, архитекторы и мастера высшей квалификации."
    },
    {
      icon: Clock,
      title: "Соблюдение сроков",
      description: "Фиксируем сроки выполнения работ в договоре. Контролируем процесс на каждом этапе, чтобы сдать объект точно в срок."
    },
    {
      icon: Shield,
      title: "Гарантия 1 год",
      description: "Предоставляем официальную гарантию на все виды выполненных работ. Бесплатно устраняем любые дефекты в течение гарантийного срока."
    }
  ];

  const stats = [
    { value: "8", label: "лет на рынке", suffix: "+" },
    { value: "500", label: "выполненных проектов", suffix: "+" },
    { value: "15000", label: "м² отремонтировано", suffix: "+" },
    { value: "98", label: "довольных клиентов", suffix: "%" }
  ];

  const advantages = [
    "Бесплатный выезд замерщика и консультация",
    "Составление подробной сметы в течение 24 часов",
    "Официальный договор с фиксацией сроков и цены",
    "Онлайн-контроль за ходом работ через мобильное приложение",
    "Закупка материалов по оптовым ценам",
    "Уборка после завершения каждого этапа работ"
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>О компании DigitalSTROY - 8 лет опыта в ремонте квартир в Санкт-Петербурге</title>
        <meta name="description" content="DigitalSTROY - надежная ремонтно-строительная компания в СПб. 8 лет на рынке, 500+ реализованных проектов, профессиональная команда. Узнайте больше о нашем опыте и подходе к работе." />
        <meta name="keywords" content="о компании ремонт, строительная компания СПб, ремонтная компания Санкт-Петербург, профессиональный ремонт" />
        <link rel="canonical" href="https://digitalstroy.ru/about" />
        <meta property="og:title" content="О компании DigitalSTROY - Профессиональный ремонт в СПб" />
        <meta property="og:description" content="8 лет успешной работы на рынке ремонта и отделки квартир в Санкт-Петербурге. Более 500 выполненных проектов." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitalstroy.ru/about" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            О компании DigitalSTROY
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Мы создаем современные и функциональные пространства, в которых приятно жить и работать. 
            За 8 лет работы выполнили более 500 проектов любой сложности.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Наши преимущества
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Готовы начать ваш проект?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут для бесплатной консультации
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

export default About;