import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, Home, Paintbrush, Hammer } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const MaterialsCalculator = () => {
  const [area, setArea] = useState(50);
  const [repairType, setRepairType] = useState<"cosmetic" | "major">("cosmetic");
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Средние нормы расхода материалов на 1 м²
  const materials = {
    cosmetic: {
      paint: { amount: 0.25, unit: "л", name: "Краска для стен", price: 350 },
      primer: { amount: 0.15, unit: "л", name: "Грунтовка", price: 200 },
      wallpaper: { amount: 1.1, unit: "м²", name: "Обои", price: 450 },
      flooring: { amount: 1.1, unit: "м²", name: "Напольное покрытие", price: 1200 },
      skirting: { amount: 0.4, unit: "м.п.", name: "Плинтус", price: 180 },
      electrician: { amount: 1, unit: "точка", name: "Электрика (розетки/выключатели)", price: 800 },
    },
    major: {
      plaster: { amount: 10, unit: "кг", name: "Штукатурка", price: 25 },
      putty: { amount: 3, unit: "кг", name: "Шпаклевка", price: 35 },
      primer: { amount: 0.2, unit: "л", name: "Грунтовка", price: 200 },
      paint: { amount: 0.3, unit: "л", name: "Краска для стен", price: 350 },
      wallpaper: { amount: 1.1, unit: "м²", name: "Обои", price: 450 },
      flooring: { amount: 1.1, unit: "м²", name: "Напольное покрытие", price: 1500 },
      tiles: { amount: 1.15, unit: "м²", name: "Плитка (ванная/кухня)", price: 1800 },
      skirting: { amount: 0.4, unit: "м.п.", name: "Плинтус", price: 200 },
      electrician: { amount: 1.5, unit: "точка", name: "Электрика (полная замена)", price: 1200 },
      plumbing: { amount: 1, unit: "точка", name: "Сантехника", price: 2500 },
    },
  };

  const calculateMaterials = () => {
    const currentMaterials = materials[repairType];
    const results: Array<{ name: string; amount: string; cost: number }> = [];
    let totalCost = 0;

    Object.values(currentMaterials).forEach((material) => {
      const amount = material.amount * area;
      const cost = amount * material.price;
      totalCost += cost;
      results.push({
        name: material.name,
        amount: `${amount.toFixed(1)} ${material.unit}`,
        cost: Math.round(cost),
      });
    });

    return { results, totalCost: Math.round(totalCost) };
  };

  const { results, totalCost } = calculateMaterials();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  return (
    <>
      <Helmet>
        <title>Калькулятор Материалов для Ремонта Квартиры | Расчет Стоимости Материалов СПб</title>
        <meta 
          name="description" 
          content="Онлайн калькулятор материалов для ремонта квартиры в СПб. Рассчитайте количество краски, обоев, штукатурки, плитки и других материалов. Точные нормы расхода и средние цены 2024." 
        />
        <meta name="keywords" content="калькулятор материалов для ремонта, расчет материалов квартиры, сколько нужно краски, расход штукатурки, калькулятор обоев, расчет плитки, стоимость материалов ремонта спб" />
        <link rel="canonical" href="https://spb-dsremont.ru/materials-calculator" />
        
        <meta property="og:title" content="Калькулятор Материалов для Ремонта Квартиры в СПб" />
        <meta property="og:description" content="Рассчитайте количество и стоимость материалов для ремонта: краска, обои, штукатурка, плитка. Средние нормы расхода и актуальные цены." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/materials-calculator" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Калькулятор Материалов для Ремонта
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Рассчитайте необходимое количество и стоимость материалов для вашего ремонта. 
                  Используем средние нормы расхода и актуальные цены Санкт-Петербурга 2024.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Input Panel */}
                  <Card className="border-2">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                        <Home className="w-6 h-6 mr-2 text-primary" />
                        Параметры помещения
                      </h2>

                      {/* Area Slider */}
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                          <label className="text-sm font-medium text-foreground">
                            Площадь помещения
                          </label>
                          <span className="text-2xl font-bold text-primary">
                            {area} м²
                          </span>
                        </div>
                        <Slider
                          value={[area]}
                          onValueChange={(value) => setArea(value[0])}
                          min={10}
                          max={200}
                          step={5}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>10 м²</span>
                          <span>200 м²</span>
                        </div>
                      </div>

                      {/* Repair Type */}
                      <div className="mb-6">
                        <label className="text-sm font-medium text-foreground mb-3 block">
                          Тип ремонта
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <Button
                            variant={repairType === "cosmetic" ? "default" : "outline"}
                            className="h-auto py-4 flex flex-col items-center"
                            onClick={() => setRepairType("cosmetic")}
                          >
                            <Paintbrush className="w-6 h-6 mb-2" />
                            <span className="font-semibold">Косметический</span>
                            <span className="text-xs opacity-80">Обои, покраска</span>
                          </Button>
                          <Button
                            variant={repairType === "major" ? "default" : "outline"}
                            className="h-auto py-4 flex flex-col items-center"
                            onClick={() => setRepairType("major")}
                          >
                            <Hammer className="w-6 h-6 mb-2" />
                            <span className="font-semibold">Капитальный</span>
                            <span className="text-xs opacity-80">Полная замена</span>
                          </Button>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Важно:</strong> Расчет является приблизительным и основан на средних нормах расхода. 
                          Для точного расчета материалов рекомендуем получить консультацию специалиста.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Results Panel */}
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-6">
                        Необходимые материалы
                      </h2>

                      <div className="space-y-4 mb-6">
                        {results.map((item, index) => (
                          <div 
                            key={index}
                            className="flex justify-between items-center p-4 bg-background rounded-lg border"
                          >
                            <div>
                              <p className="font-medium text-foreground">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.amount}</p>
                            </div>
                            <span className="font-bold text-primary">
                              {formatPrice(item.cost)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t-2 pt-6">
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-xl font-bold text-foreground">
                            Итого материалов:
                          </span>
                          <span className="text-3xl font-bold text-primary">
                            {formatPrice(totalCost)}
                          </span>
                        </div>

                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
                          onClick={() => setIsContactOpen(true)}
                        >
                          Получить точный расчет
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Как правильно рассчитать материалы для ремонта
                </h2>

                <div className="prose prose-lg max-w-none">
                  <div className="bg-background p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Зачем нужен калькулятор материалов?
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Правильный расчет материалов для ремонта позволяет избежать лишних расходов и необходимости 
                      докупать материалы в процессе работы. Наш калькулятор учитывает средние нормы расхода, 
                      рекомендованные производителями, и добавляет необходимый запас на подрезку и возможный брак.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-background p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-3">
                        Косметический ремонт включает:
                      </h4>
                      <ul className="space-y-2 text-foreground/80">
                        <li>• Покраска стен и потолков</li>
                        <li>• Поклейка обоев</li>
                        <li>• Замена напольного покрытия</li>
                        <li>• Установка плинтусов</li>
                        <li>• Частичная замена электрики</li>
                      </ul>
                    </div>

                    <div className="bg-background p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-foreground mb-3">
                        Капитальный ремонт включает:
                      </h4>
                      <ul className="space-y-2 text-foreground/80">
                        <li>• Полная штукатурка и шпаклевка</li>
                        <li>• Укладка плитки</li>
                        <li>• Полная замена электропроводки</li>
                        <li>• Замена сантехнических коммуникаций</li>
                        <li>• Все работы косметического ремонта</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Средние нормы расхода материалов
                    </h3>
                    <div className="space-y-3 text-foreground/80">
                      <p><strong>Краска для стен:</strong> 0,25-0,3 л на м² в два слоя</p>
                      <p><strong>Грунтовка:</strong> 0,15-0,2 л на м²</p>
                      <p><strong>Штукатурка:</strong> 10 кг на м² при слое 10 мм</p>
                      <p><strong>Шпаклевка:</strong> 1-3 кг на м² в зависимости от неровностей</p>
                      <p><strong>Обои:</strong> 1,1 м² с учетом подгонки рисунка</p>
                      <p><strong>Плитка:</strong> 1,15 м² с учетом подрезки</p>
                      <p><strong>Ламинат/линолеум:</strong> 1,1 м² с запасом</p>
                    </div>
                  </div>

                  <div className="bg-background p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Факторы, влияющие на расход материалов
                    </h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li>
                        <strong>Состояние поверхностей:</strong> Неровные стены требуют больше штукатурки и шпаклевки
                      </li>
                      <li>
                        <strong>Качество материалов:</strong> Дорогие материалы обычно имеют лучшую укрывистость
                      </li>
                      <li>
                        <strong>Сложность помещения:</strong> Много углов и ниш увеличивают расход на 10-15%
                      </li>
                      <li>
                        <strong>Квалификация мастеров:</strong> Опытные мастера расходуют меньше материалов
                      </li>
                      <li>
                        <strong>Тип помещения:</strong> Ванные и кухни требуют специальных влагостойких материалов
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Советы по выбору и покупке материалов
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                      <h3 className="font-bold text-lg mb-3">Запас 10-15%</h3>
                      <p className="text-foreground/80 text-sm">
                        Всегда покупайте материалы с запасом на подрезку, брак и возможные ошибки в расчетах
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-primary">2</span>
                      </div>
                      <h3 className="font-bold text-lg mb-3">Одна партия</h3>
                      <p className="text-foreground/80 text-sm">
                        Покупайте материалы из одной партии, чтобы избежать различий в оттенках и текстуре
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                      <h3 className="font-bold text-lg mb-3">Сезонность</h3>
                      <p className="text-foreground/80 text-sm">
                        Закупайте материалы в межсезонье — цены могут быть на 15-20% ниже пиковых периодов
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Нужен точный расчет материалов?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Наши специалисты выедут на объект, произведут замеры и составят подробную смету 
                  с учетом всех особенностей вашего помещения
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Получить точный расчет
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.location.href = 'tel:+78122099885'}
                  >
                    Позвонить: 8 812 209-98-85
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
      </div>
    </>
  );
};

export default MaterialsCalculator;