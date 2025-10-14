import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import bathroomRepair from "@/assets/bathroom-repair.jpg";

const BathroomMistakes = () => {
  const mistakes = [
    {
      title: "Отсутствие гидроизоляции",
      description:
        "Даже идеально уложенная плитка не спасёт от протечек, если нет надёжной гидроизоляции. Часто ограничиваются промазкой углов, забывая про стены и пол.",
      advice:
        "Наносите гидроизоляцию минимум в два слоя по всей поверхности пола и на стены на высоту 25–30 см. Используйте качественные составы Ceresit, Knauf или Weber."
    },
    {
      title: "Пол без уклона",
      description:
        "Если пол выполнен строго по уровню, вода не будет уходить к трапу, а станет застаиваться — это прямая дорога к плесени и запаху.",
      advice:
        "Делайте уклон 1–2 см на метр в сторону слива при устройстве стяжки. Проверяйте уровнем до застывания раствора."
    },
    {
      title: "Недостаточная вентиляция",
      description:
        "Без правильной вентиляции в ванной появляется конденсат, ржавчина и грибок — даже если ремонт выполнен идеально.",
      advice:
        "Установите вытяжной вентилятор с датчиком влажности. Для стандартной ванной подойдёт модель с производительностью 6–8 объёмов помещения в час."
    },
    {
      title: "Использование неподходящих материалов",
      description:
        "Обычный гипсокартон, цементные смеси и затирки без влагостойких свойств быстро разрушаются под воздействием влаги.",
      advice:
        "Используйте влагостойкий гипсокартон (ГКЛВ), плитку с низким водопоглощением, эпоксидную затирку и антисептический грунт."
    },
    {
      title: "Ошибки в электромонтаже",
      description:
        "Розетки и выключатели слишком близко к воде — риск поражения током. Электрика в ванной требует особого подхода.",
      advice:
        "Используйте розетки с защитой IP44 и ставьте их не ближе 60 см от источников воды. Обязательно установите УЗО 10–30 мА."
    },
    {
      title: "Неправильная последовательность работ",
      description:
        "Если перепутать этапы, часть работы придётся переделывать: например, уложить плитку до установки сантехники или потолка.",
      advice:
        "Следуйте правильному порядку: демонтаж → коммуникации → стяжка → гидроизоляция → плитка → сантехника → потолок."
    },
    {
      title: "Отсутствие тёплого пола",
      description:
        "Холодная плитка — распространённая жалоба после ремонта. Исправить после отделки сложно.",
      advice:
        "Заложите электрический или водяной тёплый пол на этапе стяжки. Оптимальная мощность 140–180 Вт/м²."
    },
    {
      title: "Слишком узкие швы между плиткой",
      description:
        "Попытка сделать «бесшовную» укладку приводит к трещинам и сколам при усадке.",
      advice:
        "Делайте швы 2–3 мм на стенах и 3–5 мм на полу. Используйте систему выравнивания плитки."
    },
    {
      title: "Неверная высота сантехники",
      description:
        "Раковины и душевые нередко ставят «на глаз» — потом пользоваться неудобно.",
      advice:
        "Раковина — 80–85 см от пола, смеситель — 110–120 см, верхний душ — 200–210 см."
    },
    {
      title: "Отсутствие ревизионного люка",
      description:
        "Закрытые трубы без доступа — риск больших проблем при протечке.",
      advice:
        "Установите ревизионный люк под плитку или магнитный. Это обеспечит доступ к кранам и счётчикам без демонтажа."
    }
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>10 ошибок при ремонте ванной комнаты | SPB-DSRemont</title>
        <meta
          name="description"
          content="Узнайте, какие ошибки чаще всего допускают при ремонте ванной комнаты и как их избежать. Советы экспертов SPB-DSRemont — ремонт под ключ в Санкт-Петербурге."
        />
        <meta
          name="keywords"
          content="ремонт ванной, ошибки при ремонте ванной, ремонт под ключ СПБ, гидроизоляция, вентиляция ванной, плитка"
        />
        <link
          rel="canonical"
          href="https://spb-dsremont.ru/blog/oshibki-pri-remonte-vannoy-komnaty"
        />

        <meta
          property="og:title"
          content="10 ошибок при ремонте ванной комнаты | SPB-DSRemont"
        />
        <meta
          property="og:description"
          content="10 типичных ошибок при ремонте ванной и как их избежать. Советы специалистов SPB-DSRemont, ремонт под ключ в Санкт-Петербурге."
        />
        <meta
          property="og:url"
          content="https://spb-dsremont.ru/blog/oshibki-pri-remonte-vannoy-komnaty"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={bathroomRepair} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="10 ошибок при ремонте ванной комнаты | SPB-DSRemont"
        />
        <meta
          name="twitter:description"
          content="10 типичных ошибок при ремонте ванной и советы, как сделать всё правильно."
        />
        <meta name="twitter:image" content={bathroomRepair} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "10 ошибок при ремонте ванной комнаты",
            datePublished: "2025-03-15",
            author: {
              "@type": "Organization",
              name: "SPB-DSRemont"
            },
            publisher: {
              "@type": "Organization",
              name: "SPB-DSRemont",
              logo: {
                "@type": "ImageObject",
                url: "https://spb-dsremont.ru/logo.png"
              }
            },
            image: bathroomRepair
          })}
        </script>
      </Helmet>

      <Header />

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться к статьям
            </Link>

            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-4">
                15 марта 2025 • 8 минут чтения
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                10 ошибок при ремонте ванной комнаты и как их избежать
              </h1>
            </div>

            <LazyImage
              src={bathroomRepair}
              alt="Ремонт ванной комнаты под ключ"
              className="w-full h-[400px] object-cover rounded-2xl mb-8 shadow-lg"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Ремонт ванной комнаты — ответственный этап, где ошибка может
                стоить дорого. Влажность, температура и ограниченное пространство
                требуют внимательного подхода. Эксперты SPB-DSRemont делятся
                советами, которые помогут избежать распространённых проблем.
              </p>

              <div className="space-y-8">
                {mistakes.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-orange-500 pl-6 py-4 bg-gradient-to-r from-orange-50 to-transparent rounded-r-xl shadow-sm"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Hammer className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        {index + 1}. {item.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-yellow-900 mb-1">
                        💡 Совет от мастера:
                      </p>
                      <p className="text-yellow-800">{item.advice}</p>
                    </div>
                  </div>
                ))}
              </div>

              <section className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Как избежать ошибок при ремонте ванной?
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li>📋 Планируйте последовательность работ заранее.</li>
                  <li>🧱 Используйте только влагостойкие материалы.</li>
                  <li>⚙️ Доверяйте электрику и сантехнику профессионалам.</li>
                  <li>🌡 Учитывайте вентиляцию и тёплый пол.</li>
                  <li>🔍 Проверяйте каждый этап до перехода к следующему.</li>
                </ul>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Почему стоит обратиться в SPB-DSRemont
                </h2>
                <p className="text-gray-700 mb-4">
                  Мы более 10 лет выполняем ремонт ванных комнат в Санкт-Петербурге.
                  Используем проверенные технологии, качественные материалы и даём
                  гарантию на все работы.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Прозрачная смета и фиксированная цена.</li>
                  <li>✅ Профессиональные мастера с опытом более 5 лет.</li>
                  <li>✅ Дизайн-проект под ваш стиль и бюджет.</li>
                  <li>✅ Гарантия до 3 лет на все работы.</li>
                </ul>
              </section>

              <div className="text-center pt-8 border-t mt-12">
                <Button
                  size="lg"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("openContactDialog"))
                  }
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8 py-6 rounded-full shadow-md transition-all"
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
