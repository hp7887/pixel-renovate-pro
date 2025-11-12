import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import project1 from "@/assets/project-modern-1.jpg";
import project2 from "@/assets/project-scandinavian-living.jpg";
import project3 from "@/assets/project-bedroom-3.jpg";

const projects = [
  {
    id: 1,
    title: "Современная ванная комната",
    description: "Полная реконструкция с мраморной отделкой",
    area: "12 м²",
    duration: "3 недели",
    image: project1,
    tags: ["Ванная", "Премиум", "Мрамор"]
  },
  {
    id: 2,
    title: "Гостиная в стиле минимализм",
    description: "Современный дизайн с функциональными решениями",
    area: "35 м²",
    duration: "5 недель",
    image: project2,
    tags: ["Гостиная", "Минимализм", "Современный"]
  },
  {
    id: 3,
    title: "Спальня с гардеробной",
    description: "Уютная спальня с встроенной системой хранения",
    area: "25 м²",
    duration: "4 недели",
    image: project3,
    tags: ["Спальня", "Гардеробная", "Комфорт"]
  }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-display font-display font-bold text-foreground mb-4">
            Галерея наших проектов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Посмотрите на результаты нашей работы — от идеи до воплощения
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden hover:shadow-primary transition-smooth animate-scale-in shadow-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <LazyImage 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  
                  {/* Overlay with link */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-center justify-center">
                    <Button 
                      size="sm" 
                      className="opacity-0 group-hover:opacity-100 transition-smooth gradient-primary text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Подробнее
                    </Button>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                    {project.duration}
                  </div>
                </div>
                
                {/* Project info */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">
                        Площадь: <span className="font-medium text-foreground">{project.area}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View all projects CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="group hover:gradient-primary hover:text-white transition-smooth"
          >
            Посмотреть все проекты
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Additional stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card rounded-2xl p-8 shadow-card">
            <div>
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                15,000+ м²
              </div>
              <div className="text-sm text-muted-foreground">отремонтировано</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-muted-foreground">проектов</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                8 лет
              </div>
              <div className="text-sm text-muted-foreground">опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;