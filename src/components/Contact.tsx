import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const validateWeb3FormsConfig = () => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Missing Web3Forms environment variable: VITE_WEB3FORMS_ACCESS_KEY");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    if (!validateWeb3FormsConfig()) {
      const message = "Web3Forms access key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY.";
      toast({
        title: "Email service unavailable",
        description: message,
        variant: "destructive",
      });
      setSubmitStatus({ type: "error", message });
      setIsSubmitting(false);
      return;
    }
  
    try {
      const web3FormData = new FormData();
      web3FormData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("phone", formData.phone || "Not provided");
      web3FormData.append("service", formData.service || "Not specified");
      web3FormData.append("message", formData.message);
      web3FormData.append("subject", `New Contact Form Submission - ${formData.service || "General Inquiry"}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const result: { success?: boolean; message?: string } = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit form via Web3Forms.");
      }
  
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. We'll get back to you within 24 hours.",
      });
  
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
      setSubmitStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your component remains the same...
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["klyrosoft1@gmail.com"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91-7869861631"]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["4795 Regent Blvd, Irving, TX 75063, USA"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon - Fri: 9AM - 6PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Great Together</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service/Project of Interest</Label>
                  <Select value={formData.service} onValueChange={handleSelectChange}>
                    <SelectTrigger className="border-border focus:border-primary">
                      <SelectValue placeholder="Select a service or AI project" />
                    </SelectTrigger>
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
                      <SelectItem value="branding-design">🎨 Branding & Design</SelectItem>
                      <SelectItem value="photography">📸 Photography</SelectItem>
                      <SelectItem value="other">🌐 Other / General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-border focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get Started"
                  )}
                </Button>
                {isSubmitting && (
                  <p className="text-sm text-foreground/70 text-center mt-2">Sending...</p>
                )}
                {!isSubmitting && submitStatus.type === "success" && (
                  <p className="text-sm text-green-500 text-center mt-2">{submitStatus.message}</p>
                )}
                {!isSubmitting && submitStatus.type === "error" && (
                  <p className="text-sm text-red-500 text-center mt-2">{submitStatus.message}</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Whether you need cutting-edge technology solutions, captivating design, 
                  or powerful marketing strategies, we're here to turn your vision into reality.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-3 flex justify-center">
                      {info.icon}
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-foreground/70">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-background/50 border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-foreground">Quick Response Guarantee</h4>
                <p className="text-sm text-foreground/70">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;