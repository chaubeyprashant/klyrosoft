import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { careerService } from "@/lib/careerService";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  resume: z.instanceof(File),
  serviceOfInterest: z.string().optional(),
});

const Career = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      resume: undefined,
      serviceOfInterest: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Ensure all required fields are present
      if (!values.name || !values.email || !values.resume) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      await careerService.submitResume({
        name: values.name,
        email: values.email,
        resume: values.resume,
        serviceOfInterest: values.serviceOfInterest,
      });
      
      toast({
        title: "Resume Submitted",
        description: "Thank you for your interest in Klyrosoft!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was an error submitting your resume. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="career" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Team
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are always looking for talented individuals to join our team. If you are passionate about technology and want to make a difference, we would love to hear from you.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resume</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceOfInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service/Project of Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service or AI project you're interested in" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ai-voice-assistant">🤖 AI Voice Assistant</SelectItem>
                        <SelectItem value="ai-image-generation">🎨 AI Image Generation</SelectItem>
                        <SelectItem value="ai-video-generation">🎬 AI Video Generation</SelectItem>
                        <SelectItem value="ai-chatbot">💬 AI Chatbot</SelectItem>
                        <SelectItem value="ai-workflow-automation">⚡ AI Workflow Automation</SelectItem>
                        <SelectItem value="ai-content-generation">✍️ AI Content Generation</SelectItem>
                        <SelectItem value="ai-data-analysis">📊 AI Data Analysis</SelectItem>
                        <SelectItem value="ai-document-processing">📄 AI Document Processing</SelectItem>
                        <SelectItem value="custom-ai-agent">🤖 Custom AI Agent</SelectItem>
                        <SelectItem value="web-development">💻 Web Development</SelectItem>
                        <SelectItem value="mobile-development">📱 Mobile App Development</SelectItem>
                        <SelectItem value="backend-devops">⚙️ Backend & DevOps</SelectItem>
                        <SelectItem value="saas-platforms">☁️ SaaS Platforms</SelectItem>
                        <SelectItem value="digital-marketing">📈 Digital Marketing</SelectItem>
                        <SelectItem value="general">🌐 General Interest</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Career;