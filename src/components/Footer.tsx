import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Services */}
            <div className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '100ms' }}>
              <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6 text-yellow-400">Наши услуги</h4>
              <ul className="space-y-2 md:space-y-3">
                <li><Link to="/services/cosmetic-repair" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Косметический ремонт</Link></li>
                <li><Link to="/services/major-repair" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Капитальный ремонт</Link></li>
                <li><Link to="/services/interior-design" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Дизайн интерьера</Link></li>
                <li><Link to="/services/bathroom-repair" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Ремонт ванных комнат</Link></li>
                <li><Link to="/portfolio" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Ремонт кухни</Link></li>
                <li><Link to="/services/electrical-work" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Электромонтажные работы</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6 text-yellow-400">О компании</h4>
              <ul className="space-y-2 md:space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">О нас</Link></li>
                <li><Link to="/portfolio" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Портфолио работ</Link></li>
                <li><Link to="/reviews" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Отзывы клиентов</Link></li>
                <li><Link to="/guarantees" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Гарантии</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Вакансии</Link></li>
                <li><Link to="/contacts" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block text-sm md:text-base">Контакты</Link></li>
              </ul>
            </div>
            
            {/* Contact info */}
            <div className={`sm:col-span-2 lg:col-span-1 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6 text-yellow-400">Контакты</h4>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 md:gap-3 group">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors flex-shrink-0">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                  </div>
                  <div>
                    <a href="tel:+79152205556" className="font-medium text-white hover:text-yellow-400 transition-colors text-sm md:text-base">
                      8 915 220-55-56
                    </a>
                    <div className="text-xs md:text-sm text-gray-400">Звонки принимаем 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 md:gap-3 group">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors flex-shrink-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                  </div>
                  <div>
                    <a href="mailto:info@remont-spb.ru" className="font-medium text-white hover:text-yellow-400 transition-colors text-sm md:text-base break-all">
                      info@remont-spb.ru
                    </a>
                    <div className="text-xs md:text-sm text-gray-400">Ответ в течение часа</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 md:gap-3 group">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors flex-shrink-0">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm md:text-base">Санкт-Петербург</div>
                    <div className="text-xs md:text-sm text-gray-400">Работаем по всему городу</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
                <Button 
                  size="sm" 
                  className="w-9 h-9 md:w-10 md:h-10 p-0 bg-white/10 hover:bg-primary border-0 text-white hover:scale-110 transition-all"
                  onClick={() => window.open('https://wa.me/79152205556', '_blank')}
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  className="w-9 h-9 md:w-10 md:h-10 p-0 bg-white/10 hover:bg-primary border-0 text-white hover:scale-110 transition-all"
                  onClick={() => window.open('https://t.me/spbdsremont', '_blank')}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.162 1.684-.602 1.984-1.025 1.984-.896 0-1.745-.538-2.711-1.077-1.018-.566-1.554-.9-2.421-1.455-.994-.636-.362-1.04.24-1.635.158-.155 2.836-2.575 2.888-2.79.006-.027.01-.123-.05-.175-.061-.052-.146-.033-.21-.02-.09.019-1.474.933-4.16 2.74-.394.267-.739.396-1.037.388-.341-.009-1.023-.192-1.52-.35-.61-.193-.94-.295-.905-.623.018-.17.211-.342.579-.516 2.362-1.02 3.937-1.697 4.725-2.03 2.249-.973 2.715-1.143 3.019-1.148.067-.001.218.015.315.09.08.062.102.144.112.202.01.058.023.19.013.294z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="py-4 md:py-6 border-t border-gray-700">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2024 SPB-DSRemont. Все права защищены.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs md:text-sm text-center">
              <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;