import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, AlertTriangle, CheckCircle2 } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/renovation-process.jpg";
import processImage from "@/assets/work-renovation-new.jpg";

const RepairTimelines = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Сроки ремонта квартиры: реальные цифры и факторы 2025 | SPB-DSRemont</title>
        <meta name="description" content="Реальные сроки ремонта квартиры в СПб: косметический от 2 недель, капитальный 2-4 месяца. Этапы работ, факторы влияния, как ускорить процесс." />
        <meta name="keywords" content="сроки ремонта квартиры, сколько длится ремонт, время ремонта, этапы ремонта, продолжительность ремонта спб" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/sroki-remonta-kvartiry" />
        
        <meta property="og:title" content="Сроки ремонта квартиры: реальные цифры и факторы 2025" />
        <meta property="og:description" content="Реальные сроки ремонта квартиры в СПб: косметический от 2 недель, капитальный 2-4 месяца. Этапы работ, факторы влияния, как ускорить процесс." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/sroki-remonta-kvartiry" />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-gray-600 mb-6 flex-wrap">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  15 марта 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  12 минут чтения
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Сроки ремонта квартиры: реальные цифры и факторы влияния
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Один из главных вопросов при планировании ремонта — сколько времени он займет. Разбираем реальные сроки для разных типов ремонта в Санкт-Петербурге и факторы, влияющие на продолжительность работ.
              </p>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
              <LazyImage
                src={heroImage}
                alt="Процесс ремонта квартиры"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary" />
                Реальные сроки по типам ремонта
              </h2>

              <Card className="mb-8 border-l-4 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Косметический ремонт</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Срок:</strong> 2-4 недели
                    </p>
                    <p className="text-gray-700">
                      <strong>Включает:</strong> Поклейка обоев, покраска стен/потолков, замена напольного покрытия, обновление сантехники.
                    </p>
                    <p className="text-gray-700">
                      <strong>Площадь 50м²:</strong> 2-3 недели при наличии материалов
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 border-l-4 border-yellow-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Капитальный ремонт</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Срок:</strong> 2-4 месяца
                    </p>
                    <p className="text-gray-700">
                      <strong>Включает:</strong> Демонтаж, замена проводки и сантехники, выравнивание стен, стяжка пола, полная отделка.
                    </p>
                    <p className="text-gray-700">
                      <strong>Площадь 70м²:</strong> 2.5-3.5 месяца
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ремонт под ключ с дизайн-проектом</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Срок:</strong> 3-6 месяцев
                    </p>
                    <p className="text-gray-700">
                      <strong>Включает:</strong> Разработка проекта (3-4 недели), все работы капремонта + реализация дизайнерских решений.
                    </p>
                    <p className="text-gray-700">
                      <strong>Площадь 100м²:</strong> 4-5 месяцев
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden my-12">
                <LazyImage
                  src={processImage}
                  alt="Этапы ремонтных работ"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Этапы работ и их продолжительность
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Демонтажные работы</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 3-7 дней</p>
                    <p className="text-gray-700">Снос старых перегородок, демонтаж покрытий, вывоз мусора.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Черновые работы</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 2-4 недели</p>
                    <p className="text-gray-700">Возведение перегородок, замена окон, прокладка коммуникаций, электрика, сантехника, стяжка, штукатурка.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Чистовая отделка</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 3-5 недель</p>
                    <p className="text-gray-700">Шпаклевка, покраска/обои, укладка напольных покрытий, монтаж потолков, установка дверей.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Финишные работы</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 1-2 недели</p>
                    <p className="text-gray-700">Установка сантехники, светильников, розеток и выключателей, плинтусов, уборка.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
                Факторы, влияющие на сроки
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ускоряющие факторы</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Материалы закуплены заранее</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Квартира освобождена полностью</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Готовый дизайн-проект</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Хорошее состояние черновых работ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Опытная бригада из 3-5 человек</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Замедляющие факторы</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Изменения в процессе работ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Задержки с поставкой материалов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Старый фонд с проблемными стенами</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Сложная перепланировка</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Согласование работ с соседями</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Важные моменты планирования</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Закладывайте запас времени 15-20% от расчетного срока</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Технологические перерывы обязательны: стяжке нужно 28 дней для полного высыхания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Зимой некоторые работы могут занять на 10-15% больше времени</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Время доставки эксклюзивных материалов может составить 2-8 недель</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Как сократить сроки ремонта
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">1. Детальное планирование</h3>
                  <p className="text-gray-700">Составьте подробный график работ с учетом всех этапов и технологических перерывов. Закупите все материалы заранее.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">2. Профессиональная бригада</h3>
                  <p className="text-gray-700">Опытные специалисты работают быстрее и качественнее. Оптимальный состав — 3-5 человек разных специальностей.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">3. Параллельные работы</h3>
                  <p className="text-gray-700">Где возможно, совмещайте этапы: пока сохнет стяжка в одной комнате, можно работать в другой.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">4. Минимум изменений</h3>
                  <p className="text-gray-700">Каждое изменение в процессе работ добавляет 3-7 дней к общему сроку. Продумайте все детали заранее.</p>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-primary/10 to-yellow-400/10 border-0 mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Реалистичные сроки от SPB-DSRemont
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Мы работаем по четкому графику с детальным планированием каждого этапа. Наши бригады выполняют ремонт любой сложности точно в срок.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700"><strong>Однокомнатная квартира (40м²):</strong> от 3-4 недель</p>
                    <p className="text-gray-700"><strong>Двухкомнатная квартира (60м²):</strong> от 1.5-2 месяцев</p>
                    <p className="text-gray-700"><strong>Трехкомнатная квартира (80м²):</strong> от 2-3 месяцев</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">⚠️ Важно знать</h3>
                <p className="text-gray-700">
                  Слишком короткие сроки часто означают снижение качества работ. Профессиональный ремонт требует времени на соблюдение технологий. Доверяйте компаниям, которые дают реалистичные прогнозы, а не обещают невозможное.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Заключение
              </h2>

              <p className="text-gray-700 mb-4">
                Сроки ремонта зависят от множества факторов: площади помещения, типа работ, состояния квартиры и организации процесса. Правильное планирование и работа с профессионалами — залог своевременного завершения ремонта.
              </p>

              <p className="text-gray-700 mb-8">
                SPB-DSRemont предоставляет детальный график работ с указанием всех этапов. Мы гарантируем соблюдение согласованных сроков и высокое качество на каждом этапе. Звоните: <a href="tel:+78122099885" className="text-primary font-semibold hover:underline">8 812 209-98-85</a>
              </p>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default RepairTimelines;