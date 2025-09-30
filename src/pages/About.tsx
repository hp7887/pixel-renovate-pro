import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const advantages = [
    {
      icon: Award,
      title: "Опыт 15+ лет",
      description: "Более 15 лет успешной работы в сфере ремонта и строительства"
    },
    {
      icon: Users,
      title: "500+ проектов",
      description: "Реализовали более 500 проектов различной сложности"
    },
    {
      icon: TrendingUp,
      title: "98% довольных клиентов",
      description: "Высокий уровень удовлетворенности наших заказчиков"
    },
    {
      icon: CheckCircle,
      title: "Гарантия 5 лет",
      description: "Предоставляем расширенную гарантию на все виды работ"
    }
  ];

  const values = [
    {
      title: "Качество",
      description: "Используем только проверенные материалы и технологии"
    },
    {
      title: "Прозрачность",
      description: "Полный контроль работ через мобильное приложение 24/7"
    },
    {
      title: "Надежность",
      description: "Соблюдаем все договоренности и сроки выполнения работ"
    },
    {
      title: "Инновации",
      description: "Внедряем современные решения для удобства клиентов"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/10 via-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            О компании DigitalStroy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Мы - команда профессионалов, которая создает комфортное пространство для жизни. 
            Наша миссия - сделать ремонт простым, прозрачным и предсказуемым процессом.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center mb-4">
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Наша история
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Компания DigitalStroy была основана в 2009 году группой энтузиастов, которые хотели 
                изменить подход к ремонту квартир в России. Мы начинали с небольшой команды из 5 человек 
                и одного проекта.
              </p>
              <p>
                За годы работы мы выросли в крупную компанию с штатом более 100 специалистов. 
                Мы постоянно внедряем инновации: первыми в регионе запустили систему онлайн-контроля 
                ремонта с видеонаблюдением 24/7 и разработали мобильное приложение для заказчиков.
              </p>
              <p>
                Сегодня DigitalStroy - это современная компания, которая объединяет опыт, технологии 
                и индивидуальный подход к каждому клиенту. Мы гордимся каждым реализованным проектом 
                и стремимся превзойти ожидания наших заказчиков.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-l-4 border-primary shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;