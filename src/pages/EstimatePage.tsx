import EstimateCalculator from "@/components/EstimateCalculator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EstimatePage = () => {
  return (
    <>
      <SEO
        title="Get Project Estimate — KlyroSoft AI Agents & Web Development Pricing"
        description="Get a free instant estimate from KlyroSoft for AI agents, workflow automation, web development, mobile apps, SaaS, or DevOps. Transparent pricing and detailed cost breakdown."
        keywords="KlyroSoft estimate, KlyroSoft pricing, AI agent cost, AI workflow automation price, web development cost, mobile app development estimate, SaaS pricing, KlyroSoft project quote, free AI consultation, hire AI developers cost, software development pricing Irving TX"
        url="https://klyrosoft.com/estimate"
      />
      <div className="min-h-screen">
        <Navigation />
        <EstimateCalculator />
        <Footer />
      </div>
    </>
  );
};

export default EstimatePage;
