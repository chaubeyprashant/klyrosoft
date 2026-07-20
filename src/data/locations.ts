export interface LocationPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  locationName: string;
  serviceType: string;
  hero: {
    heading: string;
    description: string;
  };
  intro: {
    heading: string;
    description: string;
  };
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  services: {
    title: string;
    slug: string; // Used for internal linking to /services/:slug
    description: string;
  }[];
  industries: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const locationsData: LocationPageData[] = [
  {
    slug: "software-development-company-usa",
    metaTitle: "Software Development Company in USA | KlyroSoft",
    metaDescription: "Looking for a reliable software development company in the USA? KlyroSoft builds custom software, web applications, and mobile apps for startups and enterprises.",
    keywords: "Software Development Company USA, Custom Software Development USA, Hire Software Developers USA",
    locationName: "USA",
    serviceType: "Software Development",
    hero: {
      heading: "Top Software Development Company in the USA",
      description: "Partner with a leading US-based software engineering team. We deliver scalable, secure, and innovative software solutions tailored to the unique demands of the American market."
    },
    intro: {
      heading: "Custom Software Development Services for Businesses in the USA",
      description: "From innovative startups in Silicon Valley to established enterprises in New York, KlyroSoft provides end-to-end software development services. We specialize in building robust SaaS platforms, scalable web applications, and enterprise-grade software systems that drive digital transformation and operational efficiency across the United States."
    },
    whyChooseUs: [
      {
        title: "Deep US Market Understanding",
        description: "We understand the regulatory, compliance (HIPAA, SOC2), and user experience expectations of the American market."
      },
      {
        title: "Agile Delivery Model",
        description: "Our agile methodologies ensure rapid prototyping, continuous feedback, and fast time-to-market."
      },
      {
        title: "Top-Tier Talent",
        description: "Access a dedicated team of world-class software engineers, UX/UI designers, and cloud architects."
      }
    ],
    services: [
      {
        title: "AI Development",
        slug: "ai-development-company",
        description: "Intelligent automation and machine learning models."
      },
      {
        title: "Custom AI Development",
        slug: "custom-ai-development-services",
        description: "Tailored AI solutions for specific business workflows."
      },
      {
        title: "Enterprise AI",
        slug: "enterprise-ai-development",
        description: "Scalable AI architecture for large organizations."
      }
    ],
    industries: ["Healthcare", "Fintech", "Retail & E-commerce", "Logistics", "Real Estate"],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description: "Understanding your business goals and defining the technical roadmap."
      },
      {
        step: "02",
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user interfaces."
      },
      {
        step: "03",
        title: "Development",
        description: "Writing clean, scalable, and secure code using modern frameworks."
      },
      {
        step: "04",
        title: "Testing & Deployment",
        description: "Rigorous QA testing followed by a seamless cloud deployment."
      }
    ],
    techStack: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
    faqs: [
      {
        question: "Do you work with startups in the USA?",
        answer: "Yes, we partner with startups across the USA, helping them build MVPs and scale their platforms efficiently."
      },
      {
        question: "Are your software solutions compliant with US regulations?",
        answer: "Absolutely. We build software with strict adherence to regulations like HIPAA for healthcare and SOC2 for data security."
      }
    ]
  },
  {
    slug: "ai-development-company-usa",
    metaTitle: "AI Development Company in USA | KlyroSoft",
    metaDescription: "KlyroSoft is a premier AI development company in the USA. We build autonomous AI agents, intelligent workflows, and enterprise AI solutions.",
    keywords: "AI Development Company USA, AI Automation USA, Custom AI Solutions USA",
    locationName: "USA",
    serviceType: "AI Development",
    hero: {
      heading: "Leading AI Development Company in the USA",
      description: "Empower your business with cutting-edge artificial intelligence. We engineer autonomous agents and machine learning models for American enterprises."
    },
    intro: {
      heading: "Intelligent AI Solutions for the US Market",
      description: "As businesses in the USA race to adopt artificial intelligence, KlyroSoft provides the technical expertise to stay ahead. We don't just use APIs; we build custom AI agents, deploy secure LLMs, and automate complex workflows that give your business a massive competitive advantage."
    },
    whyChooseUs: [
      {
        title: "Data Security First",
        description: "We deploy AI models in secure, private clouds to ensure your proprietary data never leaks."
      },
      {
        title: "Focus on ROI",
        description: "Our AI solutions are designed to automate costly workflows, providing a measurable return on investment."
      },
      {
        title: "Advanced AI Stack",
        description: "Expertise in LangChain, OpenAI, Hugging Face, and Vector Databases for enterprise-grade AI."
      }
    ],
    services: [
      {
        title: "AI Development",
        slug: "ai-development-company",
        description: "End-to-end artificial intelligence engineering."
      },
      {
        title: "Custom AI Development",
        slug: "custom-ai-development-services",
        description: "Proprietary models trained on your data."
      },
      {
        title: "Enterprise AI",
        slug: "enterprise-ai-development",
        description: "Organization-wide AI deployment and strategy."
      }
    ],
    industries: ["Finance", "Healthcare", "Legal Tech", "Customer Support", "Marketing"],
    process: [
      {
        step: "01",
        title: "AI Feasibility Analysis",
        description: "Evaluating your data structure and identifying automation opportunities."
      },
      {
        step: "02",
        title: "Data Pipeline Setup",
        description: "Structuring and cleaning data for model training."
      },
      {
        step: "03",
        title: "Model Training & Integration",
        description: "Training the AI and integrating it into your existing systems via API."
      },
      {
        step: "04",
        title: "Monitoring & Optimization",
        description: "Continuously monitoring the AI's performance and accuracy."
      }
    ],
    techStack: ["OpenAI API", "PyTorch", "LangChain", "Pinecone", "AWS SageMaker"],
    faqs: [
      {
        question: "Can you build AI agents that connect to our US-based CRM?",
        answer: "Yes, we build AI agents that seamlessly integrate with popular CRMs like Salesforce and HubSpot to automate data entry and sales outreach."
      },
      {
        question: "Is our data used to train public AI models?",
        answer: "No. We utilize zero-data-retention APIs and private deployments to guarantee your data remains strictly confidential."
      }
    ]
  },
  {
    slug: "software-development-company-dubai",
    metaTitle: "Software Development Company in Dubai | KlyroSoft",
    metaDescription: "KlyroSoft is a top-rated software development company in Dubai, UAE. We deliver premium web, mobile, and enterprise software solutions across the Middle East.",
    keywords: "Software Company Dubai, Web Development UAE, Mobile App Development Dubai",
    locationName: "Dubai",
    serviceType: "Software Development",
    hero: {
      heading: "Premium Software Development Company in Dubai",
      description: "Accelerate your digital transformation in the UAE. We build world-class enterprise software, mobile apps, and AI solutions for visionary businesses in Dubai."
    },
    intro: {
      heading: "Driving Digital Innovation in the UAE",
      description: "Dubai is a global hub for innovation, and KlyroSoft is here to support its digital growth. We provide high-end software development services to businesses in the UAE, specializing in scalable architectures, stunning user interfaces, and robust mobile applications tailored for the Middle Eastern market."
    },
    whyChooseUs: [
      {
        title: "Middle East Market Expertise",
        description: "We understand the nuances of the UAE market, including localization and regional compliance."
      },
      {
        title: "Enterprise Reliability",
        description: "Delivering highly available and secure software architectures for large corporations and government entities."
      },
      {
        title: "End-to-End Delivery",
        description: "From UX consulting to cloud deployment, we manage the entire software lifecycle."
      }
    ],
    services: [
      {
        title: "AI Development",
        slug: "ai-development-company",
        description: "Bringing smart automation to your workflows."
      },
      {
        title: "Enterprise Software",
        slug: "enterprise-ai-development",
        description: "Scalable ERP and CRM solutions."
      }
    ],
    industries: ["Real Estate", "Fintech", "Travel & Hospitality", "Logistics", "Retail"],
    process: [
      {
        step: "01",
        title: "Requirements Gathering",
        description: "Collaborating closely with your Dubai-based team to outline specifications."
      },
      {
        step: "02",
        title: "Architecture & Design",
        description: "Designing a scalable technical architecture and localized UI/UX."
      },
      {
        step: "03",
        title: "Agile Development",
        description: "Executing development in sprints with regular stakeholder reviews."
      },
      {
        step: "04",
        title: "Launch & Support",
        description: "Smooth deployment and ongoing maintenance to ensure optimal performance."
      }
    ],
    techStack: ["Next.js", "Flutter", "Node.js", "MongoDB", "Microsoft Azure"],
    faqs: [
      {
        question: "Do you provide localized software for the UAE market?",
        answer: "Yes, we build software with robust internationalization (i18n) support, ensuring seamless Arabic and English user experiences."
      },
      {
        question: "Can you develop mobile apps for both iOS and Android?",
        answer: "Absolutely. We utilize cross-platform technologies like Flutter to deliver high-performance apps for both iOS and Android simultaneously."
      }
    ]
  }
];
