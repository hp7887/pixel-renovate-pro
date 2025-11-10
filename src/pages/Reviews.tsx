import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Users, ThumbsUp, Clock, Shield } from "lucide-react";
import reviewsHero from "@/assets/project-modern-1.jpg";

const Reviews = () => {
  const [visibleSection, setVisibleSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "156", label: "Отзывов", suffix: "+" },
    { value: "98", label: "Рекомендуют нас", suffix: "%" },
    { value: "500", label: "Завершенных проектов", suffix: "+" },
    { value: "8", label: "Лет на рынке", suffix: "" }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Проверенное качество",
      description: "Каждый проект проходит многоступенчатый контроль качества"
    },
    {
      icon: Users,
      title: "Профессиональная команда",
      description: "Опытные специалисты с подтвержденной квалификацией"
    },
    {
      icon: Clock,
      title: "Соблюдение сроков",
      description: "95% проектов сдаются точно в срок или раньше"
    },
    {
      icon: Shield,
      title: "Официальная гарантия",
      description: "Предоставляем гарантию до 3 лет на все виды работ"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Отзывы клиентов SPB-DSRemont - Рейтинг 4.9/5" />
        <meta name="twitter:description" content="156+ реальных отзывов о ремонте квартир. 98% клиентов рекомендуют нас своим друзьям." />
        <meta name="twitter:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SPB-DSRemont",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "156",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://spb-dsremont.ru"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Отзывы",
                "item": "https://spb-dsremont.ru/reviews"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={reviewsHero}
            alt="Отзывы довольных клиентов SPB-DSRemont"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 fill-yellow-400 animate-pulse" />
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">4.9</span>
                <Star className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 fill-yellow-400 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                Отзывы наших клиентов
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                156+ реальных отзывов от довольных клиентов. 98% рекомендуют нас своим друзьям
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/30 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                  {stat.value}<span className="text-2xl md:text-3xl lg:text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base lg:text-lg text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section 
        ref={sectionRef}
        className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 md:mb-16 transform transition-all duration-700 ${
            visibleSection ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Почему нам доверяют
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Высокие оценки клиентов — результат нашего профессионализма и внимания к деталям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index}
                  className={`border-2 hover:border-primary/50 transition-all duration-500 hover-scale transform ${
                    visibleSection 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы людей, которые доверили нам ремонт своих квартир
            </p>
          </div>
          <ReviewsSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_30%)]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <ThumbsUp className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              Станьте нашим следующим довольным клиентом
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта. 
              Бесплатная консультация и замер уже сегодня!
            </p>
            <Button
              onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
              className="bg-white text-primary hover:bg-background font-bold text-base md:text-lg lg:text-xl px-8 md:px-12 py-5 md:py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Reviews;