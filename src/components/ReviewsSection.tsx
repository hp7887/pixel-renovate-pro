import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Александра Михайлова",
    date: "15.01.2025",
    text: "Обратились в DigitalStroy для ремонта двухкомнатной квартиры в новостройке. Работали с прорабом Дмитрием и дизайнером Светланой. Особенно хочется отметить качество работ по электрике и сантехнике - все сделано аккуратно, с учетом всех пожеланий. Договорились на 2 месяца, закончили ровно в срок. Очень довольны результатом! Соседи уже спрашивают контакты.",
    project: "2-комн. квартира, 62 м²",
    initials: "АМ"
  },
  {
    name: "Игорь и Марина Соколовы",
    date: "28.12.2024",
    text: "Делали капитальный ремонт трешки на Васильевском острове. Сначала переживали, что будет много проблем со старым домом, но ребята справились отлично. Заменили всю проводку, выровняли стены (а там было что выравнивать!), поменяли окна. Мастер Андрей очень внимательный, всегда на связи, если что-то не понятно - объяснит и покажет. Цена получилась даже чуть ниже, чем планировали изначально.",
    project: "3-комн. квартира, 78 м²",
    initials: "ИС"
  },
  {
    name: "Дмитрий Петров",
    date: "10.12.2024",
    text: "Заказывал ремонт однушки под сдачу. Нужен был качественный ремонт, но без излишеств. Менеджер Ольга помогла подобрать оптимальный вариант по цене и материалам. Бригада работала быстро и чисто, каждый день убирали за собой. Закончили за 3 недели. Через две недели после завершения ремонта уже сдал квартиру. Обязательно обращусь снова, когда буду делать ремонт в своей квартире.",
    project: "1-комн. квартира, 38 м²",
    initials: "ДП"
  },
  {
    name: "Елена Васильева",
    date: "22.11.2024",
    text: "Хочу поблагодарить всю команду DigitalStroy за ремонт нашей квартиры! Особенно благодарна прорабу Сергею за его терпение и профессионализм. У нас было много изменений по ходу ремонта, все правки вносили без проблем. Качество работ на высоте - плитка в ванной положена идеально, стены ровные, все розетки на своих местах. Сделали даже лучше, чем ожидали. Всем рекомендую!",
    project: "2-комн. квартира, 54 м²",
    initials: "ЕВ"
  },
  {
    name: "Константин Леонидович",
    date: "05.11.2024",
    text: "Делал ремонт квартиры для мамы. Возраст уже не тот, поэтому важно было, чтобы все было надежно и практично. Ребята учли все нюансы - сделали противоскользящую плитку в ванной, установили удобные поручни, продумали освещение. Работали аккуратно, всегда предупреждали о шумных работах. Мама очень довольна, говорит что квартира стала как новая. Спасибо большое!",
    project: "2-комн. квартира, 51 м²",
    initials: "КЛ"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Reviews list */}
        <div className="max-w-5xl mx-auto space-y-6">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="border border-gray-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <CardContent className="p-6 md:p-8">
                {/* Header with name and date */}
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.project}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{review.date}</div>
                </div>
                
                {/* Review text */}
                <p className="text-gray-700 leading-relaxed">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-600">Завершенных проектов</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">8</div>
            <div className="text-gray-600">Лет на рынке</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-gray-600">Рекомендуют нас</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">1 год</div>
            <div className="text-gray-600">Гарантия на работы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;