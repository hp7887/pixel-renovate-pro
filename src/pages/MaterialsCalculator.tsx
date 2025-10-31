import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calculator, Ruler, CheckSquare } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import heroImage from "@/assets/materials-calculator-hero.jpg";
import selectionImage from "@/assets/materials-selection-process.jpg";
import costImage from "@/assets/materials-cost-calculation.jpg";
import LazyImage from "@/components/LazyImage";

type WorkType = {
  id: string;
  name: string;
  description: string;
  formula: (area: number, thickness?: number) => { amount: number; unit: string; cost: number };
};

const MaterialsCalculator = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedWorks, setSelectedWorks] = useState<string[]>([]);
  const [workParams, setWorkParams] = useState<Record<string, { area: number; thickness?: number }>>({});

  const workTypes: WorkType[] = [
    {
      id: "plastering",
      name: "Штукатурка стен",
      description: "Выравнивание стен штукатуркой",
      formula: (area, thickness = 10) => ({
        amount: (area * thickness * 1.4) / 1000, // 1.4 кг на 1м² при толщине 1мм
        unit: "мешков по 30кг",
        cost: Math.round((area * thickness * 1.4 * 25) / 1000),
      }),
    },
    {
      id: "putty",
      name: "Шпаклевка стен",
      description: "Финишное выравнивание под покраску/обои",
      formula: (area, thickness = 2) => ({
        amount: (area * thickness * 1.2) / 1000, // 1.2 кг на 1м² при толщине 1мм
        unit: "мешков по 20кг",
        cost: Math.round((area * thickness * 1.2 * 35) / 1000),
      }),
    },
    {
      id: "painting",
      name: "Покраска стен",
      description: "Окраска стен водоэмульсионной краской (2 слоя)",
      formula: (area) => ({
        amount: area * 0.3, // 0.3 л на м² в 2 слоя
        unit: "литров",
        cost: Math.round(area * 0.3 * 350),
      }),
    },
    {
      id: "priming",
      name: "Грунтовка стен",
      description: "Грунтование поверхности перед покраской/обоями",
      formula: (area) => ({
        amount: area * 0.2, // 0.2 л на м²
        unit: "литров",
        cost: Math.round(area * 0.2 * 200),
      }),
    },
    {
      id: "screed",
      name: "Стяжка пола",
      description: "Выравнивание пола цементно-песчаной стяжкой",
      formula: (area, thickness = 50) => ({
        amount: (area * thickness * 18) / 1000, // 18 кг на 1м² при толщине 1мм
        unit: "мешков по 50кг",
        cost: Math.round((area * thickness * 18 * 15) / 1000),
      }),
    },
    {
      id: "tiling",
      name: "Укладка плитки",
      description: "Облицовка стен/пола керамической плиткой",
      formula: (area) => ({
        amount: area * 1.15, // +15% на подрезку
        unit: "м²",
        cost: Math.round(area * 1.15 * 1800),
      }),
    },
    {
      id: "wallpaper",
      name: "Поклейка обоев",
      description: "Оклейка стен обоями",
      formula: (area) => ({
        amount: area * 1.1, // +10% на подгонку рисунка
        unit: "м²",
        cost: Math.round(area * 1.1 * 450),
      }),
    },
    {
      id: "flooring",
      name: "Напольное покрытие",
      description: "Ламинат, линолеум, паркетная доска",
      formula: (area) => ({
        amount: area * 1.1, // +10% запас
        unit: "м²",
        cost: Math.round(area * 1.1 * 1200),
      }),
    },
  ];

  const handleWorkToggle = (workId: string) => {
    setSelectedWorks((prev) =>
      prev.includes(workId) ? prev.filter((id) => id !== workId) : [...prev, workId]
    );
    if (!workParams[workId]) {
      setWorkParams((prev) => ({ ...prev, [workId]: { area: 20, thickness: 10 } }));
    }
  };

  const updateWorkParam = (workId: string, param: "area" | "thickness", value: number) => {
    setWorkParams((prev) => ({
      ...prev,
      [workId]: { ...prev[workId], [param]: value },
    }));
  };

  const calculateResults = () => {
    const results: Array<{ name: string; amount: string; cost: number }> = [];
    let totalCost = 0;

    selectedWorks.forEach((workId) => {
      const work = workTypes.find((w) => w.id === workId);
      if (!work) return;

      const params = workParams[workId] || { area: 20, thickness: 10 };
      const result = work.formula(params.area, params.thickness);
      
      totalCost += result.cost;
      results.push({
        name: work.name,
        amount: `${result.amount.toFixed(1)} ${result.unit}`,
        cost: result.cost,
      });
    });

    return { results, totalCost };
  };

  const { results, totalCost } = calculateResults();

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
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                    <CheckSquare className="w-8 h-8 text-primary" />
                    Выберите виды работ
                  </h2>
                  <p className="text-muted-foreground">
                    Отметьте необходимые работы и укажите параметры для каждой
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                  {workTypes.map((work) => (
                    <Card key={work.id} className="border-2 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <Checkbox
                            id={work.id}
                            checked={selectedWorks.includes(work.id)}
                            onCheckedChange={() => handleWorkToggle(work.id)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <Label htmlFor={work.id} className="text-lg font-semibold cursor-pointer">
                              {work.name}
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
                          </div>
                        </div>

                        {selectedWorks.includes(work.id) && (
                          <div className="mt-4 space-y-4 pl-7 border-l-2 border-primary/30">
                            <div>
                              <Label htmlFor={`${work.id}-area`} className="text-sm font-medium mb-2 block">
                                Площадь (м²)
                              </Label>
                              <Input
                                id={`${work.id}-area`}
                                type="number"
                                min="1"
                                value={workParams[work.id]?.area || 20}
                                onChange={(e) =>
                                  updateWorkParam(work.id, "area", parseFloat(e.target.value) || 0)
                                }
                                className="w-full"
                              />
                            </div>

                            {["plastering", "putty", "screed"].includes(work.id) && (
                              <div>
                                <Label htmlFor={`${work.id}-thickness`} className="text-sm font-medium mb-2 block">
                                  Толщина слоя (мм)
                                </Label>
                                <Input
                                  id={`${work.id}-thickness`}
                                  type="number"
                                  min="1"
                                  value={workParams[work.id]?.thickness || 10}
                                  onChange={(e) =>
                                    updateWorkParam(work.id, "thickness", parseFloat(e.target.value) || 0)
                                  }
                                  className="w-full"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {selectedWorks.length > 0 ? (
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Ruler className="w-6 h-6 text-primary" />
                        Результаты расчета
                      </h2>

                      <div className="space-y-3 mb-6">
                        {results.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors"
                          >
                            <div>
                              <p className="font-medium text-foreground">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.amount}</p>
                            </div>
                            <span className="font-bold text-primary text-lg">
                              {formatPrice(item.cost)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t-2 pt-6 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-foreground">
                            Итого материалов:
                          </span>
                          <span className="text-3xl font-bold text-primary">
                            {formatPrice(totalCost)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          * Цены указаны без учета доставки и работ по монтажу
                        </p>
                      </div>

                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
                        onClick={() => setIsContactOpen(true)}
                      >
                        Получить точный расчет от специалиста
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-2 border-dashed">
                    <CardContent className="p-12 text-center">
                      <Calculator className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Выберите виды работ
                      </h3>
                      <p className="text-muted-foreground">
                        Отметьте нужные работы выше, чтобы увидеть расчет материалов и стоимости
                      </p>
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