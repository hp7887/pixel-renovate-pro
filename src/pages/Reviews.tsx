import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";

const Reviews = () => {
  const stats = [
    { value: "156", label: "Отзывов", suffix: "+" },
    { value: "98", label: "Рекомендуют нас", suffix: "%" },
    { value: "500", label: "Завершенных проектов", suffix: "+" },
    { value: "8", label: "Лет на рынке", suffix: "" }
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Отзывы клиентов о ремонте квартир DigitalSTROY | 156+ реальных отзывов</title>
        <meta name="description" content="Реальные отзывы клиентов DigitalSTROY о ремонте квартир в Санкт-Петербурге. Средняя оценка 4.9/5. Более 156 отзывов от довольных клиентов. Читайте мнения о качестве наших работ." />
        <meta name="keywords" content="отзывы о ремонте квартир, отзывы ремонт СПб, отзывы digitalstroy, рейтинг ремонтной компании" />
        <link rel="canonical" href="https://digitalstroy.ru/reviews" />
        <meta property="og:title" content="Отзывы клиентов DigitalSTROY - Рейтинг 4.9/5" />
        <meta property="og:description" content="156+ реальных отзывов о ремонте квартир. 98% клиентов рекомендуют нас своим друзьям." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitalstroy.ru/reviews" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Отзывы наших клиентов
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Мы ценим каждый отзыв и стремимся делать работу так, чтобы вы рекомендовали нас своим друзьям
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}<span className="text-2xl md:text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Станьте нашим следующим довольным клиентом
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
            className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Оставить заявку
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Reviews;