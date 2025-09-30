"use client";

import { Smartphone, Video, FileText, MessageCircle, Calendar, CreditCard, CheckCircle, Play, Camera, BarChart3, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

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
  const [activeTab, setActiveTab] = useState(0);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="personal-cabinet"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-medium">Цифровые технологии</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Контроль через <br />
              <span className="text-primary">мобильное приложение</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Революционная система контроля ремонта в режиме реального времени. 
              Полная прозрачность процесса и финансов через удобное мобильное приложение.
            </p>
            
            <div className="space-y-6 mb-10">
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
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Посмотреть демо
            </Button>
          </div>
          
          {/* Right content - Animated phone mockup */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Screen content */}
                  <div className="bg-white">
                    {/* Status bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-center">
                      <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    
                    {/* App header */}
                    <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">Мой ремонт</h3>
                          <p className="text-white/80 text-sm">ул. Тверская, 15</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs">LIVE</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex bg-gray-50 border-b">
                      {['Видео', 'Отчеты', 'Бюджет'].map((tab, index) => (
                        <button
                          key={index}
                          className={`flex-1 py-3 text-sm font-medium transition-colors ${
                            activeTab === index 
                              ? 'text-primary border-b-2 border-primary bg-white' 
                              : 'text-gray-600'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    
                    {/* Content area */}
                    <div className="p-4 h-80">
                      {activeTab === 0 && (
                        <div className="space-y-4 animate-fade-in">
                          <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
                            <div className="text-center">
                              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Камера: Гостиная</p>
                              <div className="flex items-center justify-center mt-2 gap-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-red-500">REC</span>
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {['Кухня', 'Спальня', 'Ванная'].map((room, i) => (
                              <div key={i} className="bg-gray-50 rounded-lg p-2 text-center">
                                <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-1"></div>
                                <span className="text-xs text-gray-600">{room}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 1 && (
                        <div className="space-y-3 animate-fade-in">
                          {[
                            { title: 'Демонтаж завершен', time: '2 часа назад', status: 'completed' },
                            { title: 'Электромонтаж 50%', time: 'В процессе', status: 'progress' },
                            { title: 'Сантехника', time: 'Планируется', status: 'planned' }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className={`w-3 h-3 rounded-full ${
                                item.status === 'completed' ? 'bg-green-500' :
                                item.status === 'progress' ? 'bg-yellow-500' : 'bg-gray-300'
                              }`}></div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">{item.title}</p>
                                <p className="text-xs text-gray-500">{item.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {activeTab === 2 && (
                        <div className="space-y-4 animate-fade-in">
                          <div className="bg-primary/10 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-600">Общий прогресс</span>
                              <span className="text-lg font-bold text-primary">68%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full transition-all duration-1000" style={{ width: '68%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Потрачено</span>
                              <span className="text-sm font-bold">890,000 ₽</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Остаток</span>
                              <span className="text-sm font-bold text-green-600">410,000 ₽</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notifications */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Этап завершен</p>
                    <p className="text-xs text-gray-500">Демонтаж</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Новый отчет</p>
                    <p className="text-xs text-gray-500">Прораб Алексей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCabinetSection;