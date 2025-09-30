import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="DigitalSTROY" className="h-12 w-auto" />
          </div>
          
          {/* Navigation */}
          <nav className="hidden sm:flex items-center space-x-2 md:space-x-4 lg:space-x-6">
            <a href="#calculator" className="text-gray-800 hover:text-primary font-medium transition-colors text-xs md:text-sm lg:text-base px-2 py-1">СТОИМОСТЬ</a>
            <a href="#work-steps" className="text-gray-800 hover:text-primary font-medium transition-colors text-xs md:text-sm lg:text-base px-2 py-1">ЭТАПЫ РАБОТЫ</a>
            <a href="#personal-cabinet" className="text-gray-800 hover:text-primary font-medium transition-colors text-xs md:text-sm lg:text-base px-2 py-1">ЛИЧНЫЙ КАБИНЕТ</a>
            <a href="#gallery" className="text-gray-800 hover:text-primary font-medium transition-colors text-xs md:text-sm lg:text-base px-2 py-1">ГОТОВЫЕ ОБЪЕКТЫ</a>
          </nav>
          
          {/* Contact info and social */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="hidden sm:flex items-center space-x-1 lg:space-x-2 text-gray-800 font-semibold">
              <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
              <a href="tel:+79152205556" className="hover:text-primary transition-colors text-xs lg:text-sm">
                8 915 220-55-56
              </a>
            </div>
            
            {/* Social buttons */}
            <div className="flex items-center space-x-1 lg:space-x-2">
              <Button 
                size="sm" 
                variant="outline"
                className="p-1.5 lg:p-2 border-primary text-primary hover:bg-primary hover:text-white h-8 w-8 lg:h-10 lg:w-10"
                onClick={() => window.open('https://wa.me/79152205556', '_blank')}
              >
                <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
              </Button>
              
              <Button 
                size="sm" 
                variant="outline"
                className="p-1.5 lg:p-2 border-primary text-primary hover:bg-primary hover:text-white h-8 w-8 lg:h-10 lg:w-10"
                onClick={() => window.open('https://t.me/digitalstroy', '_blank')}
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.162 1.684-.602 1.984-1.025 1.984-.896 0-1.745-.538-2.711-1.077-1.018-.566-1.554-.9-2.421-1.455-.994-.636-.362-1.04.24-1.635.158-.155 2.836-2.575 2.888-2.79.006-.027.01-.123-.05-.175-.061-.052-.146-.033-.21-.02-.09.019-1.474.933-4.16 2.74-.394.267-.739.396-1.037.388-.341-.009-1.023-.192-1.52-.35-.61-.193-.94-.295-.905-.623.018-.17.211-.342.579-.516 2.362-1.02 3.937-1.697 4.725-2.03 2.249-.973 2.715-1.143 3.019-1.148.067-.001.218.015.315.09.08.062.102.144.112.202.01.058.023.19.013.294z"/>
                </svg>
              </Button>
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-semibold ml-2 lg:ml-4"
              size="default"
              onClick={() => setIsContactOpen(true)}
            >
              <Phone className="mr-1 lg:mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Начать проект</span>
            </Button>
          </div>
        </div>
      </div>
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </header>
  );
};

export default Header;