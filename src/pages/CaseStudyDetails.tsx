import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, CheckCircle2, ChevronLeft, Target, Lightbulb, Code2, LineChart, Quote, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudyDetails = () => {
  const { slug } = useParams();
  
  const caseStudy = portfolioData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={caseStudy.metaTitle}
        description={caseStudy.metaDescription}
        keywords={caseStudy.keywords}
        url={`https://klyrosoft.com/case-studies/${caseStudy.slug}`}
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-grow pt-24 pb-16">
          
          {/* Back Navigation */}
          <div className="max-w-5xl mx-auto px-4 md:px-8 mb-8">
            <Link to="/portfolio" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Portfolio
            </Link>
          </div>

          {/* 1. Hero Section */}
          <section className="px-4 md:px-8 mb-16">
            <div className="max-w-5xl mx-auto text-center space-y-6 bg-primary/5 p-12 md:p-20 rounded-3xl border border-primary/10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
                {caseStudy.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {caseStudy.hero.subtitle}
              </p>
            </div>
          </section>

          {/* 2. Client Overview */}
          <section className="px-4 md:px-8 mb-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-border py-8">
              <div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Industry</div>
                <div className="font-bold">{caseStudy.clientOverview.industry}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Location</div>
                <div className="font-bold">{caseStudy.clientOverview.location}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Company Size</div>
                <div className="font-bold">{caseStudy.clientOverview.size}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Duration</div>
                <div className="font-bold">{caseStudy.clientOverview.duration}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-medium mb-1">Team Size</div>
                <div className="font-bold">{caseStudy.clientOverview.teamSize}</div>
              </div>
            </div>
          </section>

          {/* Core Content Grid */}
          <section className="px-4 md:px-8 mb-20 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              
              {/* 3. Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-destructive" />
                  </div>
                  <h2 className="text-3xl font-bold">The Challenge</h2>
                </div>
                <ul className="space-y-4">
                  {caseStudy.challenge.map((item, i) => (
                    <li key={i} className="flex gap-3 text-lg text-muted-foreground">
                      <span className="text-destructive font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Solution */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">The Solution</h2>
                </div>
                <ul className="space-y-4">
                  {caseStudy.solution.map((item, i) => (
                    <li key={i} className="flex gap-3 text-lg text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          {/* 7. Results (Metrics Focus) */}
          <section className="px-4 md:px-8 mb-20">
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-foreground to-muted p-12 md:p-20 rounded-3xl text-background">
              <div className="text-center mb-16">
                <LineChart className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Project Results</h2>
                <p className="text-xl text-background/70">Measurable impact delivered through engineering excellence.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {caseStudy.results.map((result, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                      {result.metric}
                    </div>
                    <div className="text-sm md:text-base font-medium text-background/80 uppercase tracking-wide">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Details Grid */}
          <section className="px-4 md:px-8 mb-20 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              
              {/* 5. Technology Stack */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-8 h-8 text-secondary" />
                  <h2 className="text-3xl font-bold">Technology Stack</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.techStack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-secondary/20 text-secondary-foreground font-semibold rounded-lg border border-secondary/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Development Process */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">Development Process</h2>
                </div>
                <div className="space-y-4">
                  {caseStudy.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="font-medium text-lg">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* 8. Client Testimonial */}
          <section className="px-4 md:px-8 mb-20 max-w-4xl mx-auto">
            <div className="bg-primary/5 p-10 md:p-16 rounded-3xl border border-primary/10 relative">
              <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground mb-8 relative z-10">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="font-bold text-lg text-primary">— {caseStudy.testimonial.author}</div>
            </div>
          </section>

          {/* 9. Business Impact */}
          <section className="px-4 md:px-8 mb-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Long-term Business Impact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudy.businessImpact.map((impact, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-lg font-medium">{impact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 10. CTA */}
          <section className="px-4 md:px-8 mt-24">
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-muted p-12 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold">Need a similar solution?</h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your project and explore how we can deliver measurable results for your business.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-primary">
                <Link to="/estimate">
                  Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
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

export default CaseStudyDetails;
