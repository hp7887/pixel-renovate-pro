import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      main: "8 915 220-55-56",
      sub: "Звонки принимаем круглосуточно",
      link: "tel:+79152205556"
    },
    {
      icon: Mail,
      title: "Email",
      main: "info@remont-spb.ru",
      sub: "Ответим в течение часа",
      link: "mailto:info@remont-spb.ru"
    },
    {
      icon: MapPin,
      title: "Адрес",
      main: "Санкт-Петербург",
      sub: "Работаем по всему городу"
    },
    {
      icon: Clock,
      title: "График работы",
      main: "Пн-Вс: 09:00 - 21:00",
      sub: "Консультации круглосуточно"
    }
  ];

  const offices = [
    {
      name: "Центральный офис",
      address: "г. Санкт-Петербург, Невский проспект, д. 123",
      phone: "8 915 220-55-56",
      hours: "Пн-Пт: 09:00-21:00, Сб-Вс: 10:00-18:00"
    },
    {
      name: "Офис на Васильевском острове",
      address: "г. Санкт-Петербург, В.О., Средний проспект, д. 45",
      phone: "8 915 220-55-57",
      hours: "Пн-Пт: 09:00-21:00, Сб-Вс: 10:00-18:00"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/10 via-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Контакты
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Свяжитесь с нами удобным способом. Мы всегда на связи и готовы ответить на ваши вопросы
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center mb-4">
                  <contact.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    className="text-xl font-semibold text-primary hover:text-yellow-600 transition-colors block mb-1"
                  >
                    {contact.main}
                  </a>
                ) : (
                  <p className="text-xl font-semibold text-gray-900 mb-1">{contact.main}</p>
                )}
                <p className="text-sm text-gray-600">{contact.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Мы в социальных сетях
          </h2>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 h-auto"
              onClick={() => window.open('https://wa.me/79152205556', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button 
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-6 h-auto"
              onClick={() => window.open('https://t.me/digitalstroy', '_blank')}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.162 1.684-.602 1.984-1.025 1.984-.896 0-1.745-.538-2.711-1.077-1.018-.566-1.554-.9-2.421-1.455-.994-.636-.362-1.04.24-1.635.158-.155 2.836-2.575 2.888-2.79.006-.027.01-.123-.05-.175-.061-.052-.146-.033-.21-.02-.09.019-1.474.933-4.16 2.74-.394.267-.739.396-1.037.388-.341-.009-1.023-.192-1.52-.35-.61-.193-.94-.295-.905-.623.018-.17.211-.342.579-.516 2.362-1.02 3.937-1.697 4.725-2.03 2.249-.973 2.715-1.143 3.019-1.148.067-.001.218.015.315.09.08.062.102.144.112.202.01.058.023.19.013.294z"/>
              </svg>
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Наши офисы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.name}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                    <a href={`tel:+7${office.phone.replace(/\D/g, '').slice(1)}`} className="hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                    <span>{office.hours}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Готовы начать ваш проект?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto"
            onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
          >
            <Phone className="mr-2 h-5 w-5" />
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contacts;