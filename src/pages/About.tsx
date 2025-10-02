import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, Check } from "lucide-react";  // Добавлено: Check для consistency
import LazyImage from "@/components/LazyImage";  // Добавлено: для изображений
import companyTeam from "@/assets/company-team.jpg";  // Добавлено: предполагаемое изображение команды
import companyOffice from "@/assets/company-office.jpg";  // Добавлено: предполагаемое изображение офиса

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
      title: "Гарантия 3 года",  // Обновлено: на 3 года для consistency с другими страницами
      description: "Предоставляем официальную гарантию на все виды выполненных работ. Бесплатно устраняем любые дефекты в течение гарантийного срока."
    }
  ];
  const stats = [
    { value: "9", label: "лет на рынке", suffix: "+" },  // Обновлено: с 8 на 9 (учитывая 2025 год)
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
        <title>О компании SPB-DSRemont - 9 лет опыта в ремонте квартир в Санкт-Петербурге</title>  // Обновлено: 9 лет
        <meta name="description" content="SPB-DSRemont - надежная ремонтно-строительная компания в СПб. 9 лет на рынке, 500+ реализованных проектов, профессиональная команда. Узнайте больше о нашем опыте и подходе к работе к каждому клиенту." />
        <meta name="keywords" content="о компании ремонт, строительная компания СПб, ремонтная компания Санкт-Петербург, профессиональный ремонт" />
        <link rel="canonical" href="https://spb-dsremont.ru/about" />
        <meta property="og:title" content="О компании SPB-DSRemont - Профессиональный ремонт в СПб" />
        <meta property="og:description" content="9 лет успешной работы на рынке ремонта и отделки квартир в Санкт-Петербурге. Более 500 выполненных проектов." />  // Обновлено: 9 лет
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/about" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        {/* Добавлено для SEO: Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="О компании SPB-DSRemont - Профессиональный ремонт в СПб" />
        <meta name="twitter:description" content="9 лет успешной работы на рынке ремонта и отделки квартир в Санкт-Петербурге. Более 500 выполненных проектов." />
        <meta name="twitter:image" content="https://spb-dsremont.ru/og-image.jpg" />
        {/* Добавлено для SEO: Schema.org JSON-LD */}
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
            "numberOfEmployees": "50",  // Примерное значение
            "foundingDate": "2016"  // На основе 9 лет в 2025
          })}
        </script>
      </Helmet>
      <Header />
     
      {/* Hero Section - Улучшено: добавлено изображение */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-white relative">
        <div className="absolute inset-0 opacity-20">
          <LazyImage
            src={companyOffice}
            alt="Офис компании SPB-DSRemont"
            className="w-full h-full object-cover"
            fallbackSrc="/placeholder.jpg"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            О компании SPB-DSRemont
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Мы создаем современные и функциональные пространства, в которых приятно жить и работать.
            За 9 лет работы выполнили более 500 проектов любой сложности.
          </p>
        </div>
      </section>
      {/* Stats Section - Улучшено: добавлены анимации или hover эффекты */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className="text-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                key={`${feature.title}-${index}`}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-400"
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
      {/* Добавлено: Раздел "Наша история" для большего контента */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Наша история
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              Компания SPB-DSRemont основана в 2016 году группой энтузиастов с большим опытом в строительстве и дизайне. С тех пор мы выросли от небольшой бригады до полноценной компании с собственным штатом специалистов.
            </p>
            <p className="mb-6">
              За 9 лет мы реализовали более 500 проектов: от косметического ремонта студий до капитального ремонта элитных квартир в центре Санкт-Петербурга. Наш успех основан на внимании к деталям и индивидуальном подходе к каждому клиенту.
            </p>
            <LazyImage
              src={companyTeam}
              alt="Команда SPB-DSRemont"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl my-8"
              fallbackSrc="/placeholder.jpg"
            />
          </div>
        </div>
      </section>
      {/* Advantages Section - Улучшено: с Check иконками */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Наши преимущества
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div
                  key={`${advantage}-${index}`}
                  className="flex items-start gap-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <Check className="w-8 h-8 text-cyan-600 flex-shrink-0" aria-hidden="true" />  // Добавлено: Check иконка
                  <span className="text-gray-700 text-lg leading-relaxed">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section - Улучшено: с градиентом на кнопке */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Готовы начать ваш проект?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут для бесплатной консультации
          </p>
          <Button
            onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
            className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            aria-label="Получить консультацию"  // Добавлено: доступность
          >
            Получить консультацию
          </Button>
        </div>
      </section>
      {/* Добавлено: Раздел FAQ */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-2xl shadow-md">
              <summary className="font-bold text-xl cursor-pointer text-gray-900">Сколько лет на рынке?</summary>
              <p className="text-gray-700 mt-4">9 лет успешной работы в Санкт-Петербурге.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-md">
              <summary className="font-bold text-xl cursor-pointer text-gray-900">Какая гарантия на работы?</summary>
              <p className="text-gray-700 mt-4">3 года официальной гарантии на все услуги.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-md">
              <summary className="font-bold text-xl cursor-pointer text-gray-900">Как контролировать ремонт?</summary>
              <p className="text-gray-700 mt-4">Через ежедневные фотоотчеты в личном кабинете.</p>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default About;