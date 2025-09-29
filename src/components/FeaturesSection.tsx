import { Shield, Eye, Clock, Award, Smartphone, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "Онлайн-наблюдение",
    description: "Следите за ходом работ в режиме реального времени через веб-камеры"
  },
  {
    icon: Shield,
    title: "Гарантия 5 лет",
    description: "Полная гарантия на все виды работ с бесплатным устранением дефектов"
  },
  {
    icon: Clock,
    title: "Точные сроки",
    description: "Соблюдаем установленные сроки или компенсируем задержку"
  },
  {
    icon: Award,
    title: "Качество премиум",
    description: "Используем только проверенные материалы и современные технологии"
  },
  {
    icon: Smartphone,
    title: "Мобильное приложение",
    description: "Управляйте проектом, общайтесь с бригадой и контролируйте расходы"
  },
  {
    icon: FileText,
    title: "Прозрачная отчетность",
    description: "Подробные отчеты о проделанной работе и использованных материалах"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-display font-display font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современный подход к ремонту с использованием передовых технологий 
            и полным контролем процесса
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-smooth animate-scale-in shadow-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6 group-hover:scale-110 transition-smooth">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-medium shadow-glow">
            <Shield className="h-4 w-4" />
            Лицензия на строительную деятельность
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;