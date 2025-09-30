import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Zap, PaintBucket } from "lucide-react";

const DesignDetailsSection = () => {
  return (
    <section id="design-details" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Что включает дизайн-проект в подарок*
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 px-4">
            При заказе ремонта мы предоставляем базовый дизайн-проект квартиры совершенно бесплатно
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Home className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Планировка помещений</h3>
                <p className="text-gray-600 text-sm md:text-base">Оптимальное расположение комнат с учетом ваших потребностей и особенностей планировки</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <PaintBucket className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Расстановка мебели</h3>
                <p className="text-gray-600 text-sm md:text-base">Функциональное размещение мебели для максимального комфорта и эргономичности</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Zap className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Расположение коммуникаций</h3>
                <p className="text-gray-600 text-sm md:text-base">Схема размещения электрики, сантехники и вентиляции согласно строительным нормам</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Важно знать</h3>
                <p className="text-gray-600 text-sm md:text-base">Базовый проект при заказе от 500 000 ₽. Включает планировку, но без 3D-визуализации. Расширенный проект с 3D и авторским надзором - дополнительно.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDetailsSection;