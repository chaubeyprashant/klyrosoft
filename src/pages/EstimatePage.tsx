import EstimateCalculator from "@/components/EstimateCalculator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EstimatePage = () => {
  return (
    <>
      <SEO
        title="Get Project Estimate - KlyroSoft"
        description="Get an instant estimate for your AI project, web development, mobile app, or IT solution. Free consultation and detailed cost breakdown from KlyroSoft."
        keywords="project estimate, AI project cost, web development estimate, mobile app estimate, IT services pricing, KlyroSoft estimate"
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
