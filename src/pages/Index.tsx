import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Founder = lazy(() => import("@/components/Founder"));
const Team = lazy(() => import("@/components/Team"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Products = lazy(() => import("@/components/Products"));
const Contact = lazy(() => import("@/components/Contact"));

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
        <Suspense fallback={null}>
          <Services />
          <About />
          <Founder />
          <Team />
          <Portfolio />
          <Testimonials />
          <Products />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default Index;
