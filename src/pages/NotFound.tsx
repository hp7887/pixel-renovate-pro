import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-yellow-50">
      <Helmet>
        <title>Страница не найдена - SPB-DSRemont</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Страница не найдена
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          К сожалению, запрашиваемая страница не существует или была перемещена
        </p>
        <Button 
          size="lg"
          onClick={() => window.location.href = '/'}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Home className="mr-2 h-5 w-5" />
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
