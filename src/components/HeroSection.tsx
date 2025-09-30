import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import heroImage from "@/assets/hero-hightech.jpg";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const animatedTexts = [
    "Контролируйте ремонт через мобильное приложение",
    "Страховка всей стоимости ремонта на 1 000 000 руб. за наш счет",
    "Максимально точная смета без закупа лишних материалов",
    "Фиксированная цена ремонта по смете",
    "Гарантия на ремонт 1 год"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Современный интерьер" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Insurance badge */}
            <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
              <span className="text-primary text-sm font-medium">Страховка всей стоимости ремонта на 1 000 000 ₽</span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                РЕМОНТ{" "}
                <span className="text-yellow-400">КВАРТИР ПОД КЛЮЧ</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                ЗА 3 МЕСЯЦА ПОД ВАШ БЮДЖЕТ,<br />
                БЕЗ СКРЫТЫХ ДЕФЕКТОВ
              </p>
              
              {/* Animated typewriter text */}
              <div className="text-lg text-white font-semibold min-h-[3rem] flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <TypewriterText 
                    texts={animatedTexts}
                    speed={60}
                    deleteSpeed={40}
                    pauseDuration={4000}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="xl"
              onClick={scrollToCalculator}
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-glow transition-smooth"
            >
              РАССЧИТАТЬ СТОИМОСТЬ
            </Button>
          </div>
          
          {/* Right content - Company info */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm border border-white/20">
              <div className="text-center space-y-6">
                <h3 className="text-white font-semibold text-xl">
                  О КОМПАНИИ
                </h3>
                
                <div className="space-y-4 text-left">
                  <div className="text-white/90 text-sm leading-relaxed">
                    <p className="mb-3">Более 10 лет профессионального опыта в сфере ремонта и строительства</p>
                    <p className="mb-3">Собственные бригады квалифицированных мастеров</p>
                    <p className="mb-3">Более 500 успешно завершенных проектов</p>
                    <p className="mb-3">Работаем только с качественными материалами от проверенных поставщиков</p>
                    <p>Официальное оформление всех документов и гарантийных обязательств</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gift banner */}
      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-4 shadow-lg max-w-md">
        <div className="flex items-center space-x-3 text-white">
          <Gift className="w-8 h-8 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold">При заказе ремонта </span>
            <span className="font-bold">дизайн-проект в подарок </span>
            <span>(экономия 200 000 рублей<a href="#design-details" className="text-yellow-300 hover:text-yellow-100 ml-1">*</a>)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;