import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MostViewed from "./pages/MostViewed";
import Milestones from "./pages/Milestones";
import Creators from "./pages/Creators";
import Genres from "./pages/Genres";
import Phenomena from "./pages/Phenomena";
import Music from "./pages/Music";
import Trends from "./pages/Trends";
import Sources from "./pages/Sources";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/most-viewed" element={<MostViewed />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/phenomena" element={<Phenomena />} />
          <Route path="/music" element={<Music />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
