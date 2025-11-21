import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, X, Send, Calendar, Clock, User, Mail, Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { bookAppointment, getAvailableTimeSlots, type Appointment } from "@/lib/appointmentService";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const AIChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm KlyroSoft's AI assistant. I can help you learn about our company, book appointments, answer questions about our AI services, or provide information about AI agents and workflows. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [bookingMode, setBookingMode] = useState(false);
  const [appointmentData, setAppointmentData] = useState<Partial<Appointment>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  const handleAppointmentBooking = async () => {
    if (!appointmentData.name || !appointmentData.email || !appointmentData.date || !appointmentData.time) {
      addMessage("Please fill in all required fields (name, email, date, and time).", "bot");
      return;
    }

    try {
      addMessage("Booking your appointment...", "bot");
      simulateTyping();

      await bookAppointment(appointmentData as Appointment);

      addMessage(
        `Great! Your appointment has been booked for ${appointmentData.date} at ${appointmentData.time}. We'll send a confirmation email to ${appointmentData.email}. Is there anything else I can help you with?`,
        "bot"
      );

      toast({
        title: "Appointment Booked!",
        description: "We'll send you a confirmation email shortly.",
      });

      setBookingMode(false);
      setAppointmentData({});
    } catch (error) {
      addMessage("I'm sorry, there was an error booking your appointment. Please try again or contact us directly at klyrosoft1@gmail.com", "bot");
    }
  };

  const processMessage = async (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for company/about inquiries
    if (
      lowerMessage.includes("about") ||
      lowerMessage.includes("company") ||
      lowerMessage.includes("who are you") ||
      lowerMessage.includes("what is klyrosoft") ||
      lowerMessage.includes("tell me about")
    ) {
      addMessage(
        "KlyroSoft is a leading AI solutions agency specializing in AI agents and intelligent workflows. We've been transforming businesses for over 5 years with:\n\n📊 **Our Stats:**\n• 500+ Satisfied Clients\n• 150+ Projects Completed\n• 25+ Countries Served\n• 5+ Years of Experience\n\n🎯 **Our Mission:**\nTo empower businesses with intelligent AI agents and automated workflows that drive growth and innovation.\n\n💡 **What We Do:**\nWe build custom AI agents—from voice assistants to image and video generation systems—that automate business processes and transform operations.\n\nWould you like to know more about our services or book a consultation?",
        "bot"
      );
      return;
    }

    // Check for appointment booking intent
    if (
      lowerMessage.includes("appointment") ||
      lowerMessage.includes("book") ||
      lowerMessage.includes("schedule") ||
      lowerMessage.includes("meeting") ||
      lowerMessage.includes("consultation")
    ) {
      setBookingMode(true);
      addMessage(
        "I'd be happy to help you book an appointment! Let me gather some information. What's your name?",
        "bot"
      );
      return;
    }

    // Check for service inquiries
    if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("what do you do") ||
      lowerMessage.includes("what services") ||
      lowerMessage.includes("offer")
    ) {
      addMessage(
        "We specialize in AI agents and workflows! Here are our core services:\n\n🤖 **AI Agents & Workflows (Our MVP):**\n• AI Voice Assistants - Natural language voice-powered assistants\n• AI Image Generation - Text-to-image AI agents\n• AI Video Generation - Automated video creation\n• AI Chatbots - Intelligent conversational AI\n• AI Workflow Automation - Process automation with AI agents\n• AI Content Generation - Automated content creation\n• AI Data Analysis - ML models for analytics\n• AI Document Processing - OCR and intelligent extraction\n\n💻 **Additional Services:**\n• Web Development\n• Mobile App Development\n• Backend & DevOps\n• SaaS Platforms\n• Digital Marketing\n\nWould you like to know more about any specific service?",
        "bot"
      );
      return;
    }

    // Check for AI-specific inquiries
    if (
      lowerMessage.includes("ai agent") ||
      lowerMessage.includes("ai workflow") ||
      lowerMessage.includes("artificial intelligence")
    ) {
      addMessage(
        "AI Agents and Workflows are our specialty! Here's what we offer:\n\n🤖 **AI Agents:**\nCustom-built AI agents that automate workflows and enhance productivity. From voice assistants to creative content generation, we build intelligent solutions tailored to your needs.\n\n⚡ **AI Workflow Automation:**\nIntelligent workflow automation using AI agents that streamline business processes, reduce manual work, and increase efficiency. This is our MVP solution that transforms how businesses operate.\n\n📈 **Benefits:**\n• 60% cost reduction (Voice Assistants)\n• 1000+ images/day (Image Generation)\n• 90% time reduction (Video Creation)\n• 500+ tasks automated (Workflow Automation)\n\nWould you like to see examples of our AI projects or book a consultation?",
        "bot"
      );
      return;
    }

    // Check for portfolio/projects
    if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("portfolio") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("example")
    ) {
      addMessage(
        "We've completed 150+ successful projects! Here are some examples:\n\n🎯 **AI Voice Assistant** - 60% cost reduction for customer service\n🎨 **AI Image Generation** - 1000+ images/day automated production\n🎬 **AI Video Creation** - 90% time reduction in video production\n⚡ **AI Workflow Automation** - 500+ daily tasks automated\n💬 **AI Customer Support** - 80% auto-resolution rate\n📄 **AI Document Processing** - 99% accuracy rate\n\nWe've helped 500+ businesses across 25+ countries transform their operations with AI.\n\nWould you like to see our full portfolio or discuss a project for your business?",
        "bot"
      );
      return;
    }

    // Check for pricing
    if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("how much") ||
      lowerMessage.includes("pricing")
    ) {
      addMessage(
        "Pricing varies based on project complexity and requirements:\n\n💰 **Our Approach:**\n• Competitive pricing for new clients\n• Transparent estimates with detailed breakdowns\n• Flexible payment options\n• Custom quotes for AI projects\n\n📊 **Get an Estimate:**\nYou can use our Project Estimate Calculator at /estimate to get an instant quote, or I can help you book a free consultation to discuss your specific needs and get a detailed proposal.\n\nWould you like to calculate an estimate or schedule a consultation?",
        "bot"
      );
      return;
    }

    // Check for contact info
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("reach") ||
      lowerMessage.includes("address")
    ) {
      addMessage(
        "You can reach us through multiple channels:\n\n📧 **Email:** klyrosoft1@gmail.com\n📱 **Phone:** Available upon request\n🌐 **Website:** www.klyrosoft.com\n💬 **Chat:** I'm here 24/7 to help!\n🎤 **Voice:** Use our voice assistant for hands-free assistance\n\n📍 **Location:**\nServing clients globally across 25+ countries\n\n⏰ **Response Time:**\nWe typically respond within 24 hours. For urgent matters, book an appointment and we'll prioritize your request.\n\nWould you like to book an appointment to discuss your project?",
        "bot"
      );
      return;
    }

    // Check for experience/expertise
    if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("expertise") ||
      lowerMessage.includes("years") ||
      lowerMessage.includes("how long")
    ) {
      addMessage(
        "KlyroSoft has been at the forefront of AI solutions for over 5 years:\n\n📅 **Our Journey:**\n• 5+ Years of Experience\n• 500+ Satisfied Clients\n• 150+ Projects Completed\n• 25+ Countries Served\n\n🏆 **Our Expertise:**\n• AI Agent Development\n• Workflow Automation\n• Machine Learning\n• Natural Language Processing\n• Computer Vision\n• Full-Stack Development\n• Cloud Infrastructure\n\n💼 **Industries We Serve:**\nWe've worked with businesses across various industries including e-commerce, healthcare, finance, education, and more.\n\nWould you like to know more about our specific capabilities or see case studies?",
        "bot"
      );
      return;
    }

    // Check for help/greeting
    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("help") ||
      lowerMessage.includes("what can you do")
    ) {
      addMessage(
        "Hello! I'm here to help you learn about KlyroSoft and our AI solutions. I can:\n\n✅ Tell you about our company and services\n✅ Explain our AI agents and workflows\n✅ Show you examples of our work\n✅ Help you book an appointment\n✅ Provide pricing information\n✅ Answer questions about our expertise\n\nJust ask me anything! For example:\n• \"Tell me about KlyroSoft\"\n• \"What services do you offer?\"\n• \"Show me your AI projects\"\n• \"Book an appointment\"\n\nHow can I assist you today?",
        "bot"
      );
      return;
    }

    // Default response
    addMessage(
      "I understand you're asking about: " + userMessage + ". I can help you with information about KlyroSoft, our AI services, booking appointments, or pricing. Could you provide more details, or would you like me to tell you about our company and services?",
      "bot"
    );
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    addMessage(input, "user");
    const userInput = input;
    setInput("");
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(async () => {
      setIsTyping(false);
      await processMessage(userInput);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const timeSlots = appointmentData.date ? getAvailableTimeSlots(appointmentData.date) : [];

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 rounded-full bg-gradient-primary shadow-elegant hover:shadow-hover transition-all"
            size="lg"
          >
            <Bot className="w-8 h-8 text-white" />
          </Button>
        </motion.div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="shadow-elegant border-2 border-primary/20 h-[600px] flex flex-col">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    <CardTitle className="text-lg">AI Assistant</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsOpen(false);
                      setBookingMode(false);
                      setAppointmentData({});
                    }}
                    className="h-8 w-8 p-0 hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-0">
                  Online • Ready to help
                </Badge>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user"
                            ? "bg-primary text-white"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Appointment Booking Form */}
                  {bookingMode && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3"
                    >
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Appointment Details
                      </h4>

                      <div className="space-y-2">
                        <div>
                          <Label className="text-xs">Name *</Label>
                          <Input
                            placeholder="Your name"
                            value={appointmentData.name || ""}
                            onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                            className="h-8 text-sm"
                          />
                        </div>

                        <div>
                          <Label className="text-xs">Email *</Label>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={appointmentData.email || ""}
                            onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                            className="h-8 text-sm"
                          />
                        </div>

                        <div>
                          <Label className="text-xs">Phone</Label>
                          <Input
                            placeholder="Your phone"
                            value={appointmentData.phone || ""}
                            onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                            className="h-8 text-sm"
                          />
                        </div>

                        <div>
                          <Label className="text-xs">Service</Label>
                          <Select
                            value={appointmentData.service || ""}
                            onValueChange={(value) => setAppointmentData({ ...appointmentData, service: value })}
                          >
                            <SelectTrigger className="h-8 text-sm">
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="AI Workflow Automation">AI Workflow Automation</SelectItem>
                              <SelectItem value="AI Voice Assistant">AI Voice Assistant</SelectItem>
                              <SelectItem value="AI Image Generation">AI Image Generation</SelectItem>
                              <SelectItem value="AI Video Generation">AI Video Generation</SelectItem>
                              <SelectItem value="AI Chatbot">AI Chatbot</SelectItem>
                              <SelectItem value="Custom AI Agent">Custom AI Agent</SelectItem>
                              <SelectItem value="Consultation">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="text-xs">Date *</Label>
                          <Input
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            value={appointmentData.date || ""}
                            onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                            className="h-8 text-sm"
                          />
                        </div>

                        {appointmentData.date && (
                          <div>
                            <Label className="text-xs">Time *</Label>
                            <Select
                              value={appointmentData.time || ""}
                              onValueChange={(value) => setAppointmentData({ ...appointmentData, time: value })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((slot) => (
                                  <SelectItem key={slot} value={slot}>
                                    {slot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <Button
                          onClick={handleAppointmentBooking}
                          className="w-full h-8 text-sm bg-gradient-primary"
                          size="sm"
                        >
                          <Calendar className="w-3 h-3 mr-2" />
                          Book Appointment
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                {!bookingMode && (
                  <div className="border-t p-3">
                    <div className="flex gap-2">
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1"
                      />
                      <Button onClick={handleSend} size="sm" className="bg-gradient-primary">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatAgent;

