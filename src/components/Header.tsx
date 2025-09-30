import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactDialog from "./ContactDialog";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Слушаем глобальное событие для открытия диалога
  useEffect(() => {
    const handleOpenDialog = () => setIsContactOpen(true);
    window.addEventListener('openContactDialog', handleOpenDialog);
    return () => window.removeEventListener('openContactDialog', handleOpenDialog);
  }, []);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SPB-DSRemont" className="h-10 md:h-12 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link to="/portfolio" className="text-gray-800 hover:text-primary font-medium transition-colors text-sm xl:text-base px-2 py-1">ПОРТФОЛИО</Link>
            <Link to="/about" className="text-gray-800 hover:text-primary font-medium transition-colors text-sm xl:text-base px-2 py-1">О НАС</Link>
            <Link to="/reviews" className="text-gray-800 hover:text-primary font-medium transition-colors text-sm xl:text-base px-2 py-1">ОТЗЫВЫ</Link>
            <Link to="/guarantees" className="text-gray-800 hover:text-primary font-medium transition-colors text-sm xl:text-base px-2 py-1">ГАРАНТИИ</Link>
            <Link to="/contacts" className="text-gray-800 hover:text-primary font-medium transition-colors text-sm xl:text-base px-2 py-1">КОНТАКТЫ</Link>
          </nav>
          
          {/* Right side - Contact & Menu */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Desktop phone number */}
            <div className="hidden xl:flex items-center space-x-2 text-gray-800 font-semibold">
              <Phone className="w-4 h-4" />
              <a href="tel:+79152205556" className="hover:text-primary transition-colors text-sm">
                8 915 220-55-56
              </a>
            </div>
            
            {/* Social buttons - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              <Button 
                size="sm" 
                variant="outline"
                className="p-2 border-primary text-primary hover:bg-primary hover:text-white h-9 w-9"
                onClick={() => window.open('https://wa.me/79152205556', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              
              <Button 
                size="sm" 
                variant="outline"
                className="p-2 border-primary text-primary hover:bg-primary hover:text-white h-9 w-9"
                onClick={() => window.open('https://t.me/spbdsremont', '_blank')}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.162 1.684-.602 1.984-1.025 1.984-.896 0-1.745-.538-2.711-1.077-1.018-.566-1.554-.9-2.421-1.455-.994-.636-.362-1.04.24-1.635.158-.155 2.836-2.575 2.888-2.79.006-.027.01-.123-.05-.175-.061-.052-.146-.033-.21-.02-.09.019-1.474.933-4.16 2.74-.394.267-.739.396-1.037.388-.341-.009-1.023-.192-1.52-.35-.61-.193-.94-.295-.905-.623.018-.17.211-.342.579-.516 2.362-1.02 3.937-1.697 4.725-2.03 2.249-.973 2.715-1.143 3.019-1.148.067-.001.218.015.315.09.08.062.102.144.112.202.01.058.023.19.013.294z"/>
                </svg>
              </Button>
            </div>
            
            {/* CTA Button */}
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm md:text-base px-3 md:px-4 py-2"
              size="sm"
              onClick={() => setIsContactOpen(true)}
            >
              <Phone className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Начать проект</span>
              <span className="sm:hidden">Звонок</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden p-2 h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/portfolio" 
                className="text-gray-800 hover:text-primary font-medium transition-colors text-sm px-2 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ПОРТФОЛИО
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-primary font-medium transition-colors text-sm px-2 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О НАС
              </Link>
              <Link 
                to="/reviews" 
                className="text-gray-800 hover:text-primary font-medium transition-colors text-sm px-2 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ОТЗЫВЫ
              </Link>
              <Link 
                to="/guarantees" 
                className="text-gray-800 hover:text-primary font-medium transition-colors text-sm px-2 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ГАРАНТИИ
              </Link>
              <Link 
                to="/contacts" 
                className="text-gray-800 hover:text-primary font-medium transition-colors text-sm px-2 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                КОНТАКТЫ
              </Link>
              
              {/* Mobile contact info */}
              <div className="border-t pt-3 mt-3 space-y-3">
                <a href="tel:+79152205556" className="flex items-center space-x-2 text-gray-800 hover:text-primary transition-colors px-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold text-sm">8 915 220-55-56</span>
                </a>
                
                <div className="flex items-center space-x-2 px-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => {
                      window.open('https://wa.me/79152205556', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => {
                      window.open('https://t.me/spbdsremont', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.162 1.684-.602 1.984-1.025 1.984-.896 0-1.745-.538-2.711-1.077-1.018-.566-1.554-.9-2.421-1.455-.994-.636-.362-1.04.24-1.635.158-.155 2.836-2.575 2.888-2.79.006-.027.01-.123-.05-.175-.061-.052-.146-.033-.21-.02-.09.019-1.474.933-4.16 2.74-.394.267-.739.396-1.037.388-.341-.009-1.023-.192-1.52-.35-.61-.193-.94-.295-.905-.623.018-.17.211-.342.579-.516 2.362-1.02 3.937-1.697 4.725-2.03 2.249-.973 2.715-1.143 3.019-1.148.067-.001.218.015.315.09.08.062.102.144.112.202.01.058.023.19.013.294z"/>
                    </svg>
                    Telegram
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </header>
  );
};

export default Header;