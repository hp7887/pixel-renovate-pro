import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA content */}
          <div className="animate-fade-in-up mb-12">
            <h2 className="text-display font-display font-bold text-white mb-6">
              Готовы начать ремонт мечты?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Оставьте заявку сейчас и получите бесплатную консультацию, 
              выезд замерщика и подробную смету в течение 24 часов
            </p>
          </div>
          
          {/* Contact cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Phone */}
            <Card className="group hover:shadow-glow transition-smooth bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-smooth">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-white font-medium mb-1">Позвонить</div>
                <div className="text-white/80 text-sm">+7 (495) 123-45-67</div>
              </CardContent>
            </Card>
            
            {/* WhatsApp */}
            <Card className="group hover:shadow-glow transition-smooth bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-smooth">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-white font-medium mb-1">WhatsApp</div>
                <div className="text-white/80 text-sm">Быстрый ответ</div>
              </CardContent>
            </Card>
            
            {/* Email */}
            <Card className="group hover:shadow-glow transition-smooth bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-smooth">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-white font-medium mb-1">Email</div>
                <div className="text-white/80 text-sm">info@remstroy.ru</div>
              </CardContent>
            </Card>
            
            {/* Schedule */}
            <Card className="group hover:shadow-glow transition-smooth bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-smooth">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-white font-medium mb-1">Встреча</div>
                <div className="text-white/80 text-sm">Удобное время</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow transition-smooth font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Заказать звонок
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Написать в WhatsApp
            </Button>
          </div>
          
          {/* Benefits reminder */}
          <div className="grid md:grid-cols-3 gap-6 text-white/80 text-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Выезд замерщика бесплатно</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Смета в течение 24 часов</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Гарантия 5 лет</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;