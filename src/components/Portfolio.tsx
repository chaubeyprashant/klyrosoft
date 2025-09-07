import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping platform with advanced analytics and mobile-first design",
      category: "IT Development",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Brand Identity Suite", 
      description: "Complete brand overhaul including logo, guidelines, and marketing materials",
      category: "Design",
      tags: ["Branding", "UI/UX", "Print Design", "Web Design"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Digital Marketing Campaign",
      description: "Multi-channel campaign resulting in 300% increase in qualified leads",
      category: "Marketing",
      tags: ["SEO", "PPC", "Social Media", "Analytics"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for B2B software with real-time data visualization",
      category: "IT Development", 
      tags: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      gradient: "from-indigo-500 to-cyan-600"
    },
    {
      title: "Mobile App Design",
      description: "User-centered design for fitness tracking app with 50K+ downloads",
      category: "Design",
      tags: ["Mobile UI", "Prototyping", "User Research", "Figma"],
      gradient: "from-pink-500 to-red-600"
    },
    {
      title: "Growth Marketing Strategy",
      description: "Comprehensive growth strategy for startup achieving 500% user growth",
      category: "Marketing",
      tags: ["Growth Hacking", "A/B Testing", "Email", "Content"],
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their goals through innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg px-8 py-4"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;