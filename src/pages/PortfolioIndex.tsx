import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, BarChart3, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioIndex = () => {
  return (
    <>
      <SEO
        title="Software Development Portfolio & Case Studies | KlyroSoft"
        description="Explore KlyroSoft's portfolio of successful software development, AI, and mobile app projects. See how we deliver measurable ROI for enterprises and startups."
        keywords="Software Development Portfolio, Case Studies, AI Success Stories, Mobile App Examples"
        url="https://klyrosoft.com/portfolio"
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-grow pt-24 pb-16">
          {/* Header */}
          <section className="bg-primary/5 py-20 px-4 md:px-8 border-b border-primary/10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Our Work
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We don't just write code—we solve complex business problems. Explore our case studies to see how we've helped companies scale, automate, and dominate their industries.
              </p>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.map((caseStudy) => (
                <div key={caseStudy.slug} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Briefcase className="w-12 h-12 text-primary/40" />
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {caseStudy.clientOverview.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {caseStudy.hero.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 flex-grow">
                      {caseStudy.hero.subtitle}
                    </p>
                    
                    {/* Highlight Metric */}
                    {caseStudy.results.length > 0 && (
                      <div className="flex items-center gap-3 mb-6 bg-secondary/30 p-3 rounded-lg border border-secondary">
                        <BarChart3 className="w-5 h-5 text-secondary-foreground" />
                        <span className="font-bold text-foreground">{caseStudy.results[0].metric}</span>
                        <span className="text-sm text-muted-foreground">{caseStudy.results[0].label}</span>
                      </div>
                    )}

                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Link to={`/case-studies/${caseStudy.slug}`}>
                        Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-4 md:px-8 bg-primary text-primary-foreground mt-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to build your success story?</h2>
              <p className="text-xl text-primary-foreground/80">
                Let's discuss how we can solve your technical challenges and drive measurable growth for your business.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link to="/estimate">
                  Start a Project
                </Link>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PortfolioIndex;
