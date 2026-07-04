import { Code, Mail, MapPin, Linkedin, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">KlyroSoft</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              KlyroSoft — AI solutions agency specializing in custom AI agents, workflow automation,
              web & mobile development, and SaaS platforms. Founded by Prashant Chaubey in Irving, Texas.{" "}
              <a href="https://klyrosoft.com" className="underline hover:text-white transition-colors">
                klyrosoft.com
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/klyrosoft/" className="text-primary-foreground/60 hover:text-white transition-colors" title="KlyroSoft on LinkedIn" rel="noopener noreferrer" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/prashant-chaubey-dev" className="text-primary-foreground/60 hover:text-white transition-colors" title="Prashant Chaubey — KlyroSoft Founder" rel="noopener noreferrer" target="_blank">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="https://www.freelancer.com/u/klyrosoft" className="text-primary-foreground/60 hover:text-white transition-colors" title="KlyroSoft on Freelancer" rel="noopener noreferrer" target="_blank">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">klyrosoft1@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">4795 Regent Blvd, Irving, TX 75063, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 KlyroSoft. All rights reserved. | AI Agents & Workflow Automation Agency — Irving, TX
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;