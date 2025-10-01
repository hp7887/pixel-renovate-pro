import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Какие гарантии вы предоставляете на ремонтные работы?",
      answer: "Мы предоставляем официальную гарантию до 3 лет на все виды работ. Гарантия распространяется на качество выполненных работ, использованные материалы и установленное оборудование. В случае возникновения проблем, мы оперативно устраним все недостатки за свой счет."
    },
    {
      question: "Сколько времени займет ремонт моей квартиры?",
      answer: "Сроки ремонта зависят от площади помещения и объема работ. Косметический ремонт однокомнатной квартиры занимает 2-3 недели, капитальный ремонт — 1,5-2 месяца. Мы составляем подробный график работ и строго придерживаемся согласованных сроков."
    },
    {
      question: "Нужно ли мне покупать материалы самостоятельно?",
      answer: "Нет, это необязательно. Мы предлагаем услугу комплексного ремонта 'под ключ', включающую закупку всех необходимых материалов. Мы работаем напрямую с поставщиками и можем предложить материалы по оптовым ценам. Также вы можете приобрести материалы самостоятельно — мы предоставим полный список необходимого."
    },
    {
      question: "Можно ли внести изменения в проект во время ремонта?",
      answer: "Да, конечно. Мы понимаем, что в процессе ремонта могут возникнуть новые идеи. Любые изменения обсуждаются с прорабом, рассчитывается дополнительная стоимость и корректируются сроки. Все изменения фиксируются в дополнительном соглашении к договору."
    },
    {
      question: "Кто будет убирать строительный мусор?",
      answer: "Вывоз строительного мусора входит в стоимость наших услуг. Мы регулярно поддерживаем порядок на объекте, выносим мусор в специально отведенные места и организуем его вывоз. После завершения ремонта проводим финальную уборку."
    },
    {
      question: "Как осуществляется контроль качества работ?",
      answer: "На каждом объекте работает опытный прораб, который контролирует все этапы ремонта. Мы также проводим поэтапную приемку работ с фотофиксацией. Вы можете посещать объект в любое время и контролировать процесс. После завершения каждого этапа подписывается акт выполненных работ."
    },
    {
      question: "Работаете ли вы с юридическими лицами?",
      answer: "Да, мы работаем как с физическими, так и с юридическими лицами. Выполняем ремонт офисов, коммерческих помещений, предоставляем полный пакет документов для бухгалтерии, работаем по безналичному расчету."
    },
    {
      question: "Какая стоимость дизайн-проекта?",
      answer: "При заказе ремонта от 50 м² дизайн-проект предоставляется бесплатно! Если вам нужен только дизайн-проект без ремонта, стоимость рассчитывается индивидуально в зависимости от сложности и площади помещения. Свяжитесь с нами для уточнения деталей."
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы о наших услугах
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openContactDialog'));
            }}
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Задать вопрос
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
