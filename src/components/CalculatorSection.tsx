import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CalculatorSection = () => {
  const [area, setArea] = useState([50]);
  const [roomType, setRoomType] = useState("");
  const [workType, setWorkType] = useState("");
  const [materials, setMaterials] = useState("");
  const { toast } = useToast();

  const calculateCost = () => {
    let baseCost = 0;
    
    // Base cost per square meter depending on work type
    switch (workType) {
      case "cosmetic":
        baseCost = 8000;
        break;
      case "major":
        baseCost = 15000;
        break;
      case "premium":
        baseCost = 25000;
        break;
      default:
        baseCost = 10000;
    }
    
    // Room type multiplier
    let roomMultiplier = 1;
    switch (roomType) {
      case "bathroom":
        roomMultiplier = 1.5;
        break;
      case "kitchen":
        roomMultiplier = 1.3;
        break;
      case "living":
        roomMultiplier = 1.1;
        break;
      default:
        roomMultiplier = 1;
    }
    
    // Materials multiplier
    let materialsMultiplier = 1;
    switch (materials) {
      case "economy":
        materialsMultiplier = 0.8;
        break;
      case "standard":
        materialsMultiplier = 1;
        break;
      case "premium":
        materialsMultiplier = 1.4;
        break;
      default:
        materialsMultiplier = 1;
    }
    
    const totalCost = area[0] * baseCost * roomMultiplier * materialsMultiplier;
    return Math.round(totalCost);
  };

  const handleCalculate = () => {
    if (!roomType || !workType || !materials) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, выберите все параметры для расчета стоимости",
        variant: "destructive"
      });
      return;
    }

    const cost = calculateCost();
    toast({
      title: "Расчет готов!",
      description: `Примерная стоимость ремонта: ${cost.toLocaleString()} ₽`,
    });
  };

  const cost = roomType && workType && materials ? calculateCost() : 0;

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Calculator form */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h2 className="text-display font-display font-bold text-foreground mb-4">
                Калькулятор стоимости ремонта
              </h2>
              <p className="text-xl text-muted-foreground">
                Получите примерную стоимость ремонта за 2 минуты. 
                Точный расчет после осмотра объекта.
              </p>
            </div>
            
            <Card className="shadow-primary border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  {/* Area slider */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Площадь помещения: {area[0]} м²
                    </label>
                    <Slider
                      value={area}
                      onValueChange={setArea}
                      max={200}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>10 м²</span>
                      <span>200 м²</span>
                    </div>
                  </div>
                  
                  {/* Room type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Тип помещения
                    </label>
                    <Select onValueChange={setRoomType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип помещения" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Квартира</SelectItem>
                        <SelectItem value="house">Дом</SelectItem>
                        <SelectItem value="office">Офис</SelectItem>
                        <SelectItem value="bathroom">Ванная комната</SelectItem>
                        <SelectItem value="kitchen">Кухня</SelectItem>
                        <SelectItem value="living">Гостиная</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Work type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Тип ремонта
                    </label>
                    <Select onValueChange={setWorkType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип ремонта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cosmetic">Косметический</SelectItem>
                        <SelectItem value="major">Капитальный</SelectItem>
                        <SelectItem value="premium">Премиум</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Materials */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Класс материалов
                    </label>
                    <Select onValueChange={setMaterials}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите класс материалов" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Эконом</SelectItem>
                        <SelectItem value="standard">Стандарт</SelectItem>
                        <SelectItem value="premium">Премиум</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Calculate button */}
                  <Button 
                    type="button"
                    onClick={handleCalculate}
                    className="w-full gradient-primary text-white hover:opacity-90 transition-smooth"
                    size="lg"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Рассчитать стоимость
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Right content - Results */}
          <div className="animate-slide-in-right">
            <Card className="gradient-hero text-white shadow-glow">
              <CardContent className="p-8">
                {cost > 0 ? (
                  <div className="text-center">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Примерная стоимость</h3>
                      <div className="text-4xl font-bold mb-1">
                        {cost.toLocaleString()} ₽
                      </div>
                      <div className="text-white/80">
                        {Math.round(cost / area[0]).toLocaleString()} ₽/м²
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span>Выезд замерщика бесплатно</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span>Смета в день визита</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span>Гарантия 5 лет</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 w-full transition-smooth"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Получить точный расчет
                    </Button>
                    
                    <p className="text-white/70 text-sm mt-4">
                      * Итоговая стоимость может отличаться после детального осмотра
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Calculator className="h-16 w-16 mx-auto mb-4 text-white/60" />
                    <h3 className="text-2xl font-bold mb-4">Калькулятор ремонта</h3>
                    <p className="text-white/80 mb-6">
                      Заполните параметры слева, чтобы получить предварительную 
                      стоимость ремонта
                    </p>
                    <div className="space-y-2">
                      <div className="text-white/70">✓ Бесплатный выезд замерщика</div>
                      <div className="text-white/70">✓ Подробная смета</div>
                      <div className="text-white/70">✓ Фиксированная цена</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Additional info */}
            <div className="mt-8 space-y-4">
              <Card className="shadow-card border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-secondary rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Консультация по телефону</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;