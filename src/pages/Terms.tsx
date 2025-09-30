import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Условия использования - DigitalSTROY</title>
        <meta name="description" content="Условия использования сайта компании DigitalSTROY. Правила и положения для пользователей сайта." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://digitalstroy.ru/terms" />
      </Helmet>
      <Header />
      
      <section className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Пользовательское соглашение
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Общие условия</h2>
              <p className="mb-4">
                Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между 
                DigitalStroy (далее — Исполнитель) и пользователями сайта (далее — Заказчик).
              </p>
              <p>
                Используя сайт и сервисы DigitalStroy, вы принимаете условия данного Соглашения в полном объеме. 
                Если вы не согласны с условиями, пожалуйста, не используйте наши услуги.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Предмет соглашения</h2>
              <p>
                Исполнитель предоставляет Заказчику услуги по ремонту и отделке помещений, дизайну интерьера 
                и сопутствующие услуги. Конкретные условия оказания услуг определяются в индивидуальном договоре.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Порядок оказания услуг</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Заказчик оставляет заявку через сайт, телефон или мессенджеры</li>
                <li>Исполнитель связывается с Заказчиком для уточнения деталей</li>
                <li>Проводится выезд специалиста на объект для замеров и консультации</li>
                <li>Составляется смета и график работ</li>
                <li>Подписывается договор на оказание услуг</li>
                <li>Выполняются работы согласно утвержденному графику</li>
                <li>Заказчик принимает работу и подписывает акты выполненных работ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Права и обязанности Исполнителя</h2>
              <p className="mb-4 font-semibold">Исполнитель обязан:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Выполнять работы качественно и в установленные сроки</li>
                <li>Использовать качественные материалы, согласованные с Заказчиком</li>
                <li>Обеспечить доступ к системе онлайн-мониторинга работ</li>
                <li>Предоставить гарантию на выполненные работы</li>
                <li>Информировать Заказчика о ходе выполнения работ</li>
              </ul>
              <p className="mb-4 font-semibold">Исполнитель имеет право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Привлекать субподрядчиков для выполнения работ</li>
                <li>Приостановить работы при нарушении Заказчиком условий договора</li>
                <li>Требовать доступ к объекту в согласованное время</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Права и обязанности Заказчика</h2>
              <p className="mb-4 font-semibold">Заказчик обязан:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Своевременно оплачивать работы согласно договору</li>
                <li>Обеспечить доступ к объекту в согласованное время</li>
                <li>Предоставить техническую документацию на объект</li>
                <li>Принимать выполненные работы в установленные сроки</li>
              </ul>
              <p className="mb-4 font-semibold">Заказчик имеет право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Контролировать ход выполнения работ через мобильное приложение</li>
                <li>Требовать устранения недостатков в гарантийный период</li>
                <li>Получать консультации по вопросам эксплуатации</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Стоимость и порядок оплаты</h2>
              <p className="mb-4">
                Стоимость работ определяется в смете и фиксируется в договоре. Оплата производится поэтапно 
                после подписания актов выполненных работ. Конкретный порядок оплаты устанавливается в договоре.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Гарантии</h2>
              <p>
                Исполнитель предоставляет гарантию на выполненные работы сроком 5 лет с момента подписания 
                итогового акта. Гарантия распространяется на дефекты, возникшие по вине Исполнителя при 
                условии соблюдения Заказчиком правил эксплуатации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Ответственность сторон</h2>
              <p className="mb-4">
                За неисполнение или ненадлежащее исполнение обязательств стороны несут ответственность 
                в соответствии с действующим законодательством РФ и условиями договора.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">9. Форс-мажор</h2>
              <p>
                Стороны освобождаются от ответственности за неисполнение обязательств, вызванное 
                обстоятельствами непреодолимой силы (форс-мажор), возникшими после заключения договора.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">10. Разрешение споров</h2>
              <p>
                Все споры решаются путем переговоров. При невозможности достижения соглашения спор 
                передается на рассмотрение в суд по месту нахождения Исполнителя.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">11. Контакты</h2>
              <p className="mb-2">Для связи с нами используйте:</p>
              <p className="mb-1">Email: info@remont-spb.ru</p>
              <p className="mb-1">Телефон: 8 915 220-55-56</p>
              <p className="mt-4 text-sm text-gray-600">Дата последнего обновления: 01.01.2024</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;