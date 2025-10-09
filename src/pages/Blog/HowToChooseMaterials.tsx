import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import majorRepairHero from "@/assets/major-repair-hero.jpg";

const HowToChooseMaterials = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Как правильно выбрать материалы для ремонта квартиры | SPB-DSRemont</title>
        <meta name="description" content="Полное руководство по выбору материалов для ремонта: напольные покрытия, обои, краски, плитка. Критерии выбора, сравнение характеристик и советы от профессионалов." />
        <meta name="keywords" content="выбор материалов для ремонта, материалы для ремонта квартиры, как выбрать обои, как выбрать ламинат, краска для стен" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/kak-vybrat-materialy-dlya-remonta" />
        
        <meta property="og:title" content="Как правильно выбрать материалы для ремонта квартиры | SPB-DSRemont" />
        <meta property="og:description" content="Полное руководство по выбору материалов для ремонта: напольные покрытия, обои, краски, плитка. Критерии выбора, сравнение характеристик и советы от профессионалов." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/kak-vybrat-materialy-dlya-remonta" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={majorRepairHero} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Как правильно выбрать материалы для ремонта квартиры | SPB-DSRemont" />
        <meta name="twitter:description" content="Полное руководство по выбору материалов для ремонта: напольные покрытия, обои, краски, плитка. Критерии выбора, сравнение характеристик и советы от профессионалов." />
        <meta name="twitter:image" content={majorRepairHero} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Как правильно выбрать материалы для ремонта квартиры",
            "datePublished": "2025-01-15",
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
            "image": majorRepairHero
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
              <div className="text-sm text-gray-500 mb-4">15 января 2025 • 8 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Как правильно выбрать материалы для ремонта квартиры
              </h1>
            </div>
            
            <LazyImage
              src={majorRepairHero}
              alt="Материалы для ремонта квартиры"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Выбор материалов для ремонта — один из самых важных этапов подготовки к обновлению интерьера. От качества материалов зависит не только внешний вид помещения, но и долговечность ремонта, комфорт проживания и безопасность для здоровья.
              </p>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Основные критерии выбора материалов</h2>
                <p className="text-gray-700 mb-4">
                  При выборе материалов для ремонта важно учитывать несколько ключевых факторов:
                </p>
                <div className="space-y-3">
                  {[
                    "Назначение помещения (жилая комната, кухня, ванная)",
                    "Уровень влажности и температурный режим",
                    "Проходимость помещения",
                    "Экологичность и безопасность для здоровья",
                    "Бюджет на ремонт",
                    "Сложность монтажа и ухода"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
              
              <section className="mb-8 bg-gray-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Напольные покрытия</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ламинат</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Преимущества:</strong> доступная цена, простота укладки, широкий выбор дизайнов, имитация натурального дерева.
                  <br />
                  <strong>Недостатки:</strong> боится влаги, может вздуваться при протечках.
                  <br />
                  <strong>Рекомендации:</strong> выбирайте класс прочности 32-33 для жилых помещений. Обращайте внимание на толщину (от 8 мм) и систему замков.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Паркетная доска</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Преимущества:</strong> натуральное дерево, экологичность, теплое на ощупь, долговечность.
                  <br />
                  <strong>Недостатки:</strong> высокая цена, требует бережного ухода, чувствительна к влаге.
                  <br />
                  <strong>Рекомендации:</strong> для жилых комнат отлично подходят дуб, ясень, орех. Толщина верхнего слоя должна быть не менее 3-4 мм.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Керамогранит</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Преимущества:</strong> максимальная прочность, влагостойкость, долговечность, легкий уход.
                  <br />
                  <strong>Недостатки:</strong> холодный материал (требует теплый пол), сложность укладки.
                  <br />
                  <strong>Рекомендации:</strong> идеален для кухни, ванной, прихожей. Выбирайте нескользящую поверхность (R10-R11).
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Стеновые покрытия</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Краска</h3>
                <p className="text-gray-700 mb-4">
                  Современные краски для стен делятся на несколько типов:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
                  <li><strong>Акриловая:</strong> универсальная, без запаха, быстро сохнет. Подходит для жилых комнат.</li>
                  <li><strong>Латексная:</strong> влагостойкая, моющаяся. Идеальна для кухни и ванной.</li>
                  <li><strong>Силиконовая:</strong> максимальная влагостойкость, эластичность. Дорогая, но долговечная.</li>
                  <li><strong>Водоэмульсионная:</strong> экологичная, дышащая. Для сухих помещений.</li>
                </ul>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Обои</h3>
                <p className="text-gray-700 mb-4">
                  Выбор обоев зависит от функциональности помещения:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
                  <li><strong>Флизелиновые:</strong> плотные, скрывают небольшие дефекты стен, легко клеятся, можно красить.</li>
                  <li><strong>Виниловые:</strong> моющиеся, прочные, влагостойкие. Подходят для кухни.</li>
                  <li><strong>Текстильные:</strong> премиальный вариант, экологичные, но требуют бережного ухода.</li>
                  <li><strong>Под покраску:</strong> универсальное решение, можно менять цвет без переклейки.</li>
                </ul>
              </section>
              
              <section className="mb-8 bg-cyan-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Материалы для ванной комнаты</h2>
                <p className="text-gray-700 mb-4">
                  Ванная комната — помещение с повышенной влажностью, поэтому выбор материалов здесь особенно важен:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Керамическая плитка:</strong> классический вариант для стен и пола. Выбирайте влагопоглощение не более 3%.</li>
                  <li><strong>Керамогранит:</strong> более прочный, чем обычная плитка. Идеален для пола.</li>
                  <li><strong>Влагостойкий гипсокартон (ГКЛВ):</strong> для выравнивания стен и создания конструкций.</li>
                  <li><strong>ПВХ-панели:</strong> бюджетный вариант, легко монтируются, но менее долговечны.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Распространенные ошибки при выборе материалов</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">Экономия на качестве</h3>
                  <p className="text-red-800">
                    Дешевые материалы часто содержат вредные вещества, быстро изнашиваются и требуют скорой замены. Лучше один раз сделать качественно.
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">Игнорирование характеристик помещения</h3>
                  <p className="text-red-800">
                    Использование обычного ламината во влажных помещениях или неподходящей краски на кухне приведет к быстрой порче отделки.
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">Покупка без запаса</h3>
                  <p className="text-red-800">
                    Всегда покупайте материалы с запасом 10-15%. Разные партии могут отличаться по оттенку.
                  </p>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 mb-4">
                  Выбор материалов для ремонта требует комплексного подхода. Учитывайте особенности помещения, свой бюджет и желаемый результат. Не бойтесь консультироваться с профессионалами — это поможет избежать ошибок и сэкономить средства в долгосрочной перспективе.
                </p>
                <p className="text-gray-700">
                  Если вы планируете ремонт, наши специалисты помогут подобрать оптимальные материалы с учетом ваших пожеланий и бюджета. Мы работаем только с проверенными поставщиками и предоставляем гарантию на все материалы и работы.
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
