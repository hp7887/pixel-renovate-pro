import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Thermometer, Lock, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogSmartHome from "@/assets/blog-smart-home.jpg";

const SmartHome = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Умный дом: с чего начать и как не переплатить в 2025 году | SPB-DSRemont</title>
        <meta name="description" content="Полное руководство по внедрению системы умный дом: умное освещение, климат-контроль, безопасность, автоматизация. Обзор лучших систем, цены, советы по экономии." />
        <meta name="keywords" content="умный дом, smart home, умное освещение, климат контроль, домашняя автоматизация, система умный дом" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/umnyy-dom" />
        
        <meta property="og:title" content="Умный дом: с чего начать и как не переплатить в 2025 году | SPB-DSRemont" />
        <meta property="og:description" content="Полное руководство по внедрению системы умный дом: умное освещение, климат-контроль, безопасность, автоматизация." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/umnyy-dom" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blogSmartHome} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Умный дом: с чего начать и как не переплатить в 2025 году | SPB-DSRemont" />
        <meta name="twitter:description" content="Полное руководство по внедрению системы умный дом: умное освещение, климат-контроль, безопасность, автоматизация." />
        <meta name="twitter:image" content={blogSmartHome} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Умный дом: с чего начать и как не переплатить в 2025 году",
            "datePublished": "2025-02-05",
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
            "image": blogSmartHome
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
              <div className="text-sm text-gray-500 mb-4">5 февраля 2025 • 13 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Умный дом: с чего начать и как не переплатить в 2025 году
              </h1>
            </div>
            
            <LazyImage
              src={blogSmartHome}
              alt="Современный умный дом с автоматизацией"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Система умный дом — это не роскошь, а доступный способ сделать жизнь комфортнее и безопаснее. Автоматическое освещение, климат-контроль, управление с телефона — всё это реально внедрить без космических бюджетов. В этой статье расскажем, с чего начать, какие системы выбрать и как избежать переплат.
              </p>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Что такое умный дом и зачем он нужен</h2>
                <p className="text-gray-700 mb-4">
                  Умный дом — это система устройств, которые автоматизируют повседневные задачи: включают свет по датчику движения, поддерживают комфортную температуру, управляют шторами, следят за безопасностью. Всё это можно контролировать с телефона или голосом.
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Преимущества умного дома</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Экономия:</strong> умное освещение экономит до 30% электроэнергии, климат-контроль — до 25% расходов на отопление.</li>
                    <li><strong>Комфорт:</strong> автоматические сценарии (утро, вечер, кино, уход из дома) — всё настраивается один раз.</li>
                    <li><strong>Безопасность:</strong> датчики протечки, дыма, движения, видеонаблюдение — контроль в реальном времени.</li>
                    <li><strong>Удаленный доступ:</strong> управление домом из любой точки мира через приложение.</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Основные компоненты умного дома</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-50 rounded-r-xl">
                    <div className="flex items-start gap-3 mb-3">
                      <Lightbulb className="w-7 h-7 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <h3 className="text-2xl font-bold text-gray-900">Умное освещение</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Самый простой способ начать автоматизацию. Управление яркостью, цветом, включением/выключением по расписанию или датчикам.
                    </p>
                    <p className="text-gray-700 mb-2"><strong>Что понадобится:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                      <li>Умные лампы (Yeelight, Philips Hue, Xiaomi) — 500-2000 руб/шт</li>
                      <li>Умные выключатели (Aqara, Sonoff) — 1500-3000 руб</li>
                      <li>Датчики движения — 800-2000 руб</li>
                    </ul>
                    <p className="text-sm bg-white p-3 rounded-lg text-gray-700">
                      <strong>Пример сценария:</strong> Утром свет включается постепенно (имитация рассвета), вечером автоматически включается теплый свет в коридоре по датчику движения, ночью — минимальная подсветка в санузле.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-xl">
                    <div className="flex items-start gap-3 mb-3">
                      <Thermometer className="w-7 h-7 text-red-600 flex-shrink-0 mt-0.5" />
                      <h3 className="text-2xl font-bold text-gray-900">Климат-контроль</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Автоматическое поддержание температуры и влажности. Система сама включает кондиционер или отопление, когда это нужно.
                    </p>
                    <p className="text-gray-700 mb-2"><strong>Оборудование:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                      <li>Умный термостат (Google Nest, Xiaomi) — 5000-15000 руб</li>
                      <li>IR-пульт для управления кондиционером — 1500-3000 руб</li>
                      <li>Датчики температуры и влажности — 800-1500 руб</li>
                    </ul>
                    <p className="text-sm bg-white p-3 rounded-lg text-gray-700">
                      <strong>Экономия:</strong> термостат окупается за 1-2 года за счет снижения расходов на электричество. Он не греет пустую квартиру и поддерживает оптимальную температуру только когда вы дома.
                    </p>
                  </div>

                  <LazyImage
                    src={blogSmartHome}
                    alt="Система умного дома в интерьере"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                  
                  <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-xl">
                    <div className="flex items-start gap-3 mb-3">
                      <Lock className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
                      <h3 className="text-2xl font-bold text-gray-900">Безопасность</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Датчики протечки, дыма, газа, взлома, видеонаблюдение — всё это можно объединить в одну систему с уведомлениями на телефон.
                    </p>
                    <p className="text-gray-700 mb-2"><strong>Базовый набор безопасности:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                      <li>Датчики протечки воды (Aqara, Xiaomi) — 700-1500 руб/шт (2-3 штуки)</li>
                      <li>Датчик дыма — 1500-3000 руб</li>
                      <li>Датчик открытия дверей/окон — 800-1500 руб/шт</li>
                      <li>IP-камера — 3000-8000 руб</li>
                      <li>Умный замок — 8000-25000 руб</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-xl">
                    <div className="flex items-start gap-3 mb-3">
                      <Camera className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
                      <h3 className="text-2xl font-bold text-gray-900">Автоматизация (сценарии)</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Умный дом может выполнять цепочки действий автоматически. Например, при уходе из дома: выключается свет, закрываются шторы, включается сигнализация.
                    </p>
                    <p className="text-gray-700 mb-2"><strong>Популярные сценарии:</strong></p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>«Доброе утро»:</strong> постепенно включается свет, открываются шторы, включается кофеварка.</li>
                      <li><strong>«Уход из дома»:</strong> выключается всё освещение, техника, включается охрана.</li>
                      <li><strong>«Кинотеатр»:</strong> свет выключается, шторы закрываются, включается ТВ и саундбар.</li>
                      <li><strong>«Ночной режим»:</strong> минимальная подсветка в санузле и коридоре, отключение уведомлений.</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Выбор экосистемы: что лучше для России</h2>
                <p className="text-gray-700 mb-4">
                  Главное — выбрать единую экосистему, чтобы все устройства работали вместе. Вот популярные варианты для РФ в 2025 году:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left font-semibold text-gray-900">Система</th>
                        <th className="border p-3 text-left font-semibold text-gray-900">Плюсы</th>
                        <th className="border p-3 text-left font-semibold text-gray-900">Минусы</th>
                        <th className="border p-3 text-right font-semibold text-gray-900">Цена старта</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 font-semibold text-gray-900">Яндекс</td>
                        <td className="border p-3 text-gray-700">Голосовое управление Алисой, много совместимых устройств</td>
                        <td className="border p-3 text-gray-700">Меньше выбор, чем у Xiaomi</td>
                        <td className="border p-3 text-right text-gray-700">10 000 ₽</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 font-semibold text-gray-900">Xiaomi</td>
                        <td className="border p-3 text-gray-700">Огромный выбор устройств, низкие цены</td>
                        <td className="border p-3 text-gray-700">Требуется настройка, не все устройства в РФ</td>
                        <td className="border p-3 text-right text-gray-700">8 000 ₽</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 font-semibold text-gray-900">Aqara</td>
                        <td className="border p-3 text-gray-700">Надежность, работа с HomeKit</td>
                        <td className="border p-3 text-gray-700">Выше цена, чем Xiaomi</td>
                        <td className="border p-3 text-right text-gray-700">12 000 ₽</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 font-semibold text-gray-900">Rubetek</td>
                        <td className="border p-3 text-gray-700">Российский производитель, поддержка</td>
                        <td className="border p-3 text-gray-700">Ограниченный ассортимент</td>
                        <td className="border p-3 text-right text-gray-700">15 000 ₽</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              
              <section className="mb-8 bg-yellow-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Сколько стоит умный дом: реальные бюджеты</h2>
                
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Начальный уровень (30 000 - 50 000 ₽)</h3>
                    <p className="text-gray-700 mb-2">Базовая автоматизация для однокомнатной квартиры:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Умные лампы (5 шт) — 5000 ₽</li>
                      <li>Умные розетки (3 шт) — 3000 ₽</li>
                      <li>Датчики движения (2 шт) — 2000 ₽</li>
                      <li>Датчики протечки (2 шт) — 2000 ₽</li>
                      <li>Умная колонка — 5000 ₽</li>
                      <li>Хаб/шлюз — 3000 ₽</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Средний уровень (80 000 - 150 000 ₽)</h3>
                    <p className="text-gray-700 mb-2">Полноценная система для 2-3 комнатной квартиры:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Всё из начального уровня</li>
                      <li>Умные выключатели (5 шт) — 12 000 ₽</li>
                      <li>Умный термостат — 10 000 ₽</li>
                      <li>IP-камеры (2 шт) — 10 000 ₽</li>
                      <li>Автоматические шторы (2 комплекта) — 20 000 ₽</li>
                      <li>Датчики открытия (5 шт) — 5000 ₽</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Премиум (250 000 - 500 000+ ₽)</h3>
                    <p className="text-gray-700 mb-2">Полная автоматизация загородного дома или большой квартиры:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Всё из среднего уровня</li>
                      <li>Мультирум (музыка по всему дому) — 50 000 ₽</li>
                      <li>Система видеонаблюдения (6+ камер) — 40 000 ₽</li>
                      <li>Умный замок премиум — 20 000 ₽</li>
                      <li>Автоматизация отопления и вентиляции — 80 000 ₽</li>
                      <li>Интеграция с охранной сигнализацией — 30 000 ₽</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Частые ошибки при внедрении умного дома</h2>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Покупка несовместимых устройств</h3>
                    <p className="text-red-800">
                      Выбирайте одну экосистему (Xiaomi, Яндекс, Aqara). Микс устройств разных брендов может не работать вместе.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Слабый Wi-Fi</h3>
                    <p className="text-red-800">
                      Умные устройства требуют стабильного интернета. Если у вас слабый роутер, система будет глючить. Установите мощный роутер или mesh-систему.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Забыли про нейтраль в выключателях</h3>
                    <p className="text-red-800">
                      Большинство умных выключателей требуют нейтрали. В старых домах её часто нет. Уточняйте это до покупки или выбирайте выключатели без нейтрали (дороже).
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 mb-4">
                  Умный дом — это не только про удобство, но и про экономию. Правильно настроенная система окупается за 2-3 года. Начните с малого (освещение, розетки), постепенно добавляйте устройства. Главное — выбрать единую экосистему и обеспечить хороший Wi-Fi.
                </p>
                <p className="text-gray-700">
                  Мы поможем спроектировать и установить систему умный дом под ваши задачи и бюджет. Подберем оптимальное оборудование, настроим сценарии, обучим пользованию. Работаем со всеми популярными системами.
                </p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                >
                  Получить консультацию по умному дому
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

export default SmartHome;
