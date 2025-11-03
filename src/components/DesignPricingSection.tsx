import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";

const plans = [
  {
    name: "Стандарт",
    price: "1 500",
    features: [
      "Планировочное решение",
      "Строительные чертежи",
    ],
  },
  {
    name: "Комфорт",
    price: "2 000",
    features: [
      "Планировочное решение",
      "Строительные чертежи",
      "Стилистическое решение (коллажи интерьера)",
    ],
  },
  {
    name: "Эксклюзив",
    price: "3 000",
    features: [
      "Планировочное решение",
      "Строительные чертежи",
      "3D-визуализации интерьера",
      "Комплектация проекта",
      "Партнерская сеть со скидками",
    ],
    popular: true,
  },
  {
    name: "Премиум",
    price: "4 000",
    features: [
      "Планировочное решение",
      "Строительные чертежи",
      "3D-визуализации интерьера",
      "Комплектация с подбором альтернатив",
      "Онлайн закупка у партнеров",
      "Партнерская сеть со скидками",
    ],
  },
];

const DesignPricingSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Тарифные <span className="text-accent">планы</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный пакет услуг для вашего проекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden transition-all hover:shadow-xl ${
                  plan.popular ? "border-accent border-2" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <HelpCircle className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-accent mb-1">
                      {plan.price}
                      <span className="text-lg text-muted-foreground"> /м²</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};

export default DesignPricingSection;
