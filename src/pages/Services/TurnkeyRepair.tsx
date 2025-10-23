import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Home, Shield, Clock } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import turnkeyRepairHero from "@/assets/turnkey-repair-hero.jpg";
import turnkeyRepairProcess from "@/assets/turnkey-repair-process.jpg";

const TurnkeyRepair = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Ремонт квартир под ключ в СПб | Цена за м² | SPB-DSRemont</title>
        <meta name="description" content="Ремонт квартир под ключ в Санкт-Петербурге: от замеров до финальной уборки. Фиксированная цена, гарантия качества, точные сроки. Заезжайте и живите!" />
        <meta name="keywords" content="ремонт под ключ, ремонт квартир СПб, ремонт с материалами, цена за квадратный метр" />
        <link rel="canonical" href="https://spb-dsremont.ru/services/turnkey-repair" />
        <meta property="og:title" content="Ремонт квартир под ключ в СПб | Цена за м² | SPB-DSRemont" />
        <meta property="og:description" content="Ремонт квартир под ключ в Санкт-Петербурге: от замеров до финальной уборки. Фиксированная цена, гарантия качества, точные сроки. Заезжайте и живите!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/services/turnkey-repair" />
        <meta property="og:image" content={turnkeyRepairHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт квартир под ключ в СПб | Цена за м² | SPB-DSRemont" />
        <meta name="twitter:description" content="Ремонт квартир под ключ в Санкт-Петербурге: от замеров до финальной уборки. Фиксированная цена, гарантия качества, точные сроки. Заезжайте и живите!" />
        <meta name="twitter:image" content={turnkeyRepairHero} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ремонт квартир под ключ",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SPB-DSRemont",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Санкт-Петербург",
                "addressCountry": "RU"
              },
              "telephone": "+7 812 209-98-85"
            },
            "areaServed": "Санкт-Петербург",
            "offers": {
              "@type": "Offer",
              "price": "6000",
              "priceCurrency": "RUB",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "6000",
                "priceCurrency": "RUB",
                "unitCode": "MTK"
              }
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <section className="relative h-[500px] md:h-[600px] overflow-hidden mb-12">
            <LazyImage
              src={turnkeyRepairHero}
              alt="Ремонт квартиры под ключ - готовый интерьер"
              className="w-full h-full object-cover rounded-b-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 rounded-b-3xl flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Ремонт квартир под ключ в СПб
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                    От первого замера до генеральной уборки — всё включено
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  >
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Что такое ремонт под ключ?</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ремонт под ключ — это комплексное решение, при котором мы берем на себя все этапы работ: от замеров и закупки материалов до финальной уборки. Вы получаете полностью готовую к проживанию квартиру с фиксированной ценой и в оговоренные сроки.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Бесплатный выезд для замеров",
                  "Составление сметы",
                  "Закупка всех материалов",
                  "Черновые работы",
                  "Чистовая отделка",
                  "Установка сантехники",
                  "Монтаж электрики",
                  "Генеральная уборка"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Наши гарантии</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Фиксированная цена", desc: "Цена в договоре не изменится. Все расходы просчитаны заранее" },
                  { title: "Точные сроки", desc: "Составляем график работ и соблюдаем каждый этап" },
                  { title: "Гарантия 1 год", desc: "Официальная гарантия на все выполненные работы" },
                  { title: "Качественные материалы", desc: "Работаем только с проверенными поставщиками" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="relative rounded-3xl overflow-hidden shadow-2xl">
              <LazyImage
                src={turnkeyRepairProcess}
                alt="Процесс ремонта под ключ"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-emerald-900/40" />
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                <p className="text-2xl font-bold text-white">Работаем профессионально</p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Этапы ремонта под ключ</h2>
              </div>
              <div className="relative space-y-8">
                {[
                  { title: "Консультация и замеры", desc: "Бесплатный выезд специалиста, обсуждение пожеланий" },
                  { title: "Составление сметы", desc: "Детальный расчет стоимости всех работ и материалов" },
                  { title: "Заключение договора", desc: "Фиксируем цену, сроки и объем работ" },
                  { title: "Закупка материалов", desc: "Покупаем все необходимое со скидками от поставщиков" },
                  { title: "Выполнение работ", desc: "Комплексный ремонт от черновых до чистовых работ" },
                  { title: "Контроль качества", desc: "Проверяем каждый этап работ нашим прорабом" },
                  { title: "Сдача объекта", desc: "Генеральная уборка и приемка готовой квартиры" }
                ].map((step, index) => (
                  <div key={index} className={`flex gap-4 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
                      {index + 1}
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md flex-1 border-2 border-green-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Что входит в ремонт под ключ?</h2>
              <div className="space-y-6">
                {[
                  { 
                    title: "Черновые работы", 
                    desc: "Демонтаж старой отделки, возведение перегородок, прокладка электропроводки и сантехнических коммуникаций, выравнивание стен и полов, стяжка." 
                  },
                  { 
                    title: "Чистовая отделка", 
                    desc: "Шпаклевка и покраска стен, поклейка обоев, укладка напольного покрытия (ламинат, паркет, плитка), монтаж натяжных или подвесных потолков." 
                  },
                  { 
                    title: "Установка оборудования", 
                    desc: "Монтаж сантехнических приборов (ванна, душевая кабина, унитаз, раковины), установка розеток и выключателей, монтаж светильников." 
                  },
                  { 
                    title: "Финальные работы", 
                    desc: "Установка межкомнатных дверей, монтаж плинтусов и наличников, генеральная уборка помещений после ремонта." 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества работы с нами</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: "Экономия времени", 
                    desc: "Вам не нужно искать мастеров, закупать материалы и контролировать работы. Мы делаем всё сами.",
                    icon: Clock
                  },
                  { 
                    title: "Экономия денег", 
                    desc: "Закупаем материалы у проверенных поставщиков со скидками. Никаких переплат.",
                    icon: Shield
                  },
                  { 
                    title: "Гарантия качества", 
                    desc: "Все работы выполняются квалифицированными специалистами. Даем гарантию 1 год.",
                    icon: Check
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Стоимость ремонта под ключ</h2>
              <p className="text-lg text-gray-700 mb-6">
                Итоговая стоимость зависит от площади квартиры, объема работ и сложности отделки. 
                Средняя цена работ по ремонту под ключ в Санкт-Петербурге:
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
                <p className="text-gray-600 mb-2 text-lg">От</p>
                <p className="text-5xl font-bold text-green-600 mb-2">6 000 ₽/м²</p>
                <p className="text-gray-600 text-lg">стоимость работ без материалов</p>
              </div>
              <div className="mt-6 p-6 bg-white rounded-xl border-2 border-green-200">
                <p className="text-gray-700 text-center">
                  <strong>Обратите внимание:</strong> Указана стоимость только за работы. Материалы рассчитываются отдельно в зависимости от ваших пожеланий и бюджета.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                {[
                  { 
                    q: "Сколько времени займет ремонт?", 
                    a: "Сроки зависят от площади и объема работ. В среднем ремонт однокомнатной квартиры занимает 1-2 месяца, двухкомнатной — 2-3 месяца." 
                  },
                  { 
                    q: "Можно ли вносить изменения в процессе?", 
                    a: "Да, можно. Но это может повлиять на сроки и стоимость. Все изменения оформляются дополнительным соглашением." 
                  },
                  { 
                    q: "Кто закупает материалы?", 
                    a: "Материалы закупаем мы. У нас есть договоренности с поставщиками, поэтому мы получаем хорошие скидки." 
                  },
                  { 
                    q: "Что входит в гарантию?", 
                    a: "Гарантия 1 год распространяется на все выполненные работы: отделку, электрику, сантехнику." 
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center pt-8">
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Заказать ремонт под ключ
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default TurnkeyRepair;
