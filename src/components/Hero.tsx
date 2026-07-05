import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Sparkles, Bot, Workflow } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PARTICLE_POSITIONS = [
  { left: "12%", top: "18%", delay: "0s", duration: "4s" },
  { left: "78%", top: "24%", delay: "0.6s", duration: "5s" },
  { left: "45%", top: "62%", delay: "1.2s", duration: "4.5s" },
  { left: "88%", top: "70%", delay: "0.3s", duration: "5.5s" },
];

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <picture className="absolute inset-0">
        <source media="(max-width: 768px)" srcSet="/hero-bg-mobile.webp" type="image/webp" />
        <source media="(min-width: 769px)" srcSet="/hero-bg.webp" type="image/webp" />
        <img
          src="/hero-bg.webp"
          alt="KlyroSoft AI technology workspace"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
          width={1400}
          height={788}
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {PARTICLE_POSITIONS.map((particle, i) => (
          <span
            key={i}
            className="hero-particle absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="hero-fade-up mb-6" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">KlyroSoft — Official AI Solutions Agency</span>
            </div>
          </div>

          <h1
            className="hero-fade-up text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ animationDelay: "0.2s" }}
            itemProp="headline"
          >
            <span className="block mb-2">KlyroSoft</span>
            <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              AI Agents & Workflows
            </span>
          </h1>

          <p
            className="hero-fade-up text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.35s" }}
          >
            KlyroSoft builds custom AI agents and intelligent workflows that automate your business processes.
            From voice assistants to image & video generation, we deliver AI solutions that transform how you work.
          </p>

          <div
            className="hero-fade-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              onClick={() => scrollToSection("products")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-hover transition-all duration-300 text-lg px-8 py-4"
            >
              <Bot className="mr-2 w-5 h-5" />
              Explore AI Agents
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:shadow-hover transition-all duration-300 text-lg px-8 py-4"
            >
              <Workflow className="mr-2 w-5 h-5" />
              AI Workflows
            </Button>
            <Button
              onClick={() => navigate("/estimate")}
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:shadow-hover transition-all duration-300 text-lg px-8 py-4"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Estimate
            </Button>
          </div>

          <div
            className="hero-fade-up grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
            style={{ animationDelay: "0.65s" }}
          >
            {[
              { icon: Bot, text: "Custom AI Agents" },
              { icon: Workflow, text: "Intelligent Workflows" },
              { icon: Sparkles, text: "AI Automation" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <feature.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="text-sm font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-float absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl pointer-events-none" />
        <div
          className="hero-float absolute bottom-20 right-10 w-32 h-32 bg-primary/30 rounded-full blur-2xl pointer-events-none"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="hero-bounce absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
