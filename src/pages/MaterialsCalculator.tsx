import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, Ruler, Plus, Trash2, Home, CheckCircle2 } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import heroImage from "@/assets/materials-calculator-hero.jpg";
import selectionImage from "@/assets/materials-selection-process.jpg";
import costImage from "@/assets/materials-cost-calculation.jpg";
import LazyImage from "@/components/LazyImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

type RoomType = "living" | "bedroom" | "kitchen" | "bathroom" | "corridor" | "other";

type MaterialQuality = "economy" | "standard" | "premium";

type SurfaceCondition = "new" | "good" | "needs_repair" | "major_repair";

type Room = {
  id: string;
  name: string;
  type: RoomType;
  area: number;
  height: number;
  perimeter?: number;
  selectedWorks: {
    [key: string]: boolean;
  };
};

type WorkItem = {
  id: string;
  name: string;
  category: "walls" | "floors" | "ceiling" | "other";
  prices: {
    economy: number;
    standard: number;
    premium: number;
  };
  unit: string;
  calculateArea: (room: Room) => number;
};

const MaterialsCalculator = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Детальные параметры
  const [propertyType, setPropertyType] = useState<string>("apartment");
  const [surfaceCondition, setSurfaceCondition] = useState<SurfaceCondition>("good");
  const [materialQuality, setMaterialQuality] = useState<MaterialQuality>("standard");
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: "1",
      name: "Гостиная",
      type: "living",
      area: 20,
      height: 2.7,
      perimeter: 18,
      selectedWorks: {}
    }
  ]);

  const roomTypes: { value: RoomType; label: string }[] = [
    { value: "living", label: "Гостиная" },
    { value: "bedroom", label: "Спальня" },
    { value: "kitchen", label: "Кухня" },
    { value: "bathroom", label: "Ванная/санузел" },
    { value: "corridor", label: "Коридор" },
    { value: "other", label: "Другое" },
  ];

  const workItems: WorkItem[] = [
    {
      id: "plaster_walls",
      name: "Штукатурка стен",
      category: "walls",
      prices: { economy: 400, standard: 600, premium: 900 },
      unit: "м²",
      calculateArea: (room) => (room.perimeter || room.area * 0.4) * room.height,
    },
    {
      id: "putty_walls",
      name: "Шпаклевка стен",
      category: "walls",
      prices: { economy: 250, standard: 400, premium: 600 },
      unit: "м²",
      calculateArea: (room) => (room.perimeter || room.area * 0.4) * room.height,
    },
    {
      id: "paint_walls",
      name: "Покраска стен",
      category: "walls",
      prices: { economy: 200, standard: 350, premium: 550 },
      unit: "м²",
      calculateArea: (room) => (room.perimeter || room.area * 0.4) * room.height,
    },
    {
      id: "wallpaper",
      name: "Поклейка обоев",
      category: "walls",
      prices: { economy: 300, standard: 450, premium: 700 },
      unit: "м²",
      calculateArea: (room) => (room.perimeter || room.area * 0.4) * room.height,
    },
    {
      id: "floor_screed",
      name: "Стяжка пола",
      category: "floors",
      prices: { economy: 400, standard: 550, premium: 750 },
      unit: "м²",
      calculateArea: (room) => room.area,
    },
    {
      id: "laminate",
      name: "Укладка ламината",
      category: "floors",
      prices: { economy: 300, standard: 400, premium: 600 },
      unit: "м²",
      calculateArea: (room) => room.area,
    },
    {
      id: "tiles_floor",
      name: "Укладка плитки на пол",
      category: "floors",
      prices: { economy: 1200, standard: 1500, premium: 2000 },
      unit: "м²",
      calculateArea: (room) => room.area,
    },
    {
      id: "ceiling_paint",
      name: "Покраска потолка",
      category: "ceiling",
      prices: { economy: 250, standard: 400, premium: 600 },
      unit: "м²",
      calculateArea: (room) => room.area,
    },
    {
      id: "stretch_ceiling",
      name: "Натяжной потолок",
      category: "ceiling",
      prices: { economy: 350, standard: 450, premium: 700 },
      unit: "м²",
      calculateArea: (room) => room.area,
    },
    {
      id: "electrical",
      name: "Электромонтажные работы",
      category: "other",
      prices: { economy: 800, standard: 1200, premium: 1800 },
      unit: "точка",
      calculateArea: (room) => Math.ceil(room.area / 5), // примерно 1 точка на 5м²
    },
    {
      id: "plumbing",
      name: "Сантехнические работы",
      category: "other",
      prices: { economy: 1500, standard: 2500, premium: 4000 },
      unit: "точка",
      calculateArea: (room) => room.type === "bathroom" || room.type === "kitchen" ? 1 : 0,
    },
  ];

  const addRoom = () => {
    const newRoom: Room = {
      id: Date.now().toString(),
      name: `Комната ${rooms.length + 1}`,
      type: "other",
      area: 15,
      height: 2.7,
      perimeter: 16,
      selectedWorks: {}
    };
    setRooms([...rooms, newRoom]);
  };

  const removeRoom = (id: string) => {
    setRooms(rooms.filter(room => room.id !== id));
  };

  const updateRoom = (id: string, updates: Partial<Room>) => {
    setRooms(rooms.map(room => 
      room.id === id ? { ...room, ...updates } : room
    ));
  };

  const toggleWork = (roomId: string, workId: string) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        return {
          ...room,
          selectedWorks: {
            ...room.selectedWorks,
            [workId]: !room.selectedWorks[workId]
          }
        };
      }
      return room;
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    const breakdown: { room: string; work: string; area: number; cost: number }[] = [];

    rooms.forEach(room => {
      workItems.forEach(work => {
        if (room.selectedWorks[work.id]) {
          const area = work.calculateArea(room);
          const price = work.prices[materialQuality];
          const cost = area * price;
          
          // Коэффициент на состояние поверхностей
          let conditionMultiplier = 1;
          if (surfaceCondition === "needs_repair") conditionMultiplier = 1.15;
          if (surfaceCondition === "major_repair") conditionMultiplier = 1.3;
          
          const finalCost = cost * conditionMultiplier;
          total += finalCost;
          
          breakdown.push({
            room: room.name,
            work: work.name,
            area: Math.ceil(area * 10) / 10,
            cost: Math.round(finalCost)
          });
        }
      });
    });

    return { total: Math.round(total), breakdown };
  };

  const { total, breakdown } = calculateTotal();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  const groupedWorks = {
    walls: workItems.filter(w => w.category === "walls"),
    floors: workItems.filter(w => w.category === "floors"),
    ceiling: workItems.filter(w => w.category === "ceiling"),
    other: workItems.filter(w => w.category === "other"),
  };

  return (
    <>
      <Helmet>
        <title>Калькулятор Ремонта Квартиры с Детальным Расчетом | SPB-DSRemont</title>
        <meta 
          name="description" 
          content="Подробный калькулятор ремонта квартиры в СПб. Рассчитайте стоимость по комнатам, выберите качество материалов и виды работ. Точная смета с разбивкой по помещениям." 
        />
        <link rel="canonical" href="https://spb-dsremont.ru/materials-calculator" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10" />
            <LazyImage
              src={heroImage}
              alt="Детальный калькулятор ремонта"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 container mx-auto px-4 py-20 md:py-28">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
                  <Calculator className="w-8 h-8" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Калькулятор Ремонта с Детальным Расчетом
                </h1>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Рассчитайте стоимость ремонта по комнатам, выберите качество материалов и виды работ. 
                  Получите подробную смету с учетом всех параметров.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                {/* Общие параметры */}
                <Card className="mb-6 border-2">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Home className="w-6 h-6 text-primary" />
                      Общие параметры проекта
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label className="text-base font-medium mb-2 block">
                          Тип помещения
                        </Label>
                        <Select value={propertyType} onValueChange={setPropertyType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="apartment">Квартира</SelectItem>
                            <SelectItem value="house">Частный дом</SelectItem>
                            <SelectItem value="office">Офис</SelectItem>
                            <SelectItem value="commercial">Коммерческое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-base font-medium mb-2 block">
                          Состояние поверхностей
                        </Label>
                        <Select 
                          value={surfaceCondition} 
                          onValueChange={(v) => setSurfaceCondition(v as SurfaceCondition)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">Новостройка (идеально)</SelectItem>
                            <SelectItem value="good">Хорошее состояние</SelectItem>
                            <SelectItem value="needs_repair">Требует ремонта (+15%)</SelectItem>
                            <SelectItem value="major_repair">Капитальный ремонт (+30%)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-base font-medium mb-2 block">
                          Качество материалов
                        </Label>
                        <Select 
                          value={materialQuality} 
                          onValueChange={(v) => setMaterialQuality(v as MaterialQuality)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="economy">Эконом класс</SelectItem>
                            <SelectItem value="standard">Стандарт</SelectItem>
                            <SelectItem value="premium">Премиум</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Комнаты */}
                <div className="space-y-6">
                  {rooms.map((room, index) => (
                    <Card key={room.id} className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-lg font-bold text-primary">{index + 1}</span>
                            </div>
                            <Input
                              value={room.name}
                              onChange={(e) => updateRoom(room.id, { name: e.target.value })}
                              className="max-w-[200px] font-semibold text-lg"
                            />
                          </div>
                          {rooms.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeRoom(room.id)}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Удалить
                            </Button>
                          )}
                        </div>

                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                          <div>
                            <Label className="text-sm font-medium mb-2 block">
                              Тип помещения
                            </Label>
                            <Select 
                              value={room.type} 
                              onValueChange={(v) => updateRoom(room.id, { type: v as RoomType })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {roomTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-sm font-medium mb-2 block">
                              Площадь (м²)
                            </Label>
                            <Input
                              type="number"
                              value={room.area}
                              onChange={(e) => updateRoom(room.id, { area: parseFloat(e.target.value) || 0 })}
                              min="1"
                              step="0.1"
                            />
                          </div>

                          <div>
                            <Label className="text-sm font-medium mb-2 block">
                              Высота (м)
                            </Label>
                            <Input
                              type="number"
                              value={room.height}
                              onChange={(e) => updateRoom(room.id, { height: parseFloat(e.target.value) || 0 })}
                              min="2"
                              max="5"
                              step="0.1"
                            />
                          </div>

                          <div>
                            <Label className="text-sm font-medium mb-2 block">
                              Периметр (м)
                            </Label>
                            <Input
                              type="number"
                              value={room.perimeter || Math.round(room.area * 0.4 * 10) / 10}
                              onChange={(e) => updateRoom(room.id, { perimeter: parseFloat(e.target.value) || undefined })}
                              min="1"
                              step="0.1"
                              placeholder="Авто"
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-4">Выберите виды работ:</h3>
                          
                          <Tabs defaultValue="walls" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="walls">Стены</TabsTrigger>
                              <TabsTrigger value="floors">Полы</TabsTrigger>
                              <TabsTrigger value="ceiling">Потолок</TabsTrigger>
                              <TabsTrigger value="other">Прочее</TabsTrigger>
                            </TabsList>

                            {Object.entries(groupedWorks).map(([category, works]) => (
                              <TabsContent key={category} value={category} className="space-y-3 mt-4">
                                {works.map((work) => (
                                  <div 
                                    key={work.id}
                                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      <Checkbox
                                        id={`${room.id}-${work.id}`}
                                        checked={room.selectedWorks[work.id] || false}
                                        onCheckedChange={() => toggleWork(room.id, work.id)}
                                      />
                                      <Label
                                        htmlFor={`${room.id}-${work.id}`}
                                        className="text-sm font-medium cursor-pointer"
                                      >
                                        {work.name}
                                      </Label>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                      {formatPrice(work.prices[materialQuality])}/{work.unit}
                                    </span>
                                  </div>
                                ))}
                              </TabsContent>
                            ))}
                          </Tabs>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Button
                    onClick={addRoom}
                    variant="outline"
                    className="w-full border-2 border-dashed border-primary text-primary hover:bg-primary/5"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Добавить помещение
                  </Button>
                </div>

                {/* Итоговая смета */}
                {breakdown.length > 0 && (
                  <Card className="mt-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Calculator className="w-6 h-6 text-primary" />
                        Детальная смета
                      </h2>

                      <div className="space-y-4 mb-6">
                        {breakdown.map((item, index) => (
                          <div 
                            key={index}
                            className="p-4 bg-background rounded-lg border flex items-center justify-between"
                          >
                            <div>
                              <p className="font-medium text-foreground">{item.room}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.work} • {item.area} м²
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-lg">{formatPrice(item.cost)}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t-2 pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-medium text-muted-foreground">
                            Коэффициент состояния:
                          </span>
                          <span className="text-lg font-medium">
                            {surfaceCondition === "new" && "×1.0"}
                            {surfaceCondition === "good" && "×1.0"}
                            {surfaceCondition === "needs_repair" && "×1.15"}
                            {surfaceCondition === "major_repair" && "×1.3"}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between p-6 bg-primary/10 rounded-lg">
                          <span className="text-xl font-bold text-foreground">
                            Итоговая стоимость:
                          </span>
                          <span className="text-3xl font-bold text-primary">
                            {formatPrice(total)}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                              Что включено в расчет:
                            </p>
                            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                              <li>• Работа мастеров по всем выбранным видам</li>
                              <li>• Материалы выбранного качества</li>
                              <li>• Коэффициент на состояние поверхностей</li>
                              <li>• Расход материалов с учетом технологии</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => setIsContactOpen(true)}
                        className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
                      >
                        Получить точную смету от специалиста
                      </Button>
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
                  Преимущества детального калькулятора
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Calculator className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Точный расчет</h3>
                      <p className="text-foreground/80 text-sm">
                        Учет всех параметров каждого помещения и типа работ для максимальной точности
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Home className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">По комнатам</h3>
                      <p className="text-foreground/80 text-sm">
                        Отдельный расчет для каждой комнаты с учетом её особенностей и назначения
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Ruler className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Гибкие настройки</h3>
                      <p className="text-foreground/80 text-sm">
                        Выбор качества материалов, учет состояния поверхностей и других факторов
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <LazyImage
                      src={selectionImage}
                      alt="Детальный расчет ремонта"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Как пользоваться калькулятором?
                    </h3>
                    <ol className="space-y-3 text-foreground/80">
                      <li className="flex gap-3">
                        <span className="font-bold text-primary flex-shrink-0">1.</span>
                        <span>Укажите общие параметры: тип помещения, состояние и качество материалов</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary flex-shrink-0">2.</span>
                        <span>Добавьте все комнаты с их площадью, высотой и периметром</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary flex-shrink-0">3.</span>
                        <span>Выберите нужные виды работ для каждого помещения</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary flex-shrink-0">4.</span>
                        <span>Получите подробную смету с разбивкой по комнатам и работам</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Нужна профессиональная смета?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Наши специалисты выедут на объект, произведут точные замеры и составят детальную смету 
                  с учетом всех особенностей вашего помещения. Бесплатный выезд и консультация.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Заказать профессиональный расчет
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