import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Clock, Globe, Lightbulb, Shield, Eye, Palette } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Satisfied Clients" },
    { icon: <Trophy className="w-8 h-8" />, number: "150+", label: "Projects Completed" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Globe className="w-8 h-8" />, number: "25+", label: "Countries Served" }
  ];

  const values = [
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
    { icon: <Shield className="w-6 h-6" />, title: "Reliability", description: "Consistent delivery and dependable solutions" },
    { icon: <Eye className="w-6 h-6" />, title: "Transparency", description: "Clear communication throughout every project" },
    { icon: <Palette className="w-6 h-6" />, title: "Creativity", description: "Unique solutions that stand out from the crowd" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a team of developers, designers, and creative professionals passionate about delivering 
              end-to-end digital solutions. Whether you need a powerful web app, a mobile product, a SaaS 
              platform, or branding support, we combine technology and creativity to help your business thrive.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                "To empower businesses with innovative tech and creative solutions that drive growth."
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 hover:shadow-card transition-all duration-300 bg-gradient-card border-0"
                >
                  <CardContent className="p-0">
                    <div className="text-primary mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Ready to Transform?</h3>
                <p className="text-primary-foreground/90">
                  Join hundreds of businesses that trust us with their digital transformation journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;