import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { locationsData } from "@/data/locations";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocationPage = () => {
  const { locationSlug } = useParams();
  
  const location = locationsData.find((l) => l.slug === locationSlug);

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  // Schema Markup Generators
  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KlyroSoft",
    "url": "https://klyrosoft.com",
    "logo": "https://klyrosoft.com/klyrosoft.png",
    "description": "AI solutions agency specializing in custom AI agents, workflow automation, web & mobile development."
  });

  const generateLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `KlyroSoft - ${location.serviceType} in ${location.locationName}`,
    "image": "https://klyrosoft.com/klyrosoft.png",
    "url": `https://klyrosoft.com/${location.slug}`,
    "telephone": "+1-7869861631",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.locationName,
      "addressCountry": location.locationName === "USA" ? "US" : 
                        location.locationName === "Dubai" ? "AE" : 
                        location.locationName === "London" ? "GB" : 
                        location.locationName === "Australia" ? "AU" : ""
    }
  });

  const generateFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });

  const generateBreadcrumbSchema = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://klyrosoft.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": location.metaTitle,
        "item": `https://klyrosoft.com/${location.slug}`
      }
    ]
  });

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={location.keywords}
        url={`https://klyrosoft.com/${location.slug}`}
      />
      {/* Inject Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema()) }} />

      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-grow pt-24 pb-16">
          {/* Hero Section */}
          <section className="bg-primary/5 py-24 px-4 md:px-8 border-b border-primary/10">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Serving {location.locationName}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                {location.hero.heading}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {location.hero.description}
              </p>
              <div className="pt-8">
                <Button asChild size="lg" className="rounded-full px-8 bg-gradient-primary">
                  <Link to="/estimate">
                    Get an Estimate <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{location.intro.heading}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {location.intro.description}
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 px-4 md:px-8 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses in {location.locationName} Choose KlyroSoft</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {location.whyChooseUs.map((item, index) => (
                  <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services & Industries Grid */}
          <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <div className="space-y-4">
                  {location.services.map((service, index) => (
                    <div key={index} className="p-6 bg-card rounded-xl border border-border group hover:border-primary/50 transition-colors">
                      <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                        {service.title}
                        <Link to={`/services/${service.slug}`} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
                <div className="grid grid-cols-2 gap-4">
                  {location.industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium text-foreground">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary-foreground">Our Development Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {location.process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="text-5xl font-extrabold text-primary-foreground/20 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-primary-foreground">{step.title}</h3>
                    <p className="text-primary-foreground/80">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {location.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
