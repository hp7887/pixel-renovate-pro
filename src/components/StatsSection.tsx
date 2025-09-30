"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const statistics = [
  {
    icon: TrendingUp,
    number: "5,000+",
    label: "м² отремонтировано",
    description: "Качественный ремонт жилых и коммерческих помещений"
  },
  {
    icon: Users,
    number: "500+",
    label: "проектов",
    description: "Успешно завершенных объектов различной сложности"
  },
  {
    icon: Award,
    number: "8 лет",
    label: "опыта",
    description: "Профессиональной работы в сфере ремонта и строительства"
  },
  {
    icon: Target,
    number: "100%",
    label: "качества",
    description: "Гарантия и страховое покрытие на все виды работ"
  }
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(statistics.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate numbers
            statistics.forEach((stat, index) => {
              const targetNumber = parseInt(stat.number.replace(/[^\d]/g, ''));
              let current = 0;
              const increment = Math.ceil(targetNumber / 50);
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                  current = targetNumber;
                  clearInterval(timer);
                }
                
                setAnimatedStats(prev => {
                  const newStats = [...prev];
                  newStats[index] = current;
                  return newStats;
                });
              }, 50);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num: number, originalFormat: string) => {
    if (originalFormat.includes('+')) {
      return `${num.toLocaleString()}+`;
    }
    if (originalFormat.includes('%')) {
      return `${num}%`;
    }
    if (originalFormat.includes('лет')) {
      return `${num} лет`;
    }
    return num.toLocaleString();
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary/5 via-white to-secondary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши достижения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Цифры, которые говорят о нашем профессионализме и качестве работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index}
                className={`text-center bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {formatNumber(animatedStats[index], stat.number)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {stat.label}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional visual elements */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
          }`}>
            <Award className="w-6 h-6 text-primary mr-3" />
            <span className="text-primary font-semibold">Сертифицированная компания с лицензией</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;