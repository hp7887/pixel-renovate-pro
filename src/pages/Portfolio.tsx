import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import { Card } from "@/components/ui/card";
import projectModern1 from "@/assets/project-modern-1.jpg";
import projectKitchen2 from "@/assets/project-kitchen-2.jpg";
import projectBedroom3 from "@/assets/project-bedroom-3.jpg";
import projectBathroom4 from "@/assets/project-bathroom-4.jpg";
import projectOffice5 from "@/assets/project-office-5.jpg";
import projectLoft6 from "@/assets/project-loft-6.jpg";

const projects = [
  {
    id: 1,
    image: projectModern1,
    title: "Квартира в ЖК «Современный»",
    area: "85 м²",
    type: "Капитальный ремонт",
    description: "Полная перепланировка трехкомнатной квартиры с объединением кухни и гостиной. Установка новых инженерных систем, дизайнерская отделка, встроенная мебель.",
    year: "2024"
  },
  {
    id: 2,
    image: projectKitchen2,
    title: "Квартира в загородном доме",
    area: "120 м²",
    type: "Дизайнерский ремонт",
    description: "Современная квартира в скандинавском стиле с кухней-островом, мраморными столешницами и премиальной техникой. Индивидуальный дизайн-проект с 3D-визуализацией.",
    year: "2024"
  },
  {
    id: 3,
    image: projectBedroom3,
    title: "Квартира в новостройке",
    area: "68 м²",
    type: "Чистовая отделка",
    description: "Двухкомнатная квартира с мастер-спальней и гардеробной зоной. Теплый пол, многоуровневое освещение, качественные отделочные материалы во всех комнатах.",
    year: "2023"
  },
  {
    id: 4,
    image: projectBathroom4,
    title: "Апартаменты премиум-класса",
    area: "95 м²",
    type: "Капитальный ремонт",
    description: "Роскошная квартира с мраморной отделкой, душевыми кабинами и системой умного дома. Теплые полы во всех помещениях, встроенная аудиосистема.",
    year: "2023"
  },
  {
    id: 5,
    image: projectOffice5,
    title: "Офисное пространство",
    area: "120 м²",
    type: "Коммерческий ремонт",
    description: "Современный офис с open space зонами, переговорными комнатами и зоной отдыха. Стеклянные перегородки, эргономичная мебель, система кондиционирования.",
    year: "2023"
  },
  {
    id: 6,
    image: projectLoft6,
    title: "Лофт в историческом здании",
    area: "95 м²",
    type: "Дизайнерский ремонт",
    description: "Квартира-студия в индустриальном стиле с сохранением исторических элементов. Кирпичная кладка, высокие потолки, панорамные окна, авторский дизайн.",
    year: "2022"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Портфолио проектов - DigitalSTROY | 500+ реализованных проектов ремонта квартир в Санкт-Петербурге</title>
        <meta name="description" content="Галерея выполненных ремонтов квартир и офисов DigitalSTROY в Санкт-Петербурге. Более 500 успешных проектов: капитальный ремонт, дизайнерский ремонт, чистовая отделка. Фото до и после." />
        <meta name="keywords" content="портфолио ремонта квартир, примеры ремонта СПб, фото ремонта квартир, выполненные проекты ремонта, галерея ремонта" />
        <link rel="canonical" href="https://digitalstroy.ru/portfolio" />
        <meta property="og:title" content="Портфолио проектов ремонта - DigitalSTROY" />
        <meta property="og:description" content="500+ реализованных проектов ремонта квартир и офисов в Санкт-Петербурге. Современный дизайн и качественное исполнение." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitalstroy.ru/portfolio" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Наши проекты
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Более 500 успешно реализованных проектов. Каждый объект - это уникальное решение, 
            созданное с учетом пожеланий клиента и современных стандартов качества.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
              >
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {project.area}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Хотите увидеть свой проект здесь?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Свяжитесь с нами, и мы создадим для вас идеальное пространство
            </p>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openContactDialog'));
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Начать проект
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
