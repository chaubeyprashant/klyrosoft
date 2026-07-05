import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EstimatePage from "./pages/EstimatePage";
import CareerPage from "./pages/CareerPage";
import NotFound from "./pages/NotFound";
import ResumeTailorPage from "./pages/ResumeTailorPage";

const AIChatAgent = lazy(() => import("./components/AIChatAgent"));
const VoiceAssistant = lazy(() => import("./components/VoiceAssistant"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/estimate" element={<EstimatePage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/resume-tailor" element={<ResumeTailorPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Suspense fallback={null}>
          <AIChatAgent />
          <VoiceAssistant />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
