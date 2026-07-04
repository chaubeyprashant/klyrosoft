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
        title="KlyroSoft — AI Agents, Workflow Automation, Web & Mobile Development | Irving TX"
        description="KlyroSoft (klyrosoft.com) — AI solutions agency by Prashant Chaubey. Custom AI agents, workflow automation, AI voice assistants, chatbots, web & mobile apps, SaaS. 500+ clients across 25+ countries. Irving, Texas."
        keywords="KlyroSoft, Klyrosoft, klyrosoft, klyrosoft.com, KlyroSoft official, KlyroSoft AI, KlyroSoft agency, KlyroSoft Irving, KlyroSoft Texas, KlyroSoft Prashant Chaubey, KlyroSoft AI agents, KlyroSoft services, KlyroSoft portfolio, KlyroSoft reviews, AI agents, AI workflow automation, AI voice assistant, AI chatbot, custom AI agents, AI image generation, AI video generation, web development, mobile app development, React, Node.js, Flutter, SaaS, full stack, IT solutions, DevOps, cloud, digital marketing, software company Irving TX, AI agency USA, AI agency Texas, hire AI developers, enterprise AI, startup technology partner, business automation, intelligent workflows, machine learning, NLP, computer vision"
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
