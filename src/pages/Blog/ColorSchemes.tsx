import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogColorSchemesHero from "@/assets/blog-color-schemes-hero.jpg";
import blogColorPaintSamples from "@/assets/blog-color-paint-samples.jpg";
import blogColorLivingRoom from "@/assets/blog-color-living-room.jpg";

const ColorSchemes = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>
          Цветовые решения в интерьере 2025 | Как правильно выбрать цвет для квартиры | СПб | SPB-DSRemont
        </title>
        <meta
          name="description"
          content="Полный гид по выбору цветовой гаммы для квартиры в Санкт-Петербурге: психология цвета, актуальные тренды 2025, комбинации оттенков, правило 60-30-10. Дизайн-проект от 3500₽/м². Бесплатная консультация."
        />
        <meta
          name="keywords"
          content="цветовые решения в интерьере, выбор цвета для квартиры, сочетание цветов в интерьере, психология цвета, модные цвета 2025, цветовая палитра интерьера, дизайн-проект СПб"
        />
        <link
          rel="canonical"
          href="https://spb-dsremont.ru/blog/cvetovye-resheniya-v-interere"
        />
        <meta property="og:title" content="Цветовые решения в интерьере 2025 | SPB-DSRemont" />
        <meta property="og:description" content="Как правильно выбрать цветовую гамму для квартиры: психология, тренды, комбинации. Дизайн-проект от 3500₽/м²." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/cvetovye-resheniya-v-interere" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Цветовые решения в интерьере: как выбрать идеальную палитру",
            "description": "Профессиональный гид по выбору цветовой гаммы для интерьера: психология цвета, актуальные тренды, правила сочетания",
            "datePublished": "2025-03-05",
            "dateModified": "2025-03-05",
            "author": {
              "@type": "Organization",
              "name": "SPB-DSRemont"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <section className="relative overflow-hidden">
        <LazyImage
          src={blogColorSchemesHero}
          alt="Цветовая палитра и образцы красок для дизайна интерьера — выбор цветовой гаммы"
          className="w-full h-[450px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Цветовые решения в интерьере
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl">
            Создаем гармоничную атмосферу с помощью правильных цветовых сочетаний
          </p>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться к статьям
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-6">
              Обновлено: 5 марта 2025
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              Цвет — это мощный инструмент в дизайне интерьера. Он влияет на настроение, визуально изменяет пространство и создает уникальную атмосферу. В этом руководстве мы расскажем, как правильно выбрать цветовую гамму для квартиры и не ошибиться с сочетаниями.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Психология цвета в интерьере
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Каждый цвет оказывает определенное психологическое воздействие на человека. Это нужно учитывать при выборе цветовой гаммы для разных комнат.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Влияние основных цветов:</strong>
            </p>
            <ul className="space-y-3 text-foreground/80 mb-6 list-disc pl-6">
              <li>
                <strong>Белый:</strong> Чистота, свежесть, визуально расширяет пространство. Идеален для маленьких комнат и северных квартир в СПб. Может быть холодным — добавляйте теплые акценты.
              </li>
              <li>
                <strong>Бежевый и кремовый:</strong> Тепло, уют, спокойствие. Универсальный базовый цвет, подходит для любой комнаты. Особенно хорош для гостиной и спальни.
              </li>
              <li>
                <strong>Серый:</strong> Элегантность, сдержанность, современность. Идеальный фон для ярких акцентов. Выбирайте теплые оттенки серого, чтобы избежать мрачности.
              </li>
              <li>
                <strong>Синий:</strong> Спокойствие, концентрация, снижает давление. Подходит для спальни и кабинета. В холодном климате СПб может усиливать ощущение холода — используйте теплые оттенки синего.
              </li>
              <li>
                <strong>Зеленый:</strong> Гармония, баланс, снижает стресс. Отличный выбор для любой комнаты. Оливковый и шалфейный — тренд 2025 года.
              </li>
              <li>
                <strong>Желтый:</strong> Энергия, радость, стимулирует активность. Идеален для кухни и детской. Избыток желтого может вызывать тревожность.
              </li>
              <li>
                <strong>Красный:</strong> Страсть, энергия, повышает аппетит. Используйте дозированно, как акцент. Не рекомендуется для спальни и кабинета.
              </li>
              <li>
                <strong>Фиолетовый:</strong> Роскошь, креативность, мистика. Сложный цвет, лучше использовать светлые оттенки (лаванда, сирень).
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Правило для Санкт-Петербурга:</strong> В нашем климате мало солнца, поэтому избегайте холодных серых, синих, фиолетовых тонов в качестве основных. Отдавайте предпочтение теплым оттенкам, которые компенсируют недостаток естественного света.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Актуальные цветовые тренды 2025 года
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Дизайнеры интерьера выделяют несколько ключевых цветовых направлений в 2025 году.
            </p>

            <LazyImage
              src={blogColorPaintSamples}
              alt="Образцы окрашенных стен разными оттенками — выбор цвета краски для интерьера"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />

            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Популярные цветовые палитры 2025:</strong>
            </p>
            <ul className="space-y-3 text-foreground/80 mb-6 list-disc pl-6">
              <li>
                <strong>Теплые земляные тона:</strong> Терракота, охра, глина, теплый бежевый, карамель. Создают уютную, природную атмосферу. Сочетаются с деревом и натуральными материалами.
              </li>
              <li>
                <strong>Приглушенные зеленые:</strong> Шалфей, оливковый, хаки, фисташковый. Успокаивают, улучшают концентрацию. Идеальны для спальни и кабинета.
              </li>
              <li>
                <strong>Насыщенные глубокие цвета:</strong> Изумруд, сапфир, бургунди, темно-синий (navy). Создают драматичность и роскошь. Лучше использовать на акцентной стене.
              </li>
              <li>
                <strong>Нейтральная база с яркими акцентами:</strong> Бежевый/серый + горчичный/терракотовый/изумрудный. Универсальное решение, легко менять акценты по настроению.
              </li>
              <li>
                <strong>Монохром с текстурами:</strong> Один цвет в разных оттенках + разнообразие текстур (дерево, камень, ткань). Элегантно и современно.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Правило 60-30-10
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Это классическое правило дизайнеров для гармоничного сочетания цветов в интерьере. Оно помогает избежать цветовой перегрузки.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Как работает правило:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li><strong>60% — доминирующий цвет:</strong> Основной цвет стен, потолка, крупной мебели. Обычно нейтральный (белый, бежевый, серый).</li>
              <li><strong>30% — дополнительный цвет:</strong> Цвет мебели, текстиля (шторы, ковер), акцентной стены. Более насыщенный, чем основной.</li>
              <li><strong>10% — акцентный цвет:</strong> Яркие декоративные элементы (подушки, картины, вазы, светильники). Самый яркий и выразительный.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Пример:</strong> Стены бежевые (60%), диван серо-зеленый и шторы оливковые (30%), подушки горчичные и вазы терракотовые (10%). Такая комбинация выглядит сбалансированно и профессионально.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Как сочетать цвета: проверенные схемы
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Существует несколько базовых схем сочетания цветов, которые всегда работают.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Основные цветовые схемы:</strong>
            </p>
            <ul className="space-y-3 text-foreground/80 mb-6 list-disc pl-6">
              <li>
                <strong>Монохромная:</strong> Один цвет в разных оттенках (светло-серый + серый + темно-серый). Элегантно, но может быть скучно — добавляйте текстуры.
              </li>
              <li>
                <strong>Аналоговая:</strong> Цвета, расположенные рядом на цветовом круге (синий + зеленый + бирюзовый). Гармоничная, спокойная схема.
              </li>
              <li>
                <strong>Комплементарная:</strong> Противоположные цвета на круге (синий + оранжевый, фиолетовый + желтый). Контрастная, яркая схема. Используйте приглушенные оттенки.
              </li>
              <li>
                <strong>Триада:</strong> Три цвета на равном расстоянии на круге (красный + желтый + синий). Яркая и сбалансированная. Сложно реализовать самостоятельно.
              </li>
              <li>
                <strong>Нейтральная + акцент:</strong> Нейтральная база (бежевый, серый, белый) + один яркий акцентный цвет. Самая простая и безопасная схема для новичков.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Выбор цвета для разных комнат
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Назначение комнаты определяет оптимальную цветовую гамму. Рассмотрим рекомендации для каждого помещения.
            </p>

            <LazyImage
              src={blogColorLivingRoom}
              alt="Гостиная с гармоничной цветовой схемой — сочетание теплых и холодных оттенков в интерьере"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />

            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Гостиная:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>База — нейтральные теплые тона (бежевый, кремовый, светло-серый)</li>
              <li>Акцентная стена — насыщенный оттенок (изумруд, терракота, глубокий синий)</li>
              <li>Текстиль — комбинация 2-3 цветов по правилу 60-30-10</li>
              <li>Избегайте слишком ярких и холодных тонов — гостиная должна быть уютной</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Спальня:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Спокойные, приглушенные тона (пыльная роза, лаванда, шалфей, бежевый)</li>
              <li>Избегайте ярких красных, оранжевых, неоновых цветов</li>
              <li>Синий и зеленый способствуют расслаблению и глубокому сну</li>
              <li>Для маленькой спальни — светлые тона для визуального расширения</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Кухня:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Светлые тона для маленькой кухни (белый, светло-серый, бежевый)</li>
              <li>Яркие акценты повышают аппетит (желтый, оранжевый, красный) — используйте в декоре</li>
              <li>Зеленый и синий снижают аппетит — хороши для тех, кто следит за весом</li>
              <li>Практично: темные фасады низа + светлый верх</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Детская:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>База — пастельные нейтральные тона (не стереотипные розовый/голубой)</li>
              <li>Яркие акценты в декоре (игрушки, постеры, текстиль) — их легко менять</li>
              <li>Избегайте слишком ярких стен — они перевозбуждают ребенка</li>
              <li>Зонирование цветом: спокойные тона у кровати, более яркие в игровой зоне</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Ванная:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Классика — белый + синий/голубой (ассоциация с чистотой и водой)</li>
              <li>Современно — серый + черный + латунные акценты</li>
              <li>Уютно — бежевый + дерево + терракотовые акценты</li>
              <li>Маленькая ванная — только светлые тона для визуального расширения</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Как визуально изменить пространство с помощью цвета
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Цвет может значительно повлиять на восприятие размеров и пропорций комнаты. Используйте эти приемы для коррекции недостатков планировки.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Визуальные эффекты:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Расширить маленькую комнату:</strong> Светлые холодные тона (белый, светло-серый, голубой), глянцевые поверхности, минимум контрастов.</li>
              <li><strong>Сделать уютнее большую комнату:</strong> Теплые насыщенные тона (бежевый, терракота, горчичный), матовые поверхности.</li>
              <li><strong>Поднять низкий потолок:</strong> Потолок светлее стен, вертикальные полосы на стенах, светлый глянцевый потолок.</li>
              <li><strong>Опустить высокий потолок:</strong> Потолок темнее стен или цветной потолок, горизонтальные элементы на стенах.</li>
              <li><strong>Расширить узкую комнату:</strong> Короткие стены темнее, длинные — светлее. Горизонтальные линии на длинных стенах.</li>
              <li><strong>Сузить широкую комнату:</strong> Длинные стены темнее, короткие — светлее. Вертикальные линии.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Ошибки при выборе цвета
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Избегайте этих распространенных ошибок при планировании цветовой гаммы.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Типичные ошибки:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Выбор по каталогу без тестирования:</strong> Всегда заказывайте пробники и красьте участок стены. Цвет в реальности выглядит иначе.</li>
              <li><strong>Игнорирование освещения:</strong> Тестируйте цвет при дневном и искусственном освещении. В СПб важно учитывать недостаток солнца.</li>
              <li><strong>Слишком много цветов:</strong> Более 3-4 основных цветов создают хаос. Придерживайтесь правила 60-30-10.</li>
              <li><strong>Чистый белый в качестве основного:</strong> Холодный белый делает интерьер больничным. Используйте теплый белый (ivory, кремовый).</li>
              <li><strong>Трендовый цвет на всех стенах:</strong> Модный цвет быстро надоест. Лучше сделать акцентную стену, которую легко перекрасить.</li>
              <li><strong>Игнорирование мебели и текстиля:</strong> Планируйте цвет стен с учетом существующей или планируемой мебели.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Стоимость работ по покраске в СПб
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Профессиональная покраска стен обеспечит идеальный результат и долговечность покрытия.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Цены на покраску стен:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li>Подготовка стен (шпаклевка, шлифовка, грунтовка): 600-900₽/м²</li>
              <li>Покраска в один цвет (2 слоя): 400-600₽/м²</li>
              <li>Покраска с колеровкой сложного оттенка: +150₽/м²</li>
              <li>Акцентная стена с декоративной покраской: 1200-2500₽/м²</li>
              <li>Краска премиум-класса (Tikkurila, Dulux, Benjamin Moore): 800-1500₽/л</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Пример расчета для комнаты 18 м² (высота 2.7м, периметр 17м):</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li>Площадь стен: 17м × 2.7м = 46 м²</li>
              <li>Подготовка: 46м² × 750₽ = 34 500₽</li>
              <li>Покраска: 46м² × 500₽ = 23 000₽</li>
              <li>Краска (15 л): 15 000₽</li>
              <li><strong>Итого:</strong> 72 500₽ или 4030₽/м² пола</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">
              Заключение
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Правильный выбор цветовой гаммы — это основа успешного интерьера. Учитывайте психологию цвета, назначение комнаты, особенности освещения и собственные предпочтения. Не бойтесь экспериментировать с пробниками, но придерживайтесь проверенных схем сочетаний.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Команда <strong>SPB-DSRemont</strong> поможет подобрать идеальную цветовую палитру для вашей квартиры в Санкт-Петербурге. Наши дизайнеры создадут профессиональный дизайн-проект с учетом трендов 2025 года, особенностей вашего пространства и личных предпочтений. Стоимость дизайн-проекта — от 3500 рублей за м².
            </p>

            <div className="text-center pt-12 border-t mt-12">
              <Button
                size="lg"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openContactDialog"))
                }
                className="text-lg px-10 py-6"
              >
                Заказать дизайн-проект
              </Button>
              <p className="text-muted-foreground mt-3 text-sm">
                Бесплатная консультация дизайнера в Санкт-Петербурге
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default ColorSchemes;