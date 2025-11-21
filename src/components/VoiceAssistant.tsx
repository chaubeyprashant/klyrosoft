import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, X, Volume2, Calendar, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { bookAppointment, getAvailableTimeSlots, type Appointment } from "@/lib/appointmentService";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [appointmentData, setAppointmentData] = useState<Partial<Appointment>>({});
  const [bookingMode, setBookingMode] = useState(false);
  const [currentStep, setCurrentStep] = useState<"idle" | "listening" | "processing" | "booking">("idle");
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load voices immediately
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      // Force voice loading
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    // Initialize Speech Recognition
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
        processVoiceCommand(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
        setCurrentStep("idle");
        speak("Sorry, I didn't catch that. Could you please try again?");
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // More natural voice settings
      utterance.rate = 0.85; // Slightly slower for more natural speech
      utterance.pitch = 1.1; // Slightly higher pitch for more human-like sound
      utterance.volume = 1; // Full volume
      
      // Try to use a more natural voice
      const voices = window.speechSynthesis.getVoices();
      
      // Prefer female voices (often sound more natural) or high-quality voices
      const preferredVoices = [
        'Samantha', // macOS
        'Karen', // macOS
        'Google UK English Female', // Chrome
        'Microsoft Zira - English (United States)', // Windows
        'Microsoft Hazel - English (Great Britain)', // Windows
        'Alex', // macOS
        'Google US English Female', // Chrome
        'en-US-Neural2-F', // Google Cloud TTS
        'en-US-Wavenet-F', // Google Cloud TTS
      ];
      
      // Find a preferred voice
      let selectedVoice = voices.find(voice => 
        preferredVoices.some(pref => voice.name.includes(pref))
      );
      
      // If no preferred voice, try to find a female voice
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('female') || 
          voice.name.toLowerCase().includes('woman') ||
          voice.lang.startsWith('en')
        );
      }
      
      // If still no voice, use default but prefer English
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en')) || voices[0];
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      }
      
      // Process text for more natural speech with proper pauses
      const processedText = text
        // Add pauses after sentences
        .replace(/\.\s+/g, '. ')
        .replace(/\?\s+/g, '? ')
        .replace(/!\s+/g, '! ')
        // Add slight pauses after commas
        .replace(/,\s+/g, ', ')
        // Add pauses after colons
        .replace(/:\s+/g, ': ')
        // Break up long sentences
        .replace(/\s+/g, ' ')
        .trim();
      
      utterance.text = processedText;
      
      // Add event listeners for better control
      utterance.onstart = () => {
        setCurrentStep("processing");
      };
      
      utterance.onend = () => {
        setCurrentStep("idle");
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        setCurrentStep("idle");
      };
      
      // Handle voice loading
      if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          const updatedVoices = window.speechSynthesis.getVoices();
          const voice = updatedVoices.find(v => 
            preferredVoices.some(pref => v.name.includes(pref))
          ) || updatedVoices.find(v => v.lang.startsWith('en')) || updatedVoices[0];
          if (voice) {
            utterance.voice = voice;
            utterance.lang = voice.lang;
          }
          window.speechSynthesis.speak(utterance);
        };
      } else {
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Voice Recognition Not Available",
        description: "Your browser doesn't support voice recognition. Please use the chat assistant instead.",
        variant: "destructive",
      });
      return;
    }

    setIsListening(true);
    setCurrentStep("listening");
    setTranscript("");
    speak("I'm listening. How can I help you today?");
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
    setCurrentStep("idle");
  };

  const processVoiceCommand = async (command: string) => {
    const lowerCommand = command.toLowerCase();
    setCurrentStep("processing");

    // Check for company/about inquiries
    if (
      lowerCommand.includes("about") ||
      lowerCommand.includes("company") ||
      lowerCommand.includes("who are you") ||
      lowerCommand.includes("what is klyrosoft") ||
      lowerCommand.includes("tell me about")
    ) {
      speak(
        "KlyroSoft is a leading AI solutions agency, specializing in AI agents and intelligent workflows. We've been transforming businesses for over 5 years, with 500 plus satisfied clients, and 150 plus projects completed across 25 plus countries. Our mission is to empower businesses with intelligent AI agents and automated workflows. Would you like to know more about our services, or book a consultation?"
      );
      setCurrentStep("idle");
      return;
    }

    // Check for service inquiries
    if (
      lowerCommand.includes("service") ||
      lowerCommand.includes("what do you do") ||
      lowerCommand.includes("what services")
    ) {
      speak(
        "We specialize in AI agents and workflows. Our services include: AI Voice Assistants, AI Image and Video Generation, AI Workflow Automation, AI Chatbots, and Custom AI Agent Development. We also offer web development, mobile apps, and digital marketing services. Would you like to know more about any specific service?"
      );
      setCurrentStep("idle");
      return;
    }

    // Check for appointment booking
    if (
      lowerCommand.includes("appointment") ||
      lowerCommand.includes("book") ||
      lowerCommand.includes("schedule") ||
      lowerCommand.includes("meeting") ||
      lowerCommand.includes("consultation")
    ) {
      setBookingMode(true);
      setCurrentStep("booking");
      speak("I'd be happy to help you book an appointment. Let's start with your name. Please tell me your full name.");
      return;
    }

    // Extract name
    if (bookingMode && currentStep === "booking" && !appointmentData.name) {
      const nameMatch = command.match(/(?:my name is|i'm|i am|call me)\s+([a-z\s]+)/i) || command.match(/^([a-z\s]+)$/i);
      if (nameMatch) {
        const name = nameMatch[1].trim();
        setAppointmentData({ ...appointmentData, name });
        speak(`Nice to meet you, ${name}. What's your email address?`);
        return;
      }
    }

    // Extract email
    if (bookingMode && appointmentData.name && !appointmentData.email) {
      const emailMatch = command.match(/([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/i);
      if (emailMatch) {
        const email = emailMatch[1];
        setAppointmentData({ ...appointmentData, email });
        speak(`Got it. Your email is ${email}. What service are you interested in?`);
        return;
      }
    }

    // Extract service
    if (bookingMode && appointmentData.email && !appointmentData.service) {
      const services = [
        "ai workflow automation",
        "ai voice assistant",
        "ai image generation",
        "ai video generation",
        "ai chatbot",
        "custom ai agent",
        "consultation",
      ];
      const foundService = services.find((s) => lowerCommand.includes(s));
      if (foundService) {
        const service = foundService
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        setAppointmentData({ ...appointmentData, service });
        speak(`Perfect. You're interested in ${service}. What date would you like to schedule? Please say the date.`);
        return;
      }
    }

    // Extract date
    if (bookingMode && appointmentData.service && !appointmentData.date) {
      // Simple date parsing - in production, use a proper NLP library
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (lowerCommand.includes("today")) {
        setAppointmentData({ ...appointmentData, date: today.toISOString().split("T")[0] });
        speak(`Great. Today works. What time would you prefer?`);
        return;
      } else if (lowerCommand.includes("tomorrow")) {
        setAppointmentData({ ...appointmentData, date: tomorrow.toISOString().split("T")[0] });
        speak(`Perfect. Tomorrow works. What time would you prefer?`);
        return;
      }
    }

    // Extract time
    if (bookingMode && appointmentData.date && !appointmentData.time) {
      const timeMatch = command.match(/(\d{1,2})\s*(?:am|pm|:00|:30)/i);
      if (timeMatch) {
        let hour = parseInt(timeMatch[1]);
        const isPM = lowerCommand.includes("pm") || (hour < 12 && lowerCommand.includes("pm"));
        if (isPM && hour !== 12) hour += 12;
        if (!isPM && hour === 12) hour = 0;
        const time = `${hour.toString().padStart(2, "0")}:00`;
        setAppointmentData({ ...appointmentData, time });
        speak(`Perfect. I have you scheduled for ${appointmentData.date} at ${time}. Should I book this appointment?`);
        return;
      }
    }

    // Confirm booking
    if (bookingMode && lowerCommand.includes("yes") || lowerCommand.includes("confirm") || lowerCommand.includes("book it")) {
      if (appointmentData.name && appointmentData.email && appointmentData.date && appointmentData.time) {
        handleBookAppointment();
        return;
      }
    }

    // Default response
    speak("I'm sorry, I didn't understand that. Could you please repeat, or say 'book appointment' to schedule a meeting?");
    setCurrentStep("idle");
  };

  const handleBookAppointment = async () => {
    try {
      speak("Booking your appointment now. Please wait a moment.");
      await bookAppointment(appointmentData as Appointment);
      speak(
        `Great! Your appointment has been booked for ${appointmentData.date} at ${appointmentData.time}. We'll send a confirmation email to ${appointmentData.email}. Is there anything else I can help you with?`
      );

      toast({
        title: "Appointment Booked!",
        description: "We'll send you a confirmation email shortly.",
      });

      setBookingMode(false);
      setAppointmentData({});
      setCurrentStep("idle");
    } catch (error) {
      speak("I'm sorry, there was an error booking your appointment. Please try again, or contact us directly.");
    }
  };

  const timeSlots = appointmentData.date ? getAvailableTimeSlots(appointmentData.date) : [];

  return (
    <>
      {/* Voice Assistant Button */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-6 left-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => {
              setIsOpen(true);
              speak("Hello! I'm KlyroSoft's voice assistant. I can help you learn about our company, book appointments, or answer questions about our AI services. Say 'tell me about KlyroSoft', or 'book appointment' to get started.");
            }}
            className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-elegant hover:shadow-hover transition-all"
            size="lg"
          >
            <Mic className="w-8 h-8 text-white" />
          </Button>
        </motion.div>
      )}

      {/* Voice Assistant Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 left-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="shadow-elegant border-2 border-purple-500/20 h-[500px] flex flex-col">
              <CardHeader className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-t-lg pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mic className="w-5 h-5" />
                    <CardTitle className="text-lg">Voice Assistant</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsOpen(false);
                      stopListening();
                      setBookingMode(false);
                      setAppointmentData({});
                      setCurrentStep("idle");
                    }}
                    className="h-8 w-8 p-0 hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-0">
                  {isListening ? "Listening..." : currentStep === "processing" ? "Processing..." : "Ready"}
                </Badge>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
                {/* Voice Visualizer */}
                <motion.div
                  className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center"
                  animate={
                    isListening
                      ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }
                      : {}
                  }
                  transition={{ duration: 1, repeat: isListening ? Infinity : 0 }}
                >
                  {isListening ? (
                    <Mic className="w-16 h-16 text-purple-600" />
                  ) : (
                    <MicOff className="w-16 h-16 text-muted-foreground" />
                  )}
                </motion.div>

                {/* Transcript */}
                {transcript && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-muted rounded-lg p-4 max-w-full"
                  >
                    <p className="text-sm text-center">{transcript}</p>
                  </motion.div>
                  )}

                {/* Status Message */}
                <div className="text-center space-y-2">
                  {currentStep === "idle" && (
                    <p className="text-sm text-muted-foreground">Click the microphone to start</p>
                  )}
                  {currentStep === "listening" && (
                    <p className="text-sm font-medium text-purple-600">I'm listening...</p>
                  )}
                  {currentStep === "processing" && (
                    <p className="text-sm font-medium text-purple-600">Processing your request...</p>
                  )}
                  {currentStep === "booking" && (
                    <p className="text-sm font-medium text-purple-600">Booking appointment...</p>
                  )}
                </div>

                {/* Control Buttons */}
                <div className="flex gap-3">
                  {!isListening ? (
                    <Button
                      onClick={startListening}
                      className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      size="lg"
                    >
                      <Mic className="w-5 h-5 mr-2" />
                      Start Listening
                    </Button>
                  ) : (
                    <Button
                      onClick={stopListening}
                      variant="destructive"
                      size="lg"
                    >
                      <MicOff className="w-5 h-5 mr-2" />
                      Stop Listening
                    </Button>
                  )}
                </div>

                {/* Appointment Booking Form (Fallback) */}
                {bookingMode && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3 mt-4"
                  >
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Appointment Details
                    </h4>

                    <div className="space-y-2">
                      <div>
                        <Label className="text-xs">Name</Label>
                        <Input
                          value={appointmentData.name || ""}
                          onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Email</Label>
                        <Input
                          type="email"
                          value={appointmentData.email || ""}
                          onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Date</Label>
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
                          <Label className="text-xs">Time</Label>
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
                        onClick={handleBookAppointment}
                        className="w-full h-8 text-sm bg-gradient-to-br from-purple-500 to-pink-500"
                        size="sm"
                      >
                        <Calendar className="w-3 h-3 mr-2" />
                        Book Appointment
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAssistant;

