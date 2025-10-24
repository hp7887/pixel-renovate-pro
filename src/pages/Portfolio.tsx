import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import project1img1 from "@/assets/portfolio/project-1-image-1.jpg";
import project1img2 from "@/assets/portfolio/project-1-image-2.jpg";
import project1img3 from "@/assets/portfolio/project-1-image-3.jpg";
import project1img4 from "@/assets/portfolio/project-1-image-4.jpg";
import project2img1 from "@/assets/portfolio/project-2-image-1.jpg";
import project2img2 from "@/assets/portfolio/project-2-image-2.jpg";
import project2img3 from "@/assets/portfolio/project-2-image-3.jpg";
import project3img1 from "@/assets/portfolio/project-3-image-1.jpg";
import project3img2 from "@/assets/portfolio/project-3-image-2.jpg";
import project3img3 from "@/assets/portfolio/project-3-image-3.jpg";
import project3img4 from "@/assets/portfolio/project-3-image-4.jpg";
import project4img1 from "@/assets/portfolio/project-4-image-1.jpg";
import project4img2 from "@/assets/portfolio/project-4-image-2.jpg";
import project4img3 from "@/assets/portfolio/project-4-image-3.jpg";
import project5img1 from "@/assets/portfolio/project-5-image-1.jpg";
import project5img2 from "@/assets/portfolio/project-5-image-2.jpg";
import project5img3 from "@/assets/portfolio/project-5-image-3.jpg";
import project5img4 from "@/assets/portfolio/project-5-image-4.jpg";
import project6img1 from "@/assets/portfolio/project-6-image-1.jpg";
import project6img2 from "@/assets/portfolio/project-6-image-2.jpg";
import project6img3 from "@/assets/portfolio/project-6-image-3.jpg";
import project6img4 from "@/assets/portfolio/project-6-image-4.jpg";
import project6img5 from "@/assets/portfolio/project-6-image-5.jpg";

const projects = [
  {
    id: 6,
    images: [project6img1, project6img2, project6img3, project6img4, project6img5],
    imageLabels: ["Коридор", "Гостиная", "Кабинет", "Потолок с подсветкой", "Ванная комната"],
    title: "Квартира в ЖК «Лофт Хаус»",
    area: "92 м²",
    type: "Дизайнерский ремонт",
    description: "Стильная квартира в индустриальном стиле лофт. Кирпичная кладка, акцентные синие стены, потолочные балки, дизайнерское освещение, брутальная отделка ванной комнаты с деревянной плиткой.",
    year: "2024"
  },
  {
    id: 1,
    images: [project1img1, project1img2, project1img3, project1img4],
    imageLabels: ["Ванная комната", "Коридор", "Прихожая", "Холл"],
    title: "Квартира в ЖК «Премьер Палас»",
    area: "95 м²",
    type: "Дизайнерский ремонт",
    description: "Роскошная квартира с премиальной отделкой. Мраморные поверхности в ванной комнате, дизайнерское освещение, встроенная мебель из натурального дерева, элегантное оформление холла и коридора.",
    year: "2024"
  },
  {
    id: 2,
    images: [project2img1, project2img2, project2img3],
    imageLabels: ["Гостиная", "Кухня", "Ванная комната"],
    title: "Квартира в ЖК «Северная Долина»",
    area: "88 м²",
    type: "Капитальный ремонт",
    description: "Современная квартира в стиле неоклассика. Светлая гостиная с панорамным остеклением, классическая кухня с мраморной столешницей, элегантная ванная комната с золотыми акцентами.",
    year: "2024"
  },
  {
    id: 3,
    images: [project3img1, project3img2, project3img3, project3img4],
    imageLabels: ["Гостиная", "Санузел", "Кабинет", "Ванная комната"],
    title: "Квартира в ЖК «Ривер Парк»",
    area: "78 м²",
    type: "Ремонт под ключ",
    description: "Элегантная квартира в современном стиле. Просторная гостиная с изумрудным диваном, стильный санузел с темной плиткой, уютный кабинет с рабочей зоной, функциональная ванная комната.",
    year: "2024"
  },
  {
    id: 4,
    images: [project4img1, project4img2, project4img3],
    imageLabels: ["Гостиная", "Детская комната", "Ванная"],
    title: "Квартира в ЖК «Новая Скандинавия»",
    area: "102 м²",
    type: "Капитальный ремонт",
    description: "Трехкомнатная квартира для молодой семьи. Просторная гостиная с многоуровневым освещением, яркая детская комната с индивидуальным дизайном, функциональная ванная с современной сантехникой.",
    year: "2024"
  },
  {
    id: 5,
    images: [project5img1, project5img2, project5img3, project5img4],
    imageLabels: ["Кухня-гостиная", "Ванная комната", "Гардеробная", "Мансарда"],
    title: "Квартира в ЖК «Царская Столица»",
    area: "115 м²",
    type: "Дизайнерский ремонт",
    description: "Просторная квартира с индивидуальным дизайном. Светлая кухня-гостиная открытой планировки, роскошная ванная с мрамором и деревом, встроенная гардеробная с подсветкой, уютная мансарда с мансардными окнами.",
    year: "2024"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Портфолио проектов - SPB-DSRemont | 500+ реализованных проектов ремонта квартир в Санкт-Петербурге</title>
        <meta name="description" content="Галерея выполненных ремонтов квартир и офисов SPB-DSRemont в Санкт-Петербурге. Более 500 успешных проектов: капитальный ремонт, дизайнерский ремонт, чистовая отделка. Фото до и после." />
        <meta name="keywords" content="портфолио ремонта квартир, примеры ремонта СПб, фото ремонта квартир, выполненные проекты ремонта, галерея ремонта" />
        <link rel="canonical" href="https://spb-dsremont.ru/portfolio" />
        <meta property="og:title" content="Портфолио проектов ремонта - SPB-DSRemont" />
        <meta property="og:description" content="500+ реализованных проектов ремонта квартир и офисов в Санкт-Петербурге. Современный дизайн и качественное исполнение." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spb-dsremont.ru/portfolio" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Портфолио проектов ремонта - SPB-DSRemont" />
        <meta name="twitter:description" content="500+ реализованных проектов ремонта квартир и офисов в Санкт-Петербурге. Современный дизайн и качественное исполнение." />
        <meta name="twitter:image" content="https://spb-dsremont.ru/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Портфолио выполненных ремонтов",
            "description": "Галерея наших проектов по ремонту квартир и офисов в Санкт-Петербурге",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SPB-DSRemont"
            }
          })}
        </script>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {projects.map((project, projectIndex) => (
              <Card 
                key={project.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${projectIndex * 100}ms` }}
              >
                {/* Image Carousel */}
                <div className="relative">
                  <Carousel className="w-full" opts={{ loop: false }}>
                    <CarouselContent>
                      {project.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div className="relative bg-gray-100">
                            <img
                              src={image}
                              alt={`${project.title} - ${project.imageLabels[imageIndex]}`}
                              className="w-full h-[300px] md:h-[350px] object-contain transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            {/* Image Label */}
                            <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-medium text-xs md:text-sm shadow-lg">
                              {project.imageLabels[imageIndex]}
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 md:left-3 bg-white/90 hover:bg-white border-none shadow-lg w-8 h-8 md:w-10 md:h-10" />
                    <CarouselNext className="right-2 md:right-3 bg-white/90 hover:bg-white border-none shadow-lg w-8 h-8 md:w-10 md:h-10" />
                  </Carousel>
                  
                  {/* Area Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1.5 rounded-full font-bold text-xs md:text-sm shadow-lg z-10">
                    {project.area}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full font-semibold text-xs md:text-sm shadow-lg z-10">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 md:p-6 bg-gradient-to-b from-white to-gray-50">
                  <div className="mb-3">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 text-primary px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-sm">
                      {project.type}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
