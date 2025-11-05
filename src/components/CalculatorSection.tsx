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
                      step={1}
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
                          : "hover:bg-gray-50 hover:text-gray-900"
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
                          : "hover:bg-gray-50 hover:text-gray-900"
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
                          : "hover:bg-gray-50 hover:text-gray-900"
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
                          : "hover:bg-gray-50 hover:text-gray-900"
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
                <div className="mt-8 space-y-6">
                  <div className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 rounded-3xl border-2 border-primary/20 shadow-2xl animate-fade-in">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 p-8 md:p-10">
                      {/* Основная цена */}
                      <div className="text-center mb-8">
                        <div className="inline-block mb-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                            <Calculator className="w-4 h-4" />
                            <span>Предварительная стоимость</span>
                          </div>
                        </div>
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-20 animate-pulse"></div>
                          <p className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                            {formatPrice(calculatedPrice)} ₽
                          </p>
                        </div>
                      </div>
                      
                      {/* Бесплатные услуги - вертикальные карточки */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>
                          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-lg font-semibold text-gray-700 mb-2">Замеры помещения</p>
                                <p className="text-2xl font-black text-emerald-600">БЕСПЛАТНО</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>
                          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-lg font-semibold text-gray-700 mb-2">Расчет сметы</p>
                                <p className="text-2xl font-black text-emerald-600">БЕСПЛАТНО</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Disclaimer */}
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl p-6 mb-6 border border-gray-200/50">
                        <p className="text-gray-600 text-sm text-center leading-relaxed">
                          <span className="font-semibold text-gray-700">Важно:</span> Указанная сумма носит ориентировочный характер. Точная стоимость и детальная смета будут рассчитаны специалистом после выезда на объект и проведения профессиональных замеров.
                        </p>
                      </div>
                      
                      {/* CTA Button */}
                      <Button
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent('openContactDialog'));
                        }}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                        size="lg"
                      >
                        <Calculator className="w-5 h-5 mr-2" />
                        Получить точный расчет
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden p-8 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-400/40 shadow-lg animate-fade-in">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl -z-10"></div>
                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        🎁 Дизайн-проект в подарок!
                      </h3>
                      <p className="text-gray-700 text-lg mb-3 max-w-2xl mx-auto">
                        При заказе ремонта от 50 м² — базовый дизайн-проект совершенно бесплатно
                      </p>
                      <p className="text-gray-600 text-sm max-w-xl mx-auto">
                        Включает планировку и расстановку мебели (без визуализаций и подбора материалов)
                      </p>
                    </div>
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
