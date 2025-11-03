import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Косметический",
    price: "от 4 500 ₽/м²",
    duration: "от 20 дней",
    features: [
      "Укладка напольных покрытий",
      "Поклейка обоев",
      "Покраска потолков",
      "Базовые электромонтажные работы",
      "Замена сантехники",
      "Покраска труб и радиаторов",
    ],
  },
  {
    name: "Капитальный",
    price: "от 8 700 ₽/м²",
    duration: "от 45 дней",
    features: [
      "Демонтаж старых конструкций",
      "Выравнивание стен и полов",
      "Стяжка полов",
      "Полная замена электрики",
      "Полная замена сантехники",
      "Гидроизоляция",
      "Шумоизоляция",
      "Чистовая отделка",
      "Замена окон и дверей",
    ],
    popular: true,
  },
  {
    name: "Дизайнерский",
    price: "от 11 800 ₽/м²",
    duration: "от 70 дней",
    features: [
      "Дизайн-проектирование",
      "Перепланировка с согласованием",
      "Выравнивание всех поверхностей",
      "Профессиональная разводка электрики",
      "Коллекторная разводка сантехники",
      "Теплые полы",
      "Премиальные покрытия",
      "Сложные потолки и освещение",
      "Встроенные системы хранения",
      "Теплое остекление",
      "Скрытые двери",
      "Умный дом",
    ],
  },
];

const SecondaryPricingSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Тарифы на ремонт <span className="text-accent">вторички</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий пакет услуг для вашей квартиры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative overflow-hidden transition-all hover:shadow-lg flex flex-col",
                plan.popular && "border-2 border-accent shadow-xl"
              )}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Популярный
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col flex-1">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Срок: {plan.duration}
                  </div>
                </div>
                
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white mt-auto"
                  onClick={() => setIsContactOpen(true)}
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </section>
  );
};

export default SecondaryPricingSection;
