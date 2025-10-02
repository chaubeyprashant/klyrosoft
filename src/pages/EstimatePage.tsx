import EstimateCalculator from "@/components/EstimateCalculator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EstimatePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <EstimateCalculator />
      <Footer />
    </div>
  );
};

export default EstimatePage;
