import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Ruler } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import heroImage from "@/assets/materials-calculator-hero.jpg";
import selectionImage from "@/assets/materials-selection-process.jpg";
import costImage from "@/assets/materials-cost-calculation.jpg";
import LazyImage from "@/components/LazyImage";

type WorkType = {
  id: string;
  name: string;
  description: string;
  hasThickness: boolean;
  formula: (area: number, thickness?: number) => { amount: number; unit: string; cost: number };
};

const MaterialsCalculator = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<string>("");
  const [area, setArea] = useState<number>(20);
  const [thickness, setThickness] = useState<number>(10);
  const [result, setResult] = useState<{ amount: string; cost: number } | null>(null);

  const workTypes: WorkType[] = [
    {
      id: "plastering",
      name: "Штукатурка стен",
      description: "Выравнивание стен штукатуркой",
      hasThickness: true,
      formula: (area, thickness = 10) => ({
        amount: Math.ceil((area * thickness * 1.4) / 30), // 1.4 кг на 1м² при толщине 1мм
        unit: "мешков по 30кг",
        cost: Math.ceil((area * thickness * 1.4) / 30) * 750,
      }),
    },
    {
      id: "putty",
      name: "Шпаклевка стен",
      description: "Финишное выравнивание под покраску/обои",
      hasThickness: true,
      formula: (area, thickness = 2) => ({
        amount: Math.ceil((area * thickness * 1.2) / 20), // 1.2 кг на 1м² при толщине 1мм
        unit: "мешков по 20кг",
        cost: Math.ceil((area * thickness * 1.2) / 20) * 700,
      }),
    },
    {
      id: "painting",
      name: "Покраска стен",
      description: "Окраска стен водоэмульсионной краской (2 слоя)",
      hasThickness: false,
      formula: (area) => ({
        amount: Math.ceil((area * 0.3) / 10), // 0.3 л на м² в 2 слоя
        unit: "банок по 10л",
        cost: Math.ceil((area * 0.3) / 10) * 3500,
      }),
    },
    {
      id: "priming",
      name: "Грунтовка стен",
      description: "Грунтование поверхности перед покраской/обоями",
      hasThickness: false,
      formula: (area) => ({
        amount: Math.ceil((area * 0.2) / 10), // 0.2 л на м²
        unit: "канистр по 10л",
        cost: Math.ceil((area * 0.2) / 10) * 2000,
      }),
    },
    {
      id: "screed",
      name: "Стяжка пола",
      description: "Выравнивание пола цементно-песчаной стяжкой",
      hasThickness: true,
      formula: (area, thickness = 50) => ({
        amount: Math.ceil((area * thickness * 18) / 50000), // 18 кг на 1м² при толщине 1мм
        unit: "мешков по 50кг",
        cost: Math.ceil((area * thickness * 18) / 50000) * 750,
      }),
    },
    {
      id: "tiling",
      name: "Укладка плитки",
      description: "Облицовка стен/пола керамической плиткой",
      hasThickness: false,
      formula: (area) => ({
        amount: Math.ceil(area * 1.15), // +15% на подрезку
        unit: "м²",
        cost: Math.ceil(area * 1.15) * 1800,
      }),
    },
    {
      id: "wallpaper",
      name: "Поклейка обоев",
      description: "Оклейка стен обоями",
      hasThickness: false,
      formula: (area) => ({
        amount: Math.ceil(area * 1.1), // +10% на подгонку рисунка
        unit: "м²",
        cost: Math.ceil(area * 1.1) * 450,
      }),
    },
    {
      id: "flooring",
      name: "Напольное покрытие",
      description: "Ламинат, линолеум, паркетная доска",
      hasThickness: false,
      formula: (area) => ({
        amount: Math.ceil(area * 1.1), // +10% запас
        unit: "м²",
        cost: Math.ceil(area * 1.1) * 1200,
      }),
    },
  ];

  const handleCalculate = () => {
    if (!selectedWork || area <= 0) return;

    const work = workTypes.find((w) => w.id === selectedWork);
    if (!work) return;

    const calculationResult = work.formula(area, thickness);
    setResult({
      amount: `${calculationResult.amount} ${calculationResult.unit}`,
      cost: calculationResult.cost,
    });
  };

  const selectedWorkData = workTypes.find((w) => w.id === selectedWork);

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
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10" />
            <LazyImage
              src={heroImage}
              alt="Калькулятор материалов для ремонта"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 container mx-auto px-4 py-20 md:py-28">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
                  <Calculator className="w-8 h-8" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Калькулятор Материалов для Ремонта
                </h1>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Точный расчет количества и стоимости материалов для каждого вида работ. 
                  Выберите нужные работы и получите подробную смету.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Calculator className="w-6 h-6 text-primary" />
                      Расчет материалов
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="work-type" className="text-base font-medium mb-2 block">
                          Выберите вид работ
                        </Label>
                        <Select value={selectedWork} onValueChange={setSelectedWork}>
                          <SelectTrigger id="work-type" className="w-full">
                            <SelectValue placeholder="Выберите работу..." />
                          </SelectTrigger>
                          <SelectContent>
                            {workTypes.map((work) => (
                              <SelectItem key={work.id} value={work.id}>
                                {work.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {selectedWorkData && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {selectedWorkData.description}
                          </p>
                        )}
                      </div>

                      {selectedWork && (
                        <>
                          <div>
                            <Label htmlFor="area" className="text-base font-medium mb-2 block">
                              Площадь (м²)
                            </Label>
                            <Input
                              id="area"
                              type="number"
                              min="1"
                              value={area}
                              onChange={(e) => setArea(parseFloat(e.target.value) || 0)}
                              placeholder="Введите площадь"
                              className="w-full"
                            />
                          </div>

                          {selectedWorkData?.hasThickness && (
                            <div>
                              <Label htmlFor="thickness" className="text-base font-medium mb-2 block">
                                Толщина слоя (мм)
                              </Label>
                              <Input
                                id="thickness"
                                type="number"
                                min="1"
                                value={thickness}
                                onChange={(e) => setThickness(parseFloat(e.target.value) || 0)}
                                placeholder="Введите толщину"
                                className="w-full"
                              />
                            </div>
                          )}

                          <Button
                            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
                            onClick={handleCalculate}
                          >
                            <Calculator className="w-5 h-5 mr-2" />
                            Рассчитать
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {result && (
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background mt-6">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Ruler className="w-6 h-6 text-primary" />
                        Результат расчета
                      </h3>

                      <div className="space-y-6">
                        <div className="p-6 bg-background rounded-lg border-2">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Работа</p>
                              <p className="text-lg font-semibold text-foreground">
                                {selectedWorkData?.name}
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <p className="text-sm text-muted-foreground mb-1">Площадь</p>
                              <p className="text-xl font-bold text-foreground">{area} м²</p>
                            </div>
                            {selectedWorkData?.hasThickness && (
                              <div className="p-4 bg-muted/50 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-1">Толщина слоя</p>
                                <p className="text-xl font-bold text-foreground">{thickness} мм</p>
                              </div>
                            )}
                          </div>

                          <div className="border-t-2 pt-4 space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-base font-medium text-muted-foreground">
                                Необходимо материала:
                              </span>
                              <span className="text-xl font-bold text-foreground">
                                {result.amount}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-base font-medium text-muted-foreground">
                                Примерная стоимость:
                              </span>
                              <span className="text-2xl font-bold text-primary">
                                {formatPrice(result.cost)}
                              </span>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground mt-4">
                            * Цены указаны ориентировочно для рынка СПб без учета доставки
                          </p>
                        </div>

                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
                          onClick={() => setIsContactOpen(true)}
                        >
                          Заказать расчет у специалиста
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Как правильно рассчитать материалы для ремонта
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                  <div>
                    <LazyImage
                      src={selectionImage}
                      alt="Выбор материалов для ремонта"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Зачем нужен калькулятор материалов?
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Правильный расчет материалов для ремонта позволяет избежать лишних расходов и необходимости 
                      докупать материалы в процессе работы. Наш калькулятор учитывает средние нормы расхода, 
                      рекомендованные производителями, и добавляет необходимый запас на подрезку и возможный брак.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      Выбирайте только те виды работ, которые планируете выполнить, указывайте точные размеры 
                      помещений и получайте детальный расчет с разбивкой по каждому виду материалов.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                  <div className="space-y-4 order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-foreground">
                      Средние нормы расхода материалов
                    </h3>
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <div className="space-y-3 text-foreground/80">
                        <p><strong>Краска для стен:</strong> 0,25-0,3 л на м² в два слоя</p>
                        <p><strong>Грунтовка:</strong> 0,15-0,2 л на м²</p>
                        <p><strong>Штукатурка:</strong> 14 кг на м² при слое 10 мм</p>
                        <p><strong>Шпаклевка:</strong> 1,2 кг на м² при слое 1 мм</p>
                        <p><strong>Стяжка пола:</strong> 18 кг на м² при слое 10 мм</p>
                        <p><strong>Обои:</strong> 1,1 м² с учетом подгонки рисунка</p>
                        <p><strong>Плитка:</strong> 1,15 м² с учетом подрезки</p>
                        <p><strong>Ламинат/линолеум:</strong> 1,1 м² с запасом</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <LazyImage
                      src={costImage}
                      alt="Расчет стоимости материалов"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>

                <div className="bg-background p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Факторы, влияющие на расход материалов
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-4 text-foreground/80">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                          <strong>Состояние поверхностей:</strong> Неровные стены требуют больше штукатурки и шпаклевки
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                          <strong>Качество материалов:</strong> Дорогие материалы обычно имеют лучшую укрывистость
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                          <strong>Сложность помещения:</strong> Много углов и ниш увеличивают расход на 10-15%
                        </span>
                      </li>
                    </ul>
                    <ul className="space-y-4 text-foreground/80">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                          <strong>Квалификация мастеров:</strong> Опытные мастера расходуют меньше материалов
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                          <strong>Тип помещения:</strong> Ванные и кухни требуют специальных влагостойких материалов
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                          <strong>Толщина слоя:</strong> От толщины нанесения зависит расход смесей для выравнивания
                        </span>
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