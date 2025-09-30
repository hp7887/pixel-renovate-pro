import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
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
                <TypewriterText 
                  texts={animatedTexts}
                  speed={80}
                  deleteSpeed={50}
                  pauseDuration={3000}
                  className="text-white"
                />
              </div>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="xl"
              onClick={scrollToCalculator}
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-glow transition-smooth"
            >
              РАССЧИТАТЬ СТОИМОСТЬ<br />
              <span className="text-sm font-normal">В ТРЕХ ВАРИАНТАХ</span>
            </Button>
          </div>
          
          {/* Right content - Guide download */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm border border-white/20">
              <div className="text-center space-y-4">
                <h3 className="text-white font-semibold text-lg">
                  Скачайте бесплатный гайд
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  «КАК СДЕЛАТЬ КАЧЕСТВЕННЫЙ РЕМОНТ<br />
                  В 2025 ГОДУ ПОД ВАШ БЮДЖЕТ»
                </p>
                
                {/* Guide preview */}
                <div className="relative mx-auto w-32 h-40 bg-gradient-to-b from-primary to-primary/80 rounded-lg shadow-lg">
                  <div className="absolute inset-2 bg-white rounded text-xs p-2">
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  size="lg"
                >
                  СКАЧАТЬ ГАЙД
                </Button>
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
            <span>(экономия 200 000 рублей)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;