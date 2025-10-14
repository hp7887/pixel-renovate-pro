import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";
import blogRoomPlanning from "@/assets/blog-room-planning.jpg";

const RoomPlanning = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Планировка помещений при ремонте: как правильно организовать пространство | SPB-DSRemont</title>
        <meta name="description" content="Профессиональное руководство по планировке помещений при ремонте квартиры: зонирование, эргономика, оптимизация пространства. Создайте функциональный и удобный интерьер." />
        <meta name="keywords" content="планировка квартиры, зонирование помещений, эргономика интерьера, организация пространства, перепланировка" />
        <link rel="canonical" href="https://spb-dsremont.ru/blog/planirovka-pomeshcheniy" />
        
        <meta property="og:title" content="Планировка помещений при ремонте: как правильно организовать пространство | SPB-DSRemont" />
        <meta property="og:description" content="Профессиональное руководство по планировке помещений при ремонте квартиры: зонирование, эргономика, оптимизация пространства." />
        <meta property="og:url" content="https://spb-dsremont.ru/blog/planirovka-pomeshcheniy" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blogRoomPlanning} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Планировка помещений при ремонте: как правильно организовать пространство | SPB-DSRemont" />
        <meta name="twitter:description" content="Профессиональное руководство по планировке помещений при ремонте квартиры: зонирование, эргономика, оптимизация пространства." />
        <meta name="twitter:image" content={blogRoomPlanning} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Планировка помещений при ремонте: как правильно организовать пространство",
            "datePublished": "2025-02-01",
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
            "image": blogRoomPlanning
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
              <div className="text-sm text-gray-500 mb-4">1 февраля 2025 • 11 минут чтения</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Планировка помещений при ремонте: как правильно организовать пространство
              </h1>
            </div>
            
            <LazyImage
              src={blogRoomPlanning}
              alt="Планировка и дизайн помещений"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Правильная планировка — основа комфортного жилья. От того, насколько грамотно вы организуете пространство, зависит удобство повседневной жизни. В этой статье разберем ключевые принципы планировки помещений и расскажем, как создать функциональный интерьер.
              </p>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Основные принципы эргономики</h2>
                <p className="text-gray-700 mb-4">
                  Эргономика интерьера — это наука о комфорте и эффективности использования пространства. Соблюдение эргономических норм сделает ваш дом по-настоящему удобным.
                </p>
                
                <div className="bg-cyan-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Правило рабочего треугольника на кухне</h3>
                  <p className="text-gray-700 mb-3">
                    Холодильник, плита и мойка должны образовывать треугольник с суммой сторон 4-8 метров. Это оптимальное расстояние для комфортного приготовления пищи.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Между холодильником и мойкой: 1,2-2,1 м</li>
                    <li>Между мойкой и плитой: 1,2-1,8 м</li>
                    <li>Между плитой и холодильником: 1,2-2,7 м</li>
                  </ul>
                </div>

                <LazyImage
                  src={blogRoomPlanning}
                  alt="Эргономика кухонного пространства"
                  className="w-full h-[300px] object-cover rounded-xl mb-6"
                />
                
                <div className="bg-blue-50 p-6 rounded-2xl mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Стандартные размеры для комфорта</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Проходы:</strong> минимум 80-90 см, комфортно — 100-120 см
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Рабочая поверхность:</strong> высота 85-95 см (зависит от роста)
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Расстояние до ТВ:</strong> диагональ экрана × 3-4 (для 55" это 4-4,5 м)
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Место для сна:</strong> кровать + 70 см с каждой стороны для прохода
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Зонирование пространства</h2>
                <p className="text-gray-700 mb-4">
                  Грамотное зонирование особенно важно для студий и квартир открытой планировки. Вот эффективные способы разделения пространства на функциональные зоны.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Физическое зонирование</h3>
                    <p className="text-gray-700 mb-3">
                      Использование мебели, перегородок, раздвижных систем для четкого разделения зон.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Стеллажи и открытые полки — пропускают свет, но разделяют пространство</li>
                      <li>Раздвижные стеклянные перегородки — для гибкости планировки</li>
                      <li>Барная стойка — отделяет кухню от гостиной</li>
                      <li>Диван спинкой к столовой зоне — мягкое зонирование</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Визуальное зонирование</h3>
                    <p className="text-gray-700 mb-3">
                      Разделение без физических барьеров — цветом, светом, материалами.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Разные напольные покрытия (плитка на кухне, паркет в гостиной)</li>
                      <li>Контрастные цвета стен или акцентные зоны</li>
                      <li>Многоуровневые потолки с разным освещением</li>
                      <li>Подиумы — приподнятые зоны для спальни или кабинета</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Оптимизация маленького пространства</h2>
                <p className="text-gray-700 mb-4">
                  Даже компактную квартиру можно сделать просторной и функциональной, если использовать правильные приемы.
                </p>
                
                <div className="bg-yellow-50 p-6 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Приемы визуального увеличения</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Светлые тона:</strong> белый, бежевый, светло-серый визуально расширяют пространство.
                    </li>
                    <li>
                      <strong>Зеркала:</strong> большое зеркало напротив окна удвоит свет и создаст глубину.
                    </li>
                    <li>
                      <strong>Минимализм:</strong> откажитесь от лишней мебели и декора. Меньше вещей = больше воздуха.
                    </li>
                    <li>
                      <strong>Вертикальные линии:</strong> высокие узкие шкафы до потолка, вертикальные полосы визуально поднимают потолок.
                    </li>
                    <li>
                      <strong>Стеклянная мебель:</strong> прозрачные столы и стулья не загромождают пространство.
                    </li>
                    <li>
                      <strong>Встроенные системы хранения:</strong> шкафы-купе, ниши, антресоли — все спрятано и не занимает место.
                    </li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Перепланировка: что можно и нельзя</h2>
                <p className="text-gray-700 mb-4">
                  Перепланировка может кардинально улучшить жилье, но требует соблюдения строительных норм и согласования.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border-2 border-green-500 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-green-900 mb-3">✓ Можно без согласования</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Перенос не несущих перегородок</li>
                      <li>• Объединение санузла</li>
                      <li>• Установка/демонтаж встроенных шкафов</li>
                      <li>• Изменение дверных проемов в не несущих стенах</li>
                      <li>• Остекление балкона/лоджии</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border-2 border-red-500 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-red-900 mb-3">✗ Категорически запрещено</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Снос несущих стен</li>
                      <li>• Перенос кухни в жилую комнату</li>
                      <li>• Расширение санузла за счет кухни/жилой комнаты</li>
                      <li>• Перенос радиаторов на балкон</li>
                      <li>• Демонтаж вентиляционных каналов</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заключение</h2>
                <p className="text-gray-700 mb-4">
                  Грамотная планировка — это сочетание эргономики, эстетики и функциональности. Учитывайте образ жизни семьи, соблюдайте нормы безопасности, не бойтесь нестандартных решений. Если планируете перепланировку — обязательно согласуйте проект с БТИ.
                </p>
                <p className="text-gray-700">
                  Наши дизайнеры помогут разработать оптимальную планировку с учетом особенностей вашей квартиры. Мы создадим 3D-визуализацию, рассчитаем эргономику и оформим все необходимые документы для перепланировки.
                </p>
              </section>
              
              <div className="text-center pt-8 border-t">
                <Button
                  size="lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactDialog'))}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-6"
                >
                  Заказать проект планировки
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

export default RoomPlanning;
