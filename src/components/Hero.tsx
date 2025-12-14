import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calculator, Sparkles, Bot, Workflow } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero section">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Modern AI technology workspace"
        title="KlyroSoft AI Technology Workspace"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">AI-Powered Solutions Agency</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Build Intelligent{" "}
            <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              AI Agents & Workflows
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in creating custom AI agents and intelligent workflows that automate your business processes. 
            From voice assistants to image & video generation, we build AI solutions that transform how you work.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection("products")}
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:shadow-hover transition-all duration-300 text-lg px-8 py-4"
              >
                <Bot className="mr-2 w-5 h-5" />
                Explore AI Agents
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:shadow-hover transition-all duration-300 text-lg px-8 py-4"
              >
                <Workflow className="mr-2 w-5 h-5" />
                AI Workflows
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => navigate("/estimate")}
                size="lg"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:shadow-hover transition-all duration-300 text-lg px-8 py-4"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Get Estimate
              </Button>
            </motion.div>
          </motion.div>

          {/* AI Features Preview */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Bot, text: "Custom AI Agents" },
              { icon: Workflow, text: "Intelligent Workflows" },
              { icon: Sparkles, text: "AI Automation" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="text-sm font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating AI Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary/30 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;