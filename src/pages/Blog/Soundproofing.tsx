import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogSoundproofingHero from "@/assets/blog-soundproofing-hero.jpg";
import blogAcousticInstallation from "@/assets/blog-acoustic-installation.jpg";
import blogSoundproofWindows from "@/assets/blog-soundproof-windows.jpg";

const Soundproofing = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>
          Звукоизоляция квартиры в СПб 2025 | Шумоизоляция стен, потолка, пола | Цены от 2500₽/м² | SPB-DSRemont
        </title>
        <meta
          name="description"
          content="Профессиональная звукоизоляция квартиры в Санкт-Петербурге: современные материалы, эффективные решения для стен, потолка, пола. Снижение шума до 65 дБ. Цены от 2500₽/м². Гарантия результата. Бесплатный замер."
        />
        <meta
          name="keywords"
          content="звукоизоляция квартиры СПб, шумоизоляция стен, звукоизоляция потолка, изоляция пола от шума, акустические панели, шумоизоляция от соседей, стоимость звукоизоляции, материалы для шумоизоляции"
        />
        <link
          rel="canonical"
          href="https://spb-dsremont.ru/blog/zvukoizolyaciya-kvartiry"
        />
        <meta property="og:title" content="Звукоизоляция квартиры в СПб 2025 | SPB-DSRemont" />
        <meta property="og:description" content="Эффективная звукоизоляция квартиры: снижение шума до 65 дБ. Современные материалы. От 2500₽/м² в СПб." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/zvukoizolyaciya-kvartiry" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Звукоизоляция квартиры: полное руководство 2025",
            "description": "Профессиональный гид по звукоизоляции квартиры: материалы, технологии, стоимость работ в Санкт-Петербурге",
            "datePublished": "2025-03-01",
            "dateModified": "2025-03-01",
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
          src={blogSoundproofingHero}
          alt="Установка звукоизоляционных панелей на стену квартиры — профессиональный монтаж"
          className="w-full h-[450px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Звукоизоляция квартиры
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl">
            Эффективная защита от шума соседей и уличного шума
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
              Обновлено: 1 марта 2025
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              Шум от соседей, уличное движение, работающие коммунальные системы — все это может серьезно снизить комфорт жизни в квартире. В этом руководстве мы подробно расскажем о современных методах звукоизоляции, материалах и стоимости работ в Санкт-Петербурге.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Типы шума в квартире
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Прежде чем начинать звукоизоляцию, важно понимать, с каким типом шума вы боретесь. От этого зависит выбор материалов и технологии.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Основные типы шума:</strong>
            </p>
            <ul className="space-y-3 text-foreground/80 mb-6 list-disc pl-6">
              <li>
                <strong>Воздушный шум:</strong> Разговоры, музыка, звуки телевизора, лай собак. Передается через воздух и проникает через стены, двери, окна. Частота 125-4000 Гц.
              </li>
              <li>
                <strong>Ударный шум:</strong> Шаги, падение предметов, передвижение мебели. Передается через конструкции здания (стены, перекрытия). Самый сложный для изоляции. Частота 31-500 Гц.
              </li>
              <li>
                <strong>Структурный шум:</strong> Работа лифта, вентиляции, труб водоснабжения. Распространяется по всему зданию через несущие конструкции.
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Нормативы шума:</strong> По СанПиН допустимый уровень шума в жилых помещениях днем — не более 40 дБ, ночью — 30 дБ. Шум от соседей часто достигает 50-70 дБ. Качественная звукоизоляция может снизить шум на 40-65 дБ.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Звукоизоляция стен
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Стены — основной источник проникновения воздушного шума от соседей. Существует два подхода: каркасная и бескаркасная звукоизоляция.
            </p>

            <LazyImage
              src={blogAcousticInstallation}
              alt="Монтаж акустических панелей на стену — современные звукоизоляционные материалы"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />

            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Каркасная звукоизоляция стен:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Металлический каркас на виброподвесах (отделяет звукоизоляцию от стены)</li>
              <li>Акустическая минеральная вата плотностью 40-50 кг/м³ (100 мм)</li>
              <li>Два слоя гипсокартона с вибродемпфирующей прокладкой между ними</li>
              <li><strong>Эффективность:</strong> Снижение шума на 50-60 дБ</li>
              <li><strong>Толщина конструкции:</strong> 120-130 мм</li>
              <li><strong>Стоимость:</strong> 3500-4500₽/м² с материалами и работой</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Бескаркасная звукоизоляция стен (панельная):</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Специальные звукоизоляционные панели (ЗИПС, Isotex, Soundguard)</li>
              <li>Крепятся к стене через виброузлы (без жесткого крепления)</li>
              <li><strong>Эффективность:</strong> Снижение шума на 45-55 дБ</li>
              <li><strong>Толщина конструкции:</strong> 40-70 мм (экономит пространство)</li>
              <li><strong>Стоимость:</strong> 4500-6000₽/м² с материалами и работой</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Важно:</strong> Просто добавление звукоизоляционного материала к стене без виброразвязки даст минимальный эффект (5-10 дБ). Обязательно нужны виброподвесы или специальные узлы крепления.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Звукоизоляция потолка
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Потолок — самая проблемная зона, так как через него передается ударный шум (шаги соседей сверху). Здесь важна комплексная изоляция.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Система "плавающий потолок":</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Каркас на виброподвесах (обязательно, иначе шум будет передаваться через крепления)</li>
              <li>Акустическая минеральная вата 100 мм в два слоя</li>
              <li>Два слоя гипсокартона с звукоизоляционной мембраной между ними</li>
              <li>Звукоизоляционный герметик по периметру (исключает звуковые мостики)</li>
              <li><strong>Эффективность:</strong> Снижение воздушного шума на 55-65 дБ, ударного — на 35-45 дБ</li>
              <li><strong>Толщина конструкции:</strong> 140-150 мм</li>
              <li><strong>Стоимость:</strong> 4500-5500₽/м² с материалами и работой</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Натяжной акустический потолок:</strong> Специальная перфорированная ткань с акустическим эффектом. Снижает отражение звука внутри помещения, но не защищает от соседей сверху. Подходит для улучшения акустики в комнате. Стоимость — от 1500₽/м².
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Звукоизоляция пола
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Изоляция пола защищает соседей снизу от вашего ударного шума и частично изолирует вас от их воздушного шума.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Система "плавающий пол":</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Виброизоляционная подложка по всей площади (толщина 10-20 мм, плотность от 100 кг/м³)</li>
              <li>Демпферная лента по периметру комнаты (отделяет стяжку от стен)</li>
              <li>Цементно-песчаная стяжка 50-70 мм (не связана со стенами)</li>
              <li>Финишное покрытие (ламинат, паркет, плитка)</li>
              <li><strong>Эффективность:</strong> Снижение ударного шума на 25-35 дБ</li>
              <li><strong>Толщина конструкции:</strong> 70-90 мм</li>
              <li><strong>Стоимость:</strong> 2500-3500₽/м² с материалами и работой</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Альтернатива:</strong> Сухая стяжка из гипсоволокнистых листов (ГВЛ) на виброизоляционной подложке. Легче и быстрее в монтаже, но дороже — от 3500₽/м².
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Звукоизоляция окон и дверей
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Окна и двери — слабые места в звукоизоляции. Через них проникает уличный шум и звуки из подъезда.
            </p>

            <LazyImage
              src={blogSoundproofWindows}
              alt="Звуконепроницаемые окна и двери — двойное остекление и уплотнители для шумоизоляции"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />

            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Звукоизоляция окон:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li><strong>Стеклопакет:</strong> Минимум двухкамерный с разной толщиной стекол (4-16-6-14-6 мм). Это нарушает резонанс и улучшает звукоизоляцию.</li>
              <li><strong>Триплекс:</strong> Многослойное стекло с виброизоляционной пленкой между слоями. Снижает шум еще на 5-7 дБ. Доплата — 3000-5000₽/м².</li>
              <li><strong>Уплотнители:</strong> Качественные резиновые уплотнители должны плотно прилегать по всему периметру. Меняйте каждые 5-7 лет.</li>
              <li><strong>Эффективность:</strong> Хорошее окно снижает уличный шум на 30-40 дБ</li>
              <li><strong>Стоимость:</strong> Окно с шумоизоляцией — от 18 000₽/м²</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Звукоизоляция дверей:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li><strong>Дверь:</strong> Полотно толщиной не менее 50 мм с наполнителем (минеральная вата или пенополиуретан)</li>
              <li><strong>Порог:</strong> Автоматический порог, опускающийся при закрытии двери (убирает щель внизу)</li>
              <li><strong>Уплотнители:</strong> По всему периметру коробки, в несколько контуров</li>
              <li><strong>Эффективность:</strong> Снижение шума на 25-35 дБ</li>
              <li><strong>Стоимость:</strong> Звукоизоляционная дверь с установкой — от 25 000₽</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Материалы для звукоизоляции
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              На рынке представлено множество звукоизоляционных материалов. Рассмотрим самые эффективные.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Звукопоглощающие материалы (заполнение каркаса):</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li><strong>Акустическая минеральная вата:</strong> Плотность 40-50 кг/м³, толщина 50-100 мм. Лучший вариант. 350-600₽/м².</li>
              <li><strong>Акустический поролон:</strong> Подходит только для студий, не для квартир. Малоэффективен против структурного шума.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Звукоотражающие материалы (облицовка):</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li><strong>Гипсокартон акустический:</strong> Повышенной плотности. 400-550₽/лист.</li>
              <li><strong>Звукоизоляционные мембраны:</strong> Тяжелые мембраны толщиной 2-4 мм. Размещаются между слоями ГКЛ. 600-900₽/м².</li>
              <li><strong>ЗИПС-панели:</strong> Готовые сэндвич-панели для бескаркасного монтажа. 2500-3500₽/м².</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Виброизоляционные материалы:</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li><strong>Виброподвесы:</strong> Для крепления каркаса к стенам/потолку без жесткой связи. 80-120₽/шт.</li>
              <li><strong>Виброизоляционная подложка под стяжку:</strong> Плотные рулоны или плиты. 400-800₽/м².</li>
              <li><strong>Демпферная лента:</strong> По периметру пола для разрыва звуковых мостиков. 150-300₽ за 25 м.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Стоимость звукоизоляции квартиры в СПб
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Итоговая стоимость зависит от площади, выбранной системы и материалов. Приведем расчет для типовой двухкомнатной квартиры 50 м².
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Вариант 1: Комплексная звукоизоляция одной комнаты (18 м²):</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Стены (40 м²): каркасная система — 140 000 - 180 000₽</li>
              <li>Потолок (18 м²): плавающий потолок — 81 000 - 99 000₽</li>
              <li>Пол (18 м²): плавающая стяжка — 45 000 - 63 000₽</li>
              <li>Дверь: звукоизоляционная — 25 000₽</li>
              <li><strong>Итого:</strong> 291 000 - 367 000₽</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Вариант 2: Звукоизоляция только проблемных зон (спальня):</strong>
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Стена смежная с соседями (12 м²): 42 000 - 54 000₽</li>
              <li>Потолок (18 м²): 81 000 - 99 000₽</li>
              <li><strong>Итого:</strong> 123 000 - 153 000₽</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Срок работ:</strong> Звукоизоляция одной комнаты (стены + потолок + пол) занимает 10-15 рабочих дней. Полная квартира 50 м² — 3-5 недель.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">
              Заключение
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Качественная звукоизоляция квартиры — это инвестиция в ваш комфорт и здоровье. Правильно выполненная система может снизить шум на 40-65 дБ, что превратит вашу квартиру в тихий оазис даже в центре шумного города.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Команда <strong>SPB-DSRemont</strong> выполняет профессиональную звукоизоляцию квартир в Санкт-Петербурге с 2018 года. Мы используем только проверенные материалы, соблюдаем технологию монтажа и даем гарантию на снижение шума. Стоимость работ — от 2500 рублей за м² с гарантией результата.
            </p>

            <div className="text-center pt-12 border-t mt-12">
              <Button
                size="lg"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openContactDialog"))
                }
                className="text-lg px-10 py-6"
              >
                Заказать звукоизоляцию
              </Button>
              <p className="text-muted-foreground mt-3 text-sm">
                Бесплатный замер и консультация в Санкт-Петербурге
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default Soundproofing;