import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles, Code2, Paintbrush, Cpu, ShieldCheck } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  tags: string[];
  avatar?: string;
};

const team: TeamMember[] = [
  { name: "AI Engineer", role: "Agents & Workflows", tags: ["LLMs", "Automation", "RAG"] },
  { name: "Full‑Stack Developer", role: "Web & SaaS", tags: ["React", "Node", "APIs"] },
  { name: "UI/UX Designer", role: "Product Design", tags: ["UX", "UI", "Design Systems"] },
  { name: "DevOps Engineer", role: "Cloud & Reliability", tags: ["CI/CD", "Security", "Scaling"] }
];

const iconForRole = (role: string) => {
  const lower = role.toLowerCase();
  if (lower.includes("design")) return <Paintbrush className="w-5 h-5" />;
  if (lower.includes("devops") || lower.includes("reliability")) return <ShieldCheck className="w-5 h-5" />;
  if (lower.includes("ai") || lower.includes("agent") || lower.includes("workflow")) return <Cpu className="w-5 h-5" />;
  return <Code2 className="w-5 h-5" />;
};

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="team" className="py-20 bg-background" role="region" aria-labelledby="team-heading">
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
            <span className="text-sm font-medium text-primary">Team Members</span>
          </div>
          <h2 id="team-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">team</span>
          </h2>
          <p className="text-foreground/80 md:text-xl/relaxed">
            A cross‑functional crew of AI engineers, developers, designers, and reliability specialists—built to deliver end‑to‑end.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <motion.div key={member.name + member.role} variants={itemVariants}>
              <Card className="h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="flex flex-row items-center gap-4">
                  <motion.div whileHover={{ scale: 1.08, rotate: 2 }} transition={{ type: "spring", stiffness: 280 }}>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar ?? ""} alt={`${member.name} avatar`} />
                      <AvatarFallback>{member.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="min-w-0">
                    <CardTitle className="text-base text-foreground truncate">{member.name}</CardTitle>
                    <p className="text-sm text-foreground/70 truncate">{member.role}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    {iconForRole(member.role)}
                    <p className="text-sm font-medium text-foreground">Core focus</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
