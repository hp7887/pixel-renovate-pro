import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import LazyImage from "@/components/LazyImage";
import interiorDesignImage from "@/assets/interior-design-hero.jpg";
import newBuildingImage from "@/assets/major-repair-hero-new.jpg";
import secondaryImage from "@/assets/cosmetic-repair-hero-new.jpg";

const ServicesPreviewSection = memo(() => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const services = [
    {
      title: "Дизайн интерьера",
      price: "от 1 500 ₽/м²",
      description: "Профессиональные дизайнеры с опытом от 7 до 20 лет создадут уникальный проект для вашей квартиры, дома или коммерческого помещения.",
      image: interiorDesignImage,
      link: "/services/design"
    },
    {
      title: "Отделка новостройки",
      price: "от 8 200 ₽/м²",
      description: "Полный цикл работ от черновой до чистовой отделки новой квартиры. Включает подбор и закупку всех необходимых материалов.",
      image: newBuildingImage,
      link: "/services/new-building"
    },
    {
      title: "Ремонт вторички",
      price: "от 9 800 ₽/м²",
      description: "Комплексное обновление квартир в старом фонде, хрущевках и брежневках с полной заменой коммуникаций, электрики и отделки.",
      image: secondaryImage,
      link: "/services/secondary"
    }
  ];

  const handleCardClick = (index: number, link: string) => {
    if (isMobile) {
      setExpandedCard(expandedCard === index ? null : index);
    } else {
      navigate(link);
    }
  };

  const handleButtonClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    navigate(link);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedCard === index;

            return isMobile ? (
              <div key={index} onClick={() => handleCardClick(index, service.link)}>
                <Card className={`group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px] md:h-[500px]`}>
                  {/* Background Image */}
                  <div className={`absolute inset-0 transition-all duration-500 ${isExpanded ? 'opacity-0' : ''}`}>
                    <LazyImage 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
                  </div>

                  {/* White background for expand */}
                  <div className={`absolute inset-0 bg-white opacity-0 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : ''}`} />

                  {/* Content */}
                  <CardContent className="relative h-full flex flex-col justify-between p-6 md:p-8">
                    {/* Title at top */}
                    <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${isExpanded ? 'text-foreground' : 'text-white'}`}>
                      {service.title}
                    </h3>

                    {/* Bottom content */}
                    <div className="space-y-4">
                      {/* Description - hidden by default, shown on expand */}
                      <p className={`text-base md:text-lg text-foreground leading-relaxed transition-opacity duration-500 overflow-hidden ${isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                        {service.description}
                      </p>
                      
                      <p className="text-xl md:text-2xl font-semibold text-accent transition-colors duration-500">
                        {service.price}
                      </p>
                      
                      <Button 
                        variant="outline"
                        onClick={(e) => handleButtonClick(e, service.link)}
                        className={`w-full backdrop-blur-sm border-white/30 transition-all ${isExpanded ? 'bg-accent text-white border-accent' : 'bg-white/10 text-white'}`}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Link key={index} to={service.link}>
                <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px] md:h-[500px]">
                  {/* Background Image */}
                  <div className="absolute inset-0 transition-all duration-500 group-hover:opacity-0">
                    <LazyImage 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
                  </div>

                  {/* White background for hover */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <CardContent className="relative h-full flex flex-col justify-between p-6 md:p-8">
                    {/* Title at top */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-foreground transition-colors duration-500">
                      {service.title}
                    </h3>

                    {/* Bottom content */}
                    <div className="space-y-4">
                      {/* Description - hidden by default, shown on hover */}
                      <p className="text-base md:text-lg text-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-96 overflow-hidden">
                        {service.description}
                      </p>
                      
                      <p className="text-xl md:text-2xl font-semibold text-accent group-hover:text-accent transition-colors duration-500">
                        {service.price}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        className="w-full bg-white/10 backdrop-blur-sm text-white border-white/30 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all"
                      >
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
});

ServicesPreviewSection.displayName = 'ServicesPreviewSection';

export default ServicesPreviewSection;
