import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogMaterialsChoice from "@/assets/blog-materials-choice.jpg";
import designProcess from "@/assets/design-process.jpg";
import bathroomWork from "@/assets/bathroom-work.jpg";

const HowToChooseMaterials = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Как правильно выбрать материалы для ремонта квартиры в 2025 году | SPB-DSRemont</title>
        <meta name="description" content="Полное руководство по выбору материалов для ремонта: напольные покрытия, стеновые материалы, плитка. Критерии выбора, сравнение характеристик и советы от профессионалов с 15-летним опытом." />
        <meta name="keywords" content="выбор материалов для ремонта, материалы для ремонта квартиры, как выбрать обои, как выбрать ламинат, краска для стен" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/kak-vybrat-materialy-dlya-remonta" />
        
        <meta property="og:title" content="Как правильно выбрать материалы для ремонта квартиры в 2025 году | SPB-DSRemont" />
        <meta property="og:description" content="Полное руководство по выбору материалов для ремонта: напольные покрытия, стеновые материалы, плитка. Критерии выбора, сравнение характеристик и советы от профессионалов." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/kak-vybrat-materialy-dlya-remonta" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blogMaterialsChoice} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Как правильно выбрать материалы для ремонта квартиры в 2025 году | SPB-DSRemont" />
        <meta name="twitter:description" content="Полное руководство по выбору материалов для ремонта: напольные покрытия, стеновые материалы, плитка. Критерии выбора, сравнение характеристик и советы от профессионалов." />
        <meta name="twitter:image" content={blogMaterialsChoice} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Как правильно выбрать материалы для ремонта квартиры в 2025 году",
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-28",
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
            "image": blogMaterialsChoice,
            "articleBody": "Выбор материалов для ремонта — один из самых важных этапов подготовки к обновлению интерьера."
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
              <div className="text-sm text-gray-500 mb-4">15 января 2025 • 10 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Как правильно выбрать материалы для ремонта квартиры в 2025 году
              </h1>
            </div>
            
            <LazyImage
              src={blogMaterialsChoice}
              alt="Выбор материалов для ремонта квартиры - консультация специалиста"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Выбор материалов для ремонта — это решение, которое определит, насколько комфортным будет ваш дом на ближайшие 10-15 лет. От качества материалов зависит не только внешний вид интерьера, но и здоровье семьи, долговечность отделки и сумма, которую вы потратите на обслуживание и ремонт. За 15 лет работы мы видели тысячи ошибок в выборе материалов, и в этой статье расскажем, как их избежать.
              </p>
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">С чего начать выбор материалов</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Прежде чем отправляться в строительный магазин, важно понять ключевые факторы, которые будут влиять на ваш выбор. Многие совершают ошибку, ориентируясь только на цену или внешний вид, но профессиональный подход требует более комплексного анализа.
                </p>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Критерии выбора материалов</h3>
                  <div className="space-y-3">
                    {[
                      { text: "Назначение помещения", detail: "жилая комната требует одних материалов, кухня и ванная — других" },
                      { text: "Уровень влажности", detail: "критически важно для ванных комнат, кухонь и балконов" },
                      { text: "Проходимость", detail: "для прихожей нужны более прочные покрытия" },
                      { text: "Экологичность", detail: "особенно важно для спален и детских комнат" },
                      { text: "Бюджет", detail: "но помните: скупой платит дважды" },
                      { text: "Сложность ухода", detail: "подумайте, сколько времени вы готовы тратить на уборку" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-gray-900 font-medium">{item.text}</span>
                          <span className="text-gray-600"> — {item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Напольные покрытия: что выбрать в 2025 году</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Пол — это самая эксплуатируемая поверхность в квартире. На него падают предметы, по нему ходят в обуви, на него проливают жидкости. Поэтому выбор напольного покрытия требует особого внимания.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ламинат: золотая середина</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Ламинат остается самым популярным напольным покрытием в России благодаря оптимальному соотношению цены и качества. Современный ламинат 32-33 класса прослужит 10-15 лет даже в прихожей.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong className="text-gray-900">На что обратить внимание:</strong> Толщина должна быть не менее 8 мм, класс износостойкости — минимум 32 для жилых помещений и 33 для прихожих. Обязательно проверьте систему замков — качественные Click-замки гарантируют, что пол не разойдется со временем.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Важно:</strong> Ламинат боится воды. Даже водостойкие модели не рекомендуется использовать в ванных комнатах. Для кухни выбирайте влагостойкий ламинат с восковой пропиткой замков.
                  </p>
                </div>
                
                <LazyImage
                  src={designProcess}
                  alt="Процесс выбора дизайна и материалов для ремонта"
                  className="w-full h-[400px] object-cover rounded-2xl my-8"
                />
                
                <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Паркетная доска: природная красота</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Если бюджет позволяет, паркетная доска — отличный выбор для спален и гостиных. Натуральное дерево создает уникальный микроклимат в помещении, теплое на ощупь и выглядит роскошно.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong className="text-gray-900">Выбор породы:</strong> Дуб — самый прочный и долговечный, практически не деформируется. Ясень чуть мягче, но имеет красивую текстуру. Орех подходит для классических интерьеров.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Техническая деталь:</strong> Толщина верхнего слоя должна быть не менее 3-4 мм. Это позволит 2-3 раза провести циклевку и продлить срок службы до 25-30 лет.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Керамогранит: вечная классика</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Для кухни, ванной и прихожей керамогранит — оптимальный выбор. Он практически не изнашивается, не боится воды и химии, легко моется. Единственный минус — холодная поверхность, но эта проблема решается системой «теплый пол».
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Критерий выбора:</strong> Для пола выбирайте плитку с нескользящей поверхностью (R10-R11). Для ванной комнаты — влагопоглощение не более 3%. Современный керамогранит может имитировать дерево, мрамор или бетон, вписываясь в любой интерьер.
                  </p>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Стеновые покрытия: краска или обои</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Выбор между краской и обоями — вопрос не только эстетики, но и практичности. В 2025 году популярность набирают комбинированные решения: одна акцентная стена с обоями, остальные — покраска.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Краска: современно и практично</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Краска дает ровное матовое или сатиновое покрытие, которое легко обновить через несколько лет. Главное — правильно подготовить стены, они должны быть идеально ровными.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div><strong>Акриловая краска</strong> — универсальная, без запаха, быстро сохнет. Подходит для жилых комнат. Цена: 150-300 руб/м²</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div><strong>Латексная краска</strong> — влагостойкая, моющаяся. Идеальна для кухни и коридоров. Цена: 200-400 руб/м²</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div><strong>Силиконовая краска</strong> — максимальная влагостойкость и эластичность. Скрывает микротрещины. Цена: 400-600 руб/м²</div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Обои: разнообразие текстур</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Обои позволяют создать уникальный интерьер, скрыть небольшие неровности стен и добавить текстуры. Современные обои служат 7-10 лет без потери внешнего вида.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div><strong>Флизелиновые обои</strong> — плотные, скрывают дефекты стен, легко клеятся. Можно красить до 10 раз. Цена: 300-800 руб/м²</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div><strong>Виниловые обои</strong> — моющиеся, прочные, влагостойкие. Подходят для кухни и коридоров. Цена: 400-1000 руб/м²</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div><strong>Обои под покраску</strong> — универсальное решение. Меняйте цвет без переклейки. Цена: 200-500 руб/м²</div>
                    </li>
                  </ul>
                </div>
              </section>
              
              <LazyImage
                src={bathroomWork}
                alt="Профессиональные работы по ремонту ванной комнаты"
                className="w-full h-[400px] object-cover rounded-2xl my-8"
              />
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Материалы для влажных помещений</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ванная комната и санузел — это зоны повышенного риска. Здесь постоянная влажность, перепады температуры и прямой контакт с водой. Экономить на материалах для этих помещений категорически нельзя.
                </p>
                
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-6">
                  <h3 className="text-xl font-semibold text-cyan-900 mb-3">Керамическая плитка и керамогранит</h3>
                  <p className="text-cyan-800 mb-4 leading-relaxed">
                    Для стен в ванной выбирайте керамическую плитку с влагопоглощением не более 3%. Глянцевая плитка визуально расширяет пространство, но на ней видны капли воды. Матовая более практична.
                  </p>
                  <p className="text-cyan-800 mb-4 leading-relaxed">
                    Для пола — только керамогранит с антискользящим покрытием (R10-R11). Обычная плитка на полу ванной опасна — можно поскользнуться.
                  </p>
                  <p className="text-cyan-800 leading-relaxed">
                    <strong>Затирка:</strong> Используйте эпоксидную затирку для швов. Она не впитывает воду, не темнеет и не покрывается плесенью. Обычная цементная затирка через 2-3 года потребует обновления.
                  </p>
                </div>
                
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-6">
                  <h3 className="text-xl font-semibold text-cyan-900 mb-3">Влагостойкий гипсокартон</h3>
                  <p className="text-cyan-800 leading-relaxed">
                    Для выравнивания стен и создания коробов используйте только влагостойкий гипсокартон (ГКЛВ) — зеленого цвета. Обычный ГКЛ во влажных помещениях деформируется и покрывается плесенью.
                  </p>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Типичные ошибки при выборе материалов</h2>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Экономия на скрытых работах</h3>
                    <p className="text-red-800 leading-relaxed">
                      Самая дорогая ошибка — использовать дешевую электропроводку, трубы или гидроизоляцию. Эти материалы спрятаны в стенах, и замена потребует нового ремонта. На том, что внутри стен, экономить нельзя.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Неподходящие материалы для помещения</h3>
                    <p className="text-red-800 leading-relaxed">
                      Обычный ламинат во влажных помещениях, бумажные обои на кухне, керамогранит без теплого пола в спальне — такие ошибки приводят к быстрой порче отделки и необходимости переделки.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Покупка без запаса</h3>
                    <p className="text-red-800 leading-relaxed">
                      Всегда берите материалы с запасом 10-15%. Плитка бьется при транспортировке и укладке, ламинат обрезается, обои нужно подгонять по рисунку. Докупить точно такую же партию часто невозможно — оттенок будет отличаться.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Игнорирование сертификатов</h3>
                    <p className="text-red-800 leading-relaxed">
                      Особенно важно для красок, клея, герметиков. Проверяйте наличие сертификатов безопасности. Дешевые материалы от непроверенных производителей могут содержать формальдегид и другие токсичные вещества.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Как мы помогаем выбрать материалы</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  За 15 лет работы мы сформировали базу проверенных поставщиков и производителей. Мы знаем, какие материалы действительно служат долго, а какие — только красиво выглядят в магазине.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Наши специалисты приедут к вам, оценят особенности помещений и подберут оптимальные материалы с учетом вашего бюджета. Мы работаем только с сертифицированными материалами и предоставляем гарантию на все работы.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Правильный выбор материалов — это инвестиция в комфорт и здоровье на долгие годы. Доверьте этот выбор профессионалам.
                </p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                >
                  Получить консультацию по материалам
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

export default HowToChooseMaterials;
