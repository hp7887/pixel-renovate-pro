import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Zap, PaintBucket } from "lucide-react";

const DesignDetailsSection = () => {
  return (
    <section id="design-details" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Что включает дизайн-проект в подарок*
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            При заказе ремонта мы предоставляем базовый дизайн-проект квартиры совершенно бесплатно
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Планировка помещений</h3>
                <p className="text-gray-600">Оптимальное расположение комнат с учетом ваших потребностей и особенностей планировки</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PaintBucket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Расстановка мебели</h3>
                <p className="text-gray-600">Функциональное размещение мебели для максимального комфорта и эргономичности</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Расположение коммуникаций</h3>
                <p className="text-gray-600">Схема размещения электрики, сантехники и вентиляции согласно строительным нормам</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Важно знать</h3>
                <p className="text-gray-600">Базовый проект при заказе от 500 000 ₽. Включает планировку, но без 3D-визуализации. Расширенный проект с 3D и авторским надзором - дополнительно.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDetailsSection;