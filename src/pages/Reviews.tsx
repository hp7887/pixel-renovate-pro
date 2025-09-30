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
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/10 via-yellow-50 to-white">
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
            <span className="text-3xl font-bold text-gray-900">4.9</span>
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
                className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}<span className="text-2xl md:text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Почему нам доверяют?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Качество</h3>
                <p className="text-gray-600">
                  Используем только сертифицированные материалы
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Сроки</h3>
                <p className="text-gray-600">
                  Соблюдаем договорные сроки выполнения работ
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Гарантия</h3>
                <p className="text-gray-600">
                  Даем гарантию 5 лет на все виды работ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Reviews;