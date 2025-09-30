"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, Ruler, Presentation, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const workSteps = [
  {
    icon: FileText,
    title: "Заявка",
    description: "Мы проконсультируем Вас и зададим вопросы по ремонту, согласуем дату замеров.",
    isFree: false
  },
  {
    icon: Ruler,
    title: "Замеры",
    description: "Инженер выедет в удобное время и сделает замеры или предоставим инструкцию для самостоятельных замеров.",
    isFree: true
  },
  {
    icon: Calculator,
    title: "Смета",
    description: "Сделаем 3D модель объекта и подготовим смету на работы и материалы под ваш бюджет.",
    isFree: true
  },
  {
    icon: Presentation,
    title: "Презентация",
    description: "Представим готовую смету с детальной разбивкой стоимости работ и материалов.",
    isFree: true
  },
  {
    icon: CheckCircle,
    title: "Согласование",
    description: "Согласуем все детали проекта, внесем корректировки при необходимости.",
    isFree: true
  }
];

const WorkStepsSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(workSteps.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200); // Stagger animation
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="work-steps" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            РАСЧЕТ СТОИМОСТИ РЕМОНТА
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачный процесс расчета стоимости вашего ремонта в 5 простых шагов
          </p>
        </div>
        
        {/* Work steps cards */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
          {workSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`transform transition-all duration-700 ease-out ${
                  visibleCards[index]
                    ? 'translate-x-0 opacity-100'
                    : index % 2 === 0
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <Card className="relative h-full bg-white hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-primary/20">
                  {step.isFree && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      БЕСПЛАТНО
                    </div>
                  )}
                  
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                      {step.description}
                    </p>
                    
                    <div className="mt-4 text-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        {/* Bottom call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы узнать стоимость вашего ремонта?
            </h3>
            <p className="text-gray-600 mb-6">
              Весь процесс расчета займет не более 24 часов. Получите детальную смету с фиксированной ценой.
            </p>
            <button 
              onClick={() => {
                const calculatorSection = document.getElementById('calculator');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              НАЧАТЬ РАСЧЕТ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStepsSection;