"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Ruler, Calculator, Users, Palette, FileCheck, CheckCircle, Hammer, Home } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const workStages = [
  {
    number: "1",
    title: "РАСЧЕТ СТОИМОСТИ РЕМОНТА",
    steps: [
      {
        icon: FileText,
        title: "Заявка",
        description: "Проведем детальную консультацию, выясним ваши потребности и пожелания, согласуем удобное время для выезда специалиста.",
        isFree: false
      },
      {
        icon: Ruler,
        title: "Замеры",
        description: "Квалифицированный инженер выполнит точные замеры помещений или предоставит подробную инструкцию для самостоятельного обмера.",
        isFree: true
      },
      {
        icon: Calculator,
        title: "Смета",
        description: "Создадим детальную 3D-модель объекта и составим прозрачную смету на все виды работ и материалы в рамках вашего бюджета.",
        isFree: true
      }
    ]
  },
  {
    number: "2", 
    title: "РАЗРАБОТКА ДИЗАЙН-ПРОЕКТА",
    steps: [
      {
        icon: Users,
        title: "Консультация",
        description: "Команда экспертов: дизайнер интерьеров, архитектор, проектный менеджер, сметчик и технический директор работают над вашим проектом.",
        isFree: false
      },
      {
        icon: Palette,
        title: "Варианты",
        description: "Разработаем несколько концепций дизайна и будем корректировать проект до тех пор, пока результат не понравится вам на 100%.",
        isFree: false
      },
      {
        icon: FileCheck,
        title: "Дизайн-проект",
        description: "Получаете готовый дизайн-проект: планировочные решения, технические чертежи, реалистичные 3D-визуализации интерьера.",
        isFree: false
      }
    ]
  },
  {
    number: "3",
    title: "РЕМОНТ ПОД КЛЮЧ", 
    steps: [
      {
        icon: CheckCircle,
        title: "Договор",
        description: "Заключаем официальный договор с детализированными сметами, четким графиком выполнения работ и удобной схемой платежей.",
        isFree: false
      },
      {
        icon: Hammer,
        title: "Ремонт",
        description: "Отслеживайте ход работ в режиме онлайн через личный кабинет: видеоотчеты, фотографии этапов и подробная отчетность. Двойной контроль качества.",
        isFree: false
      },
      {
        icon: Home,
        title: "Новоселье",
        description: "Организуем вывоз строительного мусора, проведем финальную уборку. Предоставляем официальную гарантию на работы и страховое покрытие.",
        isFree: false
      }
    ]
  }
];

const WorkStepsSection = () => {
  const [visibleStages, setVisibleStages] = useState<boolean[]>(new Array(workStages.length).fill(false));
  const [visibleCards, setVisibleCards] = useState<boolean[][]>(workStages.map(stage => new Array(stage.steps.length).fill(false)));
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stageRefs.current.map((ref, stageIndex) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Show stage title first
              setTimeout(() => {
                setVisibleStages(prev => {
                  const newState = [...prev];
                  newState[stageIndex] = true;
                  return newState;
                });
              }, 100);
              
              // Then show cards with stagger
              workStages[stageIndex].steps.forEach((_, cardIndex) => {
                setTimeout(() => {
                  setVisibleCards(prev => {
                    const newState = prev.map(stage => [...stage]);
                    newState[stageIndex][cardIndex] = true;
                    return newState;
                  });
                }, 300 + cardIndex * 200);
              });
            }
          });
        },
        { threshold: 0.2 }
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
        {/* Main section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            КАК МЫ РАБОТАЕМ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Прозрачный процесс от первичной консультации до сдачи объекта в три последовательных этапа
          </p>
        </div>
        
        {/* Work stages */}
        {workStages.map((stage, stageIndex) => (
          <div
            key={stageIndex}
            ref={(el) => {
              stageRefs.current[stageIndex] = el;
            }}
            className="mb-12 last:mb-0"
          >
            {/* Stage title */}
            <div className={`text-center mb-12 transform transition-all duration-700 ${
              visibleStages[stageIndex] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {stage.number}. {stage.title}
              </h3>
            </div>
            
            {/* Stage steps in 2x2 grid format with image tile */}
            <div className={`max-w-5xl mx-auto transform transition-all duration-1000 delay-300 ${
              visibleStages[stageIndex] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Image tile */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                  <div className="text-center text-primary">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      {stageIndex === 0 ? <Calculator className="w-8 h-8" /> :
                       stageIndex === 1 ? <Palette className="w-8 h-8" /> :
                       <Hammer className="w-8 h-8" />}
                    </div>
                    <p className="text-sm font-medium">
                      {stageIndex === 0 ? 'Расчеты' :
                       stageIndex === 1 ? 'Дизайн' :
                       'Ремонт'}
                    </p>
                  </div>
                </div>
                {stage.steps.map((step, stepIndex) => {
                  const IconComponent = step.icon;
                  return (
                    <Card 
                      key={stepIndex}
                      className={`h-48 bg-white border-gray-200 hover:shadow-xl transition-all duration-300 relative transform ${
                        visibleCards[stageIndex]?.[stepIndex]
                          ? 'translate-y-0 opacity-100 scale-100'
                          : 'translate-y-12 opacity-0 scale-95'
                      }`}
                      style={{ animationDelay: `${stepIndex * 200}ms` }}
                    >
                      {step.isFree && (
                        <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                          БЕСПЛАТНО
                        </div>
                      )}
                      
                      <CardContent className="p-4 h-full flex flex-col justify-center text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h4>
                        
                        <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
        
        {/* Bottom call to action */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Готовы начать ваш проект?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Каждый этап контролируется профессионалами. Получите качественный результат в срок по фиксированной стоимости.
            </p>
            <button 
              onClick={() => {
                const calculatorSection = document.getElementById('calculator');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              НАЧАТЬ ПРОЕКТ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStepsSection;