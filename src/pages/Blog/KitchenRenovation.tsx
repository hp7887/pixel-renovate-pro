import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogKitchenRenovation from "@/assets/blog-kitchen-renovation.jpg";

const KitchenRenovation = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт кухни: пошаговое руководство от планировки до финиша | SPB-DSRemont</title>
        <meta name="description" content="Полное руководство по ремонту кухни: планировка, выбор материалов, последовательность работ, типичные ошибки. Профессиональные советы по созданию функциональной и красивой кухни." />
        <meta name="keywords" content="ремонт кухни, кухня под ключ, планировка кухни, рабочий треугольник, фартук для кухни, кухонный гарнитур" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/remont-kuhni" />
        
        <meta property="og:title" content="Ремонт кухни: пошаговое руководство от планировки до финиша | SPB-DSRemont" />
        <meta property="og:description" content="Полное руководство по ремонту кухни: планировка, выбор материалов, последовательность работ, типичные ошибки." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/remont-kuhni" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blogKitchenRenovation} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт кухни: пошаговое руководство от планировки до финиша | SPB-DSRemont" />
        <meta name="twitter:description" content="Полное руководство по ремонту кухни: планировка, выбор материалов, последовательность работ, типичные ошибки." />
        <meta name="twitter:image" content={blogKitchenRenovation} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ремонт кухни: пошаговое руководство от планировки до финиша",
            "datePublished": "2025-02-10",
            "author": {
              "@type": "Organization",
              "name": "SPB-DSRemont"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SPB-DSRemont",
              "logo": {
                "@type": "ImageObject",
                "url": "https://spb-dsremont.ru/logo.png"
              }
            },
            "image": blogKitchenRenovation
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Вернуться к статьям
            </Link>
            
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-4">10 февраля 2025 • 14 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ремонт кухни: пошаговое руководство от планировки до финиша
              </h1>
            </div>
            
            <LazyImage
              src={blogKitchenRenovation}
              alt="Современный ремонт кухни"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Ремонт кухни — один из самых сложных и дорогих этапов ремонта квартиры. Здесь сочетается всё: электрика, водопровод, вентиляция, отделка. Одна ошибка — и придётся переделывать. В этой статье расскажем, как сделать ремонт кухни правильно: от планировки до последнего светильника.
              </p>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Этап 1: Планировка и дизайн-проект</h2>
                <p className="text-gray-700 mb-4">
                  Начните с детального плана. Даже если вы не меняете расположение мебели, важно зафиксировать все размеры, расположение розеток, выводы воды и газа.
                </p>
                
                <div className="bg-cyan-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Правило рабочего треугольника</h3>
                  <p className="text-gray-700 mb-3">
                    Холодильник, мойка и плита должны образовывать треугольник. Это оптимизирует движение при готовке и снижает усталость.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Оптимальные расстояния:</strong> между точками треугольника 1,2-2,7 метра</li>
                    <li><strong>Между мойкой и плитой:</strong> минимум 40 см (для безопасности и удобства)</li>
                    <li><strong>Холодильник:</strong> не ставьте вплотную к плите (расстояние минимум 15 см)</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Стандартные размеры для кухни</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Высота столешницы:</strong> 85-90 см (под рост хозяйки: локоть согнутой руки - 15 см)
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Глубина столешницы:</strong> 60 см стандарт, 65 см — удобнее
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Расстояние между верхними и нижними шкафами:</strong> 55-65 см
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Высота фартука:</strong> 55-65 см
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Вытяжка над плитой:</strong> 65-75 см для электрической, 75-85 см для газовой
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <LazyImage
                src={blogKitchenRenovation}
                alt="Планировка современной кухни"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Этап 2: Демонтаж и подготовка</h2>
                <p className="text-gray-700 mb-4">
                  Прежде чем что-то строить, нужно всё снести. Демонтаж — грязный, но важный этап.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Последовательность демонтажа</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Отключите электричество, воду, газ (газ — только специалисты!)</li>
                      <li>Снимите светильники, розетки, выключатели</li>
                      <li>Демонтируйте кухонный гарнитур, технику</li>
                      <li>Снимите старую отделку (обои, плитку, напольное покрытие)</li>
                      <li>Демонтируйте радиатор отопления (если планируете замену/перенос)</li>
                    </ol>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <div className="flex items-start gap-3 mb-2">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <h3 className="text-xl font-semibold text-red-900">Важно!</h3>
                    </div>
                    <p className="text-red-800">
                      Не трогайте газовую трубу и счётчики сами! Любые работы с газом выполняет только сертифицированная газовая служба. Штраф за самовольное вмешательство — от 50 000 руб.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Этап 3: Черновые работы</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Электрика</h3>
                    <p className="text-gray-700 mb-3">
                      Кухня — помещение с высокой нагрузкой на электросеть. Важно правильно рассчитать количество розеток и мощность проводки.
                    </p>
                    <p className="text-gray-700 mb-2"><strong>Обязательные розетки на кухне:</strong></p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Для холодильника (отдельная линия, не менее 16А)</li>
                      <li>Для посудомоечной машины (отдельная линия 16А с УЗО)</li>
                      <li>Для стиральной машины, если она на кухне (отдельная линия 16А с УЗО)</li>
                      <li>Для духовки (отдельная линия, может потребоваться 25-32А для мощных моделей)</li>
                      <li>Для варочной панели (отдельная силовая линия, часто 32-40А)</li>
                      <li>Для вытяжки (может быть на общей линии)</li>
                      <li>Для мелкой техники над столешницей: минимум 3-4 розетки (чайник, комбайн, микроволновка)</li>
                    </ul>
                    <p className="text-sm bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg text-gray-700">
                      <strong>Совет:</strong> заложите на 30-40% больше розеток, чем планируете. Техника появляется, а штробить стены после ремонта — дорого и неприятно.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Водопровод и канализация</h3>
                    <p className="text-gray-700 mb-3">
                      Если меняете расположение мойки, придется переносить водопровод и канализацию.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li><strong>Трубы:</strong> используйте полипропилен (ППР) или металлопластик. ПВХ для канализации.</li>
                      <li><strong>Фильтры:</strong> установите фильтр грубой и тонкой очистки воды — это продлит срок службы техники.</li>
                      <li><strong>Краны:</strong> установите отдельные краны для каждого прибора (посудомойка, стиралка, смеситель) — для удобства ремонта.</li>
                      <li><strong>Уклон канализации:</strong> 2-3 см на метр, иначе будет застой.</li>
                      <li><strong>Вывод для посудомойки:</strong> сделайте отдельный вывод канализации с воздушным разрывом (антизапах).</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Вентиляция</h3>
                    <p className="text-gray-700 mb-3">
                      Хорошая вентиляция — залог отсутствия запахов, жира на стенах и плесени.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Вытяжка:</strong> производительность = площадь кухни × высота потолка × 12. Для кухни 10 м² с потолком 2,7 м нужна вытяжка минимум 324 м³/ч.</li>
                      <li><strong>Воздуховод:</strong> минимум изгибов, диаметр не меньше диаметра выхода вытяжки (обычно 120-150 мм).</li>
                      <li><strong>Не перекрывайте естественную вентиляцию!</strong> Если вытяжка подключается к вентканалу, установите обратный клапан и тройник с решеткой для естественной тяги.</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Этап 4: Отделка</h2>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Последовательность отделки кухни</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li><strong>Потолок:</strong> штукатурка/шпаклевка → покраска или натяжной потолок (после всех мокрых работ)</li>
                    <li><strong>Стены:</strong> штукатурка/шпаклевка → покраска или обои. Зону фартука оставьте под плитку.</li>
                    <li><strong>Пол:</strong> стяжка (если нужна) → наливной пол или укладка плитки/ламината/линолеума</li>
                    <li><strong>Фартук:</strong> укладка плитки, керамогранита, скинали (после установки нижних шкафов или по разметке)</li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Выбор материалов для кухни</h3>
                  <p className="text-gray-700 mb-3"><strong>Пол:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Керамогранит:</strong> самый практичный вариант (влагостойкий, прочный, легко моется). Цена 800-3000 руб/м².</li>
                    <li><strong>Кварцвиниловая плитка:</strong> теплее керамогранита, влагостойкая, износостойкая. Цена 1200-2500 руб/м².</li>
                    <li><strong>Ламинат 33 класса:</strong> допустим, но выбирайте влагостойкий. Цена 1000-2000 руб/м².</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-3"><strong>Фартук:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Керамическая плитка/керамогранит:</strong> классика, легко моется, долговечно. 600-2500 руб/м².</li>
                    <li><strong>Скинали (стекло с фотопечатью):</strong> стильно, без швов, но дороже. 5000-10000 руб/м².</li>
                    <li><strong>МДФ-панели:</strong> бюджетный вариант, но менее долговечный. 1500-3000 руб/м².</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Типичные ошибки при ремонте кухни</h2>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Мало розеток</h3>
                    <p className="text-red-800">
                      Самая частая ошибка. Лучше сделать на 50% больше розеток, чем планируете. Техника появляется, а удлинители на кухне — это некрасиво и опасно.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Неправильная высота столешницы</h3>
                    <p className="text-red-800">
                      Стандарт 85 см не всегда удобен. Высокому человеку нужно 90-95 см. Проверьте: согните руку в локте, от локтя до столешницы должно быть 10-15 см.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Глянцевые фасады</h3>
                    <p className="text-red-800">
                      Выглядят эффектно, но на них видны все отпечатки пальцев, разводы от воды, пыль. Матовые или с текстурой — практичнее.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Светлая затирка для фартука</h3>
                    <p className="text-red-800">
                      Белая затирка на фартуке быстро темнеет от жира и грязи. Используйте эпоксидную затирку серого/бежевого цвета или в тон плитке.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 mb-4">
                  Ремонт кухни — сложный процесс, требующий тщательной подготовки. Планируйте заранее, не экономьте на скрытых работах (электрика, водопровод), выбирайте практичные материалы. Если не уверены в своих силах — доверьте работу профессионалам.
                </p>
                <p className="text-gray-700">
                  Мы выполним ремонт кухни под ключ: от дизайн-проекта до установки последней ручки на шкафу. Соблюдаем сроки, работаем по договору с гарантией 1 год. Помогаем с выбором материалов и техники.
                </p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                >
                  Заказать ремонт кухни
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

export default KitchenRenovation;
