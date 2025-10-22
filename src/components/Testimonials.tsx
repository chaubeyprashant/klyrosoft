import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are proud to have worked with some of the most innovative companies in the world.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;