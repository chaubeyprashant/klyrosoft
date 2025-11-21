import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator, Clock, DollarSign, CheckCircle, AlertCircle, User, Mail, Phone, Building, Bot, Sparkles, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { 
  projectFeatures, 
  calculateProjectEstimate, 
  submitEstimateRequest,
  type EstimateRequest,
  type EstimateResult
} from "@/lib/estimateService";


const EstimateCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<EstimateRequest>({
    projectType: "",
    complexity: "",
    features: [],
    timeline: "",
    budget: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const calculateEstimate = () => {
    if (!formData.projectType || !formData.complexity) {
      toast({
        title: "Missing Information",
        description: "Please select project type and complexity level.",
        variant: "destructive"
      });
      return;
    }

    try {
      const estimateResult = calculateProjectEstimate(formData);
      setEstimate(estimateResult);
      setShowUserForm(true);
    } catch (error) {
      console.error("Error calculating estimate:", error);
      toast({
        title: "Calculation Error",
        description: "There was an issue calculating your estimate. Please try again.",
        variant: "destructive"
      });
    }
  };

  const submitEstimate = async () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Contact Information Required",
        description: "Please provide your name and email to receive the estimate.",
        variant: "destructive"
      });
      return;
    }

    if (!estimate) {
      toast({
        title: "No Estimate Available",
        description: "Please calculate an estimate first.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitEstimateRequest(formData, estimate);

      toast({
        title: "Estimate Submitted Successfully!",
        description: "We'll contact you within 24 hours with a detailed proposal.",
      });

      // Reset form
      setFormData({
        projectType: "",
        complexity: "",
        features: [],
        timeline: "",
        budget: "",
        description: "",
        name: "",
        email: "",
        phone: "",
        company: ""
      });
      setEstimate(null);
      setShowUserForm(false);

    } catch (error) {
      console.error("Error submitting estimate:", error);
      toast({
        title: "Submission Error",
        description: error instanceof Error ? error.message : "There was an issue submitting your estimate. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Calculator className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Project Estimate Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Get an instant estimate for your project. Tell us about your requirements and we'll provide you with a detailed cost and timeline estimate.
          </p>
          
          {/* AI Projects Info Section */}
          <motion.div 
            className="max-w-4xl mx-auto mt-8 p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 rounded-xl border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Specializing in AI Solutions</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
              We specialize in building AI agents and intelligent workflows. Check out our AI project examples below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                { icon: Bot, title: "AI Voice Assistant", desc: "24/7 customer support automation" },
                { icon: Sparkles, title: "AI Image/Video Gen", desc: "Automated content creation" },
                { icon: Workflow, title: "AI Workflows", desc: "Intelligent process automation" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-background/50 rounded-lg border border-primary/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* AI Projects Showcase */}
          <motion.div 
            className="mb-8 p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-xl border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Recent AI Projects</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Here are some examples of AI projects we've delivered:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "AI Voice Assistant", result: "60% cost reduction", icon: "🤖" },
                { title: "AI Image Generation", result: "1000+ images/day", icon: "🎨" },
                { title: "AI Video Creation", result: "90% time reduction", icon: "🎬" },
                { title: "AI Workflow Automation", result: "500+ tasks automated", icon: "⚡" }
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-background rounded-lg border border-primary/10 flex items-center gap-3"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">{project.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Project Details
              </CardTitle>
              <CardDescription>
                Help us understand your project requirements to provide an accurate estimate.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Project Type */}
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type *</Label>
                <Select value={formData.projectType} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, projectType: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your project type" />
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
                    <SelectItem value="ai-agent">🤖 Custom AI Agent</SelectItem>
                    <SelectItem value="website">🌐 Business Website</SelectItem>
                    <SelectItem value="web-app">💻 Web Application</SelectItem>
                    <SelectItem value="mobile-app">📱 Mobile App</SelectItem>
                    <SelectItem value="e-commerce">🛒 E-commerce Store</SelectItem>
                    <SelectItem value="custom-software">⚙️ Custom Software</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Complexity */}
              <div className="space-y-2">
                <Label htmlFor="complexity">Project Complexity *</Label>
                <Select value={formData.complexity} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, complexity: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select complexity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Simple - Basic functionality</SelectItem>
                    <SelectItem value="medium">Medium - Standard features</SelectItem>
                    <SelectItem value="complex">Complex - Advanced features</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <Label>Required Features</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectFeatures.map((feature) => (
                    <div key={feature.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <Checkbox
                        id={feature.id}
                        checked={formData.features.includes(feature.id)}
                        onCheckedChange={() => handleFeatureToggle(feature.id)}
                      />
                      <div className="flex-1">
                        <Label htmlFor={feature.id} className="font-medium cursor-pointer">
                          {feature.name}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feature.description}
                        </p>
                        <Badge variant="outline" className="mt-2">
                          ~{feature.baseHours}h base
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Preference */}
              <div className="space-y-2">
                <Label htmlFor="timeline">Preferred Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, timeline: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you need this completed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="2-months">Within 2 months</SelectItem>
                    <SelectItem value="3-months">Within 3 months</SelectItem>
                    <SelectItem value="flexible">Flexible timeline</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, budget: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="What's your budget range?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-plus">$50,000+</SelectItem>
                    <SelectItem value="discuss">Let's discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Tell us more about your project, specific requirements, or any questions you have..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                />
              </div>

              <Button 
                onClick={calculateEstimate}
                className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300"
                size="lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Estimate
              </Button>
            </CardContent>
          </Card>

          {/* Estimate Results */}
          {estimate && (
            <Card className="mt-8 shadow-elegant border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  Your Project Estimate
                </CardTitle>
                <CardDescription>
                  Based on your requirements, here's our preliminary estimate:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{estimate.hours}</div>
                    <div className="text-sm text-muted-foreground">Estimated Hours</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-lg">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">
                      ${estimate.cost.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Estimated Cost</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-lg">
                    <AlertCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{estimate.timeline}</div>
                    <div className="text-sm text-muted-foreground">Timeline</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6 border border-green-200">
                  <p className="text-sm text-foreground">
                    <strong className="text-green-700">🎉 New Client Special:</strong> This estimate includes our competitive new client pricing! 
                    We've reduced our rates to help you get started with quality development at an affordable cost.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Note:</strong> Final quote may vary based on specific requirements discussed during consultation.
                  </p>
                </div>

                {/* Pricing Breakdown */}
                <div className="bg-muted/30 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Pricing Breakdown:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base Project Hours:</span>
                      <span>{estimate.breakdown.baseHours}h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Additional Features:</span>
                      <span>{Math.round(estimate.breakdown.featureHours)}h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Complexity Multiplier:</span>
                      <span>{estimate.breakdown.complexityMultiplier}x</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total Hours:</span>
                      <span>{estimate.hours}h</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>New Client Rate:</span>
                      <span>${estimate.breakdown.hourlyRate}/hour</span>
                    </div>
                  </div>
                </div>

                {showUserForm && (
                  <>
                    <Separator className="my-6" />
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2">Get Your Detailed Proposal</h3>
                        <p className="text-muted-foreground">
                          Provide your contact information to receive a detailed proposal and schedule a free consultation.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          />
                        </div>
                      </div>

                      <Button 
                        onClick={submitEstimate}
                        disabled={isSubmitting}
                        className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <User className="w-5 h-5 mr-2" />
                            Get Detailed Proposal
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstimateCalculator;
