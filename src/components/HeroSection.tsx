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
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 pt-24 md:pt-32">
        {/* Left content */}
        <div className="max-w-3xl space-y-4 md:space-y-6 lg:space-y-8">
          {/* Insurance badge */}
          <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <span className="text-primary text-xs md:text-sm font-medium">Страховка всей стоимости ремонта на 1 000 000 ₽</span>
          </div>
          
          {/* Main heading */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              РЕМОНТ{" "}
              <span className="text-yellow-400 inline-block animate-scale-in" style={{ animationDelay: '800ms' }}>КВАРТИР ПОД КЛЮЧ</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">в Санкт-Петербурге</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              КАЧЕСТВЕННО И В СРОК ПОД ВАШ БЮДЖЕТ,<br className="hidden sm:block" />
              <span className="sm:inline"> </span>С ПРОЗРАЧНОЙ СМЕТОЙ И ГАРАНТИЕЙ
            </p>
            
            {/* Animated typewriter text */}
            <div className="text-sm md:text-base lg:text-lg text-white font-semibold min-h-[2.5rem] md:min-h-[3rem] flex items-center animate-fade-in" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
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
            size="lg"
            onClick={scrollToCalculator}
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 md:py-6 rounded-lg shadow-glow transition-smooth w-full sm:w-auto animate-fade-in hover-scale" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
          >
            РАССЧИТАТЬ СТОИМОСТЬ
          </Button>
        </div>
      </div>
      
      {/* Company info card - positioned in bottom right corner */}
      <div className="hidden lg:block absolute bottom-1 md:bottom-2 right-6 z-20 animate-fade-in">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 w-72 shadow-2xl border border-gray-200">
          <h3 className="text-primary font-bold text-lg mb-3 text-center">
            О НАС
          </h3>
          <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <span>Более 10 лет опыта</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <span>500+ завершенных проектов</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <span>Собственные бригады мастеров</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <span>Гарантия 1 год на все работы</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gift banner */}
      <div className="absolute bottom-1 md:bottom-2 left-4 right-3 md:right-auto bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg md:rounded-xl p-2 md:p-2 shadow-lg max-w-xs">
        <div className="flex items-center space-x-1.5 md:space-x-2 text-white">
          <Gift className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          <div className="text-[10px] md:text-xs">
            <span className="font-semibold">При заказе ремонта </span>
            <span className="font-bold">дизайн-проект в подарок<a href="#design-details" className="text-yellow-300 hover:text-yellow-100 ml-1">*</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;