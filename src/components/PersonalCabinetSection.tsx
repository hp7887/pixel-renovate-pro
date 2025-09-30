"use client";

import { Video, FileText, MessageCircle, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import appScreen1 from "@/assets/app-screen-1.jpg";
import appScreen2 from "@/assets/app-screen-2.jpg";
import appScreen3 from "@/assets/app-screen-3.jpg";
import appScreen4 from "@/assets/app-screen-4.jpg";

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
      className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Main content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Контроль через <br />
              <span className="text-primary">мобильное приложение</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Революционная система контроля ремонта в режиме реального времени. 
              Полная прозрачность процесса и финансов через удобное мобильное приложение.
            </p>
            
            <div className="space-y-6 mb-10 max-w-2xl">
              {cabinetFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Phone mockup - positioned bottom right */}
          <div className={`absolute bottom-0 right-0 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative w-80 mx-auto lg:mx-0">
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Status bar notch */}
                  <div className="bg-gray-900 h-8 flex items-center justify-center relative">
                    <div className="w-32 h-6 bg-black rounded-b-3xl absolute top-0"></div>
                  </div>
                  
                  {/* Screen content - cycling images */}
                  <div className="relative h-[600px] bg-white">
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
              
              {/* Indicator dots */}
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