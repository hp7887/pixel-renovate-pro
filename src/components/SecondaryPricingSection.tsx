import { Card } from "@/components/ui/card";
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
                "relative overflow-hidden transition-all hover:shadow-xl flex flex-col",
                plan.popular && "border-2 border-accent"
              )}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-accent mb-2">
                  {plan.price}
                </div>
                <div className="text-sm text-muted-foreground mb-6">
                  {plan.duration}
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={() => setIsContactOpen(true)}
                >
                  Заказать
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </section>
  );
};

export default SecondaryPricingSection;
