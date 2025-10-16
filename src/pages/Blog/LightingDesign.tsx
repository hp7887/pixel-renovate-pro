import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogLightingDesign from "@/assets/blog-lighting-design.jpg";

const LightingDesign = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Освещение в квартире: как создать идеальный световой дизайн | SPB-DSRemont</title>
        <meta name="description" content="Полное руководство по световому дизайну квартиры: типы освещения, правила расчета, современные решения, автоматизация. Создайте комфортное освещение в каждой комнате." />
        <meta name="keywords" content="освещение квартиры, световой дизайн, расчет освещения, современное освещение, светодизайн интерьера" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/osveshchenie-v-kvartire" />
        
        <meta property="og:title" content="Освещение в квартире: как создать идеальный световой дизайн" />
        <meta property="og:description" content="Полное руководство по световому дизайну квартиры: типы освещения, правила расчета, современные решения, автоматизация." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/osveshchenie-v-kvartire" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Освещение в квартире: как создать идеальный световой дизайн",
            "description": "Полное руководство по световому дизайну квартиры: типы освещения, правила расчета, современные решения, автоматизация.",
            "image": "https://spb-dsremont.ru/og-image.jpg",
            "datePublished": "2025-02-15",
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
                <span>15 февраля 2025</span>
                <span>•</span>
                <span>15 минут чтения</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Освещение в квартире: как создать идеальный световой дизайн
              </h1>
              <p className="text-xl text-gray-600">
                Правильное освещение способно полностью преобразить пространство, создать уют и комфорт. Разбираем все тонкости светового дизайна от основ до современных технологий.
              </p>
            </div>
            
            <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
              <LazyImage
                src={blogLightingDesign}
                alt="Современное освещение в квартире"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  Три уровня освещения
                </h2>
                <div className="bg-gradient-to-br from-primary/5 to-yellow-50 p-8 rounded-2xl mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Общее (основное) освещение</h3>
                  <p className="text-gray-700 mb-4">
                    Создает равномерное освещение всего помещения. Обеспечивает базовую видимость и комфортное перемещение по комнате.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Люстры:</strong> классическое решение для гостиной и спальни
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Встроенные светильники:</strong> для современных интерьеров
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Трековые системы:</strong> гибкое решение с возможностью направления света
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Панельные светильники:</strong> равномерное мягкое освещение
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Локальное (рабочее) освещение</h3>
                  <p className="text-gray-700 mb-4">
                    Направленный свет для конкретных задач: чтения, готовки, работы за компьютером. Яркость должна быть выше, чем общее освещение.
                  </p>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Настольные лампы:</strong> для рабочего стола, прикроватных тумб
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Подсветка кухонной зоны:</strong> светодиодная лента под шкафами
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Торшеры:</strong> для зоны чтения в гостиной
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Подсветка зеркал:</strong> в ванной и прихожей
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Декоративное (акцентное) освещение</h3>
                  <p className="text-gray-700 mb-4">
                    Создает атмосферу, подчеркивает архитектурные элементы и декор. Не несет функциональной нагрузки, но добавляет уют и стиль.
                  </p>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Светодиодные ленты:</strong> подсветка потолка, ниш, полок
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Бра:</strong> создание мягкого рассеянного света
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <strong>Напольные светильники:</strong> для выделения зон
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Расчет освещенности по комнатам</h2>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Формула расчета:</strong> Мощность = Площадь × Норма освещенности ÷ 100
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Гостиная</h4>
                      <p className="text-sm text-gray-600">200-250 Лк (люкс)</p>
                      <p className="text-sm text-gray-500 mt-1">20 Вт/м² светодиодных ламп</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Спальня</h4>
                      <p className="text-sm text-gray-600">150-200 Лк</p>
                      <p className="text-sm text-gray-500 mt-1">15 Вт/м² светодиодных ламп</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Кухня</h4>
                      <p className="text-sm text-gray-600">250-300 Лк</p>
                      <p className="text-sm text-gray-500 mt-1">25 Вт/м² + локальная подсветка</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Ванная</h4>
                      <p className="text-sm text-gray-600">200-250 Лк</p>
                      <p className="text-sm text-gray-500 mt-1">20 Вт/м² + подсветка зеркала</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Прихожая</h4>
                      <p className="text-sm text-gray-600">100-150 Лк</p>
                      <p className="text-sm text-gray-500 mt-1">10-15 Вт/м²</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Детская</h4>
                      <p className="text-sm text-gray-600">200-250 Лк</p>
                      <p className="text-sm text-gray-500 mt-1">20 Вт/м² + настольная лампа</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Температура света: какую выбрать</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">🔥 Теплый свет (2700-3000K)</h3>
                    <p className="text-gray-700 mb-3">Создает уютную, расслабляющую атмосферу. Желтоватый оттенок.</p>
                    <p className="text-sm font-semibold text-gray-900">Подходит для: спальни, гостиной, столовой</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">☀️ Нейтральный белый (3500-4500K)</h3>
                    <p className="text-gray-700 mb-3">Близок к естественному дневному свету. Универсальный вариант.</p>
                    <p className="text-sm font-semibold text-gray-900">Подходит для: кухни, ванной, прихожей, кабинета</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">❄️ Холодный белый (5000-6500K)</h3>
                    <p className="text-gray-700 mb-3">Бодрящий, яркий свет с голубоватым оттенком. Повышает концентрацию.</p>
                    <p className="text-sm font-semibold text-gray-900">Подходит для: рабочих зон, гардеробных, подсобных помещений</p>
                  </div>
                </div>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mt-6">
                  <p className="font-semibold text-gray-900 mb-2">💡 Совет профессионалов</p>
                  <p className="text-gray-700">
                    Используйте диммеры и лампы с регулировкой температуры света. Это позволит адаптировать освещение под разные ситуации и время суток.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Современные технологии освещения</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Умное освещение</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Управление со смартфона через приложения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Голосовое управление (Алиса, Google, Alexa)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Автоматические сценарии по времени и событиям</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Регулировка яркости и цветовой температуры</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4 italic">Стоимость: от 1500₽ за лампочку</p>
                  </div>

                  <div className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Датчики движения и освещенности</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Автоматическое включение света при входе</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Экономия электроэнергии до 60%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Регулировка по уровню естественного света</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Идеально для прихожей, санузла, кладовой</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4 italic">Стоимость: от 800₽ за датчик</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Частые ошибки в освещении</h2>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-2">❌ Только один источник света в комнате</h3>
                    <p className="text-gray-700">
                      Одна люстра создает резкие тени и не обеспечивает комфортное освещение. Используйте многоуровневую систему освещения.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-2">❌ Неправильная цветовая температура</h3>
                    <p className="text-gray-700">
                      Холодный свет в спальне мешает расслаблению, теплый на кухне искажает цвет продуктов. Выбирайте температуру по назначению помещения.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-2">❌ Отсутствие диммеров</h3>
                    <p className="text-gray-700">
                      Невозможность регулировать яркость снижает комфорт. Установите диммеры хотя бы в гостиной и спальне.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-2">❌ Забыли про подсветку зеркал</h3>
                    <p className="text-gray-700">
                      В ванной и прихожей обязательно нужна подсветка зеркала с двух сторон или по периметру для качественного отражения без теней.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12 bg-gradient-to-br from-primary/10 to-yellow-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Итоговые рекомендации</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Планируйте освещение на этапе ремонта</strong>
                      <p className="text-gray-700 mt-1">Продумайте расположение светильников и выключателей до начала отделочных работ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Используйте три уровня освещения</strong>
                      <p className="text-gray-700 mt-1">Комбинируйте общее, локальное и декоративное освещение для максимального комфорта</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Выбирайте LED-лампы</strong>
                      <p className="text-gray-700 mt-1">Экономия до 90% электроэнергии, срок службы 25-50 тысяч часов, без нагрева и мерцания</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Инвестируйте в умное освещение</strong>
                      <p className="text-gray-700 mt-1">Автоматизация и дистанционное управление окупаются через 2-3 года за счет экономии электричества</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-primary to-yellow-500 text-white p-8 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-4">Нужна помощь с проектированием освещения?</h2>
                <p className="text-lg mb-6 text-white/90">
                  Наши дизайнеры разработают индивидуальный световой проект для вашей квартиры с учетом всех особенностей планировки
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 font-bold"
                  onClick={() => window.dispatchEvent(new Event('openContactDialog'))}
                >
                  Получить консультацию дизайнера
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

export default LightingDesign;
