import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import bathroomWork from "@/assets/bathroom-work.jpg";

const BathroomMistakes = () => {
  const mistakes = [
    {
      title: "Отсутствие гидроизоляции",
      description: "Многие пропускают этап гидроизоляции пола и стен, что приводит к протечкам и проблемам с соседями снизу. Гидроизоляция обязательна для всей площади пола и стен на высоту минимум 20-30 см от пола.",
      solution: "Используйте качественные гидроизоляционные составы (Ceresit, Knauf). Наносите в 2-3 слоя с промазкой углов и стыков."
    },
    {
      title: "Неправильный уклон пола",
      description: "Пол в ванной должен иметь небольшой уклон (1-2 см на метр) в сторону слива. Без уклона вода будет застаиваться, что приведет к появлению плесени и грибка.",
      solution: "Заливайте стяжку с учетом уклона. Проверяйте уровнем до застывания раствора."
    },
    {
      title: "Экономия на вентиляции",
      description: "Плохая вентиляция — главная причина появления плесени. Естественной вентиляции в современных квартирах часто недостаточно.",
      solution: "Установите принудительную вытяжку с датчиком влажности. Мощность вентилятора рассчитывается как объем помещения × 6-8."
    },
    {
      title: "Неподходящие материалы",
      description: "Использование обычного гипсокартона вместо влагостойкого, обычной затирки вместо эпоксидной — типичные ошибки. Материалы должны быть предназначены для влажных помещений.",
      solution: "Только влагостойкие материалы: ГКЛВ, плитка с влагопоглощением до 3%, эпоксидная затирка для швов в зоне прямого контакта с водой."
    },
    {
      title: "Неправильная разводка электрики",
      description: "Розетки слишком близко к воде, отсутствие УЗО, использование обычных розеток — все это опасно для жизни.",
      solution: "Все розетки должны быть с защитой IP44, установлены на расстоянии минимум 60 см от ванны/душа. Обязательно УЗО на 10-30 мА."
    },
    {
      title: "Неверная последовательность работ",
      description: "Укладка плитки до установки ванны, монтаж натяжного потолка до окончания мокрых работ — нарушение технологии приводет к переделкам.",
      solution: "Правильная последовательность: демонтаж → разводка коммуникаций → стяжка → гидроизоляция → плитка → установка сантехники → потолок."
    },
    {
      title: "Игнорирование теплого пола",
      description: "Холодная плитка — неприятный момент. Многие не закладывают теплый пол на этапе стяжки, а потом жалеют.",
      solution: "Электрический или водяной теплый пол устанавливается до заливки стяжки. Мощность для ванной — 140-180 Вт/м²."
    },
    {
      title: "Маленькие швы между плиткой",
      description: "Укладка плитки без швов или с минимальными швами (1 мм) приводит к сколам и трещинам при температурных расширениях.",
      solution: "Оптимальная ширина шва для стен — 2-3 мм, для пола — 3-5 мм. Используйте качественные крестики для ровных швов."
    },
    {
      title: "Неправильная высота раковины и смесителей",
      description: "Стандартные высоты не всегда удобны. Часто высоту выбирают «на глаз», не учитывая рост жильцов.",
      solution: "Раковина — 80-85 см от пола, смеситель для душа — 110-120 см, верхний душ — 200-210 см. Корректируйте под рост жильцов."
    },
    {
      title: "Отсутствие ревизионного люка",
      description: "Закрывают все коммуникации «наглухо», а потом при протечке приходится ломать плитку.",
      solution: "Обязательно установите ревизионный люк (можно скрытый под плитку) в местах, где находятся счетчики, фильтры, краны."
    }
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>10 частых ошибок при ремонте ванной комнаты | SPB-DSRemont</title>
        <meta name="description" content="Узнайте о самых распространенных ошибках при ремонте ванной комнаты и как их избежать. Практические советы от профессионалов: гидроизоляция, вентиляция, электрика, выбор материалов." />
        <meta name="keywords" content="ошибки при ремонте ванной, ремонт ванной комнаты ошибки, как избежать ошибок ремонт ванной, гидроизоляция ванной" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/oshibki-pri-remonte-vannoy" />
        
        <meta property="og:title" content="10 частых ошибок при ремонте ванной комнаты | SPB-DSRemont" />
        <meta property="og:description" content="Узнайте о самых распространенных ошибках при ремонте ванной комнаты и как их избежать. Практические советы от профессионалов." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/oshibki-pri-remonte-vannoy" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={bathroomWork} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="10 частых ошибок при ремонте ванной комнаты | SPB-DSRemont" />
        <meta name="twitter:description" content="Узнайте о самых распространенных ошибках при ремонте ванной комнаты и как их избежать. Практические советы от профессионалов." />
        <meta name="twitter:image" content={bathroomWork} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "10 частых ошибок при ремонте ванной комнаты",
            "datePublished": "2025-01-10",
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
            "image": bathroomWork
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
              <div className="text-sm text-gray-500 mb-4">10 января 2025 • 6 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                10 частых ошибок при ремонте ванной комнаты
              </h1>
            </div>
            
            <LazyImage
              src={bathroomWork}
              alt="Ремонт ванной комнаты"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Ремонт ванной комнаты — один из самых сложных и ответственных этапов ремонта квартиры. Это помещение с повышенной влажностью, где даже небольшая ошибка может привести к серьезным последствиям: от появления плесени до протечек к соседям. Мы собрали топ-10 самых частых ошибок и расскажем, как их избежать.
              </p>
              
              <div className="space-y-8">
                {mistakes.map((mistake, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                    <div className="flex items-start gap-3 mb-3">
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        {index + 1}. {mistake.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {mistake.description}
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-green-900 mb-1">✓ Правильное решение:</p>
                      <p className="text-green-800">{mistake.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <section className="mt-12 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Важные рекомендации</h2>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Не экономьте на материалах.</strong> Ванная — помещение с агрессивными условиями эксплуатации. Дешевые материалы быстро придут в негодность.</li>
                  <li><strong>Планируйте заранее.</strong> Составьте подробный план расположения сантехники, розеток, полотенцесушителя. Переделки после укладки плитки обойдутся дорого.</li>
                  <li><strong>Соблюдайте технологию.</strong> Не торопитесь, выдерживайте время высыхания каждого слоя. Спешка приведет к некачественному результату.</li>
                  <li><strong>Консультируйтесь с профессионалами.</strong> Если вы не уверены в своих силах, лучше доверить ремонт специалистам или хотя бы получить консультацию на сложных этапах.</li>
                </ul>
              </section>
              
              <section className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 mb-4">
                  Избежать ошибок при ремонте ванной комнаты возможно, если подойти к процессу ответственно: изучить технологию, выбрать качественные материалы и не торопиться. Если же опыта недостаточно, не рискуйте — обратитесь к профессионалам.
                </p>
                <p className="text-gray-700">
                  Наша команда выполнит ремонт ванной комнаты под ключ с соблюдением всех технологий и гарантией качества. Мы используем только проверенные материалы и современное оборудование.
                </p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                >
                  Заказать ремонт ванной под ключ
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

export default BathroomMistakes;
