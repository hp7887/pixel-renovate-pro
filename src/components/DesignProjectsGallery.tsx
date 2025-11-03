import { Card } from "@/components/ui/card";
import LazyImage from "@/components/LazyImage";

import project1 from "@/assets/project-modern-1.jpg";
import project2 from "@/assets/project-scandinavian-living.jpg";
import project3 from "@/assets/project-bedroom-3.jpg";
import project4 from "@/assets/project-kitchen-2.jpg";
import project5 from "@/assets/project-bathroom-4.jpg";
import project6 from "@/assets/project-dining-area.jpg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Современная квартира",
  },
  {
    id: 2,
    image: project2,
    title: "Скандинавский стиль",
  },
  {
    id: 3,
    image: project3,
    title: "Спальня",
  },
  {
    id: 4,
    image: project4,
    title: "Кухня",
  },
  {
    id: 5,
    image: project5,
    title: "Ванная комната",
  },
  {
    id: 6,
    image: project6,
    title: "Столовая зона",
  },
];

const DesignProjectsGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Наши дизайн <span className="text-accent">проекты</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Примеры реализованных проектов интерьера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProjectsGallery;
