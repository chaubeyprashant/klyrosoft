import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
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
        title="KlyroSoft - AI Agents, Workflow Automation & IT Solutions"
        description="KlyroSoft specializes in AI agents, AI workflow automation, voice assistants, image & video generation. Expert IT services, web development, mobile apps. 500+ satisfied clients, 150+ projects completed."
        keywords="KlyroSoft, AI agents, AI workflow automation, AI voice assistant, AI image generation, AI video generation, custom AI agents, intelligent workflows, IT services, web development"
        url="https://klyrosoft.com/"
      />
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Services />
        <About />
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
