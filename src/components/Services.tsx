import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Workflow, 
  Bot, 
  Sparkles,
  Code, 
  Smartphone, 
  Server, 
  BarChart, 
  Megaphone, 
  Camera, 
  Globe, 
  Cloud, 
  Database, 
  Zap, 
  Palette, 
  Target,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Workflow className="w-12 h-12 text-primary" />,
      title: "AI Workflow Automation",
      description: "Intelligent workflow automation using AI agents that streamline business processes, reduce manual work, and increase efficiency. Our MVP solution that transforms how businesses operate.",
      features: [
        { icon: <Bot className="w-5 h-5" />, text: "Custom AI agents" },
        { icon: <Workflow className="w-5 h-5" />, text: "Process automation" },
        { icon: <Zap className="w-5 h-5" />, text: "Smart integrations" }
      ],
      isMVP: true,
      color: "from-primary to-secondary"
    },
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "AI Agent Development",
      description: "Custom AI agents built for your specific needs - from customer service bots to data analysis agents and intelligent assistants.",
      features: [
        { icon: <Sparkles className="w-5 h-5" />, text: "Custom AI agents" },
        { icon: <Database className="w-5 h-5" />, text: "Data processing" },
        { icon: <Target className="w-5 h-5" />, text: "Task automation" }
      ],
      isMVP: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Responsive websites tailored for businesses with scalable backend architecture",
      features: [
        { icon: <Globe className="w-5 h-5" />, text: "Responsive websites" },
        { icon: <Database className="w-5 h-5" />, text: "E-commerce platforms" },
        { icon: <Zap className="w-5 h-5" />, text: "CMS solutions" }
      ],
      isMVP: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Mobile Development",
      description: "iOS & Android app development with cross-platform solutions",
      features: [
        { icon: <Smartphone className="w-5 h-5" />, text: "iOS & Android apps" },
        { icon: <Code className="w-5 h-5" />, text: "Cross-platform apps" },
        { icon: <Target className="w-5 h-5" />, text: "Mobile-first design" }
      ],
      isMVP: false,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "Backend & DevOps",
      description: "API development, cloud hosting, and CI/CD pipelines for scaling",
      features: [
        { icon: <Cloud className="w-5 h-5" />, text: "Cloud hosting (AWS, GCP, Azure)" },
        { icon: <Zap className="w-5 h-5" />, text: "CI/CD pipelines" },
        { icon: <Database className="w-5 h-5" />, text: "API development" }
      ],
      isMVP: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Dashboards & SaaS",
      description: "Custom analytics dashboards and SaaS product development",
      features: [
        { icon: <BarChart className="w-5 h-5" />, text: "Analytics dashboards" },
        { icon: <Cloud className="w-5 h-5" />, text: "SaaS development" },
        { icon: <Zap className="w-5 h-5" />, text: "Payment integration" }
      ],
      isMVP: false,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      title: "Social Media & Branding",
      description: "Content strategy, creative designs, and social media management",
      features: [
        { icon: <Megaphone className="w-5 h-5" />, text: "Content strategy" },
        { icon: <Palette className="w-5 h-5" />, text: "Brand identity" },
        { icon: <Target className="w-5 h-5" />, text: "Social media management" }
      ],
      isMVP: false,
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Camera className="w-12 h-12 text-primary" />,
      title: "Photography & Media",
      description: "Corporate photography, event coverage, and visual storytelling",
      features: [
        { icon: <Camera className="w-5 h-5" />, text: "Corporate photography" },
        { icon: <Globe className="w-5 h-5" />, text: "Event coverage" },
        { icon: <Palette className="w-5 h-5" />, text: "Visual storytelling" }
      ],
      isMVP: false,
      color: "from-teal-500 to-cyan-500"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-muted/30" role="region" aria-labelledby="services-heading">
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
            <span className="text-sm font-medium text-primary">Our Core Services</span>
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in <strong>AI Workflow Automation</strong> as our MVP, we build intelligent AI agents and workflows that transform business operations. 
            Plus comprehensive IT solutions, web development, mobile apps, and digital marketing services.
          </p>
        </motion.header>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className={`group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 relative overflow-hidden ${
                  service.isMVP ? 'ring-2 ring-primary ring-offset-2' : ''
                }`}
              >
                {service.isMVP && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-primary text-white border-0">
                      <Sparkles className="w-3 h-3 mr-1" />
                      MVP
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <motion.div 
                      className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-3 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-primary">{feature.icon}</div>
                        <span className="text-muted-foreground">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={scrollToContact}
                      className={`w-full transition-all duration-300 ${
                        service.isMVP 
                          ? 'bg-gradient-primary text-white hover:shadow-elegant' 
                          : 'bg-primary hover:bg-primary-dark'
                      }`}
                    >
                      {service.isMVP ? (
                        <>
                          <Sparkles className="mr-2 w-4 h-4" />
                          Get Started
                        </>
                      ) : (
                        <>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
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
              className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg px-8 py-4"
            >
              <Workflow className="mr-2 w-5 h-5" />
              Get Custom AI Workflow Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;