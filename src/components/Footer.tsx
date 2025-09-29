import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                  РемСтрой
                </h3>
                <p className="text-muted-foreground mt-2">
                  Современный ремонт с онлайн-контролем и гарантией качества
                </p>
              </div>
              
              {/* Social links */}
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Косметический ремонт</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Капитальный ремонт</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Дизайн интерьера</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Ремонт ванных комнат</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Ремонт кухни</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Электромонтажные работы</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Компания</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Контакты</a></li>
              </ul>
            </div>
            
            {/* Contact info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">+7 (495) 123-45-67</div>
                    <div className="text-sm text-muted-foreground">Звонки принимаем 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">info@remstroy.ru</div>
                    <div className="text-sm text-muted-foreground">Ответ в течение часа</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">г. Москва</div>
                    <div className="text-sm text-muted-foreground">ул. Строительная, 15</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Пн-Вс: 8:00-20:00</div>
                    <div className="text-sm text-muted-foreground">Консультации ежедневно</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 РемСтрой. Все права защищены.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;