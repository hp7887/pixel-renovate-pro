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
import Blog from "./pages/Blog";
import HowToChooseMaterials from "./pages/Blog/HowToChooseMaterials";
import BathroomMistakes from "./pages/Blog/BathroomMistakes";
import DesignTrends2025 from "./pages/Blog/DesignTrends2025";
import RenovationBudget from "./pages/Blog/RenovationBudget";
import RepairPitfalls from "./pages/Blog/RepairPitfalls";
import EcoMaterials from "./pages/Blog/EcoMaterials";
import RoomPlanning from "./pages/Blog/RoomPlanning";
import SmartHome from "./pages/Blog/SmartHome";
import KitchenRenovation from "./pages/Blog/KitchenRenovation";
import LightingDesign from "./pages/Blog/LightingDesign";
import BalconyRenovation from "./pages/Blog/BalconyRenovation";
import CosmeticRepair from "./pages/Services/CosmeticRepair";
import MajorRepair from "./pages/Services/MajorRepair";
import InteriorDesign from "./pages/Services/InteriorDesign";
import BathroomRepair from "./pages/Services/BathroomRepair";
import ElectricalWork from "./pages/Services/ElectricalWork";
import KitchenRepair from "./pages/Services/KitchenRepair";
import Partnership from "./pages/Partnership";
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/kak-vybrat-materialy-dlya-remonta" element={<HowToChooseMaterials />} />
          <Route path="/blog/oshibki-pri-remonte-vannoy" element={<BathroomMistakes />} />
          <Route path="/blog/trendy-dizayna-interera-2025" element={<DesignTrends2025 />} />
          <Route path="/blog/raschet-byudzheta-na-remont" element={<RenovationBudget />} />
          <Route path="/blog/podvodnye-kamni-remonta" element={<RepairPitfalls />} />
          <Route path="/blog/ekologichnye-materialy" element={<EcoMaterials />} />
          <Route path="/blog/planirovka-pomeshcheniy" element={<RoomPlanning />} />
          <Route path="/blog/umnyy-dom" element={<SmartHome />} />
          <Route path="/blog/remont-kuhni" element={<KitchenRenovation />} />
          <Route path="/blog/osveshchenie-v-kvartire" element={<LightingDesign />} />
          <Route path="/blog/remont-balkona" element={<BalconyRenovation />} />
          <Route path="/services/cosmetic-repair" element={<CosmeticRepair />} />
          <Route path="/services/major-repair" element={<MajorRepair />} />
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/bathroom-repair" element={<BathroomRepair />} />
          <Route path="/services/electrical-work" element={<ElectricalWork />} />
          <Route path="/services/kitchen-repair" element={<KitchenRepair />} />
          <Route path="/partnership" element={<Partnership />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
