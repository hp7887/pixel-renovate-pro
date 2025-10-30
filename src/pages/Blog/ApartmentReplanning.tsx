import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogReplanningBlueprint from "@/assets/blog-replanning-blueprint.jpg";
import blogReplanningOpenSpace from "@/assets/blog-replanning-open-space.jpg";
import blogReplanningDocuments from "@/assets/blog-replanning-documents.jpg";

const ApartmentReplanning = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Перепланировка квартиры в СПб 2025 | Что можно, что нельзя, согласование | SPB-DSRemont</title>
        <meta name="description" content="Полный гид по перепланировке квартиры в Санкт-Петербурге: законные изменения, запрещенные действия, согласование в Жилинспекции. Стоимость проекта от 25000₽. Помощь в узаконивании." />
        <meta name="keywords" content="перепланировка квартиры СПб, согласование перепланировки, что можно при перепланировке, снос стен, объединение комнат, узаконить перепланировку, проект перепланировки СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/pereplanirovka-kvartiry" />
      </Helmet>

      <Header />

      <section className="relative overflow-hidden">
        <LazyImage src={blogReplanningBlueprint} alt="План перепланировки квартиры — архитектурный чертеж с изменениями" className="w-full h-[450px] object-cover brightness-75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Перепланировка квартиры</h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl">Что можно, что нельзя, как согласовать законно</p>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />Вернуться к статьям
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-6">Обновлено: 10 марта 2025</p>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              Перепланировка квартиры — это изменение конфигурации помещений, которое требует согласования с контролирующими органами. В этом руководстве мы расскажем, какие изменения можно делать законно, что категорически запрещено, и как правильно оформить перепланировку в Санкт-Петербурге в 2025 году.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Что такое перепланировка и когда она нужна</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Перепланировка — это изменение конфигурации жилого помещения, требующее внесения изменений в технический паспорт квартиры. Не каждое изменение является перепланировкой.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Что НЕ является перепланировкой (не требует согласования):</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li>Косметический ремонт (обои, краска, напольные покрытия)</li>
              <li>Замена сантехники на аналогичную</li>
              <li>Замена окон и дверей без изменения проемов</li>
              <li>Установка встроенных шкафов и перегородок высотой менее 150 см</li>
              <li>Остекление балкона (в большинстве случаев)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Что является перепланировкой (требует согласования):</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li>Снос, перенос или установка новых перегородок</li>
              <li>Изменение размеров или расположения дверных проемов</li>
              <li>Объединение или разделение комнат</li>
              <li>Расширение санузла за счет коридора</li>
              <li>Перенос кухни, ванной, санузла</li>
              <li>Устройство новых или закрытие существующих проемов в несущих стенах</li>
              <li>Объединение балкона с комнатой (присоединение)</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Что можно делать при перепланировке</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Законодательство разрешает многие виды перепланировки, если они не угрожают безопасности здания и соседей.
            </p>

            <LazyImage src={blogReplanningOpenSpace} alt="Открытое пространство после перепланировки — объединенная кухня-гостиная" className="w-full h-[400px] object-cover rounded-lg my-8" />

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Разрешенные виды перепланировки:</strong></p>
            <ul className="space-y-3 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Снос ненесущих перегородок:</strong> Можно объединить комнаты, создать студию, убрать лишние стены. Требует проект перепланировки.</li>
              <li><strong>Установка новых перегородок:</strong> Разделить большую комнату на две, создать гардеробную, кабинет. Материал — гипсокартон, кирпич, пеноблоки.</li>
              <li><strong>Расширение санузла за счет коридора или кладовой:</strong> Можно увеличить ванную комнату, но нельзя размещать санузел над жилыми комнатами соседей снизу.</li>
              <li><strong>Объединение санузла:</strong> Убрать перегородку между ванной и туалетом. Один из самых простых вариантов перепланировки.</li>
              <li><strong>Перенос дверных проемов:</strong> Изменить расположение входа в комнату. Старый проем должен быть заложен.</li>
              <li><strong>Устройство проема в несущей стене (с усилением):</strong> Для создания арки или прохода. Требует сложный проект с расчетом нагрузок и металлическое усиление.</li>
              <li><strong>Объединение балкона с комнатой (с сохранением порога):</strong> Можно убрать окно и балконную дверь, но подоконную часть и батарею на балконе нужно оставить. Полный снос подоконной части запрещен в большинстве домов.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Важно:</strong> Даже разрешенная перепланировка требует проекта и согласования в Жилищной инспекции Санкт-Петербурга до начала работ.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Что категорически нельзя делать</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Некоторые изменения запрещены законом, так как создают угрозу безопасности здания или ухудшают условия проживания соседей.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Запрещенные действия при перепланировке:</strong></p>
            <ul className="space-y-3 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Снос или штробление несущих стен без проекта и усиления:</strong> Может привести к обрушению здания. Штраф до 300 000₽ и принудительное восстановление.</li>
              <li><strong>Размещение санузла над жилыми комнатами соседей:</strong> Можно расширять санузел только за счет нежилых помещений (коридор, кладовая). На первом этаже это ограничение не действует.</li>
              <li><strong>Размещение кухни над жилыми комнатами:</strong> Аналогично санузлу. Перенести кухню можно только в нежилую зону.</li>
              <li><strong>Полный снос подоконной части при объединении балкона:</strong> В панельных домах подоконная часть — часть несущей конструкции. Ее снос ослабляет фасад.</li>
              <li><strong>Перенос радиаторов отопления на балкон/лоджию:</strong> Запрещено из-за нарушения теплового баланса дома.</li>
              <li><strong>Устройство теплого пола от общедомовой системы отопления:</strong> Нарушает гидравлический баланс. Можно только электрический теплый пол.</li>
              <li><strong>Увеличение площади кухни за счет жилых комнат:</strong> Можно наоборот — уменьшить кухню в пользу комнаты.</li>
              <li><strong>Перенос газовой плиты или счетчика газа:</strong> Требует проект газовой службы и очень сложное согласование. Проще заменить газ на электричество.</li>
              <li><strong>Устройство дополнительного входа в квартиру с общедомовой лестничной клетки:</strong> Запрещено в целях пожарной безопасности.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Штрафы за незаконную перепланировку:</strong> Физические лица — от 2000 до 2500₽, но главное — обязанность вернуть квартиру в исходное состояние за свой счет. При отказе квартиру могут продать с торгов.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Процесс согласования перепланировки в СПб</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Согласование перепланировки — это бюрократическая процедура, которая занимает 2-4 месяца. Рассмотрим пошаговый алгоритм.
            </p>

            <LazyImage src={blogReplanningDocuments} alt="Документы для согласования перепланировки — разрешения и проект" className="w-full h-[400px] object-cover rounded-lg my-8" />

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Шаг 1: Подготовка документов</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-4">Соберите пакет документов:</p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li>Правоустанавливающие документы (свидетельство о собственности или выписка из ЕГРН)</li>
              <li>Технический паспорт БТИ (не старше 1 года)</li>
              <li>Согласие всех собственников квартиры (нотариально заверенное)</li>
              <li>Поэтажный план и экспликация из БТИ</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Шаг 2: Разработка проекта перепланировки</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-4">Обратитесь в проектную организацию с допуском СРО. Проект включает:</p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>План квартиры до перепланировки</li>
              <li>План квартиры после перепланировки с указанием всех изменений</li>
              <li>Пояснительная записка</li>
              <li>Техническое заключение о возможности перепланировки</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Стоимость проекта:</strong> Простая перепланировка (снос перегородок) — 25 000 - 35 000₽. Сложная с затрагиванием несущих стен — 50 000 - 100 000₽. Срок разработки — 2-3 недели.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Шаг 3: Подача документов в Жилищную инспекцию</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-4">Подайте заявление и документы в Жилинспекцию СПб:</p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Лично в МФЦ «Мои документы»</li>
              <li>Через портал Госуслуги</li>
              <li>Почтой с описью вложения</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Срок рассмотрения — 45 рабочих дней. По итогам вы получите либо распоряжение о согласовании перепланировки, либо отказ с указанием причин.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Шаг 4: Выполнение ремонтных работ</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              После получения распоряжения можно начинать ремонт. Работы должны выполняться строго по утвержденному проекту. Любые отклонения потребуют нового согласования. Срок действия распоряжения — 1 год. Если не успеете, придется продлевать.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Шаг 5: Приемка выполненных работ</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-4">После завершения ремонта:</p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Вызовите представителя Жилинспекции для приемки работ</li>
              <li>Получите акт о завершенной перепланировке</li>
              <li>Обратитесь в БТИ для внесения изменений в технический паспорт</li>
              <li>Получите новый технический паспорт с обновленным планом</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              После этого перепланировка считается полностью узаконенной. Изменения автоматически попадут в ЕГРН.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Узаконивание уже сделанной перепланировки</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Если перепланировка уже выполнена без согласования, ее можно узаконить задним числом. Но это сложнее и дороже.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Процесс узаконивания:</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Закажите техническое заключение о безопасности и соответствии выполненной перепланировки нормам (15 000 - 40 000₽)</li>
              <li>Разработайте проект перепланировки по факту (проект выполненных работ) — 30 000 - 60 000₽</li>
              <li>Подайте документы в Жилинспекцию с заявлением об узаконивании</li>
              <li>Оплатите штраф 2000-2500₽ за самовольную перепланировку</li>
              <li>Дождитесь решения (45 дней)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Важно:</strong> Если перепланировка нарушает нормы (затронута несущая стена без усиления, санузел над жилой комнатой), узаконить не получится. Придется вернуть все как было.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Через суд:</strong> Если Жилинспекция отказала, можно попробовать узаконить через суд. Это дольше (6-12 месяцев) и дороже (юрист от 50 000₽), но иногда помогает.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Особенности перепланировки в разных типах домов</h2>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Панельные дома (типовые серии):</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li>Большинство внутренних стен — несущие. Сносить нельзя, можно только делать проемы с усилением.</li>
              <li>Подоконная часть при объединении балкона — несущая, сносить запрещено.</li>
              <li>Ограничений по перепланировке больше всего.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Монолитные дома:</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li>Несущие только колонны и наружные стены. Внутренние перегородки можно сносить свободно.</li>
              <li>Самый удобный тип для перепланировки.</li>
              <li>Можно создавать студии, менять конфигурацию комнат.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Кирпичные дома (старый фонд):</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li>Несущие стены толщиной от 380 мм. Перегородки — 120-250 мм.</li>
              <li>Много перепланировок уже сделано предыдущими владельцами без согласования.</li>
              <li>Сложности с получением техпаспорта из-за несоответствия плану.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Стоимость перепланировки в СПб</h2>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Полная стоимость складывается из:</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-4 list-disc pl-6">
              <li>Проект перепланировки: 25 000 - 100 000₽</li>
              <li>Техническое заключение: 15 000 - 40 000₽</li>
              <li>Госпошлина: бесплатно</li>
              <li>Новый технический паспорт БТИ: 3000 - 5000₽</li>
              <li>Строительные работы: зависит от объема (снос стены 12 см — 3000₽/м², возведение перегородки — 2500₽/м²)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Итого для типовой перепланировки (снос 1-2 перегородок):</strong> 80 000 - 150 000₽ за проект и согласование + стоимость ремонтных работ. Срок от начала до получения нового техпаспорта — 4-6 месяцев.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Заключение</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Перепланировка квартиры — это серьезное мероприятие, требующее соблюдения законодательства. Даже если вам кажется, что изменения незначительные, лучше согласовать их официально. Это защитит вас от проблем при продаже квартиры, оформлении ипотеки и от штрафов.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Команда <strong>SPB-DSRemont</strong> поможет с перепланировкой квартиры в Санкт-Петербурге: разработаем проект, согласуем в Жилинспекции, выполним ремонтные работы строго по проекту. Работаем с 2018 года, более 300 согласованных перепланировок. Гарантия юридической чистоты.
            </p>

            <div className="text-center pt-12 border-t mt-12">
              <Button size="lg" onClick={() => window.dispatchEvent(new CustomEvent("openContactDialog"))} className="text-lg px-10 py-6">
                Заказать согласование перепланировки
              </Button>
              <p className="text-muted-foreground mt-3 text-sm">Бесплатная консультация юриста в Санкт-Петербурге</p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default ApartmentReplanning;