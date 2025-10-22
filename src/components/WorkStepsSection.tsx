"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Ruler, Calculator, Users, Palette, FileCheck, CheckCircle, Hammer, Home } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import workCalculation from "@/assets/work-calculation-new.jpg";
import workDesign from "@/assets/work-design.jpg";
import workRenovation from "@/assets/work-renovation-new.jpg";

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
    <section id="work-steps" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Main section header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight">
            КАК МЫ РАБОТАЕМ
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed font-light">
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
            <div className={`text-center mb-10 md:mb-14 transform transition-all duration-700 ${
              visibleStages[stageIndex] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-2">
                <div className="w-13 h-13 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-2xl md:text-3xl">{stage.number}</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight text-left">
                  {stage.title}
                </h3>
              </div>
            </div>
            
            {/* Stage steps in grid format with image tile */}
            <div className={`max-w-5xl mx-auto transform transition-all duration-1000 delay-300 ${
              visibleStages[stageIndex] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Image tile */}
                <div className="h-56 md:h-64 lg:h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={stageIndex === 0 ? workCalculation : 
                         stageIndex === 1 ? workDesign : 
                         workRenovation}
                    alt={`${stage.title} процесс`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {stage.steps.map((step, stepIndex) => {
                  const IconComponent = step.icon;
                  return (
                    <Card 
                      key={stepIndex}
                      className={`h-56 md:h-64 lg:h-72 bg-white border-gray-200 hover:shadow-2xl hover:border-primary/30 transition-all duration-700 relative transform ${
                        visibleCards[stageIndex]?.[stepIndex]
                          ? 'translate-y-0 opacity-100 scale-100 rotate-0'
                          : 'translate-y-16 opacity-0 scale-90 -rotate-3'
                      }`}
                      style={{ 
                        transitionDelay: `${stepIndex * 150}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {step.isFree && (
                        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-bold z-10 shadow-lg animate-pulse">
                          БЕСПЛАТНО
                        </div>
                      )}
                      
                      <CardContent className="p-4 md:p-5 h-full flex flex-col">
                        {/* Icon and Title row */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-500 ${
                            visibleCards[stageIndex]?.[stepIndex] ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                          }`}
                          style={{ transitionDelay: `${stepIndex * 150 + 100}ms` }}
                          >
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </div>
                          
                          <h4 className={`text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight flex-1 transition-all duration-500 ${
                            visibleCards[stageIndex]?.[stepIndex] ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${stepIndex * 150 + 200}ms` }}
                          >
                            {step.title}
                          </h4>
                        </div>
                        
                        {/* Description */}
                        <p className={`text-gray-600 text-sm md:text-base leading-relaxed flex-1 transition-all duration-500 ${
                          visibleCards[stageIndex]?.[stepIndex] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${stepIndex * 150 + 300}ms` }}
                        >
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
        
        {/* Bottom call to action */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-3xl md:rounded-[2rem] p-8 md:p-12 lg:p-14 max-w-5xl mx-auto border border-primary/10 shadow-xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
              Готовы начать ваш проект?
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Каждый этап контролируется профессионалами. Получите качественный результат в срок по фиксированной стоимости.
            </p>
            <button 
              onClick={() => {
                // Открываем ContactDialog через событие
                window.dispatchEvent(new CustomEvent('openContactDialog'));
              }}
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold text-base md:text-lg lg:text-xl px-8 md:px-12 lg:px-14 py-4 md:py-5 lg:py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto"
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