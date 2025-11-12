"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Ruler, Calculator, Users, Palette, FileCheck, CheckCircle, Hammer, Home, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LazyImage from "@/components/LazyImage";
import workCalculation from "@/assets/work-calculation-new.jpg";
import workDesign from "@/assets/work-design.jpg";
import workRenovation from "@/assets/work-renovation-updated.jpg";

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
    <section id="work-steps" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-cyan-200/50">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-700 font-semibold text-sm uppercase tracking-wider">
              Наш процесс работы
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              КАК МЫ РАБОТАЕМ
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Прозрачный процесс от первичной консультации до сдачи объекта <br className="hidden md:block" />
            в <span className="font-semibold text-cyan-600">три последовательных этапа</span>
          </p>
        </div>
        
        {/* Work stages */}
        <div className="space-y-20 md:space-y-24">
          {workStages.map((stage, stageIndex) => (
            <div
              key={stageIndex}
              ref={(el) => {
                stageRefs.current[stageIndex] = el;
              }}
              className="relative"
            >
              {/* Connecting line between stages */}
              {stageIndex < workStages.length - 1 && (
                <div className="absolute left-1/2 -bottom-20 md:-bottom-24 transform -translate-x-1/2 z-0">
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-cyan-300 rotate-90 animate-pulse" />
                </div>
              )}

              {/* Stage container */}
              <div className={`transform transition-all duration-700 ${
                visibleStages[stageIndex] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}>
                
                {/* Stage header */}
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-3xl"></div>
                      <span className="text-white font-black text-4xl md:text-5xl relative z-10">{stage.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                      {stage.title}
                    </h3>
                  </div>
                </div>
                
                {/* Stage content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Image section */}
                  <div className={`relative group overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 ${
                    visibleStages[stageIndex] ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <LazyImage
                      src={stageIndex === 0 ? workCalculation : 
                           stageIndex === 1 ? workDesign : 
                           workRenovation}
                      alt={`${stage.title} процесс`}
                      className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px] transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  {/* Steps grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-5">
                    {stage.steps.map((step, stepIndex) => {
                      const IconComponent = step.icon;
                      return (
                        <div 
                          key={stepIndex}
                          className={`relative group transform transition-all duration-700 ${
                            visibleCards[stageIndex]?.[stepIndex]
                              ? 'translate-y-0 opacity-100'
                              : 'translate-y-8 opacity-0'
                          }`}
                          style={{ 
                            transitionDelay: `${stepIndex * 150}ms`
                          }}
                        >
                          {/* Free badge */}
                          {step.isFree && (
                            <div className="absolute -top-3 -right-3 z-20">
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md opacity-75"></div>
                                <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 px-4 py-2 rounded-full shadow-xl">
                                  <div className="flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-white" />
                                    <span className="text-white font-black text-xs tracking-wide whitespace-nowrap">
                                      БЕСПЛАТНО
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-cyan-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <CardContent className="p-5 md:p-6 h-full flex flex-col relative z-10">
                              {/* Icon and title */}
                              <div className="flex items-center gap-4 mb-4">
                                <div className="relative">
                                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-50"></div>
                                  <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-2xl"></div>
                                    <IconComponent className="w-7 h-7 text-white relative z-10" />
                                  </div>
                                </div>
                                
                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight flex-1">
                                  {step.title}
                                </h4>
                              </div>
                              
                              {/* Description */}
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                                {step.description}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 md:mt-24">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white via-cyan-50/50 to-blue-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-cyan-200/50 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-200">
                  <CheckCircle className="w-4 h-4 text-cyan-600" />
                  <span className="text-cyan-700 font-semibold text-sm">Готовы к сотрудничеству</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Готовы начать ваш проект?
                  </span>
                </h3>
                
                <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                  Каждый этап контролируется профессионалами. Получите качественный результат в срок по фиксированной стоимости.
                </p>
                
                <button 
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openContactDialog'));
                  }}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-white font-bold text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span>НАЧАТЬ ПРОЕКТ</span>
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStepsSection;