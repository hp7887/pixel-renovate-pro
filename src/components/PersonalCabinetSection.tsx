import { Smartphone, Video, FileText, MessageCircle, Calendar, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cabinetFeatures = [
  {
    icon: Video,
    title: "Видеонаблюдение",
    description: "Смотрите трансляцию с объекта в любое время"
  },
  {
    icon: FileText,
    title: "Документооборот",
    description: "Все документы, договоры и акты в одном месте"
  },
  {
    icon: MessageCircle,
    title: "Чат с бригадой",
    description: "Прямое общение с прорабом и специалистами"
  },
  {
    icon: Calendar,
    title: "График работ",
    description: "Планирование и контроль выполнения этапов"
  },
  {
    icon: CreditCard,
    title: "Финансы",
    description: "Контроль бюджета и оплата услуг онлайн"
  }
];

const PersonalCabinetSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-slide-in-left">
            <h2 className="text-display font-display font-bold text-foreground mb-6">
              Личный кабинет с полным контролем
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Следите за каждым этапом ремонта через персональный кабинет. 
              Онлайн-камеры, документы, общение с бригадой и контроль бюджета — 
              всё в одном приложении.
            </p>
            
            <div className="space-y-6">
              {cabinetFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-8 gradient-primary text-white hover:opacity-90 transition-smooth">
              <Smartphone className="mr-2 h-5 w-5" />
              Демо личного кабинета
            </Button>
          </div>
          
          {/* Right content - Cabinet preview */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Main cabinet interface mockup */}
              <Card className="shadow-primary">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-primary text-white p-6 rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Проект "Квартира на Тверской"</h3>
                        <p className="text-white/80 text-sm">Этап: Черновая отделка</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Онлайн</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video preview area */}
                  <div className="p-6">
                    <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-6">
                      <div className="text-center">
                        <Video className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Видео с камеры №1</p>
                        <p className="text-xs text-muted-foreground">Кухня - прямая трансляция</p>
                      </div>
                    </div>
                    
                    {/* Progress indicators */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Общий прогресс</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-card p-4 animate-scale-in">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 gradient-accent rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Новое сообщение</p>
                    <p className="text-xs text-muted-foreground">от прораба Алексея</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCabinetSection;