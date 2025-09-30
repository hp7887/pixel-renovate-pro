import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const mainReviews = [
  {
    name: "Александра М.",
    date: "15.01.2025",
    rating: 5,
    text: "Обратились сюда для ремонта двушки в новостройке. Работали с прорабом Дмитрием и дизайнером Светланой. Особо хочу отметить качество работ по электрике и сантехнике - все аккуратно, с учетом пожеланий. Договорились на 2 месяца, закончили ровно в срок. Результатом довольны! Соседи уже контакты спрашивают.",
    pros: "Работы в срок, качественная электрика и сантехника, учли все наши пожелания.",
    cons: "После установки натяжных потолков обнаружили небольшую неровность, но мастера приехали и быстро все исправили.",
    project: "2-комн. квартира, 62 м²",
    initials: "АМ"
  },
  {
    name: "Игорь С.",
    date: "28.12.2024",
    rating: 5,
    text: "Делали капиталку трешки на Васильевском. Сначала переживали, что будет куча проблем со старым домом, но ребята справились на ура. Всю проводку заменили, стены выровняли (а там было ого-го сколько работы!), окна поставили новые. Мастер Андрей молодец, всегда на связи, все объяснит и покажет. По цене вышло даже чуть дешевле, чем думали.",
    pros: "Профессиональная бригада, цена ниже сметы, отличное качество.",
    cons: "Ремонт затянулся на неделю дольше запланированного из-за проблем с перекрытиями в старом доме.",
    project: "3-комн. квартира, 78 м²",
    initials: "ИС"
  },
  {
    name: "Дмитрий П.",
    date: "10.12.2024",
    rating: 4,
    text: "Заказывал ремонт однушки под сдачу. Нужен был нормальный ремонт, без понтов. Менеджер Ольга помогла выбрать оптимальный вариант по цене и материалам. Бригада работала быстро и чисто, каждый день убирали за собой. Закончили за 3 недели. Через две недели уже квартиру сдал. Когда буду свою делать - обращусь сюда снова.",
    pros: "Быстро, чисто, помогли с выбором материалов.",
    cons: "Не понравилось что иногда бригада приезжала позже обещанного времени, хотя всегда предупреждали заранее.",
    project: "1-комн. квартира, 38 м²",
    initials: "ДП"
  },
  {
    name: "Елена В.",
    date: "22.11.2024",
    rating: 5,
    text: "Спасибо всей команде за ремонт нашей квартиры! Особо благодарна прорабу Сергею - терпеливый и профессиональный. У нас было много правок по ходу дела, все делали без проблем. Качество работ супер - плитка в ванной идеально легла, стены ровные, розетки все где надо. Получилось даже лучше чем ожидали. Всем советую!",
    pros: "Отличное качество, учитывали все наши правки, профессиональный прораб.",
    cons: "В конце ремонта выяснилось что один выключатель установили не там где планировали, но переделали бесплатно.",
    project: "2-комн. квартира, 54 м²",
    initials: "ЕВ"
  },
  {
    name: "Константин Л.",
    date: "05.11.2024",
    rating: 5,
    text: "Делал ремонт квартиры для мамы. Возраст уже приличный, поэтому важно было все надежно и практично сделать. Ребята учли все - плитку противоскользящую в ванной положили, поручни удобные поставили, освещение нормальное сделали. Работали аккуратно, всегда про шумные работы предупреждали. Мама довольна очень, говорит что квартира как новая стала. Спасибо!",
    pros: "Учли возрастные особенности, аккуратная работа, всегда предупреждали о шуме.",
    cons: "Была путаница с документами в начале, но менеджер все быстро разрулил.",
    project: "2-комн. квартира, 51 м²",
    initials: "КЛ"
  }
];

const additionalReviews = [
  {
    name: "Анна П.",
    date: "20.10.2024",
    rating: 5,
    text: "Ремонт делали месяца полтора. В целом все устроило. Мастера нормальные, работают аккуратно. Плитку хорошо положили, обои поклеили ровно. Правда был момент - не те обои привезли сначала, но быстро поменяли. В итоге все ок.",
    pros: "Аккуратная работа, быстро исправили ошибку с материалами.",
    cons: "Привезли не тот оттенок обоев, пришлось ждать пару дней пока заменят на нужные.",
    project: "1-комн. квартира, 42 м²",
    initials: "АП"
  },
  {
    name: "Виктор С.",
    date: "12.10.2024",
    rating: 4,
    text: "Делали ремонт на кухне и в коридоре. Ребята работали хорошо, но были небольшие косяки с замерами сначала. Потом все переделали как надо. Плитка на кухне отлично легла, все швы ровные. Цена нормальная, не завышают.",
    pros: "Хорошее качество плитки, адекватная цена, исправили свои ошибки.",
    cons: "При замерах не учли толщину плитки, из-за этого дверь пришлось подпиливать дополнительно.",
    project: "Ремонт кухни и коридора",
    initials: "ВС"
  },
  {
    name: "Ольга И.",
    date: "05.10.2024",
    rating: 5,
    text: "Очень довольна работой! Делали полный ремонт однушки. Все сделали как договаривались, даже немного раньше срока. Мастера вежливые, всегда все объясняли что и как. Убирались каждый день. Цена вышла в рамках сметы.",
    pros: "Закончили раньше срока, вежливые мастера, цена в рамках сметы.",
    cons: "Хотелось бы чтобы побольше консультировали на этапе подбора материалов, а то пришлось самой много гуглить.",
    project: "1-комн. квартира, 38 м²",
    initials: "ОИ"
  },
  {
    name: "Михаил А.",
    date: "28.09.2024",
    rating: 4,
    text: "Ремонт двушки занял 2 месяца. В целом доволен, но были нюансы. Электрик хороший попался, все розетки и выключатели как просил расположил. А вот с сантехникой была заминка - сначала не тот смеситель установили. Но поменяли без проблем. Качество работ нормальное.",
    pros: "Отличный электрик, учли все пожелания по розеткам.",
    cons: "После покраски стен обнаружили что в одной комнате оттенок немного отличается, перекрашивали.",
    project: "2-комн. квартира, 58 м²",
    initials: "МА"
  },
  {
    name: "Светлана Н.",
    date: "15.09.2024",
    rating: 5,
    text: "Обращалась сюда по рекомендации подруги. Делали ремонт ванной и туалета. Работали быстро и качественно. Плитка положена ровно, все стыки аккуратные. Прораб Дмитрий молодец, все объяснял, помогал выбрать материалы. Цена адекватная.",
    pros: "Качественная работа, помощь в выборе материалов, адекватная цена.",
    cons: "Связь с прорабом была не всегда стабильная, иногда приходилось по несколько раз звонить.",
    project: "Ремонт ванной и туалета",
    initials: "СН"
  },
  {
    name: "Алексей П.",
    date: "08.09.2024",
    rating: 4,
    text: "Ремонт трешки делали около 3 месяцев. Качество работ нормальное, но были косяки с координацией - то электрик задерживается, то сантехник. В итоге немного затянули со сроками. Но по качеству претензий нет, все сделали добротно.",
    pros: "Хорошее качество работ, добротно все сделано.",
    cons: "Сроки сдвинулись почти на месяц, потому что бригады не всегда могли приехать вовремя.",
    project: "3-комн. квартира, 75 м²",
    initials: "АП"
  },
  {
    name: "Татьяна В.",
    date: "01.09.2024",
    rating: 5,
    text: "Очень благодарна за ремонт! Делали косметику однушки - обои, покраска, ламинат. Все сделали быстро и аккуратно. Мастера приятные, общительные. Помогли выбрать обои, посоветовали что лучше. Цена честная, без накруток.",
    pros: "Быстро, аккуратно, помогли с выбором материалов, честная цена.",
    cons: "На следующий день после укладки ламината заметили скрип в одном месте, но мастер приехал и устранил.",
    project: "1-комн. квартира, 35 м²",
    initials: "ТВ"
  },
  {
    name: "Денис М.",
    date: "25.08.2024",
    rating: 4,
    text: "Заказывал ремонт двушки. В целом нормально сделали, качество хорошее. Но был момент - не учли сразу что нужна дополнительная розетка на кухне, пришлось доделывать потом. Зато без доплат исправили. Работали чисто, каждый день убирали.",
    pros: "Хорошее качество, исправили недочет без доплаты, чистая работа.",
    cons: "При планировании не посоветовали где лучше разместить розетки, пришлось добавлять уже после.",
    project: "2-комн. квартира, 60 м²",
    initials: "ДМ"
  },
  {
    name: "Марина С.",
    date: "18.08.2024",
    rating: 5,
    text: "Делали капитальный ремонт квартиры. Работы много было - и стены, и полы, и потолки. Бригада работала слаженно, прораб Андрей контролировал каждый этап. Были небольшие задержки с материалами, но это не критично. Результатом очень довольны!",
    pros: "Слаженная работа бригады, контроль прораба на каждом этапе.",
    cons: "Пару раз откладывали работы на день-два из-за того что материалы не успевали привезти.",
    project: "2-комн. квартира, 65 м²",
    initials: "МС"
  },
  {
    name: "Андрей В.",
    date: "10.08.2024",
    rating: 5,
    text: "Ремонт однушки под ключ. Все сделали как договаривались, без сюрпризов. Качество работ отличное, особо плитку в ванной хвалю - ровно, красиво. Менеджер Ольга всегда на связи была, помогала с выбором материалов. Рекомендую!",
    pros: "Качественная плитка, менеджер всегда на связи, без сюрпризов по цене.",
    cons: "Немного не хватало визуализации на этапе планирования, было бы легче представить конечный результат.",
    project: "1-комн. квартира, 40 м²",
    initials: "АВ"
  }
];

const ReviewsSection = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [showForm, setShowForm] = useState(false);

  const allReviews = showAllReviews ? [...mainReviews, ...additionalReviews] : mainReviews;
  
  const averageRating = 4.8;
  const totalReviews = mainReviews.length + additionalReviews.length;

  const handleSubmitReview = () => {
    if (!reviewName.trim() || !reviewText.trim()) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите ваше имя и текст отзыва",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Спасибо за отзыв!",
      description: "Ваше мнение очень важно для нас. Отзыв будет опубликован сразу после проверки администратором сайта.",
      duration: 5000,
    });
    
    setReviewName("");
    setReviewText("");
    setShowForm(false);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Reviews list */}
          <div className="space-y-6 mb-12">
            {allReviews.map((review, index) => (
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
                    <div className="flex flex-col items-end gap-1">
                      {renderStars(review.rating)}
                      <div className="text-sm text-gray-400">{review.date}</div>
                    </div>
                  </div>
                  
                  {/* Review text */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.text}
                  </p>

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Плюсы:</p>
                      <p className="text-sm text-gray-600">{review.pros}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Минусы:</p>
                      <p className="text-sm text-gray-600">{review.cons}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show More Button */}
          {!showAllReviews && (
            <div className="mt-8 text-center">
              <Button
                onClick={() => setShowAllReviews(true)}
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg"
              >
                Смотреть все отзывы
              </Button>
            </div>
          )}

          {/* Average Rating */}
          <div className="text-center mt-16 mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-br from-cyan-50 to-blue-50 px-8 py-4 rounded-2xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                {averageRating}
              </div>
              <div>
                {renderStars(5)}
                <p className="text-sm text-gray-600 mt-1">{totalReviews} отзывов</p>
              </div>
            </div>
          </div>

          {/* Review Form Toggle */}
          {!showForm ? (
            <div className="text-center">
              <Button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 px-8 py-6 text-lg"
              >
                Оставить отзыв
              </Button>
            </div>
          ) : (
            <Card className="border-2 border-cyan-500/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Оставить отзыв</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <Input
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      placeholder="Введите ваше имя"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваш отзыв
                    </label>
                    <Textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Расскажите о вашем опыте работы с нами..."
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={handleSubmitReview}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90"
                    >
                      Опубликовать отзыв
                    </Button>
                    <Button
                      onClick={() => setShowForm(false)}
                      variant="outline"
                    >
                      Отмена
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
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