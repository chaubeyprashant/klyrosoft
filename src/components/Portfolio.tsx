import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping platform with advanced analytics and mobile-first design",
      category: "IT Development",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500 to-purple-600",
      icon: "🛒",
      results: "300% increase in conversions"
    },
    {
      title: "Brand Identity Suite", 
      description: "Complete brand overhaul including logo, guidelines, and marketing materials",
      category: "Design",
      tags: ["Branding", "UI/UX", "Print Design", "Web Design"],
      gradient: "from-purple-500 to-pink-600",
      icon: "🎨",
      results: "50% brand recognition boost"
    },
    {
      title: "Digital Marketing Campaign",
      description: "Multi-channel campaign resulting in 300% increase in qualified leads",
      category: "Marketing",
      tags: ["SEO", "PPC", "Social Media", "Analytics"],
      gradient: "from-green-500 to-blue-600",
      icon: "📈",
      results: "300% lead increase"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for B2B software with real-time data visualization",
      category: "IT Development", 
      tags: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      gradient: "from-indigo-500 to-cyan-600",
      icon: "📊",
      results: "40% user engagement boost"
    },
    {
      title: "Mobile App Design",
      description: "User-centered design for fitness tracking app with 50K+ downloads",
      category: "Design",
      tags: ["Mobile UI", "Prototyping", "User Research", "Figma"],
      gradient: "from-pink-500 to-red-600",
      icon: "📱",
      results: "50K+ downloads"
    },
    {
      title: "Growth Marketing Strategy",
      description: "Comprehensive growth strategy for startup achieving 500% user growth",
      category: "Marketing",
      tags: ["Growth Hacking", "A/B Testing", "Email", "Content"],
      gradient: "from-yellow-500 to-orange-600",
      icon: "🚀",
      results: "500% user growth"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background" role="region" aria-labelledby="portfolio-heading">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 id="portfolio-heading" className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how KlyroSoft has helped 500+ businesses achieve their digital transformation goals through innovative IT solutions, web development, mobile apps, and digital marketing strategies.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden relative"
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
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg px-8 py-4 group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;