import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calculator, Home, Paintbrush, Calendar, Ruler } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const calculatorSchema = z.object({
  propertyType: z.enum(["newbuilding", "secondary", "house"], {
    required_error: "Выберите тип недвижимости",
  }),
  renovationType: z.enum(["rough", "finishing", "major", "designer", "cosmetic"], {
    required_error: "Выберите тип ремонта",
  }),
  area: z.string().min(1, "Укажите площадь").refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Площадь должна быть положительным числом",
  }),
  needsDesign: z.enum(["yes", "no"], {
    required_error: "Укажите, нужен ли дизайн-проект",
  }),
  startDate: z.string().min(1, "Укажите дату начала работ"),
});

type CalculatorFormData = z.infer<typeof calculatorSchema>;

const CalculatorSection = () => {
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [showFreeDesign, setShowFreeDesign] = useState(false);

  const form = useForm<CalculatorFormData>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      propertyType: undefined,
      renovationType: undefined,
      area: "",
      needsDesign: undefined,
      startDate: "",
    },
  });

  const onSubmit = (data: CalculatorFormData) => {
    const area = Number(data.area);
    let pricePerSqM = 0;

    // Расчет цены за квадратный метр
    switch (data.renovationType) {
      case "major":
      case "designer":
        pricePerSqM = 15000;
        break;
      case "cosmetic":
        pricePerSqM = 7000;
        break;
      case "rough":
        pricePerSqM = 12000;
        break;
      case "finishing":
        pricePerSqM = 10000;
        break;
      default:
        pricePerSqM = 12000;
    }

    const totalPrice = area * pricePerSqM;
    setCalculatedPrice(totalPrice);
    
    // Показываем сообщение о бесплатном дизайне
    if (data.needsDesign === "yes") {
      setShowFreeDesign(true);
    } else {
      setShowFreeDesign(false);
    }
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Тип недвижимости */}
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-3 mb-4">
                          <Home className="w-5 h-5 text-primary" />
                          <FormLabel className="text-lg font-semibold">Тип недвижимости</FormLabel>
                        </div>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                          >
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="newbuilding" id="newbuilding" />
                              <Label htmlFor="newbuilding" className="cursor-pointer flex-1">Новостройка</Label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="secondary" id="secondary" />
                              <Label htmlFor="secondary" className="cursor-pointer flex-1">Вторичка</Label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="house" id="house" />
                              <Label htmlFor="house" className="cursor-pointer flex-1">Дом</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Тип ремонта */}
                  <FormField
                    control={form.control}
                    name="renovationType"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-3 mb-4">
                          <Paintbrush className="w-5 h-5 text-primary" />
                          <FormLabel className="text-lg font-semibold">Тип ремонта</FormLabel>
                        </div>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                          >
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="rough" id="rough" />
                              <Label htmlFor="rough" className="cursor-pointer flex-1">
                                Черновой
                                <span className="block text-xs text-gray-500">12 000 ₽/м²</span>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="finishing" id="finishing" />
                              <Label htmlFor="finishing" className="cursor-pointer flex-1">
                                Чистовой
                                <span className="block text-xs text-gray-500">10 000 ₽/м²</span>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="major" id="major" />
                              <Label htmlFor="major" className="cursor-pointer flex-1">
                                Капитальный
                                <span className="block text-xs text-gray-500">15 000 ₽/м²</span>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="designer" id="designer" />
                              <Label htmlFor="designer" className="cursor-pointer flex-1">
                                Дизайнерский
                                <span className="block text-xs text-gray-500">15 000 ₽/м²</span>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer sm:col-span-2">
                              <RadioGroupItem value="cosmetic" id="cosmetic" />
                              <Label htmlFor="cosmetic" className="cursor-pointer flex-1">
                                Косметический
                                <span className="block text-xs text-gray-500">7 000 ₽/м²</span>
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Площадь */}
                  <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-3 mb-4">
                          <Ruler className="w-5 h-5 text-primary" />
                          <FormLabel className="text-lg font-semibold">Площадь помещения (м²)</FormLabel>
                        </div>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Например: 65"
                            className="text-lg h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Нужен ли дизайн-проект */}
                  <FormField
                    control={form.control}
                    name="needsDesign"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold">Нужен ли дизайн-проект?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-2 gap-4"
                          >
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="yes" id="design-yes" />
                              <Label htmlFor="design-yes" className="cursor-pointer flex-1">Да</Label>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                              <RadioGroupItem value="no" id="design-no" />
                              <Label htmlFor="design-no" className="cursor-pointer flex-1">Нет</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Дата начала работ */}
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-3 mb-4">
                          <Calendar className="w-5 h-5 text-primary" />
                          <FormLabel className="text-lg font-semibold">Когда планируете начать ремонт?</FormLabel>
                        </div>
                        <FormControl>
                          <Input
                            type="date"
                            className="text-lg h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Рассчитать стоимость
                  </Button>
                </form>
              </Form>

              {/* Результат расчета */}
              {calculatedPrice !== null && (
                <div className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-primary/20 animate-fade-in">
                  <div className="text-center">
                    <p className="text-gray-600 text-lg mb-2">Примерная стоимость ремонта:</p>
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-4">
                      {formatPrice(calculatedPrice)} ₽
                    </p>
                    {showFreeDesign && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full inline-block font-bold shadow-lg mb-4">
                        🎁 ДИЗАЙН-ПРОЕКТ В ПОДАРОК!
                      </div>
                    )}
                    <p className="text-gray-600 text-sm mt-4">
                      * Точная стоимость определяется после замеров и консультации со специалистом
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
