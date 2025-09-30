"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Ruler, Calculator } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WorkStepsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section 
      id="work-steps" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            1. РАСЧЕТ СТОИМОСТИ РЕМОНТА
          </h2>
        </div>
        
        {/* Content grid */}
        <div className={`max-w-7xl mx-auto transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left side - Worker image */}
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white/70">
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-12 h-12" />
                    </div>
                    <p className="text-lg">Фото специалиста</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Steps grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Заявка - Top left */}
                <Card className="bg-slate-700/50 border-slate-600 backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Заявка</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Мы проконсультируем Вас и зададим вопросы по ремонту, согласуем дату замеров.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Замеры - Top right */}
                <Card className="bg-slate-700/50 border-slate-600 backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 relative">
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    БЕСПЛАТНО
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Замеры</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Инженер выедет в удобное время и сделает замеры или предоставим инструкцию для самостоятельных замеров.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Documents image - Bottom left */}
                <div className="aspect-square bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white/70">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calculator className="w-8 h-8" />
                      </div>
                      <p className="text-sm">Документы</p>
                    </div>
                  </div>
                </div>
                
                {/* Смета - Bottom right */}
                <Card className="bg-slate-700/50 border-slate-600 backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300 relative">
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    БЕСПЛАТНО
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Смета</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Сделаем 3D модель объекта и подготовим смету на работы и материалы под ваш бюджет.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button 
            onClick={() => {
              const calculatorSection = document.getElementById('calculator');
              calculatorSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            УЗНАТЬ СТОИМОСТЬ РЕМОНТА
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkStepsSection;