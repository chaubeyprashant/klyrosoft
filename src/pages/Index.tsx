import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="KlyroSoft | Official Website — AI Agents, Workflow Automation & IT Solutions"
        description="Official KlyroSoft website at klyrosoft.com. AI agents, workflow automation, voice assistants, web & mobile development, and IT solutions for businesses worldwide."
        keywords="KlyroSoft, Klyrosoft, klyrosoft, klyrosoft.com, KlyroSoft official website, KlyroSoft AI agency, AI agents, AI workflow automation, web development, mobile app development"
        url="https://klyrosoft.com/"
      />
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Founder />
        <Team />
        <Portfolio />
        <Testimonials />
        <Products />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
