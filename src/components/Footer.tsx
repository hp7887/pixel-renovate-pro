import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Services */}
            <div className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '100ms' }}>
              <h4 className="font-bold text-xl mb-6 text-yellow-400">Наши услуги</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Косметический ремонт</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Капитальный ремонт</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Дизайн интерьера</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Ремонт ванных комнат</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Ремонт кухни</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Электромонтажные работы</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <h4 className="font-bold text-xl mb-6 text-yellow-400">О компании</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">О нас</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Портфолио работ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Отзывы клиентов</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Гарантии</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Вакансии</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors hover:translate-x-2 inline-block">Контакты</a></li>
              </ul>
            </div>
            
            {/* Contact info */}
            <div className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              <h4 className="font-bold text-xl mb-6 text-yellow-400">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Phone className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <a href="tel:+79152205556" className="font-medium text-white hover:text-yellow-400 transition-colors">
                      8 915 220-55-56
                    </a>
                    <div className="text-sm text-gray-400">Звонки принимаем 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Mail className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <a href="mailto:info@remont-spb.ru" className="font-medium text-white hover:text-yellow-400 transition-colors">
                      info@remont-spb.ru
                    </a>
                    <div className="text-sm text-gray-400">Ответ в течение часа</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Санкт-Петербург</div>
                    <div className="text-sm text-gray-400">Работаем по всему городу</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-6">
                <Button 
                  size="sm" 
                  className="w-10 h-10 p-0 bg-white/10 hover:bg-primary border-0 text-white hover:scale-110 transition-all"
                  onClick={() => window.open('https://wa.me/79152205556', '_blank')}
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  className="w-10 h-10 p-0 bg-white/10 hover:bg-primary border-0 text-white hover:scale-110 transition-all"
                  onClick={() => window.open('https://t.me/digitalstroy', '_blank')}
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
        <div className="py-6 border-t border-gray-700">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="text-gray-400 text-sm">
              © 2024 DigitalSTROY. Все права защищены.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
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