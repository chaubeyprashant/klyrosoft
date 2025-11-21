import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Users, Trophy, Clock, Globe, Lightbulb, Shield, Eye, Palette, Bot, Workflow, Sparkles } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Satisfied Clients" },
    { icon: <Trophy className="w-8 h-8" />, number: "150+", label: "Projects Completed" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Globe className="w-8 h-8" />, number: "25+", label: "Countries Served" }
  ];

  const values = [
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", description: "Pushing boundaries with cutting-edge AI technology" },
    { icon: <Shield className="w-6 h-6" />, title: "Reliability", description: "Consistent delivery and dependable AI solutions" },
    { icon: <Eye className="w-6 h-6" />, title: "Transparency", description: "Clear communication throughout every project" },
    { icon: <Palette className="w-6 h-6" />, title: "Creativity", description: "Unique AI solutions that stand out from the crowd" }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-background" role="region" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">About KlyroSoft</span>
              </div>
              <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
              </h2>
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 leading-relaxed">
              KlyroSoft is a leading AI solutions agency specializing in <strong>AI agents and intelligent workflows</strong>. 
              We build custom AI agents—from voice assistants to image and video generation systems—that automate business processes 
              and transform operations. Our team of expert AI engineers, developers, and creative professionals delivers end-to-end 
              digital solutions powered by cutting-edge artificial intelligence.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mb-8">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Bot className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Our MVP: AI Workflow Automation</h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We specialize in creating intelligent AI workflows that automate complex business processes. 
                  Our AI agents handle everything from customer interactions to content generation, making your operations 
                  more efficient and scalable.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                "To empower businesses with intelligent AI agents and automated workflows that drive growth and innovation."
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="text-primary mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="text-center p-6 hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
                    <CardContent className="p-0">
                      <motion.div 
                        className="text-primary mb-3 flex justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="mt-6 bg-gradient-primary text-primary-foreground border-0 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <CardContent className="p-6 text-center relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Workflow className="w-6 h-6" />
                    <h3 className="text-xl font-semibold">Ready to Transform with AI?</h3>
                  </div>
                  <p className="text-primary-foreground/90 mb-4">
                    Join hundreds of businesses that trust us with their AI transformation journey. 
                    Let's build intelligent workflows that automate your operations.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      <Bot className="w-3 h-3 mr-1" />
                      AI Agents
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      <Workflow className="w-3 h-3 mr-1" />
                      Workflows
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Automation
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;