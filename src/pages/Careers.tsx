import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Careers = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Вакансии - Работа в строительной компании СПб | SPB-DSRemont</title>
        <meta name="description" content="Работа в строительной компании SPB-DSRemont: вакансии для отделочников, плиточников, электриков, сантехников. Стабильная работа, достойная оплата." />
        <meta name="keywords" content="вакансии отделочник СПб, работа плиточник, вакансии строители, работа прораб Санкт-Петербург" />
        <link rel="canonical" href="https://spb-dsremont.ru/careers" />
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Вакансии и карьера в SPB-DSRemont
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="text-center mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Мы постоянно растем и ищем профессионалов своего дела. Если вы цените качество работы, стабильность и достойную оплату — присоединяйтесь к нашей команде!
              </p>
            </section>

            <section className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Почему выбирают нас?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Стабильная работа</h3>
                    <p className="text-gray-700">Постоянный поток заказов круглый год</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Достойная оплата</h3>
                    <p className="text-gray-700">Конкурентная зарплата, еженедельные выплаты</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Официальное оформление</h3>
                    <p className="text-gray-700">Работа по договору с социальными гарантиями</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Профессиональный рост</h3>
                    <p className="text-gray-700">Обучение новым технологиям, карьерный рост</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Открытые вакансии</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Мастер-отделочник",
                    salary: "от 80 000 ₽",
                    requirements: ["Опыт работы от 2 лет", "Знание современных технологий", "Ответственность и пунктуальность"],
                    duties: ["Выполнение отделочных работ", "Контроль качества", "Соблюдение сроков"]
                  },
                  {
                    title: "Плиточник",
                    salary: "от 3 500 ₽/м²",
                    requirements: ["Опыт укладки плитки от 3 лет", "Работа с крупноформатом", "Наличие инструмента"],
                    duties: ["Укладка керамической плитки", "Укладка керамогранита", "Затирка швов"]
                  },
                  {
                    title: "Электрик",
                    salary: "от 70 000 ₽",
                    requirements: ["Группа допуска от 3", "Опыт работы от 2 лет", "Знание ПУЭ"],
                    duties: ["Монтаж электропроводки", "Установка электрооборудования", "Сборка щитов"]
                  },
                  {
                    title: "Сантехник",
                    salary: "от 65 000 ₽",
                    requirements: ["Опыт работы от 2 лет", "Знание систем водоснабжения", "Умение читать схемы"],
                    duties: ["Монтаж водопровода и канализации", "Установка сантехники", "Опрессовка систем"]
                  },
                  {
                    title: "Прораб",
                    salary: "от 100 000 ₽",
                    requirements: ["Опыт руководства от 3 лет", "Знание технологий", "Организаторские способности"],
                    duties: ["Контроль выполнения работ", "Координация бригад", "Закупка материалов"]
                  }
                ].map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-400 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="text-2xl font-bold text-cyan-600 mt-2 md:mt-0">{job.salary}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Требования:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-gray-700 flex items-start gap-2">
                              <span className="text-cyan-600 mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Обязанности:</h4>
                        <ul className="space-y-1">
                          {job.duties.map((duty, i) => (
                            <li key={i} className="text-gray-700 flex items-start gap-2">
                              <span className="text-cyan-600 mt-1">•</span>
                              <span>{duty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Как устроиться к нам?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Оставьте заявку</h3>
                    <p className="text-gray-700">Позвоните нам или оставьте заявку через форму обратной связи</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Собеседование</h3>
                    <p className="text-gray-700">Встреча с руководителем, обсуждение условий работы</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Пробный день</h3>
                    <p className="text-gray-700">Работа на объекте для оценки квалификации (оплачивается)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Оформление</h3>
                    <p className="text-gray-700">Подписание договора и начало работы</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Готовы присоединиться к нашей команде?</h3>
              <Button
                size="lg"
                onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
              >
                Откликнуться на вакансию
              </Button>
              <p className="text-gray-600 mt-4">Или позвоните нам: <a href="tel:+79152205556" className="text-cyan-600 font-semibold">8 915 220-55-56</a></p>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default Careers;
