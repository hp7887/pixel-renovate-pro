import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import LazyImage from "./LazyImage";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import before4 from "@/assets/before-4.jpg";
import after4 from "@/assets/after-4.jpg";
import before5 from "@/assets/before-5.jpg";
import after5 from "@/assets/after-5.jpg";

const beforeAfterProjects = [
  {
    id: 1,
    before: before1,
    after: after1,
    title: "Прихожая",
  },
  {
    id: 2,
    before: before2,
    after: after2,
    title: "Ванная комната",
  },
  {
    id: 3,
    before: before3,
    after: after3,
    title: "Кухня-гостиная",
  },
  {
    id: 4,
    before: before4,
    after: after4,
    title: "Кухня",
  },
  {
    id: 5,
    before: before5,
    after: after5,
    title: "Спальня",
  },
];

const BeforeAfterSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Наши работы: до и после
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные примеры наших проектов демонстрируют качество выполненных работ
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {beforeAfterProjects.map((project, index) => (
                <CarouselItem key={project.id} className="md:basis-full">
                  <div className="p-1 md:p-4">
                    <Card className="border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                      <div className="p-4 md:p-8">
                        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                          {project.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                          {/* Before */}
                          <div className="space-y-3">
                            <div className="relative group overflow-hidden rounded-lg aspect-[3/4]">
                              <div className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground px-4 py-2 rounded-md font-semibold shadow-lg">
                                ДО
                              </div>
                              <LazyImage
                                src={project.before}
                                alt={`До ремонта - ${project.title}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </div>

                          {/* After */}
                          <div className="space-y-3">
                            <div className="relative group overflow-hidden rounded-lg aspect-[3/4]">
                              <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold shadow-lg">
                                ПОСЛЕ
                              </div>
                              <LazyImage
                                src={project.after}
                                alt={`После ремонта - ${project.title}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover-scale" />
            <CarouselNext className="hidden md:flex -right-12 hover-scale" />
          </Carousel>

          {/* Mobile navigation arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0" />
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {beforeAfterProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
