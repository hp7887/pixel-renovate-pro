import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const stats = [
    { value: "156", label: "Отзывов", suffix: "+" },
    { value: "98", label: "Рекомендуют нас", suffix: "%" },
    { value: "500", label: "Завершенных проектов", suffix: "+" },
    { value: "8", label: "Лет на рынке", suffix: "" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Отзывы клиентов о ремонте квартир SPB-DSRemont | 156+ реальных отзывов</title>
        <meta name="description" content="Реальные отзывы клиентов SPB-DSRemont о ремонте квартир в Санкт-Петербурге. Средняя оценка 4.9/5. Более 156 отзывов от довольных клиентов. Читайте мнения о качестве наших работ." />
        <meta name="keywords" content="отзывы о ремонте квартир, отзывы ремонт СПб, отзывы spb-dsremont, рейтинг ремонтной компании" />
        <link rel="canonical" href="https://spb-dsremont.ru/reviews" />
        <meta property="og:title" content="Отзывы клиентов SPB-DSRemont - Рейтинг 4.9/5" />
        <meta property="og:description" content="156+ реальных отзывов о ремонте квартир. 98% клиентов рекомендуют нас своим друзьям." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/reviews" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">
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
                className="text-center bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 hover:border-cyan-200"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}<span className="text-3xl md:text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-base md:text-lg text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <ReviewsSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Станьте нашим следующим довольным клиентом
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта
          </p>
          <Button
            onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
            className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Оставить заявку
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Reviews;