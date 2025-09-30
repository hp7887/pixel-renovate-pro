import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Политика конфиденциальности
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <p className="mb-4">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах 
                (далее — Пользователи), использующих сайт DigitalStroy и его сервисы.
              </p>
              <p>
                Используя сайт DigitalStroy, вы соглашаетесь с условиями данной Политики конфиденциальности. 
                Если вы не согласны с условиями, пожалуйста, не используйте наш сайт.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Собираемая информация</h2>
              <p className="mb-4">Мы можем собирать следующую информацию:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Имя и фамилия</li>
                <li>Контактная информация (телефон, email)</li>
                <li>Адрес объекта ремонта</li>
                <li>Информация о просмотренных страницах и действиях на сайте</li>
                <li>IP-адрес и данные браузера</li>
                <li>Информация о взаимодействии с нашим мобильным приложением</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Использование информации</h2>
              <p className="mb-4">Собранная информация используется для:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Обработки заявок и предоставления услуг</li>
                <li>Улучшения качества обслуживания</li>
                <li>Отправки уведомлений о ходе выполнения работ</li>
                <li>Маркетинговых коммуникаций (при наличии согласия)</li>
                <li>Анализа использования сайта и приложения</li>
                <li>Защиты от мошенничества</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Защита информации</h2>
              <p>
                Мы применяем организационные и технические меры для защиты вашей персональной информации 
                от несанкционированного доступа, изменения, раскрытия или уничтожения. Все данные передаются 
                по защищенным каналам связи с использованием SSL-шифрования.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Передача данных третьим лицам</h2>
              <p className="mb-4">
                Мы не продаем и не передаем вашу персональную информацию третьим лицам, за исключением следующих случаев:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>С вашего явного согласия</li>
                <li>Для выполнения договорных обязательств (например, доставка материалов)</li>
                <li>По требованию закона или государственных органов</li>
                <li>Партнерам, помогающим нам предоставлять услуги (при соблюдении конфиденциальности)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Файлы Cookie</h2>
              <p>
                Наш сайт использует файлы cookie для улучшения пользовательского опыта. Cookie — это небольшие 
                текстовые файлы, которые сохраняются на вашем устройстве. Вы можете настроить свой браузер 
                для отказа от cookie, однако это может ограничить функциональность сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Ваши права</h2>
              <p className="mb-4">Вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получить информацию о ваших персональных данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
                <li>Подать жалобу в надзорный орган</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Изменения в политике</h2>
              <p>
                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
                Актуальная версия всегда доступна на данной странице. Существенные изменения будут 
                сообщены дополнительно.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">9. Контакты</h2>
              <p className="mb-2">
                По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
              </p>
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

export default Privacy;