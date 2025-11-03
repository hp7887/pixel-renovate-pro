import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const repairTypes = [
  {
    id: "cosmetic",
    title: "Косметический ремонт",
    description: "Оптимальное решение для обновления квартиры с минимальными затратами, идеально подходит для завершающих работ в новостройках с предчистовой отделкой",
    features: [
      "Монтаж напольных покрытий и плинтусов",
      "Оклейка стен обоями различных типов",
      "Окрашивание потолочных поверхностей",
      "Электромонтажные работы по необходимости",
      "Установка сантехнического оборудования",
      "Окрашивание труб и радиаторов",
    ],
    duration: "от 20 дней",
    price: "от 4 500 ₽/м²",
    link: "/services/cosmetic-repair",
    bonus: "Техдизайн в подарок!",
  },
  {
    id: "major",
    title: "Капитальный ремонт",
    description: "Комплексное обновление квартиры с привлечением бригады специалистов различного профиля для качественного преображения всех помещений",
    features: [
      "Демонтажные работы всех типов",
      "Выравнивание стеновых поверхностей",
      "Устройство и ремонт напольных покрытий",
      "Полная замена электропроводки",
      "Монтаж новой сантехники",
      "Гидроизоляция помещений",
      "Звукоизоляция стен и потолков",
      "Финишная отделка всех поверхностей",
      "Установка окон и дверных конструкций",
    ],
    duration: "от 45 дней",
    price: "от 8 700 ₽/м²",
    link: "/services/major-repair",
    bonus: "Клининг в подарок!",
    showAll: true,
  },
  {
    id: "designer",
    title: "Дизайнерский ремонт",
    description: "Премиальный ремонт с разработкой индивидуального дизайн-проекта и использованием современных технологий для создания уникального интерьера",
    features: [
      "Разработка дизайн-проекта",
      "Демонтаж и перепланировка",
      "Выравнивание всех поверхностей",
      "Монтаж электросистем",
      "Коллекторная разводка сантехники",
      "Система «теплый пол»",
      "Укладка премиальных напольных покрытий",
      "Декоративная отделка стен",
      "Многоуровневые потолки и освещение",
      "Обустройство гардеробных систем",
      "Теплое остекление балконов",
      "Установка скрытых дверных систем",
      "Интеграция системы «умный дом»",
    ],
    duration: "от 70 дней",
    price: "от 11 800 ₽/м²",
    link: "/services/designer-repair",
    showAll: true,
  },
];

const RepairTypesSection = () => {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Виды <span className="text-accent">ремонта</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий тип ремонта для вашей квартиры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {repairTypes.map((type) => {
            const isExpanded = expandedCards.includes(type.id);
            const visibleFeatures = type.showAll && !isExpanded ? type.features.slice(0, 6) : type.features;

            return (
              <Card key={type.id} className="flex flex-col hover:shadow-xl transition-all">
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {visibleFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {type.showAll && type.features.length > 6 && (
                    <button
                      onClick={() => toggleExpand(type.id)}
                      className="text-accent text-sm font-medium mb-4 flex items-center gap-1 hover:underline"
                    >
                      {isExpanded ? "Скрыть" : "Показать все"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Срок:</span>
                      <span className="font-semibold">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-accent">{type.price}</span>
                    </div>
                  </div>

                  {type.bonus && (
                    <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                      {type.bonus}
                    </Badge>
                  )}

                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                  >
                    <Link to={type.link}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RepairTypesSection;
