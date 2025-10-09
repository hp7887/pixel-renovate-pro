import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import Guarantees from "./pages/Guarantees";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import CosmeticRepair from "./pages/Services/CosmeticRepair";
import MajorRepair from "./pages/Services/MajorRepair";
import InteriorDesign from "./pages/Services/InteriorDesign";
import BathroomRepair from "./pages/Services/BathroomRepair";
import ElectricalWork from "./pages/Services/ElectricalWork";
import KitchenRepair from "./pages/Services/KitchenRepair";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/cosmetic-repair" element={<CosmeticRepair />} />
          <Route path="/services/major-repair" element={<MajorRepair />} />
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/bathroom-repair" element={<BathroomRepair />} />
          <Route path="/services/electrical-work" element={<ElectricalWork />} />
          <Route path="/services/kitchen-repair" element={<KitchenRepair />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
