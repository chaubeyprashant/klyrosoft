import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Sparkles, Quote, Rocket, Target } from "lucide-react";

const Founder = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const highlights = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "AI-first execution",
      description: "Practical AI agents and workflows that ship fast and scale."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Outcome-driven delivery",
      description: "We build what moves metrics—speed, cost, and customer experience."
    }
  ];

  return (
    <section id="founder" className="py-20 bg-background" role="region" aria-labelledby="founder-heading">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto max-w-3xl space-y-6 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Know Our Founder</span>
          </div>
          <h2 id="founder-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            The mind behind <span className="bg-gradient-primary bg-clip-text text-transparent">KlyroSoft</span>
          </h2>
          <p className="text-foreground/80 md:text-xl/relaxed">
            A builder-first approach—combining engineering, design, and AI to create products that feel effortless and deliver real business value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-card border-0 shadow-card overflow-hidden">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-4">
                <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: "spring", stiffness: 260 }}>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="" alt="Founder avatar" />
                    <AvatarFallback>KS</AvatarFallback>
                  </Avatar>
                </motion.div>
                <div className="text-left">
                  <CardTitle className="text-2xl text-foreground">KlyroSoft Founder</CardTitle>
                  <p className="text-sm text-foreground/70">Founder &amp; CEO</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      AI Agents
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Workflow Automation
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Product Engineering
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="relative rounded-xl bg-background/50 border border-border p-5">
                  <Quote className="w-5 h-5 text-primary absolute -top-3 left-5 bg-background rounded-full p-0.5" />
                  <p className="text-foreground/80 leading-relaxed">
                    “Our goal is simple: build AI systems that are useful on day one—then iterate into something world-class.
                    We obsess over clarity, speed, and measurable outcomes.”
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-xl bg-background/40 border border-border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-primary">{item.icon}</div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Button
                    type="button"
                    onClick={() => scrollToSection("portfolio")}
                    className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
                  >
                    View Portfolio
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    asChild
                    className="border-border"
                  >
                    <a
                      href="https://www.linkedin.com/company/klyrosoft/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open LinkedIn profile in a new tab"
                    >
                      LinkedIn
                      <Linkedin className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <Card className="h-full bg-gradient-primary text-primary-foreground border-0 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mt-20 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full -mr-28 -mb-28 blur-3xl" />
              <CardContent className="p-8 relative z-10 h-full flex flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">What we believe</p>
                  <h3 className="text-3xl font-bold mb-4">Great products feel inevitable.</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    We combine strategy, design, and engineering with AI to deliver experiences users love—while keeping implementation
                    clean, maintainable, and fast.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { label: "Craft", value: "Design-led" },
                    { label: "Speed", value: "Ship weekly" },
                    { label: "Trust", value: "Transparent" }
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/10 border border-white/15 p-4 text-center">
                      <p className="text-xs text-primary-foreground/80">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
