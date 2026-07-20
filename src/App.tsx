import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DeferredWidgets from "./components/DeferredWidgets";

const EstimatePage = lazy(() => import("./pages/EstimatePage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ResumeTailorPage = lazy(() => import("./pages/ResumeTailorPage"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PortfolioIndex = lazy(() => import("./pages/PortfolioIndex"));
const CaseStudyDetails = lazy(() => import("./pages/CaseStudyDetails"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/estimate" element={<EstimatePage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/resume-tailor" element={<ResumeTailorPage />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/portfolio" element={<PortfolioIndex />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
            <Route path="/:locationSlug" element={<LocationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <DeferredWidgets />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
