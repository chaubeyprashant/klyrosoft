import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Smartphone, Globe, Camera, TrendingUp, Users, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "MediTrack Pro Healthcare Management Platform",
      description: "Comprehensive SaaS solution engineered for healthcare institutions to streamline patient records management, appointment scheduling, and billing operations. Implementation resulted in 60% reduction in administrative overhead for client operations.",
      category: "Enterprise Software Development",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe API"],
      client: "City Health Clinic",
      duration: "4 months",
      results: "60% administrative efficiency improvement",
      metrics: "2,500+ patients managed daily",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "UrbanThreads Digital Commerce Solution", 
      description: "Complete digital transformation and e-commerce platform development for sustainable fashion retailer. Strategic redesign and technical implementation achieved significant improvements in mobile conversion rates and customer lifetime value.",
      category: "Digital Commerce Development",
      tags: ["Next.js", "Shopify Plus", "Tailwind CSS", "Vercel", "Analytics"],
      client: "UrbanThreads Fashion",
      duration: "3 months",
      results: "45% mobile conversion increase",
      metrics: "30% higher average order value",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "FoodieGo Restaurant Network Application",
      description: "Cross-platform mobile application connecting local restaurants with consumers through sophisticated order management and logistics coordination. Featured in Apple App Store editorial selections with exceptional user adoption rates.",
      category: "Mobile Application Development",
      tags: ["React Native", "Firebase", "Google Maps API", "Redux", "Payment Gateway"],
      client: "FoodieGo Enterprises",
      duration: "5 months",
      results: "10,000+ downloads within 30 days",
      metrics: "95% user retention rate",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "EcoLiving Brand Digital Strategy",
      description: "Comprehensive digital marketing strategy and content development for sustainable lifestyle brand. Multi-platform campaign execution delivered exceptional organic reach and community growth across key demographics.",
      category: "Digital Marketing Strategy",
      tags: ["Strategic Planning", "Content Development", "Social Analytics", "Brand Management"],
      client: "EcoLiving Corporation",
      duration: "3 months",
      results: "650% follower growth achieved",
      metrics: "50,000+ organic reach generated",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "TechSummit Corporate Identity System",
      description: "Complete brand identity development and implementation for premier technology conference. Comprehensive design system including visual identity, digital presence, and print collateral for enterprise-level event management.",
      category: "Brand Identity & Design",
      tags: ["Brand Strategy", "Visual Identity", "Print Design", "Digital Assets", "Event Materials"],
      client: "TechSummit Conference Board",
      duration: "2 months",
      results: "2,000+ attendees served",
      metrics: "100% brand consistency achieved",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "TeamFlow Enterprise Collaboration Platform",
      description: "Advanced collaboration platform designed for distributed teams requiring secure project management, integrated communications, and document workflow capabilities. Currently deployed across multiple enterprise clients.",
      category: "Enterprise Software Development",
      tags: ["Vue.js", "Socket.io", "MongoDB", "WebRTC", "Enterprise Security"],
      client: "RemoteWork Solutions Ltd.",
      duration: "6 months",
      results: "50+ enterprise clients onboarded",
      metrics: "99.9% uptime maintained",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Enterprise Software Development": "bg-slate-100 text-slate-700 border-slate-300",
      "Digital Commerce Development": "bg-blue-50 text-blue-700 border-blue-300",
      "Mobile Application Development": "bg-emerald-50 text-emerald-700 border-emerald-300",
      "Digital Marketing Strategy": "bg-purple-50 text-purple-700 border-purple-300",
      "Brand Identity & Design": "bg-amber-50 text-amber-700 border-amber-300"
    };
    return colors[category as keyof typeof colors] || "bg-gray-50 text-gray-700 border-gray-300";
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Portfolio of <span className="text-blue-600">Delivered Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of successful project implementations across diverse industries, 
            demonstrating measurable business impact and technical excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white border-slate-200 overflow-hidden"
            >
              <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-200">
                    <div className="text-slate-600">
                      {project.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-slate-100 text-slate-700 border-slate-300 font-medium">
                      {project.duration}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-slate-900 text-xl mb-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  <p className="text-slate-600 font-medium text-sm">
                    Client: {project.client}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardDescription className="text-slate-700 text-base mb-6 leading-relaxed line-height-7">
                  {project.description}
                </CardDescription>
                
                {/* Key Results Section */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-800 text-sm mb-2">Key Results Achieved</h4>
                  <div className="space-y-1">
                    <p className="text-green-700 text-sm font-medium">• {project.results}</p>
                    <p className="text-green-700 text-sm font-medium">• {project.metrics}</p>
                  </div>
                </div>

                {/* Service Category */}
                <div className="mb-4">
                  <Badge 
                    variant="outline" 
                    className={`${getCategoryColor(project.category)} text-sm font-semibold px-3 py-1`}
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-slate-100 text-slate-600 border border-slate-200 font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>


              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
            <p className="text-blue-100">
              Partner with our experienced team to deliver measurable results for your organization.
            </p>
          </div>
          <div className="p-8 text-center">
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss your project requirements and explore how our proven methodologies 
              can drive success for your business objectives.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;