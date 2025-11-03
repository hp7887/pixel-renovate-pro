import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import interiorDesignImage from "@/assets/interior-design-hero.jpg";
import newBuildingImage from "@/assets/major-repair-hero-new.jpg";
import secondaryImage from "@/assets/cosmetic-repair-hero-new.jpg";

const ServicesPreviewSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Дизайн интерьера",
      price: "от 1 500 ₽/м²",
      description: "Профессиональные дизайнеры с опытом от 7 до 20 лет создадут уникальный проект для вашей квартиры, дома или коммерческого помещения.",
      image: interiorDesignImage,
      link: "/services/interior-design"
    },
    {
      title: "Отделка новостройки",
      price: "от 8 200 ₽/м²",
      description: "Полный цикл работ от черновой до чистовой отделки новой квартиры. Включает подбор и закупку всех необходимых материалов.",
      image: newBuildingImage,
      link: "/services/turnkey-repair"
    },
    {
      title: "Ремонт вторички",
      price: "от 9 800 ₽/м²",
      description: "Комплексное обновление квартир в старом фонде, хрущевках и брежневках с полной заменой коммуникаций, электрики и отделки.",
      image: secondaryImage,
      link: "/services/major-repair"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px] md:h-[500px]"
              onClick={() => navigate(service.link)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Default Content */}
              <CardContent className="relative h-full flex flex-col justify-end p-6 md:p-8 transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-xl md:text-2xl font-semibold text-accent mb-4">
                  {service.price}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary transition-all"
                >
                  Подробнее
                </Button>
              </CardContent>

              {/* Hover Content */}
              <CardContent className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-accent">
                    {service.price}
                  </p>
                </div>
                <Button 
                  variant="default" 
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviewSection;
