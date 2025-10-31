import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, Building2, CheckCircle2, Wallet } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/blog-office-renovation.jpg";
import officeSetup from "@/assets/blog-office-setup.jpg";
import officeWorkspace from "@/assets/blog-office-workspace.jpg";

const OfficeRenovation2025 = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт офисных помещений под ключ в СПб 2025 — цены, сроки | SPB-DSRemont</title>
        <meta name="description" content="Комплексный ремонт офисов в Санкт-Петербурге: планировка, отделка, коммуникации. Соблюдение норм и стандартов, сроки 3-8 недель. От 4500₽/м²." />
        <meta name="keywords" content="ремонт офиса спб, офисный ремонт под ключ, ремонт коммерческих помещений, отделка офиса, цена ремонта офиса" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/remont-ofisnyh-pomeshcheniy" />
        
        <meta property="og:title" content="Ремонт офисных помещений: особенности и цены в СПб 2025" />
        <meta property="og:description" content="Комплексный ремонт офисов под ключ: планировка, зонирование, отделка, коммуникации. Соблюдение норм, сроки 3-8 недель. От 4500₽/м²." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/remont-ofisnyh-pomeshcheniy" />
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
                  13 марта 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  15 минут чтения
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ремонт офисных помещений: особенности и цены в СПб 2025
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Офисное пространство влияет на продуктивность сотрудников и впечатление клиентов. Разбираем все этапы профессионального ремонта офисов: от планировки до финишной отделки.
              </p>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
              <LazyImage
                src={heroImage}
                alt="Современный офисный ремонт"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                Особенности ремонта офисных помещений
              </h2>

              <p className="text-gray-700 mb-6">
                Ремонт офиса отличается от ремонта жилых помещений специфическими требованиями: нужно соблюдать нормы пожарной безопасности, санитарные стандарты, обеспечить достаточное освещение и вентиляцию. При этом важно создать комфортную рабочую среду, которая повысит эффективность команды.
              </p>

              <Card className="mb-8 bg-primary/5 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ключевые отличия офисного ремонта:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Соблюдение требований СанПиН и пожарной безопасности</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Усиленная система вентиляции и кондиционирования</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Многоуровневое освещение (общее, локальное, аварийное)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Расширенная электросеть с запасом мощности</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Практичные и износостойкие материалы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Акустическая изоляция переговорных</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden my-12">
                <LazyImage
                  src={officeSetup}
                  alt="Офисная планировка"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Этапы ремонта офиса
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Проектирование и согласование</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 1-2 недели</p>
                    <p className="text-gray-700">Разработка планировки с учетом зонирования, эргономики рабочих мест, путей эвакуации. Согласование проекта с контролирующими органами.</p>
                    <p className="text-gray-700 mt-2"><strong>Стоимость проекта:</strong> от 1500₽/м²</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Демонтаж и подготовка</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 3-5 дней</p>
                    <p className="text-gray-700">Демонтаж старых перегородок, покрытий, оборудования. Вывоз строительного мусора, подготовка помещения к черновым работам.</p>
                    <p className="text-gray-700 mt-2"><strong>Стоимость:</strong> от 400₽/м²</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Черновые работы</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 2-3 недели</p>
                    <p className="text-gray-700">Возведение перегородок, прокладка коммуникаций (электрика, вентиляция, слаботочные системы), выравнивание стен и пола, устройство стяжки.</p>
                    <p className="text-gray-700 mt-2"><strong>Стоимость:</strong> от 2500₽/м²</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Чистовая отделка</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 2-3 недели</p>
                    <p className="text-gray-700">Покраска стен и потолков, укладка коммерческого напольного покрытия, монтаж подвесных потолков, установка дверей, монтаж освещения.</p>
                    <p className="text-gray-700 mt-2"><strong>Стоимость:</strong> от 2000₽/м²</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Финишные работы и сдача</h3>
                    <p className="text-gray-700 mb-2"><strong>Срок:</strong> 3-5 дней</p>
                    <p className="text-gray-700">Установка розеток и выключателей, монтаж систем безопасности, уборка, проверка всех систем, оформление актов выполненных работ.</p>
                    <p className="text-gray-700 mt-2"><strong>Стоимость:</strong> от 300₽/м²</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden my-12">
                <LazyImage
                  src={officeWorkspace}
                  alt="Готовое офисное пространство"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Типы офисных помещений и планировки
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Open Space</h3>
                    <p className="text-gray-700 mb-3">Открытое пространство без перегородок. Подходит для команд с активной коммуникацией.</p>
                    <p className="text-gray-700"><strong>Стоимость:</strong> от 4500₽/м²</p>
                    <p className="text-gray-700"><strong>Плюсы:</strong> Экономия площади, легкая коммуникация</p>
                    <p className="text-gray-700"><strong>Минусы:</strong> Повышенный шум, меньше приватности</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Кабинетная система</h3>
                    <p className="text-gray-700 mb-3">Отдельные кабинеты для сотрудников или отделов. Традиционный вариант для корпоративных офисов.</p>
                    <p className="text-gray-700"><strong>Стоимость:</strong> от 5500₽/м²</p>
                    <p className="text-gray-700"><strong>Плюсы:</strong> Конфиденциальность, меньше отвлекающих факторов</p>
                    <p className="text-gray-700"><strong>Минусы:</strong> Больше расходов на перегородки</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Activity Based</h3>
                    <p className="text-gray-700 mb-3">Гибридная планировка с зонами для разных задач: рабочие места, переговорные, лаунж-зоны.</p>
                    <p className="text-gray-700"><strong>Стоимость:</strong> от 6000₽/м²</p>
                    <p className="text-gray-700"><strong>Плюсы:</strong> Максимальная гибкость, высокая продуктивность</p>
                    <p className="text-gray-700"><strong>Минусы:</strong> Сложнее в организации</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Коворкинг</h3>
                    <p className="text-gray-700 mb-3">Общее пространство для разных компаний или фрилансеров. Модульная мебель, общие зоны.</p>
                    <p className="text-gray-700"><strong>Стоимость:</strong> от 5000₽/м²</p>
                    <p className="text-gray-700"><strong>Плюсы:</strong> Динамичная среда, гибкость</p>
                    <p className="text-gray-700"><strong>Минусы:</strong> Меньше контроля за атмосферой</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <Wallet className="w-8 h-8 text-primary" />
                Цены на ремонт офисных помещений в СПб 2025
              </h2>

              <Card className="mb-8 border-l-4 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость работ по категориям</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Эконом-класс</h4>
                      <p className="text-gray-700 mb-2">Базовая отделка, простые материалы, минимальные дизайнерские решения.</p>
                      <p className="text-primary font-bold">4500-6000₽/м²</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Стандарт</h4>
                      <p className="text-gray-700 mb-2">Качественные материалы, продуманная планировка, современные системы коммуникаций.</p>
                      <p className="text-primary font-bold">6000-8500₽/м²</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Премиум</h4>
                      <p className="text-gray-700 mb-2">Дизайнерский проект, премиальные материалы, система "умный офис", эксклюзивная мебель.</p>
                      <p className="text-primary font-bold">от 10000₽/м²</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-yellow-50 border-yellow-400">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Дополнительные расходы</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700"><strong>Проектирование:</strong> 1500-3000₽/м²</li>
                    <li className="text-gray-700"><strong>Дизайн-проект:</strong> 2000-5000₽/м²</li>
                    <li className="text-gray-700"><strong>Согласование перепланировки:</strong> от 50000₽</li>
                    <li className="text-gray-700"><strong>Система вентиляции:</strong> от 2500₽/м²</li>
                    <li className="text-gray-700"><strong>Кондиционирование:</strong> от 35000₽ за систему</li>
                    <li className="text-gray-700"><strong>Система безопасности:</strong> от 50000₽</li>
                    <li className="text-gray-700"><strong>Мебель и оборудование:</strong> от 25000₽ на рабочее место</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Материалы для офисного ремонта
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Напольные покрытия</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Коммерческий линолеум:</strong> износостойкий, 32-34 класс, от 800₽/м²
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Ковровая плитка:</strong> акустический комфорт, легкая замена, от 1200₽/м²
                  </p>
                  <p className="text-gray-700">
                    <strong>Керамогранит:</strong> для зон с высокой нагрузкой, от 1500₽/м²
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Стены и потолки</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Покраска:</strong> практично, легко обновляется, от 400₽/м²
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Обои под покраску:</strong> скрывают неровности, долговечны, от 600₽/м²
                  </p>
                  <p className="text-gray-700">
                    <strong>Подвесные потолки Armstrong:</strong> скрывают коммуникации, от 800₽/м²
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Перегородки</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Гипсокартон:</strong> бюджетный вариант, от 1500₽/м²
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Стеклянные:</strong> эстетично, визуально расширяют пространство, от 8000₽/м²
                  </p>
                  <p className="text-gray-700">
                    <strong>Мобильные перегородки:</strong> гибкость планировки, от 12000₽/м²
                  </p>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Советы по экономии</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Планируйте ремонт заранее — это позволит договориться о скидках с поставщиками</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Выбирайте износостойкие материалы — переплата окупится долговечностью</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Делайте ремонт в нерабочее время — не потеряете продуктивность команды</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Работайте с одним подрядчиком под ключ — это дешевле отдельных бригад</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Сроки выполнения работ
              </h2>

              <div className="space-y-3 mb-8">
                <p className="text-gray-700">
                  <strong>Офис 50-100м²:</strong> 3-5 недель (без сложной перепланировки)
                </p>
                <p className="text-gray-700">
                  <strong>Офис 100-200м²:</strong> 5-7 недель
                </p>
                <p className="text-gray-700">
                  <strong>Офис 200-500м²:</strong> 7-10 недель
                </p>
                <p className="text-gray-700">
                  <strong>Офис более 500м²:</strong> от 10 недель (требуется индивидуальный расчет)
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">⚠️ Важно учесть</h3>
                <p className="text-gray-700">
                  Ремонт офиса лучше проводить в нерабочее время или с поэтапным переездом отделов. Это минимизирует простой бизнеса. Обязательно согласуйте график работ с управляющей компанией бизнес-центра.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Заключение
              </h2>

              <p className="text-gray-700 mb-4">
                Ремонт офисного помещения — это инвестиция в продуктивность команды и имидж компании. Профессиональный подход обеспечит соблюдение норм, использование качественных материалов и точное выполнение сроков.
              </p>

              <p className="text-gray-700 mb-8">
                SPB-DSRemont специализируется на ремонте коммерческих помещений в Санкт-Петербурге. Мы работаем с офисами любого формата, предлагаем готовые решения и индивидуальный подход. Звоните: <a href="tel:+78122099885" className="text-primary font-semibold hover:underline">8 812 209-98-85</a>
              </p>

              <Card className="bg-gradient-to-r from-primary/10 to-yellow-400/10 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Комплексный ремонт офисов от SPB-DSRemont
                  </h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Проектирование и согласование</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Все виды работ под ключ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Соблюдение норм и стандартов</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Работа в выходные и ночное время</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">Гарантия 3 года на все работы</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 font-semibold">От 4500₽/м² • Сроки от 3 недель</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default OfficeRenovation2025;