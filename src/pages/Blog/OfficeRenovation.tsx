import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import blogOfficeWorkspace from "@/assets/blog-office-workspace.jpg";

const OfficeRenovation = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Ремонт офиса в квартире: создание продуктивного рабочего пространства | SPB-DSRemont</title>
        <meta name="description" content="Профессиональный гид по ремонту домашнего офиса: планировка, освещение, звукоизоляция, мебель. Создайте комфортное и продуктивное рабочее пространство дома." />
        <meta name="keywords" content="ремонт домашнего офиса, обустройство кабинета, рабочее место дома, дизайн офиса в квартире, эргономика рабочего места" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/remont-domashnego-ofisa" />
        
        <meta property="og:title" content="Ремонт офиса в квартире: создание продуктивного рабочего пространства" />
        <meta property="og:description" content="Профессиональный гид по ремонту домашнего офиса: планировка, освещение, звукоизоляция, мебель. Создайте комфортное и продуктивное рабочее пространство дома." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/remont-domashnego-ofisa" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://spb-dsremont.ru/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт офиса в квартире: создание продуктивного рабочего пространства" />
        <meta name="twitter:description" content="Профессиональный гид по ремонту домашнего офиса: планировка, освещение, звукоизоляция, мебель." />
        <meta name="twitter:image" content="https://spb-dsremont.ru/og-image.jpg" />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Ремонт домашнего офиса: как создать продуктивное рабочее пространство
              </h1>
              
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                <span>25 февраля 2025</span>
                <span>•</span>
                <span>14 минут чтения</span>
              </div>
              
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <LazyImage
                  src={blogOfficeWorkspace}
                  alt="Современный домашний офис после ремонта"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                С развитием удаленной работы создание комфортного и функционального домашнего офиса стало актуальным как никогда. Правильно спланированный ремонт рабочего пространства не только повышает продуктивность, но и помогает сохранить здоровье при многочасовой работе за компьютером.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Выбор помещения и планировка</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Оптимальное расположение офиса</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Идеально выделить отдельную комнату для офиса, но если такой возможности нет, можно организовать рабочее место в:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Спальне</strong> — подойдет при соблюдении четкого зонирования</li>
                <li><strong>Гостиной</strong> — возможно при наличии ниши или возможности установить перегородку</li>
                <li><strong>На балконе</strong> — после качественного утепления и отделки</li>
                <li><strong>В кладовой</strong> — если позволяют размеры и есть окно</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Минимальные требования к пространству</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Площадь рабочей зоны — минимум 4-5 кв.м</li>
                <li>Расстояние от глаз до монитора — 50-70 см</li>
                <li>Глубина стола — не менее 60 см, оптимально 80 см</li>
                <li>Пространство для кресла — около 1 м от стола</li>
                <li>Место для хранения документов и оборудования</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Освещение — ключ к продуктивности</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Естественный свет</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Рабочий стол лучше расположить перпендикулярно окну, чтобы свет падал слева (для правшей) или справа (для левшей). Это предотвращает блики на экране и обеспечивает равномерное освещение рабочей поверхности.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Искусственное освещение</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Общее освещение</strong> — потолочные светильники мощностью 150-200 Вт</li>
                <li><strong>Рабочее освещение</strong> — настольная лампа с регулировкой яркости</li>
                <li><strong>Акцентное освещение</strong> — подсветка полок, стеллажей</li>
                <li><strong>Температура света</strong> — 4000-5000K (нейтральный белый)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Звукоизоляция и акустика</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Для концентрации на работе важно минимизировать посторонние шумы:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Акустические панели</strong> на стенах и потолке</li>
                <li><strong>Плотные шторы</strong> или жалюзи на окнах</li>
                <li><strong>Звукоизоляция дверей</strong> — уплотнители, порожки</li>
                <li><strong>Ковровое покрытие</strong> или толстый ковер для поглощения звука</li>
                <li><strong>Мягкая мебель</strong> — помогает улучшить акустику помещения</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Отделочные материалы</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Стены</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Краска</strong> — матовая, в спокойных тонах (серый, бежевый, светло-зеленый)</li>
                <li><strong>Обои</strong> — однотонные или с ненавязчивым геометрическим рисунком</li>
                <li><strong>Декоративная штукатурка</strong> — создает глубину и текстуру</li>
                <li><strong>Деревянные панели</strong> — для акцентной стены</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Пол</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Ламинат</strong> — практичный и долговечный</li>
                <li><strong>Паркетная доска</strong> — создает теплую атмосферу</li>
                <li><strong>Ковролин</strong> — улучшает звукоизоляцию</li>
                <li><strong>Наливной пол</strong> — современное решение</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Электрика и коммуникации</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Розетки и выключатели</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Минимум 4-6 розеток в рабочей зоне</li>
                <li>USB-розетки для зарядки гаджетов</li>
                <li>Розетки с заземлением для компьютерной техники</li>
                <li>Сетевые фильтры и стабилизаторы напряжения</li>
                <li>Скрытая прокладка кабелей или кабель-каналы</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Интернет-соединение</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Проводное подключение — минимум 100 Мбит/с</li>
                <li>Точка доступа Wi-Fi в рабочей зоне</li>
                <li>Резервный канал связи (мобильный интернет)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Эргономика и мебель</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Рабочий стол</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Высота стола — 72-75 см (или регулируемая)</li>
                <li>Ширина — минимум 120 см, оптимально 140-160 см</li>
                <li>Возможность регулировки высоты (стол-трансформер)</li>
                <li>Кабель-менеджмент для проводов</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Кресло</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Регулировка высоты сиденья</li>
                <li>Поясничная поддержка</li>
                <li>Регулируемые подлокотники</li>
                <li>Качественные ролики для вашего типа покрытия</li>
                <li>Дышащая обивка</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Климат и вентиляция</h2>
              
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Температура</strong> — 20-22°C оптимальная для работы</li>
                <li><strong>Влажность</strong> — 40-60% (используйте увлажнитель при необходимости)</li>
                <li><strong>Вентиляция</strong> — приточно-вытяжная система или регулярное проветривание</li>
                <li><strong>Кондиционер</strong> — с функцией очистки воздуха</li>
                <li><strong>Растения</strong> — улучшают качество воздуха</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Цветовая гамма и психология</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Цвета влияют на настроение и производительность:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Синий</strong> — способствует концентрации и спокойствию</li>
                <li><strong>Зеленый</strong> — снижает усталость глаз, расслабляет</li>
                <li><strong>Серый</strong> — нейтральный фон, не отвлекает</li>
                <li><strong>Бежевый</strong> — создает теплую атмосферу</li>
                <li><strong>Белый</strong> — визуально расширяет пространство</li>
                <li><strong>Акценты</strong> — оранжевый или желтый стимулируют креативность</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Системы хранения</h2>
              
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Открытые полки</strong> — для часто используемых предметов</li>
                <li><strong>Закрытые шкафы</strong> — для документов и оргтехники</li>
                <li><strong>Выдвижные ящики</strong> — для канцелярии и мелочей</li>
                <li><strong>Вертикальное хранение</strong> — экономит место</li>
                <li><strong>Органайзеры</strong> — для рабочего стола</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Технологии умного офиса</h2>
              
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Умное освещение</strong> — автоматическая регулировка яркости</li>
                <li><strong>Климат-контроль</strong> — управление температурой</li>
                <li><strong>Умные розетки</strong> — контроль энергопотребления</li>
                <li><strong>Датчики присутствия</strong> — автоматическое включение света</li>
                <li><strong>Система управления</strong> — единая панель управления всеми устройствами</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Этапы ремонта домашнего офиса</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Подготовительный этап (1-2 дня)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Освобождение помещения</li>
                  <li>Замеры и составление плана</li>
                  <li>Закупка материалов</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Черновые работы (3-5 дней)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Демонтаж старых покрытий</li>
                  <li>Прокладка электрики и интернет-кабелей</li>
                  <li>Звукоизоляция стен</li>
                  <li>Выравнивание поверхностей</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Чистовая отделка (5-7 дней)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Укладка напольного покрытия</li>
                  <li>Покраска стен или поклейка обоев</li>
                  <li>Установка розеток и выключателей</li>
                  <li>Монтаж освещения</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">4. Финальный этап (2-3 дня)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Установка мебели</li>
                  <li>Подключение техники</li>
                  <li>Организация систем хранения</li>
                  <li>Декорирование пространства</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Бюджет на ремонт</h2>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Эконом-вариант (от 80 000 ₽)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Покраска стен</li>
                  <li>Ламинат 32 класса</li>
                  <li>Базовая электрика</li>
                  <li>Простая мебель</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Стандарт (от 150 000 ₽)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Качественные обои или краска</li>
                  <li>Ламинат 33 класса или паркетная доска</li>
                  <li>Звукоизоляция</li>
                  <li>Эргономичная мебель</li>
                  <li>Многоуровневое освещение</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Премиум (от 300 000 ₽)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Дизайнерская отделка</li>
                  <li>Паркет или инженерная доска</li>
                  <li>Профессиональная звукоизоляция</li>
                  <li>Мебель на заказ</li>
                  <li>Умные системы управления</li>
                  <li>Климат-контроль</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Типичные ошибки при ремонте офиса</h2>
              
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Недостаток розеток</strong> — планируйте с запасом</li>
                <li><strong>Плохое освещение</strong> — экономия на свете снижает продуктивность</li>
                <li><strong>Неэргономичная мебель</strong> — приводит к проблемам со здоровьем</li>
                <li><strong>Отсутствие звукоизоляции</strong> — мешает концентрации</li>
                <li><strong>Неправильная цветовая гамма</strong> — влияет на настроение</li>
                <li><strong>Недостаток хранения</strong> — создает беспорядок</li>
              </ul>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Качественный ремонт домашнего офиса — это инвестиция в вашу продуктивность и здоровье. Правильно организованное рабочее пространство повышает эффективность работы, снижает усталость и создает комфортные условия для профессиональной деятельности.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Не экономьте на эргономике, освещении и звукоизоляции — эти элементы напрямую влияют на качество вашей работы и самочувствие. Создайте пространство, в котором вам будет приятно и удобно работать каждый день.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Готовы создать идеальный домашний офис?
                </h3>
                <p className="text-gray-700 mb-6">
                  Наши специалисты помогут спроектировать и реализовать функциональное рабочее пространство с учетом всех требований эргономики и ваших индивидуальных потребностей.
                </p>
                <Button 
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="text-lg px-8"
                >
                  Заказать консультацию
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

export default OfficeRenovation;