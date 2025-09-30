import { Card, CardContent } from "@/components/ui/card";

const workSteps = [
  {
    number: "1",
    title: "РАСЧЕТ СТОИМОСТИ РЕМОНТА",
    items: [
      {
        title: "Заявка",
        description: "Мы проконсультируем Вас и зададим вопросы по ремонту, согласуем дату замеров.",
        isFree: false
      },
      {
        title: "Замеры",
        description: "Инженер выедет в удобное время и сделает замеры или предоставим инструкцию для самостоятельных замеров.",
        isFree: true
      },
      {
        title: "Смета",
        description: "Сделаем 3D модель объекта и подготовим смету на работы и материалы под ваш бюджет.",
        isFree: true
      }
    ]
  }
];

const WorkStepsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            КАК МЫ РАБОТАЕМ
          </h2>
        </div>
        
        {/* Work steps */}
        {workSteps.map((step, stepIndex) => (
          <div key={stepIndex} className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-12 text-center">
              {step.number}. {step.title}
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Image placeholder for first item */}
              <div className="lg:row-span-2">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for worker image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-lg font-medium">Фото специалиста</span>
                  </div>
                </div>
              </div>
              
              {/* Work step items */}
              {step.items.map((item, itemIndex) => (
                <Card 
                  key={itemIndex}
                  className="relative bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-smooth"
                >
                  {item.isFree && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      БЕСПЛАТНО
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {item.title}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
              
              {/* Second image placeholder */}
              <div className="lg:col-start-2">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-lg font-medium">Фото процесса</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkStepsSection;