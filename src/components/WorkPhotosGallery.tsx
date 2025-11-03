import { Card } from "@/components/ui/card";
import LazyImage from "@/components/LazyImage";

import project1Image1 from "@/assets/portfolio/project-1-image-1.jpg";
import project2Image1 from "@/assets/portfolio/project-2-image-1.jpg";
import project3Image1 from "@/assets/portfolio/project-3-image-1.jpg";
import project5Image1 from "@/assets/portfolio/project-5-image-1.jpg";
import project6Image1 from "@/assets/portfolio/project-6-image-1.jpg";
import project9Image1 from "@/assets/portfolio/project-9-image-1.jpg";

const photos = [
  {
    id: 1,
    image: project1Image1,
    title: "Современная спальня",
  },
  {
    id: 2,
    image: project2Image1,
    title: "Кухня-гостиная",
  },
  {
    id: 3,
    image: project3Image1,
    title: "Минималистичная ванная",
  },
  {
    id: 4,
    image: project5Image1,
    title: "Детская комната",
  },
  {
    id: 5,
    image: project6Image1,
    title: "Гостиная в светлых тонах",
  },
  {
    id: 6,
    image: project9Image1,
    title: "Современная кухня",
  },
];

const WorkPhotosGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Наши <span className="text-accent">работы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Примеры выполненных проектов ремонта квартир
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card
              key={photo.id}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <LazyImage
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {photo.title}
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

export default WorkPhotosGallery;
