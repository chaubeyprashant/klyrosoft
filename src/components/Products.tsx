import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mic, Image, Video, Sparkles, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Voice Assistant AI Agent",
    description:
      "Intelligent voice-powered assistants that understand natural language, handle customer inquiries, schedule appointments, and automate voice-based workflows. Built with advanced NLP and speech recognition.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    icon: Mic,
    features: ["Natural Language Processing", "Multi-language Support", "Voice Command Automation"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "AI Image Generation Agent",
    description:
      "Custom AI agents that generate high-quality images, graphics, and visual content on demand. Perfect for marketing materials, product visuals, and creative content generation.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    icon: Image,
    features: ["Text-to-Image Generation", "Style Transfer", "Batch Processing"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "AI Video Generation Agent",
    description:
      "Automated video creation agents that produce professional videos from scripts, images, or templates. Ideal for social media content, product demos, and marketing campaigns.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
    icon: Video,
    features: ["Script-to-Video", "Auto-editing", "Multi-format Export"],
    color: "from-orange-500 to-red-500",
  },
];

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="products" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="mx-auto max-w-3xl space-y-6 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI Agents Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">AI Agents</span>
          </h2>
          <p className="text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto">
            Custom-built AI agents that automate workflows and enhance productivity. From voice assistants to creative content generation, we build intelligent solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card overflow-hidden">
                <CardHeader className="p-0 relative">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${product.color} shadow-lg`}>
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <CardTitle className="text-2xl mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <motion.div
                    className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-foreground/80 mb-4">
            Need a custom AI agent for your specific use case?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-white font-medium hover:shadow-elegant transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Sparkles className="w-4 h-4" />
            Request Custom AI Agent
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;