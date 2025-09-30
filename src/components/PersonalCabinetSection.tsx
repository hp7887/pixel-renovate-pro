"use client";

import { Video, FileText, MessageCircle, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import appScreen1 from "@/assets/app-screen-1.jpg";
import appScreen2 from "@/assets/app-screen-2.jpg";
import appScreen3 from "@/assets/app-screen-3.jpg";

const cabinetFeatures = [
  {
    icon: Video,
    title: "Видеонаблюдение 24/7",
    description: "Смотрите процесс ремонта в реальном времени. Камеры установлены во всех комнатах. Записи сохраняются в личном кабинете."
  },
  {
    icon: FileText,
    title: "Все документы в одном месте",
    description: "Дизайн-проект, сметы, план-график работ, отчеты прораба, акты выполненных работ - все доступно онлайн."
  },
  {
    icon: BarChart3,
    title: "Контроль бюджета",
    description: "Следите за расходами в режиме реального времени. Прозрачная система платежей. Оплата только после выполнения этапов."
  },
  {
    icon: MessageCircle,
    title: "Быстрая связь",
    description: "Мгновенная связь с прорабом, дизайнером и техническим директором через встроенный чат."
  }
];

const PersonalCabinetSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const appScreens = [appScreen1, appScreen2, appScreen3];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % appScreens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="personal-cabinet"
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-teal-800 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left side - Main content */}
          <div className={`flex-1 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight uppercase tracking-wide">
              Мобильное приложение
            </h2>
            
            <p className="text-base md:text-lg text-white/80 mb-8 md:mb-12 leading-relaxed max-w-xl">
              Для вашего удобства мы разработали приложение, которое позволит вам в режиме онлайн отслеживать весь процесс ремонта и контролировать все расходы.
            </p>
            
            {/* Features in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {cabinetFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <h3 className="font-bold text-white mb-2 md:mb-3 text-lg md:text-xl">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Phone mockup in separate segment */}
          <div className={`flex-shrink-0 w-full lg:w-auto flex justify-center transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80">
              <div className="relative bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-3 shadow-2xl">
                <div className="bg-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                  <div className="bg-gray-900 h-5 md:h-6 flex items-center justify-center relative">
                    <div className="w-20 md:w-24 h-4 md:h-5 bg-black rounded-b-2xl absolute top-0"></div>
                  </div>
                  
                  {/* Aspect ratio 320:657, reduced height by 15% */}
                  <div className="relative h-[430px] sm:h-[485px] md:h-[540px] lg:h-[595px] bg-gray-900 overflow-hidden">
                    {appScreens.map((screen, index) => (
                      <img
                        key={index}
                        src={screen}
                        alt={`Экран приложения ${index + 1}: ${
                          index === 0 ? 'Меню навигации с доступом к функциям' : 
                          index === 1 ? 'Статус ремонта и контроль прогресса' : 
                          'Финансовая панель и управление бюджетом'
                        }`}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                          activeImage === index ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-4">
                {appScreens.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeImage === index ? 'w-8 bg-cyan-400' : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCabinetSection;
