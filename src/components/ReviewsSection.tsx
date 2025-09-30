import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Анна Петрова",
    role: "Владелица квартиры",
    rating: 5,
    text: "Невероятно профессиональный подход! Каждый день могла следить за работой через камеры. Все сроки соблюдены, качество превосходное. Рекомендую всем!",
    avatar: "АП",
    project: "3-комн. квартира, 85 м²"
  },
  {
    name: "Михаил Сидоров",
    role: "Владелец загородного дома",
    rating: 5,
    text: "Делали полный ремонт дома. Особенно понравилось мобильное приложение - все документы, общение с бригадой, контроль расходов. Очень удобно!",
    avatar: "МС",
    project: "Загородный дом, 150 м²"
  },
  {
    name: "Екатерина Волкова",
    role: "Дизайнер интерьеров",
    rating: 5,
    text: "Работаю с DigitalStroy уже третий год. Клиенты всегда довольны качеством и сервисом. Особенно ценят онлайн-контроль и прозрачность процессов.",
    avatar: "ЕВ",
    project: "Сотрудничество"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-display font-display font-bold text-foreground mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных клиентов доверили нам свои проекты
          </p>
          
          <div className="flex items-center justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-semibold">4.9 из 5</span>
            <span className="text-muted-foreground ml-2">(543 отзыва)</span>
          </div>
        </div>
        
        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="group hover:shadow-primary transition-smooth animate-scale-in shadow-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${
                        star <= review.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-muted'
                      }`} 
                    />
                  ))}
                </div>
                
                {/* Review text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="gradient-primary text-white font-medium">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                    <div className="text-xs text-primary font-medium">{review.project}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">500+</div>
            <div className="text-muted-foreground">Завершенных проектов</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">4.9</div>
            <div className="text-muted-foreground">Средний рейтинг</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">98%</div>
            <div className="text-muted-foreground">Клиентов рекомендуют нас</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">5 лет</div>
            <div className="text-muted-foreground">Гарантия на работы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;