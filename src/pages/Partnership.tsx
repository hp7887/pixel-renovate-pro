import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Handshake, FileText, Percent, Camera, Users, Trophy, Clock, Shield, Star } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import PartnershipContactDialog from "@/components/PartnershipContactDialog";
import designStudio from "@/assets/design-studio.jpg";

const Partnership = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const benefits = [
    {
      icon: Handshake,
      title: "Реализация проектов любой сложности",
      description: "Воплощаем дизайн-проекты от простых до элитных с соблюдением всех деталей"
    },
    {
      icon: Clock,
      title: "Соблюдение сроков и этапности",
      description: "Строго придерживаемся графика работ и согласованных этапов"
    },
    {
      icon: FileText,
      title: "Прозрачная отчётность",
      description: "Детализированная смета, постоянная коммуникация и отчёты по работам"
    },
    {
      icon: Percent,
      title: "Партнёрское вознаграждение",
      description: "Конкурентная комиссия за каждого приведённого клиента"
    },
    {
      icon: Camera,
      title: "Фото и видео с объектов",
      description: "Регулярные отчёты с фотографиями и видео хода выполнения работ"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Официальный договор и гарантия на все виды работ"
    }
  ];

  const formats = [
    {
      title: "Совместная реализация",
      description: "Вы создаёте дизайн-проект, мы берём на себя все строительно-отделочные работы по его воплощению"
    },
    {
      title: "Партнёрская программа",
      description: "Рекомендуете нас своим клиентам и получаете процент от стоимости ремонта"
    },
    {
      title: "Подряд на строительную часть",
      description: "Выполняем отделку и инженерные работы под ваш контроль и авторский надзор"
    }
  ];

  const advantages = [
    {
      icon: Trophy,
      text: "Более 8 лет опыта работы"
    },
    {
      icon: Users,
      text: "Более 500 завершённых объектов"
    },
    {
      icon: FileText,
      text: "Работа строго по договору"
    },
    {
      icon: Shield,
      text: "Гарантия на все виды работ"
    },
    {
      icon: Star,
      text: "Внимание к деталям и авторскому видению"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Сотрудничество с дизайнерами и партнёрами - SPB-DSRemont | Партнёрская программа в Санкт-Петербурге</title>
        <meta name="description" content="Приглашаем дизайнеров интерьеров и архитекторов к сотрудничеству. Реализация проектов любой сложности, партнёрское вознаграждение, гарантия качества. Более 500 объектов в Санкт-Петербурге." />
        <meta name="keywords" content="сотрудничество с дизайнерами, партнёрская программа ремонт, подрядчик для дизайнера, реализация дизайн-проектов СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/partnership" />
        <meta property="og:title" content="Сотрудничество с дизайнерами - SPB-DSRemont" />
        <meta property="og:description" content="Взаимовыгодное партнёрство для дизайнеров интерьеров. Реализация проектов любой сложности с гарантией качества." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/partnership" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src={designStudio}
            alt="Сотрудничество с дизайнерами интерьеров"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Handshake className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Партнёрская программа</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Сотрудничество с дизайнерами и партнёрами
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Приглашаем к взаимовыгодному партнёрству дизайнеров интерьеров и архитекторов, 
              которые ценят качество исполнения и надёжность подрядчика
            </p>
            <Button 
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8"
              onClick={() => setContactDialogOpen(true)}
            >
              Начать сотрудничество
            </Button>
          </div>
        </div>
      </section>

      {/* About Partnership */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              О нашем сотрудничестве
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Мы предлагаем взаимовыгодное партнёрство для специалистов, которые хотят реализовывать 
                свои проекты на высоком уровне — с надёжной строительной командой, соблюдением сроков 
                и гарантией качества.
              </p>
              <p>
                Наша компания выполняет ремонты квартир под ключ в Санкт-Петербурге, начиная от черновых 
                работ и заканчивая чистовой отделкой. Мы ценим профессионалов, для которых важен результат 
                и довольный клиент.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Что мы предлагаем дизайнерам
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Форматы сотрудничества
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formats.map((format, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <div className="text-6xl font-bold text-yellow-400 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {format.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {format.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Почему с нами удобно
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <advantage.icon className="h-8 w-8 text-gray-900" />
                </div>
                <p className="text-lg font-semibold">
                  {advantage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Как начать сотрудничество
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Оставьте заявку</h3>
                  <p className="text-lg text-gray-600">
                    Заполните форму обратной связи или напишите нам на почту digitalstroy@inbox.ru
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Обсудим детали</h3>
                  <p className="text-lg text-gray-600">
                    Свяжемся с вами, обсудим формат взаимодействия и условия сотрудничества
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Начинаем работу</h3>
                  <p className="text-lg text-gray-600">
                    Заключаем партнёрское соглашение и приступаем к совместным проектам
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Контакты для связи
            </h2>

            <Card className="p-8 border-0 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                      Телефон / WhatsApp
                    </h3>
                    <a href="tel:+78122099885" className="text-2xl font-bold text-gray-900 hover:text-yellow-600 transition-colors">
                      8 812 209-98-85
                    </a>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                      Email
                    </h3>
                    <a href="mailto:digitalstroy@inbox.ru" className="text-xl font-semibold text-gray-900 hover:text-yellow-600 transition-colors">
                      digitalstroy@inbox.ru
                    </a>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                      Мессенджеры
                    </h3>
                    <div className="flex gap-3">
                      <Button
                        className="bg-green-500 hover:bg-green-600"
                        onClick={() => window.open('https://wa.me/79111110126', '_blank')}
                      >
                        WhatsApp
                      </Button>
                      <Button
                        className="bg-blue-500 hover:bg-blue-600"
                        onClick={() => window.open('https://t.me/dsremont_spb', '_blank')}
                      >
                        Telegram
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-gray-900">
                  <h3 className="text-2xl font-bold mb-4">🎁 Приятный бонус</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Каждому новому партнёру — специальные условия при первом совместном проекте.
                  </p>
                  <p className="font-semibold">
                    Мы ценим сотрудничество и строим долгосрочные отношения на доверии и качестве.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, и мы обсудим условия партнёрства
          </p>
          <Button 
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-10"
            onClick={() => setContactDialogOpen(true)}
          >
            Связаться с нами
          </Button>
        </div>
      </section>

      <PartnershipContactDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen} 
      />

      <Footer />
    </div>
  );
};

export default Partnership;
