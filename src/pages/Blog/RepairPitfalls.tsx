import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogRenovationPitfalls from "@/assets/blog-renovation-pitfalls.jpg";

const RepairPitfalls = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Подводные камни ремонта: чего ожидать и как подготовиться | SPB-DSRemont</title>
        <meta name="description" content="Скрытые проблемы при ремонте квартиры: от старой проводки до проблем с соседями. Как выявить риски заранее и избежать неприятных сюрпризов." />
        <meta name="keywords" content="подводные камни ремонта, скрытые проблемы ремонта, что учесть при ремонте, проблемы при ремонте квартиры" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/podvodnye-kamni-remonta" />
        
        <meta property="og:title" content="Подводные камни ремонта: чего ожидать и как подготовиться | SPB-DSRemont" />
        <meta property="og:description" content="Скрытые проблемы при ремонте квартиры: от старой проводки до проблем с соседями. Как выявить риски заранее и избежать неприятных сюрпризов." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/podvodnye-kamni-remonta" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blogRenovationPitfalls} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Подводные камни ремонта: чего ожидать и как подготовиться | SPB-DSRemont" />
        <meta name="twitter:description" content="Скрытые проблемы при ремонте квартиры: от старой проводки до проблем с соседями. Как выявить риски заранее и избежать неприятных сюрпризов." />
        <meta name="twitter:image" content={blogRenovationPitfalls} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Подводные камни ремонта: чего ожидать и как подготовиться",
            "datePublished": "2025-01-25",
            "author": {
              "@type": "Organization",
              "name": "SPB-DSRemont"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SPB-DSRemont",
              "logo": {
                "@type": "ImageObject",
                "url": "https://spb-dsremont.ru/logo.png"
              }
            },
            "image": blogRenovationPitfalls
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Вернуться к статьям
            </Link>
            
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-4">25 января 2025 • 9 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Подводные камни ремонта: чего ожидать и как подготовиться
              </h1>
            </div>
            
            <LazyImage
              src={blogRenovationPitfalls}
              alt="Профессиональная проверка квартиры перед ремонтом"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Ремонт квартиры часто преподносит неприятные сюрпризы. То, что казалось простым косметическим обновлением, может превратиться в капитальную переделку. Давайте разберем основные скрытые проблемы и научимся их предвидеть.
              </p>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Скрытые дефекты старых домов</h2>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-4 rounded-r-xl">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-orange-900">Старая электропроводка</h3>
                  </div>
                  <p className="text-orange-800 mb-3">
                    В домах советской постройки часто встречается алюминиевая проводка, которая не выдерживает нагрузку современных электроприборов. При снятии обоев провода могут рассыпаться в руках.
                  </p>
                  <p className="text-green-900 font-semibold mb-2">Как проверить:</p>
                  <p className="text-green-800">
                    До начала ремонта пригласите электрика. Он проверит состояние проводки, розеток, щитка. Замена проводки стоит 1500-2500 руб/м², но это вопрос безопасности.
                  </p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-4 rounded-r-xl">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-orange-900">Неровные стены и полы</h3>
                  </div>
                  <p className="text-orange-800 mb-3">
                    Перепады до 5-7 см на стенах — норма для старого жилфонда. Под обоями могут скрываться трещины, вздутия штукатурки.
                  </p>
                  <p className="text-green-900 font-semibold mb-2">Как проверить:</p>
                  <p className="text-green-800">
                    Используйте уровень и правило. Простукайте стены — глухой звук означает отслоение штукатурки. Возможно, потребуется полная переделка стен.
                  </p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-orange-900">Проблемы с трубами</h3>
                  </div>
                  <p className="text-orange-800 mb-3">
                    Старые чугунные и стальные трубы проржавели изнутри. При демонтаже может обнаружиться, что менять нужно не только в квартире, но и в стояке.
                  </p>
                  <p className="text-green-900 font-semibold mb-2">Как проверить:</p>
                  <p className="text-green-800">
                    Вызовите сантехника до ремонта. Замена стояка требует согласования с ЖЭК и соседями, это может затянуть сроки.
                  </p>
                </div>
              </section>
              
              <section className="mb-8 bg-gray-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Юридические и административные проблемы</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Незаконная перепланировка у соседей</h3>
                <p className="text-gray-700 mb-4">
                  При демонтаже стен может обнаружиться, что соседи сверху или снизу уже снесли несущие конструкции. Это опасно для всего дома.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Что делать:</strong> Если обнаружили нарушение, сообщите в жилищную инспекцию. Не начинайте свою перепланировку, пока не убедитесь в безопасности здания.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Согласование перепланировки</h3>
                <p className="text-gray-700 mb-4">
                  Объединение кухни и комнаты, перенос санузла, демонтаж подоконного блока — все это требует согласования в МВК (межведомственной комиссии).
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Сроки и стоимость:</strong> Согласование занимает 2-4 месяца и стоит 50-150 тыс. руб. Несогласованная перепланировка грозит штрафом до 350 тыс. руб. и предписанием вернуть все как было.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Проблемы с соседями</h2>
                
                <ul className="space-y-4 text-gray-700">
                  <li className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-900">Шум и график работ:</strong> По закону ремонт разрешен с 9:00 до 19:00 в будни и с 10:00 до 18:00 в выходные. Нарушение графика может привести к жалобам и штрафам (до 5000 руб.).
                  </li>
                  <li className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-900">Пыль и мусор:</strong> Предупредите соседей заранее. Вывозите мусор регулярно, не захламляйте подъезд. Это избавит от конфликтов.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-900">Риск затопления:</strong> Перед работами с водой предупредите соседей снизу. Лучше обменяться контактами на случай ЧП.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-900">Доступ к коммуникациям:</strong> Если стояки проходят через соседскую квартиру, придется договариваться о доступе. Иногда это требует компенсации за неудобства.
                  </li>
                </ul>
              </section>
              
              <section className="mb-8 bg-cyan-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Недобросовестные подрядчики</h2>
                
                <p className="text-gray-700 mb-4">
                  Наем неправильной бригады — одна из самых частых и дорогих ошибок.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Красные флаги:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Требуют 100% предоплату (нормально 30-50%)</li>
                  <li>Нет договора или договор на 1 странице без деталей</li>
                  <li>Отказываются предоставить контакты предыдущих заказчиков</li>
                  <li>Смета «на глаз» без детализации работ и материалов</li>
                  <li>Слишком низкая цена (ниже рынка на 30-40%)</li>
                  <li>Нет юрлица или ИП, работают «вчерную»</li>
                </ul>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Как защититься:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Составьте подробный договор с этапами работ и сроками</li>
                  <li>Оплачивайте по факту выполнения этапов</li>
                  <li>Проверяйте работу на каждом этапе (уровень, отвес, тестирование сантехники)</li>
                  <li>Зафиксируйте в договоре гарантийные обязательства (минимум 1 год)</li>
                  <li>Проверьте отзывы, портфолио, попросите контакты реальных клиентов</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Непредвиденные расходы</h2>
                
                <p className="text-gray-700 mb-4">
                  Даже при тщательном планировании бюджет может увеличиться на 20-40%. Основные причины:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-yellow-900 font-semibold mb-1">Скрытые дефекты</p>
                    <p className="text-yellow-800">Обнаружились проблемы, которые невозможно было выявить до демонтажа. Пример: гнилые балки под полом, грибок в стенах.</p>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-yellow-900 font-semibold mb-1">Изменение планов по ходу</p>
                    <p className="text-yellow-800">Увидели результат и решили улучшить. «Раз уж стены сняты, давайте еще и это переделаем». Такие решения дорого обходятся.</p>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-yellow-900 font-semibold mb-1">Недостаток материалов</p>
                    <p className="text-yellow-800">Всегда покупайте с запасом 10-15%. Докупить ту же партию плитки или обоев часто невозможно — оттенок будет отличаться.</p>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-yellow-900 font-semibold mb-1">Затягивание сроков</p>
                    <p className="text-yellow-800">Задержки увеличивают расходы на аренду жилья, хранение мебели. Каждый лишний месяц — это +30-50 тыс. руб.</p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Как подготовиться к неожиданностям</h2>
                
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li>
                    <strong>Заложите резерв 15-20% от бюджета</strong> на непредвиденные расходы.
                  </li>
                  <li>
                    <strong>Проведите техническую экспертизу</strong> перед началом работ. Это обойдется в 10-15 тыс. руб., но выявит скрытые проблемы.
                  </li>
                  <li>
                    <strong>Составьте детальный план</strong> с четкими этапами и сроками. Не начинайте следующий этап, пока не завершен предыдущий.
                  </li>
                  <li>
                    <strong>Контролируйте работу подрядчика</strong> на каждом этапе. Лучше раз проверить, чем потом переделывать.
                  </li>
                  <li>
                    <strong>Оформите страховку</strong> на время ремонта (от затопления, пожара). Стоит 5-10 тыс. руб., но может сэкономить сотни тысяч.
                  </li>
                  <li>
                    <strong>Получите все разрешения</strong> до начала работ, если планируете перепланировку.
                  </li>
                </ol>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 mb-4">
                  Ремонт квартиры — это всегда риск неожиданностей. Но грамотная подготовка, профессиональная экспертиза и работа с надежными подрядчиками помогут минимизировать проблемы и уложиться в сроки и бюджет.
                </p>
                <p className="text-gray-700">
                  Наша компания работает по прозрачной схеме: детальная смета, договор с четкими сроками, поэтапная оплата, гарантия 3 года. Мы заранее проводим техническую экспертизу и предупреждаем обо всех возможных рисках.
                </p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                >
                  Заказать бесплатную экспертизу
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

export default RepairPitfalls;