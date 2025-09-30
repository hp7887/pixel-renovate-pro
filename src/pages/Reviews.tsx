import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import { Star } from "lucide-react";

const Reviews = () => {
  const stats = [
    { value: "4.9", label: "Средняя оценка", suffix: "/5" },
    { value: "156", label: "Отзывов", suffix: "+" },
    { value: "98", label: "Рекомендуют нас", suffix: "%" },
    { value: "500", label: "Завершенных проектов", suffix: "+" }
  ];

  const trustReasons = [
    {
      emoji: "🏆",
      title: "Качество",
      description: "Используем только сертифицированные материалы и современные технологии"
    },
    {
      emoji: "⏱️",
      title: "Сроки",
      description: "Соблюдаем договорные сроки выполнения работ с гарантией"
    },
    {
      emoji: "🛡️",
      title: "Гарантия",
      description: "Даем официальную гарантию 1 год на все виды работ"
    }
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
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed mb-8">
            Мы ценим каждый отзыв и стремимся делать работу так, чтобы вы рекомендовали нас своим друзьям
          </p>
          
          {/* Rating Display */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">4.9</span>
          </div>
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

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Почему нам доверяют?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {trustReasons.map((reason, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-6xl mb-4">{reason.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {reason.description}
                  </p>
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