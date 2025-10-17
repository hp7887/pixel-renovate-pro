import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogBalconyRenovation from "@/assets/blog-balcony-renovation.jpg";

const BalconyRenovation = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт и утепление балкона: превращаем в уютное пространство | SPB-DSRemont</title>
        <meta name="description" content="Полное руководство по ремонту и утеплению балкона: остекление, отделка, варианты использования пространства. Создайте дополнительную комнату или зону отдыха." />
        <meta name="keywords" content="ремонт балкона, утепление балкона, остекление балкона, отделка балкона, балкон под ключ" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/remont-balkona" />
        
        <meta property="og:title" content="Ремонт и утепление балкона: превращаем в уютное пространство" />
        <meta property="og:description" content="Полное руководство по ремонту и утеплению балкона: остекление, отделка, варианты использования пространства." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/remont-balkona" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Ремонт и утепление балкона: превращаем в уютное пространство",
            "description": "Полное руководство по ремонту и утеплению балкона: остекление, отделка, варианты использования пространства.",
            "image": "https://spb-dsremont.ru/og-image.jpg",
            "datePublished": "2025-02-20",
            "author": {
              "@type": "Organization",
              "name": "SPB-DSRemont"
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к статьям
              </Button>
            </Link>
            
            <div className="mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                <span>20 февраля 2025</span>
                <span>•</span>
                <span>12 минут чтения</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ремонт и утепление балкона: превращаем в уютное пространство
              </h1>
              <p className="text-xl text-gray-600">
                Балкон может стать полноценной комнатой, кабинетом, зоной отдыха или зимним садом. Рассказываем, как правильно провести ремонт и утепление балкона с максимальной пользой.
              </p>
            </div>
            
            <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
              <LazyImage
                src={blogBalconyRenovation}
                alt="Современный ремонт балкона"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Home className="w-8 h-8 text-primary" />
                  Варианты использования балкона
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">🏠 Дополнительная комната</h3>
                    <p className="text-gray-700 mb-3">
                      При объединении с комнатой получаете +3-6 м² полезной площади. Требуется согласование перепланировки.
                    </p>
                    <p className="text-sm text-gray-600 italic">Стоимость: от 180 000₽</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Рабочий кабинет</h3>
                    <p className="text-gray-700 mb-3">
                      Изолированное место для работы на удаленке. Стол, стеллажи, хорошее освещение и розетки.
                    </p>
                    <p className="text-sm text-gray-600 italic">Стоимость: от 120 000₽</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">🌿 Зимний сад</h3>
                    <p className="text-gray-700 mb-3">
                      Теплое остекление, стеллажи для растений, система полива. Оазис зелени круглый год.
                    </p>
                    <p className="text-sm text-gray-600 italic">Стоимость: от 100 000₽</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">☕ Зона отдыха</h3>
                    <p className="text-gray-700 mb-3">
                      Уютное место для чаепития и чтения. Диванчик, столик, мягкое освещение, декор.
                    </p>
                    <p className="text-sm text-gray-600 italic">Стоимость: от 90 000₽</p>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">🏋️ Мини-спортзал</h3>
                    <p className="text-gray-700 mb-3">
                      Тренажер, коврик для йоги, зеркало. Удобно для домашних тренировок.
                    </p>
                    <p className="text-sm text-gray-600 italic">Стоимость: от 110 000₽</p>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">📦 Система хранения</h3>
                    <p className="text-gray-700 mb-3">
                      Встроенные шкафы и полки. Освобождает место в квартире от сезонных вещей.
                    </p>
                    <p className="text-sm text-gray-600 italic">Стоимость: от 70 000₽</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Этапы ремонта балкона</h2>
                <div className="space-y-6">
                  <div className="bg-white border-2 border-primary/20 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                      <h3 className="text-2xl font-bold text-gray-900">Остекление балкона</h3>
                    </div>
                    <div className="ml-16">
                      <p className="text-gray-700 mb-4">Выбор остекления зависит от целей использования балкона:</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Холодное остекление (алюминий):</strong> защита от ветра и осадков, температура как на улице. Стоимость от 25 000₽
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Теплое остекление (ПВХ):</strong> двух-трехкамерные стеклопакеты, можно использовать круглый год. Стоимость от 45 000₽
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Панорамное остекление:</strong> от пола до потолка, максимум света и вида. Стоимость от 70 000₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-primary/20 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                      <h3 className="text-2xl font-bold text-gray-900">Утепление</h3>
                    </div>
                    <div className="ml-16">
                      <p className="text-gray-700 mb-4">Качественное утепление обеспечивает комфортную температуру:</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Пенопласт (ПСБ-С):</strong> бюджетный вариант, толщина 50-100мм, легкий монтаж. 500-800₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Экструдированный пенополистирол (ЭППС):</strong> лучшие теплоизоляционные свойства, влагостойкий. 1200-1800₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Минеральная вата:</strong> экологична, пожаробезопасна, отличная звукоизоляция. 800-1500₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Напыляемый пенополиуретан (ППУ):</strong> заполняет все щели, максимальная эффективность. 2000-3000₽/м²
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-primary/20 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                      <h3 className="text-2xl font-bold text-gray-900">Отделка стен и потолка</h3>
                    </div>
                    <div className="ml-16">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Вагонка деревянная:</strong> экологично, эстетично, требует обработки. 1200-2500₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Пластиковые панели:</strong> недорого, практично, большой выбор цветов. 400-800₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Гипсокартон под покраску/обои:</strong> гладкая поверхность, любой дизайн. 800-1500₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Декоративная штукатурка:</strong> современно, долговечно, разные фактуры. 1500-3000₽/м²
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-primary/20 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                      <h3 className="text-2xl font-bold text-gray-900">Напольное покрытие</h3>
                    </div>
                    <div className="ml-16">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Ламинат:</strong> красиво, практично, большой выбор. Класс 32-33. 800-2000₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Линолеум:</strong> недорого, влагостойко, теплоизоляция. 500-1200₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Керамогранит:</strong> для открытых балконов, морозостойкий. 1200-3000₽/м²
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Система "теплый пол":</strong> комфорт круглый год. +3000-5000₽/м²
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-primary/20 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">5</div>
                      <h3 className="text-2xl font-bold text-gray-900">Электрика и освещение</h3>
                    </div>
                    <div className="ml-16">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Розетки:</strong> минимум 2-3 штуки для бытовых приборов
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Основное освещение:</strong> потолочный светильник или точечные
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Локальное освещение:</strong> торшер, бра, настольная лампа
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong>Декоративная подсветка:</strong> светодиодная лента для атмосферы
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Важные моменты и ограничения</h2>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Нельзя выносить радиаторы отопления</h3>
                        <p className="text-gray-700">
                          Запрещено законом. Используйте электрические обогреватели, теплый пол или инфракрасные панели.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Объединение требует согласования</h3>
                        <p className="text-gray-700">
                          Снос балконного блока - это перепланировка. Нужно разрешение жилинспекции. Штраф за самовольную перепланировку до 300 000₽.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Проверьте состояние балконной плиты</h3>
                        <p className="text-gray-700">
                          В старых домах плита может быть изношена. Максимальная нагрузка на 1м² - 200кг. Учитывайте вес остекления, утепления, мебели.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Вентиляция обязательна</h3>
                        <p className="text-gray-700">
                          При утеплении нарушается естественная вентиляция. Установите приточный клапан или регулярно проветривайте, иначе появится конденсат и плесень.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Средние сроки и стоимость</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Сроки работ</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>• Остекление: 1-2 дня</p>
                        <p>• Утепление и отделка: 5-7 дней</p>
                        <p>• Электрика: 1-2 дня</p>
                        <p>• Напольное покрытие: 1-2 дня</p>
                        <p className="font-bold mt-3">Итого: 10-14 дней</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Стоимость под ключ (за 6м²)</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>• Эконом-вариант: 70 000-100 000₽</p>
                        <p>• Стандарт: 120 000-180 000₽</p>
                        <p>• Премиум: 200 000-350 000₽</p>
                        <p className="text-sm text-gray-600 mt-3 italic">
                          * Цены включают материалы и работу
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12 bg-gradient-to-br from-primary/10 to-yellow-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Итоговые рекомендации</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Начните с остекления</strong>
                      <p className="text-gray-700 mt-1">Выбирайте теплое остекление, если планируете круглогодичное использование балкона</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Качественное утепление - основа комфорта</strong>
                      <p className="text-gray-700 mt-1">Не экономьте на толщине и качестве утеплителя. Это окупится экономией на отоплении</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Продумайте электрику заранее</strong>
                      <p className="text-gray-700 mt-1">Розетки, освещение и теплый пол планируйте до начала отделки</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Выбирайте влагостойкие материалы</strong>
                      <p className="text-gray-700 mt-1">Даже на утепленном балконе бывают перепады температуры и влажности</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-primary to-yellow-500 text-white p-8 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-4">Превратим ваш балкон в уютное пространство</h2>
                <p className="text-lg mb-6 text-white/90">
                  Рассчитаем стоимость, подберем оптимальные материалы и выполним ремонт балкона под ключ с гарантией 1 год
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 font-bold"
                  onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
                >
                  Получить расчет стоимости
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default BalconyRenovation;
