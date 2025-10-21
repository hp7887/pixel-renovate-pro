import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, Check, Target, TrendingUp, Heart } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/design-studio.jpg";
import historyImage from "@/assets/renovation-process.jpg";

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
    { value: "9", label: "лет на рынке", suffix: "+" },
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
        <title>О компании SPB-DSRemont - 9 лет опыта в ремонте квартир в Санкт-Петербурге</title>
        <meta name="description" content="SPB-DSRemont - надежная ремонтно-строительная компания в СПб. 9 лет на рынке, 500+ реализованных проектов, профессиональная команда. Узнайте больше о нашем опыте и подходе к работе к каждому клиенту." />
        <meta name="keywords" content="о компании ремонт, строительная компания СПб, ремонтная компания Санкт-Петербург, профессиональный ремонт" />
        <link rel="canonical" href="https://spb-dsremont.ru/about" />
        <meta property="og:title" content="О компании SPB-DSRemont - Профессиональный ремонт в СПб" />
        <meta property="og:description" content="9 лет успешной работы на рынке ремонта и отделки квартир в Санкт-Петербурге. Более 500 выполненных проектов." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/about" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="О компании SPB-DSRemont - Профессиональный ремонт в СПб" />
        <meta name="twitter:description" content="9 лет успешной работы на рынке ремонта и отделки квартир в Санкт-Петербурге. Более 500 выполненных проектов." />
        <meta name="twitter:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SPB-DSRemont",
            "description": "Ремонтно-строительная компания в Санкт-Петербурге. Капитальный ремонт квартир под ключ.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Санкт-Петербург",
              "addressCountry": "RU"
            },
            "url": "https://spb-dsremont.ru",
            "telephone": "+7 812 209-98-85",
            "numberOfEmployees": "50",
            "foundingDate": "2016",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "156"
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
              alt="О компании SPB-DSRemont - профессиональная команда дизайнеров и строителей"
              className="w-full h-full object-cover rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent rounded-b-3xl flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    О компании SPB-DSRemont
                  </h1>
                  <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
                    Мы создаем современные и функциональные пространства, в которых приятно жить и работать.
                    За 9 лет работы выполнили более 500 проектов любой сложности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className="text-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-400 animate-fade-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Наша история
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <LazyImage
                src={historyImage}
                alt="История компании SPB-DSRemont - процесс ремонта и команда специалистов"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="prose prose-lg text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
              <p className="mb-6 text-lg">
                Компания SPB-DSRemont основана в 2016 году группой энтузиастов с большим опытом в строительстве и дизайне. С тех пор мы выросли от небольшой бригады до полноценной компании с собственным штатом специалистов.
              </p>
              <p className="mb-6 text-lg">
                За 9 лет мы реализовали более 500 проектов: от косметического ремонта студий до капитального ремонта элитных квартир в центре Санкт-Петербурга. Наш успех основан на внимании к деталям и индивидуальном подходе к каждому клиенту.
              </p>
              <p className="text-lg">
                Сегодня мы - команда из 50+ профессионалов: архитекторов, дизайнеров, инженеров и строителей. Мы постоянно развиваемся, внедряем новые технологии и материалы, чтобы предлагать нашим клиентам лучшие решения на рынке ремонта и отделки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Качество превыше всего</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы никогда не идем на компромисс с качеством материалов и работы. Каждый проект выполняется так, будто это наш собственный дом.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Забота о клиентах</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы строим долгосрочные отношения с каждым клиентом. Ваш комфорт и удовлетворенность результатом - наш главный приоритет.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Постоянное развитие</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы следим за новейшими технологиями и трендами в индустрии, регулярно обучаем команду и внедряем инновационные решения.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Наши преимущества
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div
                  key={`${advantage}-${index}`}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in border border-cyan-100 hover:border-cyan-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className="w-8 h-8 text-cyan-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700 text-lg leading-relaxed">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Готовы начать ваш проект?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут для бесплатной консультации
          </p>
          <Button
            onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
            className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl animate-fade-in"
            aria-label="Получить консультацию"
          >
            Получить консультацию
          </Button>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in">
              <summary className="font-bold text-xl cursor-pointer text-gray-900">Сколько лет на рынке?</summary>
              <p className="text-gray-700 mt-4">9 лет успешной работы в Санкт-Петербурге.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <summary className="font-bold text-xl cursor-pointer text-gray-900">Какая гарантия на работы?</summary>
              <p className="text-gray-700 mt-4">1 год официальной гарантии на все услуги.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <summary className="font-bold text-xl cursor-pointer text-gray-900">Как контролировать ремонт?</summary>
              <p className="text-gray-700 mt-4">Через ежедневные фотоотчеты в личном кабинете.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <summary className="font-bold text-xl cursor-pointer text-gray-900">Работаете ли вы с дизайн-проектами заказчика?</summary>
              <p className="text-gray-700 mt-4">Да, мы можем реализовать как ваш готовый дизайн-проект, так и создать новый с учетом всех ваших пожеланий.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <summary className="font-bold text-xl cursor-pointer text-gray-900">Какие районы СПб обслуживаете?</summary>
              <p className="text-gray-700 mt-4">Мы работаем по всему Санкт-Петербургу и ближайшим пригородам в радиусе 30 км от КАД.</p>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default About;