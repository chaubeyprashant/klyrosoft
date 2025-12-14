import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, ArrowRight, Sparkles } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AI Voice Assistant for Customer Service",
      description: "Intelligent voice assistant that handles customer inquiries 24/7 using advanced NLP and speech recognition. Reduced support costs by 60% while improving response time.",
      category: "AI Agents",
      tags: ["NLP", "Speech Recognition", "Python", "OpenAI", "Voice AI"],
      gradient: "from-blue-500 to-cyan-600",
      icon: "🤖",
      results: "60% cost reduction"
    },
    {
      title: "AI Image Generation Workflow", 
      description: "Automated image generation system that creates marketing visuals, product images, and social media content on-demand. Processes 1000+ images daily.",
      category: "AI Agents",
      tags: ["Stable Diffusion", "DALL-E", "Python", "Image AI", "Automation"],
      gradient: "from-purple-500 to-pink-600",
      icon: "🎨",
      results: "1000+ images/day"
    },
    {
      title: "AI Video Content Creation System",
      description: "Intelligent video generation agent that produces marketing videos from scripts and templates. Reduced video production time from days to minutes.",
      category: "AI Agents",
      tags: ["Video AI", "Text-to-Video", "FFmpeg", "Python", "Automation"],
      gradient: "from-orange-500 to-red-600",
      icon: "🎬",
      results: "90% time reduction"
    },
    {
      title: "AI Workflow Automation Platform",
      description: "Enterprise-grade workflow automation system using AI agents to streamline business processes. Automates 500+ daily tasks across departments.",
      category: "AI Workflows",
      tags: ["Workflow AI", "Automation", "Python", "APIs", "Integration"],
      gradient: "from-indigo-500 to-purple-600",
      icon: "⚡",
      results: "500+ tasks automated"
    },
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Modern e-commerce platform with AI-powered recommendations, chatbots, and automated inventory management. Increased conversions by 300%.",
      category: "AI Development",
      tags: ["React", "AI Chatbot", "Recommendation Engine", "Node.js", "MongoDB"],
      gradient: "from-green-500 to-emerald-600",
      icon: "🛒",
      results: "300% conversion boost"
    },
    {
      title: "AI Content Generation Suite",
      description: "Multi-agent system that generates blog posts, social media content, and marketing copy. Produces 200+ pieces of content weekly with human-like quality.",
      category: "AI Agents",
      tags: ["GPT-4", "Content AI", "NLP", "Python", "Content Strategy"],
      gradient: "from-pink-500 to-rose-600",
      icon: "✍️",
      results: "200+ pieces/week"
    },
    {
      title: "AI Data Analysis Dashboard",
      description: "Intelligent analytics platform with AI-powered insights and predictive analytics. Provides real-time business intelligence and forecasting.",
      category: "AI Development",
      tags: ["Machine Learning", "Data Analytics", "Python", "React", "TensorFlow"],
      gradient: "from-teal-500 to-cyan-600",
      icon: "📊",
      results: "40% better insights"
    },
    {
      title: "AI Customer Support Automation",
      description: "Multi-channel AI support system handling tickets, emails, and live chat. Resolves 80% of inquiries automatically with high satisfaction scores.",
      category: "AI Workflows",
      tags: ["Chatbot", "Email AI", "NLP", "Automation", "Customer Service"],
      gradient: "from-yellow-500 to-orange-600",
      icon: "💬",
      results: "80% auto-resolution"
    },
    {
      title: "AI Document Processing System",
      description: "Intelligent document processing agent that extracts, categorizes, and processes documents. Handles 10,000+ documents monthly with 99% accuracy.",
      category: "AI Agents",
      tags: ["OCR", "Document AI", "Python", "Computer Vision", "Automation"],
      gradient: "from-violet-500 to-purple-600",
      icon: "📄",
      results: "99% accuracy rate"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-background" role="region" aria-labelledby="portfolio-heading">
      <div className="container mx-auto px-6">
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 id="portfolio-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover how KlyroSoft has helped 500+ businesses achieve their digital transformation goals through innovative AI solutions, IT services, web development, mobile apps, and digital marketing strategies.
          </p>
        </motion.header>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden relative h-full"
              >
              {/* Gradient Header */}
              <div className={`h-3 bg-gradient-to-r ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {project.category}
                  </Badge>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Project Icon */}
                <div className="mb-3 flex items-center space-x-3">
                  <div className="text-2xl">{project.icon}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Results Badge */}
                <div className="mb-4">
                  <Badge 
                    variant="outline" 
                    className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 text-primary font-medium"
                  >
                    {project.results}
                  </Badge>
                </div>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20 text-primary hover:bg-primary/5 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Button */}
                {/* <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary-dark transition-colors duration-300 group-hover:shadow-card"
                  size="sm"
                >
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg px-8 py-4 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;