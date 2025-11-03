import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Mail } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Спасибо за заявку - DigitalStroy</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="py-20 px-4">
            <div className="container max-w-3xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Спасибо за вашу заявку!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Ваша заявка успешно отправлена. Наш менеджер свяжется с вами в ближайшее время для уточнения деталей проекта.
              </p>

              <div className="bg-card border rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Что дальше?</h2>
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <p className="text-muted-foreground">
                      Наш менеджер позвонит вам в течение 15 минут (в рабочее время)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <p className="text-muted-foreground">
                      Обсудим детали вашего проекта и ответим на все вопросы
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <p className="text-muted-foreground">
                      При необходимости договоримся о выезде замерщика на объект
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/")}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Вернуться на главную
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/portfolio")}
                >
                  Посмотреть наши работы
                </Button>
              </div>

              <div className="border-t pt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Если у вас срочный вопрос, свяжитесь с нами напрямую:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:+78122099885" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">8 812 209-98-85</span>
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">|</span>
                  <a 
                    href="mailto:digitalstroy@inbox.ru" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">digitalstroy@inbox.ru</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ThankYou;
