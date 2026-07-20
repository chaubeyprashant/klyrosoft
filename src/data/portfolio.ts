export interface CaseStudyData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  hero: {
    title: string;
    subtitle: string;
  };
  clientOverview: {
    industry: string;
    location: string;
    size: string;
    duration: string;
    teamSize: string;
  };
  challenge: string[];
  solution: string[];
  techStack: string[];
  process: string[];
  results: {
    metric: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
  };
  businessImpact: string[];
  // Assuming screenshots would be URLs in a real scenario
  screenshots: string[];
}

export const portfolioData: CaseStudyData[] = [
  {
    slug: "healthcare-mobile-app",
    metaTitle: "Healthcare Mobile App Case Study | KlyroSoft",
    metaDescription: "How KlyroSoft helped a healthcare company improve patient engagement with a cross-platform Flutter application, reaching 50M+ users.",
    keywords: "Healthcare App Case Study, Flutter Development Case Study, Mobile App Case Study",
    hero: {
      title: "Healthcare Mobile App Development",
      subtitle: "How KlyroSoft helped a healthcare company improve patient engagement with a high-performance cross-platform Flutter application."
    },
    clientOverview: {
      industry: "Healthcare",
      location: "USA",
      size: "150+ Employees",
      duration: "6 Months",
      teamSize: "5 Developers"
    },
    challenge: [
      "The client had separate Android and iOS applications with inconsistent user experiences.",
      "Maintenance costs were exceedingly high due to dual codebases.",
      "App performance was poor, leading to negative reviews.",
      "Release cycles took months, delaying critical feature updates."
    ],
    solution: [
      "Developed a unified Flutter Mobile Application.",
      "Engineered scalable REST APIs for seamless data synchronization.",
      "Integrated Firebase for real-time data and push notifications.",
      "Implemented a secure, HIPAA-ready payment integration.",
      "Built a seamless Appointment Booking system.",
      "Developed an Admin Analytics Dashboard for staff."
    ],
    techStack: [
      "Flutter", "Dart", "Firebase", "AWS", "Node.js", "PostgreSQL", "Stripe", "GitHub Actions", "Fastlane"
    ],
    process: [
      "Discovery", "UI/UX Design", "Architecture", "Development", "Testing", "Deployment", "Maintenance"
    ],
    results: [
      { metric: "↓ 40%", label: "Faster Load Time" },
      { metric: "↓ 65%", label: "Crash Reduction" },
      { metric: "↑ 25%", label: "User Engagement" },
      { metric: "99.9%", label: "Crash-Free Sessions" },
      { metric: "50M+", label: "App Downloads" }
    ],
    testimonial: {
      quote: "KlyroSoft transformed our outdated mobile application into a modern Flutter app. Development was completed ahead of schedule, communication was excellent, and the app now supports over 50 million active users smoothly.",
      author: "CTO, Healthcare Enterprise (USA)"
    },
    businessImpact: [
      "Reduced development and maintenance costs significantly.",
      "Enabled much faster, unified release cycles.",
      "Provided better scalability for future feature rollouts.",
      "Improved user retention and patient satisfaction.",
      "Achieved HIPAA-ready architecture for secure patient data."
    ],
    screenshots: [
      "Dashboard", "Login Screen", "Home Screen", "Appointments", "Settings"
    ]
  },
  {
    slug: "ai-agent-workflow-automation",
    metaTitle: "AI Agent Development Case Study | KlyroSoft",
    metaDescription: "Read how KlyroSoft engineered an autonomous AI agent to automate complex workflows and data entry for a leading FinTech company.",
    keywords: "AI Agent Development Case Study, AI Automation Example, FinTech AI Integration",
    hero: {
      title: "Enterprise AI Agent Development",
      subtitle: "Automating complex document processing and customer onboarding workflows for a global FinTech firm."
    },
    clientOverview: {
      industry: "FinTech",
      location: "UK",
      size: "500+ Employees",
      duration: "4 Months",
      teamSize: "3 AI Engineers"
    },
    challenge: [
      "Manual processing of KYC documents was bottlenecking customer onboarding.",
      "High error rates in data entry led to compliance risks.",
      "Customer support was overwhelmed with repetitive status inquiries.",
      "Existing OCR solutions were inflexible and costly."
    ],
    solution: [
      "Deployed a custom LLM-powered AI Agent.",
      "Integrated with the existing CRM via secure REST APIs.",
      "Implemented intelligent document parsing using LangChain.",
      "Automated email responses for standard customer inquiries.",
      "Created a human-in-the-loop dashboard for edge cases."
    ],
    techStack: [
      "Python", "OpenAI API", "LangChain", "Pinecone", "AWS SageMaker", "React", "Node.js"
    ],
    process: [
      "AI Feasibility Analysis", "Data Pipeline Setup", "Model Integration", "Security Auditing", "Deployment", "Continuous Monitoring"
    ],
    results: [
      { metric: "↑ 80%", label: "Faster Onboarding" },
      { metric: "↓ 95%", label: "Data Entry Errors" },
      { metric: "↓ 60%", label: "Support Ticket Volume" },
      { metric: "SOC2", label: "Best Practices Achieved" }
    ],
    testimonial: {
      quote: "The AI agent KlyroSoft built for us completely revolutionized our onboarding process. We cleared a massive backlog in weeks and significantly reduced our operational overhead.",
      author: "VP of Operations, FinTech Startup (London)"
    },
    businessImpact: [
      "Drastically reduced operational costs associated with manual review.",
      "Improved customer satisfaction with instant onboarding.",
      "Eliminated critical compliance risks through accurate data extraction.",
      "Allowed staff to focus on high-value analytical tasks."
    ],
    screenshots: [
      "AI Dashboard", "Document Upload Flow", "Automated Extraction Report", "Chat Interface"
    ]
  },
  {
    slug: "real-estate-saas-platform",
    metaTitle: "Real Estate SaaS Case Study | KlyroSoft",
    metaDescription: "How KlyroSoft built a scalable SaaS platform for property management, handling thousands of transactions securely.",
    keywords: "SaaS Development Case Study, Real Estate App Case Study, Enterprise Software Case Study",
    hero: {
      title: "Scalable Real Estate SaaS Platform",
      subtitle: "Building a comprehensive property management and transaction platform for a rapidly growing real estate network."
    },
    clientOverview: {
      industry: "Real Estate",
      location: "Australia",
      size: "50+ Employees",
      duration: "8 Months",
      teamSize: "6 Developers"
    },
    challenge: [
      "The client was using fragmented tools (spreadsheets, basic CRMs) to manage properties.",
      "Lack of real-time visibility into rental yields and maintenance requests.",
      "Insecure payment collection methods.",
      "Inability to scale operations across new cities."
    ],
    solution: [
      "Architected a multi-tenant SaaS application.",
      "Built a secure, PCI-compliant payment gateway integration.",
      "Developed mobile-responsive portals for both landlords and tenants.",
      "Integrated automated reporting and tax document generation.",
      "Deployed on a highly available AWS cloud architecture."
    ],
    techStack: [
      "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "MongoDB", "AWS", "Stripe Connect"
    ],
    process: [
      "Requirements Gathering", "System Architecture", "UX Design", "Agile Sprints", "Penetration Testing", "Launch"
    ],
    results: [
      { metric: "200K+", label: "Monthly Active Users" },
      { metric: "↑ 30%", label: "Revenue Growth" },
      { metric: "99.9%", label: "System Uptime" },
      { metric: "PCI", label: "Compliant Payments" }
    ],
    testimonial: {
      quote: "KlyroSoft didn't just write code; they acted as a true technical partner. Their architectural decisions ensured our platform could handle immense growth without a hiccup.",
      author: "Founder, PropTech Network (Sydney)"
    },
    businessImpact: [
      "Unified all business operations into a single source of truth.",
      "Automated rent collection, eliminating late payments.",
      "Provided landlords with transparent, real-time ROI dashboards.",
      "Successfully scaled the platform to support operations in three new cities."
    ],
    screenshots: [
      "Landlord Dashboard", "Tenant Portal", "Payment History", "Maintenance Requests"
    ]
  }
];
