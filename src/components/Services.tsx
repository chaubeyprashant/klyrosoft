import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
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
  Target 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Responsive websites tailored for businesses with scalable backend architecture",
      features: [
        { icon: <Globe className="w-5 h-5" />, text: "Responsive websites" },
        { icon: <Database className="w-5 h-5" />, text: "E-commerce platforms" },
        { icon: <Zap className="w-5 h-5" />, text: "CMS solutions" }
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Mobile Development",
      description: "iOS & Android app development with cross-platform solutions",
      features: [
        { icon: <Smartphone className="w-5 h-5" />, text: "iOS & Android apps" },
        { icon: <Code className="w-5 h-5" />, text: "Cross-platform apps" },
        { icon: <Target className="w-5 h-5" />, text: "Mobile-first design" }
      ]
    },
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "Backend & DevOps",
      description: "API development, cloud hosting, and CI/CD pipelines for scaling",
      features: [
        { icon: <Cloud className="w-5 h-5" />, text: "Cloud hosting (AWS, GCP, Azure)" },
        { icon: <Zap className="w-5 h-5" />, text: "CI/CD pipelines" },
        { icon: <Database className="w-5 h-5" />, text: "API development" }
      ]
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Dashboards & SaaS",
      description: "Custom analytics dashboards and SaaS product development",
      features: [
        { icon: <BarChart className="w-5 h-5" />, text: "Analytics dashboards" },
        { icon: <Cloud className="w-5 h-5" />, text: "SaaS development" },
        { icon: <Zap className="w-5 h-5" />, text: "Payment integration" }
      ]
    },
    {
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      title: "Social Media & Branding",
      description: "Content strategy, creative designs, and social media management",
      features: [
        { icon: <Megaphone className="w-5 h-5" />, text: "Content strategy" },
        { icon: <Palette className="w-5 h-5" />, text: "Brand identity" },
        { icon: <Target className="w-5 h-5" />, text: "Social media management" }
      ]
    },
    {
      icon: <Camera className="w-12 h-12 text-primary" />,
      title: "Photography & Media",
      description: "Corporate photography, event coverage, and visual storytelling",
      features: [
        { icon: <Camera className="w-5 h-5" />, text: "Corporate photography" },
        { icon: <Globe className="w-5 h-5" />, text: "Event coverage" },
        { icon: <Palette className="w-5 h-5" />, text: "Visual storytelling" }
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to execution, we provide end-to-end solutions that drive growth and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 text-sm">
                      <div className="text-primary">{feature.icon}</div>
                      <span className="text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary-dark transition-colors duration-300"
                >
                  Learn More
                </Button>
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
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;