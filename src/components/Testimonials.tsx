import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Alex Martin",
    title: "Founder & CEO, NovaTech Labs",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial:
      "Klyrosoft has been a reliable partner in our app journey. Their team understood our requirements perfectly and delivered a flawless cross-platform experience.",
  },
  {
    name: "Priya Kapoor",
    title: "CTO, InnoWave Systems",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial:
      "The professionalism and technical depth of Klyrosoft’s team are exceptional. They helped us scale our mobile product efficiently while maintaining top-notch quality.",
  },
  {
    name: "Michael Torres",
    title: "Product Manager, BrightPath Solutions",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    testimonial:
      "Working with Klyrosoft was a great experience. The communication, code quality, and project management exceeded our expectations from day one.",
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="mx-auto max-w-3xl space-y-6 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are proud to have worked with some of the most innovative companies in the world, helping them transform with AI solutions.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="flex flex-row items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-foreground/70">{testimonial.title}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">{testimonial.testimonial}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;