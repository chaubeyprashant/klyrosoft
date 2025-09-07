import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Clock, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Satisfied Clients" },
    { icon: <Trophy className="w-8 h-8" />, number: "150+", label: "Projects Completed" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Globe className="w-8 h-8" />, number: "25+", label: "Countries Served" }
  ];

  const expertise = [
    "React & Next.js", "Node.js & Python", "AWS & Azure", "UI/UX Design", 
    "Brand Strategy", "SEO & Analytics", "Mobile Apps", "E-commerce"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">TechFlow</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a dynamic team of technology enthusiasts, creative designers, and marketing strategists 
              dedicated to transforming businesses through innovative digital solutions. Our mission is to 
              bridge the gap between technology and business success.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience across diverse industries, we understand that every business is unique. 
              That's why we tailor our approach to meet your specific needs, ensuring maximum impact and 
              sustainable growth.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
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