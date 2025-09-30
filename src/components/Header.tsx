import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              Digital<span className="text-primary">STROY</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-primary transition-colors">СТОИМОСТЬ</a>
            <a href="#" className="text-white hover:text-primary transition-colors">ЭТАПЫ РАБОТЫ</a>
            <a href="#" className="text-white hover:text-primary transition-colors">ЛИЧНЫЙ КАБИНЕТ</a>
            <a href="#" className="text-white hover:text-primary transition-colors">ГОТОВЫЕ ОБЪЕКТЫ</a>
            <a href="#" className="text-white hover:text-primary transition-colors">ФИЛИАЛЫ</a>
            <a href="#" className="text-white hover:text-primary transition-colors">КОНТАКТЫ</a>
          </nav>
          
          {/* Contact info */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-white font-semibold">
              <Phone className="w-4 h-4" />
              <span>8 915 220-55-56</span>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;