import { useParams, Navigate } from "react-router-dom";
import { servicesData } from "@/data/services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { slug } = useParams();
  
  // Find the service data by slug
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.primaryKeyword + ", KlyroSoft, IT services, " + service.industries.join(", ")}
        url={`https://klyrosoft.com/services/${service.slug}`}
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-grow pt-24 pb-16">
          {/* Hero Section */}
          <section className="bg-primary/5 py-20 px-4 md:px-8">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                {service.hero.heading}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {service.hero.description}
              </p>
              <div className="pt-8">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/estimate">
                    Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Problems Solved Section */}
          <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{service.problems.title}</h2>
                <div className="space-y-4">
                  {service.problems.items.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="text-destructive h-6 w-6 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-semibold mb-4">The KlyroSoft Solution</h3>
                <p className="text-muted-foreground mb-6">
                  We bridge the gap between complex business challenges and scalable technological solutions. Our tailored approach ensures that you aren't just getting software, but a strategic asset.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/#contact">Discuss Your Needs</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 md:px-8 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Features & Capabilities</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive solutions engineered to scale and perform under pressure.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-primary/10 text-primary font-bold text-lg rounded-lg p-4 mb-4 inline-block">
                    {step.step.split('.')[0]}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.step.split('. ')[1]}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < service.process.length - 1 && (
                    <ChevronRight className="hidden md:block absolute top-6 -right-6 text-muted-foreground/30 h-8 w-8" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack & Benefits */}
          <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, index) => (
                    <span key={index} className="bg-primary-foreground/10 px-4 py-2 rounded-full text-sm font-medium border border-primary-foreground/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Key Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>
                      <strong className="block text-lg">{benefit.title}</strong>
                      <span className="text-primary-foreground/80">{benefit.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Industries & FAQs */}
          <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
              <ul className="grid grid-cols-2 gap-4">
                {service.industries.map((industry, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {industry}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer || faq.description /* Fallback to description if answer was mistyped in data */}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServiceDetails;
