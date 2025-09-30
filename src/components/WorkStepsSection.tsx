"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, Ruler, Palette, Users, CheckCircle, FileCheck, Hammer, Home } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const workStages = [
  {
    number: "1",
    title: "РАСЧЕТ СТОИМОСТИ РЕМОНТА",
    steps: [
      {
        icon: FileText,
        title: "Заявка",
        description: "Проведем консультацию и зададим ключевые вопросы по вашему ремонту, согласуем удобное время для замеров."
      },
      {
        icon: Ruler,
        title: "Замеры",
        description: "Инженер приедет в удобное время для точных замеров или предоставим детальную инструкцию для самостоятельного обмера."
      },
      {
        icon: Calculator,
        title: "Смета",
        description: "Создадим 3D-модель вашего объекта и подготовим детальную смету на все работы и материалы в рамках вашего бюджета."
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
        description: "Команда профессионалов: дизайнер, архитектор, проектный менеджер, сметчик и технический директор работают над вашим проектом."
      },
      {
        icon: Palette,
        title: "Варианты",
        description: "Предложим несколько концепций и будем дорабатывать до идеального результата, учитывая все ваши пожелания и предпочтения."
      },
      {
        icon: FileCheck,
        title: "Дизайн-проект",
        description: "Получаете полный дизайн-проект с планировочными решениями, рабочими чертежами и реалистичными 3D-визуализациями."
      }
    ]
  },
  {
    number: "3",
    title: "РЕМОНТ ПОД КЛЮЧ",
    steps: [
      {
        icon: FileCheck,
        title: "Договор",
        description: "Заключаем официальный договор с детальными сметами, четким графиком выполнения работ и удобной схемой платежей."
      },
      {
        icon: Hammer,
        title: "Ремонт",
        description: "Контролируйте процесс через личный кабинет: видеоотчеты, фотографии этапов и подробные отчеты. Двойной технический контроль качества."
      },
      {
        icon: Home,
        title: "Новоселье",
        description: "Вывозим строительный мусор, проводим финальную уборку. Предоставляем гарантию на все работы и страховое покрытие."
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
    <section id="work-steps" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            КАК МЫ РАБОТАЕМ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Прозрачный процесс от первого звонка до новоселья в три этапа с полным контролем качества
          </p>
        </div>
        
        {/* Work stages */}
        {workStages.map((stage, stageIndex) => (
          <div
            key={stageIndex}
            ref={(el) => {
              stageRefs.current[stageIndex] = el;
            }}
            className="mb-20 last:mb-0"
          >
            {/* Stage title */}
            <div className={`text-center mb-12 transform transition-all duration-700 ${
              visibleStages[stageIndex] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 mb-4">
                <span className="text-primary font-bold text-lg mr-3">{stage.number}</span>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {stage.title}
                </h3>
              </div>
            </div>
            
            {/* Stage steps */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stage.steps.map((step, stepIndex) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={stepIndex}
                    className={`transform transition-all duration-700 ease-out ${
                      visibleCards[stageIndex]?.[stepIndex]
                        ? 'translate-y-0 opacity-100 scale-100'
                        : 'translate-y-12 opacity-0 scale-95'
                    }`}
                  >
                    <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/20 group">
                      <CardContent className="p-8 text-center h-full flex flex-col">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-10 h-10 text-primary" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          {step.title}
                        </h4>
                        
                        <p className="text-gray-600 leading-relaxed flex-grow">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        
        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Готовы начать ваш идеальный ремонт?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Каждый этап контролируется нашими специалистами. Вы получаете качественный результат в срок и по фиксированной цене.
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