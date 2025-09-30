"use client";

import { Video, FileText, MessageCircle, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";
import appScreen4 from "@/assets/app-screen-4.png";

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
  
  const appScreens = [appScreen1, appScreen2, appScreen3, appScreen4];

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
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="relative min-h-[600px] lg:min-h-[500px]">
          {/* Main content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight max-w-2xl">
              Контроль через <br />
              <span className="text-primary">мобильное приложение</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              Революционная система контроля ремонта в режиме реального времени. 
              Полная прозрачность процесса и финансов через удобное мобильное приложение.
            </p>
            
            <div className="space-y-4 md:space-y-6 max-w-2xl">
              {cabinetFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 md:gap-4 transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Phone mockup - positioned absolute right on desktop, below on mobile */}
          <div className={`relative lg:absolute lg:bottom-0 lg:right-0 mt-8 lg:mt-0 flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative w-56 sm:w-64 md:w-72">
              <div className="relative bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-3 shadow-2xl">
                <div className="bg-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                  <div className="bg-gray-900 h-5 md:h-6 flex items-center justify-center relative">
                    <div className="w-20 md:w-24 h-4 md:h-5 bg-black rounded-b-2xl absolute top-0"></div>
                  </div>
                  
                  <div className="relative h-[400px] sm:h-[450px] md:h-[500px] bg-white overflow-hidden">
                    {appScreens.map((screen, index) => (
                      <img
                        key={index}
                        src={screen}
                        alt={`App screen ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          activeImage === index ? 'opacity-100' : 'opacity-0'
                        }`}
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
                      activeImage === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
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