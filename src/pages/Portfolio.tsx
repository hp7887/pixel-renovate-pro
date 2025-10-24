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
import project4img1 from "@/assets/portfolio/project-4-image-1.jpg";
import project4img2 from "@/assets/portfolio/project-4-image-2.jpg";
import project4img3 from "@/assets/portfolio/project-4-image-3.jpg";

const projects = [
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
    images: [project4img1, project4img2, project4img3],
    imageLabels: ["Гостиная", "Детская комната", "Ванная"],
    title: "Квартира в ЖК «Новая Скандинавия»",
    area: "102 м²",
    type: "Ремонт под ключ",
    description: "Трехкомнатная квартира для молодой семьи. Просторная гостиная с многоуровневым освещением, яркая детская комната с индивидуальным дизайном, функциональная ванная с современной сантехникой.",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
            {projects.map((project, projectIndex) => (
              <Card 
                key={project.id}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${projectIndex * 150}ms` }}
              >
                {/* Image Carousel */}
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                            <img
                              src={image}
                              alt={`${project.title} - ${project.imageLabels[imageIndex]}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            {/* Image Label */}
                            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg">
                              {project.imageLabels[imageIndex]}
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-none shadow-lg" />
                    <CarouselNext className="right-4 bg-white/90 hover:bg-white border-none shadow-lg" />
                  </Carousel>
                  
                  {/* Area Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10">
                    {project.area}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg z-10">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
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
