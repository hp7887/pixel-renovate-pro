import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactsHero from "@/assets/contacts-hero.jpg";
import LazyImage from "@/components/LazyImage";

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      main: "8 812 209-98-85",
      sub: "Звонки принимаем круглосуточно",
      link: "tel:+78122099885"
    },
    {
      icon: Mail,
      title: "Email",
      main: "digitalstroy@inbox.ru",
      sub: "Ответим в течение часа",
      link: "mailto:digitalstroy@inbox.ru"
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
      main: "Пн-Пт: 09:00 - 18:00",
      sub: "Консультации по телефону"
    }
  ];

  const offices = [
    {
      name: "Центральный офис",
      address: "Кузнецовская улица, 52к8Ж, Санкт-Петербург",
      phone: "8 812 209-98-85",
      hours: "Пн-Пт: 09:00-21:00, Сб-Вс: 10:00-18:00"
    }
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Контакты SPB-DSRemont - Телефон, адреса офисов в Санкт-Петербурге</title>
        <meta name="description" content="Контакты компании SPB-DSRemont в Санкт-Петербурге. Телефон: 8 812 209-98-85. Офисы на Невском проспекте и Васильевском острове. Работаем Пн-Пт: 09:00-18:00. WhatsApp и Telegram." />
        <meta name="keywords" content="контакты ремонт квартир СПб, телефон ремонт, адрес офиса ремонт, связаться с ремонтной компанией" />
        <link rel="canonical" href="https://spb-dsremont.ru/contacts" />
        <meta property="og:title" content="Контакты SPB-DSRemont - Свяжитесь с нами" />
        <meta property="og:description" content="Два офиса в Санкт-Петербурге. Консультации и выезд замерщика. Ответим в течение 15 минут." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/contacts" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Контакты SPB-DSRemont - Свяжитесь с нами" />
        <meta name="twitter:description" content="Два офиса в Санкт-Петербурге. Консультации и выезд замерщика. Ответим в течение 15 минут." />
        <meta name="twitter:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "SPB-DSRemont",
              "telephone": "+7 812 209-98-85",
              "email": "digitalstroy@inbox.ru",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Санкт-Петербург",
                "addressCountry": "RU"
              },
              "url": "https://spb-dsremont.ru"
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden mb-12">
            <LazyImage
              src={contactsHero}
              alt="Свяжитесь с нами - консультация по ремонту квартир в Санкт-Петербурге"
              className="w-full h-full object-cover rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/60 rounded-b-3xl flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                    Свяжитесь с нами
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                    Ответим на все ваши вопросы и поможем воплотить мечту о красивом ремонте в реальность
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
                  >
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 hover-scale animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent hover:from-cyan-700 hover:to-blue-800 transition-all block mb-1"
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center animate-fade-in">
            Напишите нам в мессенджер
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto animate-fade-in">
            Выберите удобный способ связи - ответим быстро и подробно на все ваши вопросы
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
              onClick={() => window.open('https://wa.me/79111110126', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
              onClick={() => window.open('https://t.me/dsremont_spb', '_blank')}
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center animate-fade-in">
            Приходите к нам в офис
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
            Обсудим ваш проект за чашкой кофе, покажем примеры работ и составим смету
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-8 shadow-xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">{office.name}</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-cyan-600" />
                    <span className="leading-relaxed">{office.address}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-cyan-600" />
                    <a href={`tel:+7${office.phone.replace(/\D/g, '').slice(1)}`} className="hover:text-cyan-600 transition-colors font-medium">
                      {office.phone}
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-1 text-cyan-600" />
                    <span className="leading-relaxed">{office.hours}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Начнём работу над вашей мечтой?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Оставьте заявку прямо сейчас — мы свяжемся с вами в течение 15 минут и ответим на все вопросы
          </p>
          <Button 
            size="lg"
            className="bg-white text-cyan-600 hover:bg-gray-50 text-lg px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover-scale animate-fade-in"
            onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
          >
            <Phone className="mr-2 h-6 w-6" />
            Получить бесплатную консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contacts;