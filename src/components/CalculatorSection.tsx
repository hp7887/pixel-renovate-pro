import { useState } from "react";
import { Calculator, Minus, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const CalculatorSection = () => {
  const [area, setArea] = useState(15);
  const [rooms, setRooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [levelFloors, setLevelFloors] = useState(false);
  const [levelWalls, setLevelWalls] = useState(false);
  const [plumbingWorks, setPlumbingWorks] = useState(false);
  const [electricalWorks, setElectricalWorks] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    // Базовая цена за 15м², 1 комната, 1 санузел = 173909
    const basePrice = (area / 15) * 173909;
    
    // Доп комнаты (каждая после первой)
    const additionalRoomsPrice = Math.max(0, rooms - 1) * 32800;
    
    // Доп санузлы (каждый после первого)
    const additionalBathroomsPrice = Math.max(0, bathrooms - 1) * 86400;
    
    // Доп работы
    let additionalWorksPrice = 0;
    if (levelFloors) additionalWorksPrice += 9172;
    if (levelWalls) additionalWorksPrice += 7400;
    if (plumbingWorks) additionalWorksPrice += 16600;
    if (electricalWorks) additionalWorksPrice += 18500;
    
    const total = basePrice + additionalRoomsPrice + additionalBathroomsPrice + additionalWorksPrice;
    setCalculatedPrice(Math.round(total));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  return (
    <section id="calculator" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-lg">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            КАЛЬКУЛЯТОР СТОИМОСТИ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Рассчитайте примерную стоимость вашего ремонта за 1 минуту
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b">
              <CardTitle className="text-2xl md:text-3xl text-center">Расчет стоимости ремонта</CardTitle>
              <CardDescription className="text-center text-base">
                Заполните данные для получения точного расчета
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="space-y-8">
                {/* Площадь помещения */}
                <div>
                  <label className="text-lg font-semibold text-gray-700 block mb-4">
                    Площадь помещения
                  </label>
                  <div className="bg-white rounded-xl border-2 p-6">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => setArea(Math.max(15, area - 5))}
                        className="h-12 w-12"
                      >
                        <Minus className="h-5 w-5" />
                      </Button>
                      <span className="text-3xl font-bold text-gray-900 min-w-[100px] text-center">
                        {area}
                      </span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => setArea(Math.min(500, area + 5))}
                        className="h-12 w-12"
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                    <Slider
                      min={15}
                      max={500}
                      step={5}
                      value={[area]}
                      onValueChange={(value) => setArea(value[0])}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Комнаты и Санузлы */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Комнаты */}
                  <div>
                    <label className="text-lg font-semibold text-gray-700 block mb-4">
                      Комнаты
                    </label>
                    <div className="bg-white rounded-xl border-2 p-6">
                      <div className="flex items-center justify-center gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => setRooms(Math.max(1, rooms - 1))}
                          className="h-12 w-12"
                        >
                          <Minus className="h-5 w-5" />
                        </Button>
                        <span className="text-3xl font-bold text-gray-900 min-w-[60px] text-center">
                          {rooms}
                        </span>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => setRooms(rooms + 1)}
                          className="h-12 w-12"
                        >
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Санузлы */}
                  <div>
                    <label className="text-lg font-semibold text-gray-700 block mb-4">
                      Санузлы
                    </label>
                    <div className="bg-white rounded-xl border-2 p-6">
                      <div className="flex items-center justify-center gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                          className="h-12 w-12"
                        >
                          <Minus className="h-5 w-5" />
                        </Button>
                        <span className="text-3xl font-bold text-gray-900 min-w-[60px] text-center">
                          {bathrooms}
                        </span>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => setBathrooms(bathrooms + 1)}
                          className="h-12 w-12"
                        >
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Доп. работы */}
                <div>
                  <label className="text-lg font-semibold text-gray-700 block mb-4">
                    Доп. работы
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant={levelFloors ? "default" : "outline"}
                      onClick={() => setLevelFloors(!levelFloors)}
                      className={`h-auto py-4 px-6 text-base font-medium ${
                        levelFloors 
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700" 
                          : "hover:bg-gray-50"
                      }`}
                    >
                      Выровнять полы
                    </Button>
                    <Button
                      type="button"
                      variant={levelWalls ? "default" : "outline"}
                      onClick={() => setLevelWalls(!levelWalls)}
                      className={`h-auto py-4 px-6 text-base font-medium ${
                        levelWalls 
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700" 
                          : "hover:bg-gray-50"
                      }`}
                    >
                      Выровнять стены
                    </Button>
                    <Button
                      type="button"
                      variant={plumbingWorks ? "default" : "outline"}
                      onClick={() => setPlumbingWorks(!plumbingWorks)}
                      className={`h-auto py-4 px-6 text-base font-medium ${
                        plumbingWorks 
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700" 
                          : "hover:bg-gray-50"
                      }`}
                    >
                      Сантехнические работы
                    </Button>
                    <Button
                      type="button"
                      variant={electricalWorks ? "default" : "outline"}
                      onClick={() => setElectricalWorks(!electricalWorks)}
                      className={`h-auto py-4 px-6 text-base font-medium ${
                        electricalWorks 
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700" 
                          : "hover:bg-gray-50"
                      }`}
                    >
                      Электромонтажные работы
                    </Button>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={calculatePrice}
                  size="lg"
                  className="w-full text-lg h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Рассчитать смету
                </Button>
              </div>

              {/* Результат расчета */}
              {calculatedPrice !== null && (
                <div className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-primary/20 animate-fade-in">
                  <div className="text-center">
                    <p className="text-gray-600 text-lg mb-2">Предварительный расчет</p>
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-4">
                      {formatPrice(calculatedPrice)} ₽
                    </p>
                    <p className="text-gray-600 text-sm mt-4 italic">
                      * Указанная сумма носит ориентировочный характер. Точная стоимость и детальная смета будут рассчитаны специалистом после выезда на объект и проведения профессиональных замеров.
                    </p>
                    <Button
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('openContactDialog'));
                      }}
                      className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      size="lg"
                    >
                      Получить точный расчет
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
