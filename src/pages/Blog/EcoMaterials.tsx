import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogEcoMaterialsNatural from "@/assets/blog-eco-materials-natural.jpg";
import blogEcoCertificates from "@/assets/blog-eco-certificates.jpg";
import blogEcoHealthyHome from "@/assets/blog-eco-healthy-home.jpg";

const EcoMaterials = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Экологичные материалы для ремонта в СПб 2025: безопасно для здоровья | SPB-DSRemont</title>
        <meta name="description" content="Полный гид по экологичным материалам для ремонта квартиры в СПб. Сертификаты E0, EcoLabel, FSC. Натуральные краски без ЛОС от 890₽/л. Консультация экспертов бесплатно." />
        <meta name="keywords" content="экологичные материалы для ремонта, безопасные материалы СПб, эко ремонт квартиры, натуральные материалы для дома, сертификат E0, краски без ЛОС" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/ekologichnye-materialy" />
        
        <meta property="og:title" content="Экологичные материалы для ремонта: гид по безопасному ремонту в СПб" />
        <meta property="og:description" content="Как выбрать безопасные материалы для ремонта. Сертификаты, классы эмиссии, натуральные материалы. Консультация бесплатно." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/ekologichnye-materialy" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Экологичные материалы для ремонта: что выбрать для здоровья в 2025",
            "description": "Полное руководство по выбору экологичных материалов для ремонта квартиры",
            "image": "https://spb-dsremont.ru/og-image.jpg",
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
            "datePublished": "2025-01-28",
            "dateModified": "2025-01-28"
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
              <div className="text-sm text-muted-foreground mb-4">28 января 2025 • 10 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Экологичные материалы для ремонта: что выбрать для здоровья
              </h1>
              <p className="text-xl text-muted-foreground">
                Полный гид по выбору безопасных материалов для ремонта квартиры в Санкт-Петербурге
              </p>
            </div>
            
            <LazyImage
              src={blogEcoMaterialsNatural}
              alt="Экологичные натуральные материалы для безопасного ремонта квартиры"
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-6">Почему экологичность материалов так важна</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Здоровье вашей семьи начинается с выбора правильных материалов для ремонта. Некачественная отделка может выделять токсичные вещества годами, вызывая аллергии, головные боли и серьезные заболевания дыхательных путей.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  По данным исследований, концентрация вредных веществ в воздухе квартир после ремонта может превышать допустимые нормы в 2-5 раз и сохраняться до 3 лет. Особенно опасны формальдегид, летучие органические соединения (ЛОС) и тяжелые металлы.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Главные риски некачественных материалов:</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Формальдегид из ДСП и МДФ класса E2-E3 является канцерогеном. ЛОС из красок и лаков поражают нервную систему. Свинец в старых красках токсичен для детей. Фенол в некоторых видах пластика вызывает гормональные нарушения. Стирол из дешевого линолеума раздражает дыхательные пути.
                </p>
              </section>

              <LazyImage
                src={blogEcoCertificates}
                alt="Сертификаты экологической безопасности материалов: EcoLabel, FSC, E0"
                className="w-full h-[400px] object-cover rounded-2xl my-8"
              />

              <section>
                <h2 className="text-3xl font-bold mb-4">На что обращать внимание при выборе</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">1. Сертификаты и маркировки</h3>
                    <p className="text-muted-foreground mb-3">
                      Это главный показатель безопасности материала. Основные европейские и российские сертификаты:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li><strong>ЭкоМатериал</strong> — российский сертификат экологической безопасности</li>
                      <li><strong>EcoLabel (EU Ecolabel)</strong> — европейский знак экологичности продукции</li>
                      <li><strong>FSC (Forest Stewardship Council)</strong> — для древесины из устойчиво управляемых лесов</li>
                      <li><strong>Nordic Swan</strong> — скандинавский экологический стандарт</li>
                      <li><strong>Greenguard Gold</strong> — низкие выбросы химических веществ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">2. Класс эмиссии формальдегида</h3>
                    <p className="text-muted-foreground mb-3">
                      Для древесных материалов (ДСП, МДФ, фанера) смотрите на класс эмиссии:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li><strong>E0</strong> — практически нулевые выбросы (≤0.5 мг/л) — идеально для детских</li>
                      <li><strong>E1</strong> — низкие выбросы (≤1.5 мг/л) — безопасно для жилых помещений</li>
                      <li><strong>E2</strong> — повышенные выбросы (≤5 мг/л) — только для нежилых помещений</li>
                      <li><strong>E3 и выше</strong> — опасно, не используйте в квартирах!</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">3. ЛОС (летучие органические соединения)</h3>
                    <p className="text-muted-foreground mb-3">
                      Для красок, лаков, клеев ищите маркировку содержания ЛОС:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li><strong>Нулевые ЛОС (0 г/л)</strong> — водные краски без растворителей</li>
                      <li><strong>Низкие ЛОС (&lt;30 г/л)</strong> — приемлемо для жилых помещений</li>
                      <li><strong>Средние ЛОС (30-100 г/л)</strong> — требуют хорошего проветривания</li>
                      <li><strong>Высокие ЛОС (&gt;100 г/л)</strong> — избегайте в жилых помещениях</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">4. Натуральность состава</h3>
                    <p className="text-muted-foreground mb-3">
                      Изучайте состав материала. Чем меньше синтетических компонентов, тем лучше:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li>✓ Натуральная древесина вместо ламината с химическими смолами</li>
                      <li>✓ Пробка или мармолеум вместо винилового линолеума</li>
                      <li>✓ Керамика и натуральный камень вместо искусственных композитов</li>
                      <li>✓ Минеральные штукатурки вместо акриловых</li>
                      <li>✓ Льняное масло вместо синтетических лаков</li>
                    </ul>
                  </div>
                </div>
              </section>

              <LazyImage
                src={blogEcoHealthyHome}
                alt="Здоровый дом с экологичными материалами: натуральное дерево, пробка, растения"
                className="w-full h-[400px] object-cover rounded-2xl my-8"
              />

              <section>
                <h2 className="text-3xl font-bold mb-4">Лучшие экологичные материалы для разных задач</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Напольные покрытия</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong>Массив дерева</strong> (дуб, ясень, лиственница) — от 3500₽/м²
                        <br />Самый экологичный вариант. Выбирайте с маслом или воском, а не лаком.
                      </li>
                      <li>
                        <strong>Пробковое покрытие</strong> — от 2200₽/м²
                        <br />Натуральное, теплое, гипоаллергенное. Идеально для спален и детских.
                      </li>
                      <li>
                        <strong>Мармолеум</strong> (натуральный линолеум) — от 1800₽/м²
                        <br />Из льняного масла, древесной муки и смол. Антибактериальные свойства.
                      </li>
                      <li>
                        <strong>Керамогранит</strong> — от 1200₽/м²
                        <br />100% натуральный, долговечный, не выделяет вредных веществ.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Стены</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong>Глиняные штукатурки</strong> — от 450₽/кг (на 2-3 м²)
                        <br />Регулируют влажность, не содержат химии, красивая фактура.
                      </li>
                      <li>
                        <strong>Известковые штукатурки</strong> — от 380₽/кг
                        <br />Антибактериальные свойства, дышащие, экологичные.
                      </li>
                      <li>
                        <strong>Бумажные обои</strong> — от 350₽/рулон
                        <br />Без винила и флизелина, клеить на крахмальный клей.
                      </li>
                      <li>
                        <strong>Деревянная вагонка</strong> класса E0 — от 280₽/м²
                        <br />Покрытие маслом или воском, а не лаком.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Краски и лаки</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong>Водоэмульсионные краски без ЛОС</strong> — от 890₽/л
                        <br />Бренды: Tikkurila Harmony, Dulux Easycare, Benjamin Moore Natura.
                      </li>
                      <li>
                        <strong>Минеральные краски</strong> — от 1200₽/л
                        <br />На основе извести и глины. Отлично дышат, не выделяют вредных веществ.
                      </li>
                      <li>
                        <strong>Масла для дерева</strong> (льняное, тунговое) — от 750₽/л
                        <br />Натуральная защита без химических растворителей.
                      </li>
                      <li>
                        <strong>Восковые покрытия</strong> — от 950₽/л
                        <br />Для деревянных поверхностей, мебели. Придают благородный вид.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Утеплители</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong>Эковата</strong> (целлюлозный утеплитель) — от 280₽/кг
                        <br />Из переработанной бумаги, безопасна, хорошо дышит.
                      </li>
                      <li>
                        <strong>Льняной утеплитель</strong> — от 450₽/м²
                        <br />Природный антисептик, регулирует влажность.
                      </li>
                      <li>
                        <strong>Минеральная вата</strong> — от 320₽/м²
                        <br />Выбирайте без формальдегидных связующих (маркировка ECOSE, Naturoll).
                      </li>
                      <li>
                        <strong>Пробковые плиты</strong> — от 680₽/м²
                        <br />Отличная звуко- и теплоизоляция, полностью натуральные.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Клеи и герметики</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong>Крахмальный клей для обоев</strong> — от 180₽/пачка
                        <br />Натуральный, безопасный, без химических добавок.
                      </li>
                      <li>
                        <strong>ПВА-клей класса E0</strong> — от 250₽/кг
                        <br />Для дерева и общестроительных работ.
                      </li>
                      <li>
                        <strong>Силиконовые герметики без растворителей</strong> — от 320₽/туба
                        <br />Выбирайте с маркировкой "нейтральный" или "санитарный".
                      </li>
                      <li>
                        <strong>Акриловые герметики на водной основе</strong> — от 280₽/туба
                        <br />Без запаха, быстро сохнут, можно красить.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Где покупать экоматериалы в Санкт-Петербурге</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>Специализированные магазины:</strong> «Экострой», «ЭкоДом СПб», «Натуральные материалы». Здесь представлен широкий ассортимент сертифицированной продукции с подробными консультациями.
                  </p>
                  <p>
                    <strong>Крупные строительные гипермаркеты:</strong> Leroy Merlin, Castorama, OBI — есть линейки экологичных материалов (ищите маркировку "Eco" или "Green").
                  </p>
                  <p>
                    <strong>Интернет-магазины:</strong> удобно сравнивать сертификаты и составы, читать отзывы. Но обязательно проверяйте документацию при получении!
                  </p>
                  <p>
                    <strong>Напрямую от производителей:</strong> многие экологичные бренды работают с клиентами напрямую или через официальных дилеров — так можно получить гарантию подлинности.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Как проверить экологичность материалов</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>1. Запрашивайте сертификаты.</strong> У продавца должны быть паспорта безопасности, сертификаты соответствия, протоколы испытаний. Не стесняйтесь их просить!
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>2. Проверяйте маркировку на упаковке.</strong> Класс эмиссии, содержание ЛОС, сертификаты должны быть указаны прямо на упаковке или этикетке.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>3. Обращайте внимание на запах.</strong> Резкий химический запах — плохой признак. Экологичные материалы пахнут слабо или имеют натуральный аромат (дерево, воск).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>4. Изучайте состав.</strong> Избегайте материалов с фталатами, формальдегидом, свинцом, стиролом. Чем проще и понятнее состав, тем лучше.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>5. Читайте независимые отзывы.</strong> Ищите реальные отзывы покупателей, особенно от аллергиков и семей с детьми — они наиболее чувствительны к некачественным материалам.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Стоит ли переплачивать за экоматериалы</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Экологичные материалы действительно дороже обычных на 15-40%. Но эта разница окупается:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Здоровье:</strong> меньше аллергий, головных болей, проблем с дыхательными путями. Особенно важно для детей и беременных.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Долговечность:</strong> качественные материалы служат дольше. Массив дерева служит 30-50 лет, натуральные краски не выцветают 10-15 лет.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Комфорт:</strong> натуральные материалы лучше регулируют влажность и температуру, создают здоровый микроклимат в квартире.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Стоимость квартиры:</strong> эко-ремонт повышает ценность недвижимости, это становится конкурентным преимуществом при продаже.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Наши рекомендации</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  В SPB-DSRemont мы работаем только с проверенными экологичными материалами. Каждый материал в нашем каталоге имеет необходимые сертификаты и прошел независимые испытания.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы поможем вам подобрать оптимальное сочетание экологичности и бюджета, объясним разницу между материалами и покажем все сертификаты. У нас есть демо-образцы всех материалов — вы сможете увидеть и потрогать их перед выбором.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Бесплатная консультация по подбору экоматериалов — звоните или оставляйте заявку!
                </p>
              </section>

              <div className="text-center pt-12">
                <h3 className="text-2xl font-bold mb-4">Нужна консультация по экологичным материалам?</h3>
                <p className="text-muted-foreground mb-6">
                  Наши эксперты помогут выбрать безопасные материалы для вашего ремонта
                </p>
                <Button 
                  size="lg" 
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Получить бесплатную консультацию
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

export default EcoMaterials;
