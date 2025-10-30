import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogContractorMeeting from "@/assets/blog-contractor-meeting.jpg";
import blogContractorContract from "@/assets/blog-contractor-contract.jpg";
import blogContractorTeam from "@/assets/blog-contractor-team.jpg";

const ChoosingContractor = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Как выбрать подрядчика для ремонта в СПб 2025 | Чек-лист, защита от мошенников | SPB-DSRemont</title>
        <meta name="description" content="Полный гид по выбору подрядчика для ремонта квартиры в Санкт-Петербурге: проверка документов, договор, красные флаги мошенничества, чек-лист из 15 пунктов. Защитите себя от недобросовестных бригад." />
        <meta name="keywords" content="выбор подрядчика СПб, как выбрать бригаду для ремонта, договор на ремонт квартиры, мошенники в ремонте, проверка подрядчика, ремонт квартир под ключ СПб" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/kak-vybrat-podryadchika" />
      </Helmet>

      <Header />

      <section className="relative overflow-hidden">
        <LazyImage src={blogContractorMeeting} alt="Встреча с подрядчиком — обсуждение проекта ремонта" className="w-full h-[450px] object-cover brightness-75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Как выбрать подрядчика для ремонта</h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl">Чек-лист и защита от мошенничества</p>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />Вернуться к статьям
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-6">Обновлено: 12 марта 2025</p>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              Выбор подрядчика — это один из самых важных и рискованных этапов ремонта. По статистике, более 40% заказчиков сталкиваются с недобросовестными исполнителями: срыв сроков, некачественная работа, исчезновение с деньгами. В этом руководстве мы расскажем, как защитить себя и выбрать надежного подрядчика в Санкт-Петербурге.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Где искать подрядчика</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Способ поиска подрядчика влияет на риски. Рассмотрим плюсы и минусы каждого варианта.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Способы поиска подрядчика:</strong></p>
            <ul className="space-y-3 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Рекомендации знакомых:</strong> Самый надежный способ. Вы видите реальный результат работы. Но важно, чтобы ремонт был похож по масштабу на ваш.</li>
              <li><strong>Строительные компании с офисом:</strong> Более надежны, чем частные бригады. Есть юридическое лицо, офис, гарантии. Но дороже на 20-30%.</li>
              <li><strong>Авито, Юла:</strong> Огромный выбор, низкие цены. Но высокий риск нарваться на мошенников или непрофессионалов. Требует тщательной проверки.</li>
              <li><strong>Profi.ru, Ремонтник.ру:</strong> Есть рейтинги и отзывы. Более безопасно, чем обычные объявления. Но отзывы могут быть накручены.</li>
              <li><strong>Строительные форумы и группы ВК:</strong> Можно найти проверенных мастеров. Изучайте репутацию, смотрите портфолио.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Красный флаг №1:</strong> Подрядчик настаивает на предоплате 100% или более 50% до начала работ. Честные компании берут аванс 30-40%.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Чек-лист проверки подрядчика (15 пунктов)</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Перед тем как подписать договор, проверьте подрядчика по этому списку. Каждый пункт снижает риск проблем.
            </p>

            <LazyImage src={blogContractorContract} alt="Подписание договора на ремонт — юридическая защита заказчика" className="w-full h-[400px] object-cover rounded-lg my-8" />

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>1. Наличие юридического лица (ИП или ООО)</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Попросите ИНН и ОГРН. Проверьте в реестре ФНС (сайт nalog.gov.ru). Убедитесь, что компания не в процессе ликвидации. ИП/ООО несет юридическую ответственность. С физлицом заключать договор рискованно — никаких гарантий.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>2. Наличие офиса (постоянного адреса)</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Компании с офисом более надежны. Приезжайте туда лично, посмотрите на обстановку. Если офиса нет, а встречи только на объектах — это повод насторожиться.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>3. Опыт работы (минимум 3 года)</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Проверьте, когда зарегистрировано ИП/ООО. Молодые компании (менее года) — это риск. Они могут закрыться в любой момент. Спросите, сколько объектов завершили за последний год.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>4. Портфолио с фото «до» и «после»</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Попросите показать реальные объекты. Фотографии должны быть с геолокацией или видео с прогулкой по объекту. Красивые картинки из интернета легко скачать.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>5. Реальные отзывы</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Ищите отзывы на независимых площадках: Яндекс.Карты, 2ГИС, Google Maps. Отзывы на сайте подрядчика могут быть фальшивыми. Обращайте внимание на негативные отзывы — как компания на них реагирует.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>6. Контакты клиентов для обратной связи</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Попросите телефоны 2-3 клиентов, которые завершили ремонт недавно. Позвоните им, спросите о качестве работ, соблюдении сроков, бюджете. Если подрядчик отказывается дать контакты — это плохой знак.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>7. Возможность посещения действующих объектов</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Попросите показать объект, где сейчас идет ремонт. Оцените качество работ, порядок на объекте, профессионализм бригады. Если подрядчик отказывается — у него могут быть проблемы.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>8. Наличие своей бригады (не субподряд)</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Уточните, будет ли работать собственная бригада компании или привлекут субподрядчика. Субподряд — это дополнительные риски по качеству и срокам. Компания-посредник не контролирует работу напрямую.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>9. Сертификаты и допуски (для сложных работ)</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Для электромонтажных работ, газификации, перепланировки требуются допуски СРО. Попросите показать документы. Работы без допуска — незаконны, гарантий ноль.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>10. Смета с детализацией по работам и материалам</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Смета должна быть подробной: каждый вид работ отдельно, материалы с брендами и артикулами, цена за единицу. Смета «Ремонт под ключ — 1 500 000₽» без детализации — это мошенничество.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>11. Договор подряда (не расписка!)</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Договор должен быть на бланке компании с печатью и подписью руководителя. В договоре обязательно: объем работ, сроки, стоимость, порядок оплаты, гарантии, ответственность за срыв сроков. Расписка «Получено 500 000₽ на ремонт» — не защищает вас юридически.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>12. Гарантия на работы (минимум 1 год)</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              По закону гарантия на строительные работы — минимум 5 лет. Но на практике дают 1-3 года. Гарантия должна быть прописана в договоре. Устные обещания не работают.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>13. График платежей (поэтапная оплата)</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Оптимальный вариант: аванс 30-40%, промежуточные платежи после завершения этапов, окончательный расчет после сдачи объекта. Никогда не платите 100% авансом!
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>14. Страхование ответственности</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Крупные компании страхуют свою ответственность на случай повреждения имущества заказчика или соседей. Попросите показать полис. Это редко, но большой плюс.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>15. Уборка и вывоз мусора включены в стоимость</strong></p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Уточните, входит ли в стоимость уборка объекта и вывоз строительного мусора. Иногда подрядчики «забывают» об этом, и заказчику приходится доплачивать отдельно (15 000 - 30 000₽).
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Красные флаги мошенников</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Эти признаки указывают на высокий риск мошенничества или непрофессионализма.
            </p>

            <LazyImage src={blogContractorTeam} alt="Профессиональная бригада за работой — качественный ремонт" className="w-full h-[400px] object-cover rounded-lg my-8" />

            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Опасные признаки:</strong></p>
            <ul className="space-y-3 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Требуют 100% предоплату:</strong> Честные подрядчики так не работают. Стандарт — 30-40% аванса.</li>
              <li><strong>Нет договора, только расписка:</strong> Это не защитит вас в суде. Требуйте полноценный договор подряда.</li>
              <li><strong>Слишком низкая цена (на 40-50% ниже рынка):</strong> Подрядчик либо использует дешевые материалы, либо исчезнет с авансом. Рыночная цена капремонта в СПб — 12 000 - 18 000₽/м².</li>
              <li><strong>Нет юридического лица (работают как физлицо):</strong> С физлицом невозможно заключить договор подряда. Только ИП или ООО.</li>
              <li><strong>Отказываются показывать объекты или давать контакты клиентов:</strong> Значит, скрывают проблемы.</li>
              <li><strong>Настаивают на устной договоренности без документов:</strong> «Зачем бумажки, мы же люди честные» — классическая фраза мошенников.</li>
              <li><strong>Смета «в общем» без детализации:</strong> Невозможно контролировать расходы. Потом появятся «непредвиденные работы».</li>
              <li><strong>Меняют телефоны и контакты в процессе работы:</strong> Готовятся исчезнуть с деньгами.</li>
              <li><strong>Нет своего инструмента и оборудования:</strong> Профессиональная бригада приходит со своим инструментом. Просьбы «купить перфоратор, он пригодится» — подозрительны.</li>
              <li><strong>Давление и спешка при заключении договора:</strong> «Нужно решить сегодня, завтра цена вырастет». Честные компании не давят.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Что должно быть в договоре подряда</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Договор подряда — это ваша юридическая защита. Он должен содержать все существенные условия.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Обязательные пункты договора:</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Полные реквизиты обеих сторон:</strong> Заказчик и подрядчик (ИП/ООО) с ИНН, адресом, телефоном.</li>
              <li><strong>Предмет договора:</strong> Подробное описание работ или отсылка к смете (которая прилагается к договору).</li>
              <li><strong>Стоимость работ:</strong> Общая сумма и разбивка по этапам.</li>
              <li><strong>Сроки выполнения:</strong> Дата начала и завершения работ. Штраф за просрочку (обычно 0.1-0.5% от суммы за каждый день).</li>
              <li><strong>Порядок оплаты:</strong> График платежей, реквизиты для оплаты, способ оплаты (наличные/безнал).</li>
              <li><strong>Качество материалов:</strong> Кто закупает материалы (подрядчик или заказчик), какие бренды используются.</li>
              <li><strong>Гарантийные обязательства:</strong> Срок гарантии на работы (минимум 1 год), условия гарантийного ремонта.</li>
              <li><strong>Порядок приемки работ:</strong> Как и когда подписывается акт выполненных работ.</li>
              <li><strong>Ответственность сторон:</strong> Штрафы за нарушение условий, порядок разрешения споров.</li>
              <li><strong>Форс-мажор:</strong> Условия, при которых стороны освобождаются от ответственности.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Важно:</strong> Читайте договор внимательно перед подписанием. Если есть сомнения, покажите юристу (консультация стоит 2000-3000₽, но может спасти от убытков в сотни тысяч).
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Как контролировать процесс ремонта</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Даже после подписания договора важно контролировать работу подрядчика.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Способы контроля:</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Регулярные визиты на объект:</strong> Приезжайте минимум раз в 2-3 дня. Проверяйте соответствие работ проекту.</li>
              <li><strong>Видеонаблюдение:</strong> Установите камеры с онлайн-доступом. Стоимость — от 5000₽. Это дисциплинирует бригаду.</li>
              <li><strong>Технический надзор:</strong> Наймите независимого специалиста для контроля (10 000 - 20 000₽). Он будет приезжать на ключевые этапы и проверять качество.</li>
              <li><strong>Проверка скрытых работ до закрытия:</strong> Электрика, сантехника, стяжка — все это потом спрячется. Проверьте и сфотографируйте до закрытия.</li>
              <li><strong>Актирование этапов:</strong> Подписывайте акт и платите только после завершения этапа, а не авансом за следующий.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Что делать, если возникли проблемы</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Даже с надежным подрядчиком могут возникнуть разногласия. Важно знать, как действовать.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6"><strong>Алгоритм действий:</strong></p>
            <ul className="space-y-2 text-foreground/80 mb-6 list-disc pl-6">
              <li><strong>Зафиксируйте проблему письменно:</strong> Составьте акт с описанием недостатков, сфотографируйте. Акт подписывают обе стороны.</li>
              <li><strong>Направьте претензию подрядчику:</strong> Письменная претензия с требованием устранить недостатки в срок (обычно 7-10 дней). Отправьте заказным письмом с описью.</li>
              <li><strong>Если не реагируют — обращайтесь в Роспотребнадзор:</strong> Подайте жалобу. Они проведут проверку и могут вынести предписание.</li>
              <li><strong>Судебное разбирательство:</strong> Если все остальное не помогло, подавайте иск в суд. Вам понадобится юрист (от 30 000₽), но есть шанс взыскать убытки и неустойку.</li>
              <li><strong>Независимая экспертиза:</strong> Закажите экспертизу качества работ (20 000 - 50 000₽). Заключение эксперта — весомое доказательство в суде.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Заключение</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Выбор подрядчика для ремонта — это не лотерея. Если проверить компанию по чек-листу, изучить договор и контролировать работу, риск нарваться на мошенников минимален. Не экономьте на этапе выбора — лучше потратить неделю на проверку, чем потом годами судиться.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Компания <strong>SPB-DSRemont</strong> работает с 2018 года, выполнила более 500 объектов в Санкт-Петербурге. У нас есть все: юридическое лицо, офис, портфолио, реальные отзывы. Мы предоставляем полный пакет документов, работаем по договору с гарантией 3 года. Приходите в офис, посмотрите на наши объекты, пообщайтесь с клиентами.
            </p>

            <div className="text-center pt-12 border-t mt-12">
              <Button size="lg" onClick={() => window.dispatchEvent(new CustomEvent("openContactDialog"))} className="text-lg px-10 py-6">
                Заказать ремонт с гарантией
              </Button>
              <p className="text-muted-foreground mt-3 text-sm">Бесплатная консультация и выезд замерщика в Санкт-Петербурге</p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default ChoosingContractor;