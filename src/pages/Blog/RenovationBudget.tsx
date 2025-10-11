import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, DollarSign, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import renovationProcess from "@/assets/renovation-process.jpg";

const RenovationBudget = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Как рассчитать бюджет на ремонт квартиры в 2025 году | SPB-DSRemont</title>
        <meta name="description" content="Подробная инструкция по расчету бюджета на ремонт квартиры: статьи расходов, средние цены на материалы и работы, способы экономии без потери качества." />
        <meta name="keywords" content="бюджет на ремонт, расчет стоимости ремонта, цены на ремонт квартиры, сколько стоит ремонт, смета на ремонт" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/raschet-byudzheta-na-remont" />
        
        <meta property="og:title" content="Как рассчитать бюджет на ремонт квартиры в 2025 году | SPB-DSRemont" />
        <meta property="og:description" content="Подробная инструкция по расчету бюджета на ремонт квартиры: статьи расходов, средние цены на материалы и работы, способы экономии без потери качества." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/raschet-byudzheta-na-remont" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={renovationProcess} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Как рассчитать бюджет на ремонт квартиры в 2025 году | SPB-DSRemont" />
        <meta name="twitter:description" content="Подробная инструкция по расчету бюджета на ремонт квартиры: статьи расходов, средние цены на материалы и работы, способы экономии без потери качества." />
        <meta name="twitter:image" content={renovationProcess} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Как рассчитать бюджет на ремонт квартиры в 2025 году",
            "datePublished": "2025-01-20",
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
            "image": renovationProcess
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
              <div className="text-sm text-gray-500 mb-4">20 января 2025 • 12 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Как рассчитать бюджет на ремонт квартиры в 2025 году
              </h1>
            </div>
            
            <LazyImage
              src={renovationProcess}
              alt="Расчет бюджета на ремонт квартиры"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Ремонт квартиры — это серьезная финансовая нагрузка. Правильный расчет бюджета поможет избежать неприятных сюрпризов и распределить средства оптимально. В этой статье мы подробно разберем все статьи расходов и дадим практические советы по экономии.
              </p>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Основные статьи расходов</h2>
                <p className="text-gray-700 mb-4">
                  Бюджет на ремонт состоит из нескольких основных категорий:
                </p>
                <div className="space-y-3">
                  {[
                    "Материалы для отделки (40-50% бюджета)",
                    "Работа мастеров (30-40% бюджета)",
                    "Сантехника и электрика (10-15% бюджета)",
                    "Мебель и декор (по желанию)",
                    "Непредвиденные расходы (резерв 10-15%)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
              
              <section className="mb-8 bg-gray-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Средние цены на материалы (на м²)</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Напольные покрытия</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
                  <li><strong>Ламинат 32-33 класса:</strong> 800-1500 руб/м²</li>
                  <li><strong>Паркетная доска:</strong> 2000-5000 руб/м²</li>
                  <li><strong>Керамогранит:</strong> 1000-3000 руб/м²</li>
                  <li><strong>Линолеум:</strong> 400-800 руб/м²</li>
                  <li><strong>Кварцвиниловая плитка:</strong> 1200-2500 руб/м²</li>
                </ul>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Стеновые покрытия</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
                  <li><strong>Краска (акриловая):</strong> 150-300 руб/м²</li>
                  <li><strong>Обои флизелиновые:</strong> 300-800 руб/м²</li>
                  <li><strong>Обои под покраску:</strong> 200-500 руб/м²</li>
                  <li><strong>Керамическая плитка:</strong> 600-2000 руб/м²</li>
                  <li><strong>Декоративная штукатурка:</strong> 500-1500 руб/м²</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Стоимость работ в Санкт-Петербурге</h2>
                
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-4 rounded-r-xl">
                  <h3 className="text-xl font-semibold text-cyan-900 mb-3">Косметический ремонт</h3>
                  <p className="text-cyan-800 mb-2">
                    <strong>Средняя стоимость:</strong> 3000-6000 руб/м²
                  </p>
                  <p className="text-cyan-800">
                    Включает: выравнивание стен, поклейку обоев или покраску, укладку ламината, замену розеток и выключателей.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4 rounded-r-xl">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Капитальный ремонт</h3>
                  <p className="text-blue-800 mb-2">
                    <strong>Средняя стоимость:</strong> 8000-15000 руб/м²
                  </p>
                  <p className="text-blue-800">
                    Включает: демонтаж, замену проводки и труб, стяжку пола, штукатурку стен, полную отделку, установку сантехники.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Евроремонт с дизайн-проектом</h3>
                  <p className="text-purple-800 mb-2">
                    <strong>Средняя стоимость:</strong> 15000-30000 руб/м²
                  </p>
                  <p className="text-purple-800">
                    Включает: полный комплекс работ, премиальные материалы, дизайнерская мебель, умный дом, декор.
                  </p>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Пример расчета для квартиры 50 м²</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left font-semibold text-gray-900">Статья расхода</th>
                        <th className="border p-3 text-right font-semibold text-gray-900">Эконом</th>
                        <th className="border p-3 text-right font-semibold text-gray-900">Стандарт</th>
                        <th className="border p-3 text-right font-semibold text-gray-900">Премиум</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 text-gray-700">Материалы</td>
                        <td className="border p-3 text-right text-gray-700">150 000 ₽</td>
                        <td className="border p-3 text-right text-gray-700">300 000 ₽</td>
                        <td className="border p-3 text-right text-gray-700">600 000 ₽</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 text-gray-700">Работы</td>
                        <td className="border p-3 text-right text-gray-700">150 000 ₽</td>
                        <td className="border p-3 text-right text-gray-700">400 000 ₽</td>
                        <td className="border p-3 text-right text-gray-700">750 000 ₽</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 text-gray-700">Сантехника</td>
                        <td className="border p-3 text-right text-gray-700">30 000 ₽</td>
                        <td className="border p-3 text-right text-gray-700">80 000 ₽</td>
                        <td className="border p-3 text-right text-gray-700">200 000 ₽</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 text-gray-700">Электрика</td>
                        <td className="border p-3 text-right text-gray-700">20 000 ₽</td>
                        <td className="border p-3 text-right text-gray-700">50 000 ₽</td>
                        <td className="border p-3 text-right text-gray-700">120 000 ₽</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border p-3 text-gray-700">Резерв (15%)</td>
                        <td className="border p-3 text-right text-gray-700">52 500 ₽</td>
                        <td className="border p-3 text-right text-gray-700">124 500 ₽</td>
                        <td className="border p-3 text-right text-gray-700">250 500 ₽</td>
                      </tr>
                      <tr className="bg-gray-100 font-bold">
                        <td className="border p-3 text-gray-900">ИТОГО</td>
                        <td className="border p-3 text-right text-gray-900">402 500 ₽</td>
                        <td className="border p-3 text-right text-gray-900">954 500 ₽</td>
                        <td className="border p-3 text-right text-gray-900">1 920 500 ₽</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              
              <section className="mb-8 bg-yellow-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Как сэкономить без потери качества</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Закупайте материалы самостоятельно:</strong> Сэкономите 10-20% на наценке подрядчиков. Следите за акциями в крупных строительных магазинах.
                  </li>
                  <li>
                    <strong>Планируйте заранее:</strong> Сезонные скидки бывают в январе-феврале и летом. Можно сэкономить до 30%.
                  </li>
                  <li>
                    <strong>Комбинируйте материалы:</strong> Дорогая плитка в видимых местах, бюджетная — за мебелью. Акцентная стена с обоями, остальные — покраска.
                  </li>
                  <li>
                    <strong>Откажитесь от перепланировки:</strong> Согласование стоит 50-150 тыс. руб. и занимает месяцы. Иногда достаточно зонирования.
                  </li>
                  <li>
                    <strong>Сохраните то, что можно:</strong> Если двери в хорошем состоянии, замените только фурнитуру. Реставрация дешевле замены.
                  </li>
                  <li>
                    <strong>Делайте поэтапно:</strong> Сначала важное (санузел, электрика), потом косметика. Растянете расходы во времени.
                  </li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Распространенные ошибки при планировании бюджета</h2>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">Отсутствие резервного фонда</h3>
                  <p className="text-red-800">
                    Всегда закладывайте 10-15% на непредвиденные расходы. Скрытые дефекты (старая проводка, трещины в стенах) обнаруживаются в процессе.
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">Экономия на скрытых работах</h3>
                  <p className="text-red-800">
                    Дешевая электропроводка или трубы — риск пожара и протечек. На том, что за стенами, экономить нельзя.
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">Недооценка сроков</h3>
                  <p className="text-red-800">
                    Задержки = дополнительные расходы (аренда жилья, хранение вещей). Закладывайте +20-30% времени от плана.
                  </p>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 mb-4">
                  Грамотное планирование бюджета — залог успешного ремонта. Составьте детальную смету, заложите резерв, выбирайте материалы с умом и не экономьте на том, что влияет на безопасность и долговечность.
                </p>
                <p className="text-gray-700">
                  Мы поможем составить точную смету и оптимизировать расходы. Наши специалисты рассчитают стоимость материалов и работ, подберут оптимальные решения в рамках вашего бюджета.
                </p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                >
                  Получить бесплатную смету
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

export default RenovationBudget;