import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, XCircle, CheckCircle2, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import bathroomWork from "@/assets/bathroom-work.jpg";

const BathroomMistakes = () => {
  const mistakes = [
    {
      title: "Отсутствие гидроизоляции",
      description:
        "Даже идеально уложенная плитка не спасёт от протечек, если нет надёжной гидроизоляции. Многие ограничиваются промазкой углов, забывая о стенах и полу.",
      solution:
        "Наносите гидроизоляцию минимум в два слоя по всей поверхности пола и на стены на высоту 25–30 см. Используйте составы Ceresit, Knauf или Weber, тщательно промазывая углы и стыки."
    },
    {
      title: "Пол без уклона",
      description:
        "Если пол выполнен строго по уровню, вода не будет уходить к трапу, а станет застаиваться. Это прямая дорога к грибку и неприятному запаху.",
      solution:
        "При устройстве стяжки делайте уклон 1–2 см на метр в сторону слива. Проверяйте уровнем до застывания раствора."
    },
    {
      title: "Недостаточная вентиляция",
      description:
        "Плохая вентиляция — причина конденсата, плесени и ржавчины на трубах. В современных квартирах естественной вентиляции часто недостаточно.",
      solution:
        "Установите вытяжной вентилятор с датчиком влажности. Для ванной в СПБ подойдёт модель производительностью 6–8 объёмов помещения в час."
    },
    {
      title: "Использование неподходящих материалов",
      description:
        "Применение обычного гипсокартона и затирки без влагостойких свойств приводит к деформации и разрушению отделки.",
      solution:
        "Используйте влагостойкий гипсокартон (ГКЛВ), плитку с влагопоглощением не выше 3%, эпоксидную затирку и антисептические грунты."
    },
    {
      title: "Нарушение правил электромонтажа",
      description:
        "Розетки и выключатели, установленные слишком близко к воде, могут привести к короткому замыканию или поражению током.",
      solution:
        "Розетки — только с защитой IP44, не ближе 60 см от воды. Обязательно УЗО на 10–30 мА в электрощите."
    },
    {
      title: "Неправильная последовательность работ",
      description:
        "Если уложить плитку до монтажа ванны или сделать потолок до окончания мокрых работ — это приведёт к переделке.",
      solution:
        "Демонтаж → коммуникации → стяжка → гидроизоляция → плитка → сантехника → потолок. Соблюдайте порядок — и переделывать не придётся."
    },
    {
      title: "Отсутствие тёплого пола",
      description:
        "Холодная плитка — одна из самых частых жалоб после ремонта. Без подогрева помещение становится некомфортным.",
      solution:
        "Закладывайте электрический или водяной тёплый пол при стяжке. Оптимальная мощность — 140–180 Вт/м²."
    },
    {
      title: "Слишком узкие швы между плиткой",
      description:
        "Попытка сделать «бесшовную» кладку часто заканчивается трещинами и сколами.",
      solution:
        "Швы 2–3 мм для стен и 3–5 мм для пола. Используйте систему выравнивания плитки и качественные крестики."
    },
    {
      title: "Неверная высота сантехники",
      description:
        "Раковину, смеситель и душ часто устанавливают «на глаз», из-за чего пользоваться ими неудобно.",
      solution:
        "Раковина — 80–85 см от пола, смеситель — 110–120 см, верхний душ — 200–210 см. Подбирайте под рост жильцов."
    },
    {
      title: "Отсутствие ревизионного люка",
      description:
        "Закрытые наглухо трубы и краны — большая ошибка. При протечке придётся ломать плитку.",
      solution:
        "Установите скрытый ревизионный люк под плитку или на магнитах — обеспечьте доступ к коммуникациям."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>10 ошибок при ремонте ванной комнаты | SPB-DSRemont</title>
        <meta
          name="description"
          content="Частые ошибки при ремонте ванной комнаты и советы профессионалов из СПБ, как их избежать. Правильная гидроизоляция, вентиляция, электрика, материалы. Ремонт ванной под ключ в Санкт-Петербурге."
        />
        <meta
          name="keywords"
          content="ошибки при ремонте ванной, ремонт ванной СПБ, ремонт ванной комнаты под ключ, гидроизоляция ванной, ремонт ванной без ошибок"
        />
        <link
          rel="canonical"
          href="https://spb-dsremont.ru/blog/oshibki-pri-remonte-vannoy"
        />
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

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                10 распространённых ошибок при ремонте ванной комнаты
              </h1>
              <p className="text-gray-600 text-lg">
                Советы профессионалов из SPB-DSRemont, чтобы ваш ремонт в
                Санкт-Петербурге прошёл без переделок.
              </p>
            </div>

            <LazyImage
              src={bathroomWork}
              alt="Ремонт ванной комнаты в СПБ"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg mb-12"
            />

            <div className="space-y-10">
              {mistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border-l-4 border-cyan-500"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <XCircle className="w-6 h-6 text-red-500 mt-1" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {index + 1}. {mistake.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {mistake.description}
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <p className="text-green-800">
                      <strong>Как правильно:</strong> {mistake.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <section className="mt-16 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl shadow-md">
              <h2 className="flex items-center gap-2 text-3xl font-bold text-gray-900 mb-6">
                <Lightbulb className="w-7 h-7 text-yellow-500" />
                Важные рекомендации от SPB-DSRemont
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>
                  <strong>Не экономьте на материалах.</strong> Ванная —
                  помещение с агрессивной средой, дешёвые материалы долго не
                  прослужат.
                </li>
                <li>
                  <strong>Планируйте заранее.</strong> Продумайте расположение
                  сантехники, розеток и мебели до начала отделки.
                </li>
                <li>
                  <strong>Соблюдайте технологию.</strong> Не торопитесь — дайте
                  каждому этапу высохнуть и схватиться.
                </li>
                <li>
                  <strong>Доверьте ремонт профессионалам.</strong> Если нет
                  опыта, лучше поручить работу специалистам с гарантией.
                </li>
              </ul>
            </section>

            <section className="mt-16 bg-white shadow-md rounded-3xl p-8 border border-gray-100 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Почему стоит заказать ремонт ванной под ключ у SPB-DSRemont
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Мы более 10 лет занимаемся ремонтом ванных комнат в
                Санкт-Петербурге и точно знаем, как избежать ошибок. Гарантируем
                качество, аккуратность и прозрачную смету.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-left text-gray-700 mb-8 max-w-3xl mx-auto">
                <li>• Гарантия на все виды работ</li>
                <li>• Сертифицированные влагостойкие материалы</li>
                <li>• Современные технологии монтажа</li>
                <li>• Фиксированная цена без скрытых расходов</li>
              </ul>
              <Button
                size="lg"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openContactDialog"))
                }
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-10 py-6 rounded-full"
              >
                Заказать бесплатную консультацию
              </Button>
            </section>

            <section className="mt-16 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Заключение
              </h2>
              <p className="mb-4">
                Избежать ошибок при ремонте ванной комнаты возможно, если
                подходить к делу ответственно. Выбирайте качественные материалы,
                следуйте технологии и не торопитесь с каждым этапом.
              </p>
              <p>
                Команда <strong>SPB-DSRemont</strong> выполнит ремонт ванной
                под ключ в Санкт-Петербурге с гарантией качества, точно в срок и
                без переделок.
              </p>
            </section>

            <div className="text-center pt-12 border-t mt-12">
              <Button
                size="lg"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openContactDialog"))
                }
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6 rounded-full shadow-lg"
              >
                Заказать ремонт ванной под ключ
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BathroomMistakes;
