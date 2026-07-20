export interface ServicePageData {
  slug: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    heading: string;
    description: string;
  };
  problems: {
    title: string;
    items: string[];
  };
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    description: string;
  }[];
  techStack: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  industries: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServicePageData[] = [
  {
    slug: "ai-development-company",
    primaryKeyword: "AI Development Company",
    metaTitle: "Top AI Development Company | Custom Artificial Intelligence Solutions",
    metaDescription: "KlyroSoft is a leading AI development company providing custom AI solutions, machine learning, and automation to transform your business operations.",
    hero: {
      heading: "Leading AI Development Company for Intelligent Business Solutions",
      description: "Transform your business with KlyroSoft, a top-rated AI development company. We build custom artificial intelligence solutions, machine learning models, and automated workflows that drive efficiency, reduce costs, and unlock new growth opportunities for enterprises worldwide."
    },
    problems: {
      title: "Challenges We Solve with AI",
      items: [
        "Inefficient manual processes and high operational costs.",
        "Inability to extract actionable insights from large datasets.",
        "Poor customer experience due to slow response times.",
        "Lack of predictive analytics for inventory and demand forecasting."
      ]
    },
    features: [
      {
        title: "Machine Learning Solutions",
        description: "Custom ML models designed to analyze your data, identify patterns, and make highly accurate predictions to guide your business strategy."
      },
      {
        title: "Natural Language Processing (NLP)",
        description: "Advanced text and speech analysis for chatbots, voice assistants, and automated document processing systems."
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis capabilities for quality control, facial recognition, and automated visual inspections."
      }
    ],
    process: [
      {
        step: "1. Discovery & Strategy",
        description: "We analyze your business needs, data infrastructure, and objectives to define a clear AI roadmap."
      },
      {
        step: "2. Data Preparation",
        description: "Our experts clean, structure, and label your data to ensure optimal model training and accuracy."
      },
      {
        step: "3. Model Development",
        description: "We build and train custom AI models using state-of-the-art frameworks and algorithms."
      },
      {
        step: "4. Deployment & Integration",
        description: "Seamlessly integrating the AI solution into your existing software ecosystem."
      }
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenAI", "AWS SageMaker", "Google Cloud AI", "Docker", "Kubernetes"],
    benefits: [
      {
        title: "Increased Efficiency",
        description: "Automate repetitive tasks and free up your workforce to focus on high-value strategic initiatives."
      },
      {
        title: "Data-Driven Decisions",
        description: "Leverage predictive analytics to make informed decisions faster than the competition."
      }
    ],
    industries: ["Healthcare", "Finance", "Retail", "Manufacturing", "Logistics", "Real Estate"],
    faqs: [
      {
        question: "How long does it take to develop a custom AI solution?",
        description: "The timeline varies based on complexity, but a standard MVP can typically be delivered within 8 to 12 weeks."
      },
      {
        question: "Do you provide ongoing support after deployment?",
        description: "Yes, we offer continuous monitoring, model retraining, and maintenance to ensure optimal performance."
      }
    ]
  },
  {
    slug: "custom-ai-development-services",
    primaryKeyword: "Custom AI Development Services",
    metaTitle: "Custom AI Development Services | Tailored AI Solutions",
    metaDescription: "Leverage KlyroSoft's custom AI development services to build tailored machine learning models, natural language processing tools, and intelligent software.",
    hero: {
      heading: "Tailored Custom AI Development Services",
      description: "Off-the-shelf software rarely solves unique business challenges. Our custom AI development services are designed to address your specific operational bottlenecks. We engineer proprietary AI architectures tailored perfectly to your data, workflows, and strategic goals."
    },
    problems: {
      title: "Why Off-the-Shelf AI Fails",
      items: [
        "Generic AI tools lack context about your specific industry nuances.",
        "Data privacy concerns when using public AI APIs for sensitive information.",
        "Inability to integrate standard tools with legacy enterprise systems.",
        "Paying for bloated software features you don't actually need."
      ]
    },
    features: [
      {
        title: "Proprietary Model Training",
        description: "We train AI models exclusively on your proprietary data, ensuring the outputs are highly relevant to your business."
      },
      {
        title: "Legacy System Integration",
        description: "Custom APIs and middleware to seamlessly connect new AI capabilities with your existing ERP or CRM systems."
      },
      {
        title: "Secure On-Premise Deployment",
        description: "Option to deploy AI models on your own servers or private cloud for maximum data security and compliance."
      }
    ],
    process: [
      {
        step: "1. Feasibility Assessment",
        description: "Evaluating your data readiness and technical infrastructure to ensure AI viability."
      },
      {
        step: "2. Proof of Concept (PoC)",
        description: "Building a small-scale prototype to validate the AI model's accuracy and performance."
      },
      {
        step: "3. Full-Scale Development",
        description: "Expanding the PoC into a robust, production-ready application."
      },
      {
        step: "4. Optimization & Scaling",
        description: "Fine-tuning the algorithms and optimizing cloud architecture to handle increased loads."
      }
    ],
    techStack: ["LangChain", "Hugging Face", "Scikit-Learn", "Azure AI", "MongoDB", "PostgreSQL", "FastAPI"],
    benefits: [
      {
        title: "Competitive Advantage",
        description: "Gain a unique edge with algorithms tailored specifically to outperform your competitors."
      },
      {
        title: "Complete Data Control",
        description: "Maintain 100% ownership and control over your data, models, and intellectual property."
      }
    ],
    industries: ["Fintech", "Healthcare Tech", "E-commerce", "SaaS Providers", "Legal Tech"],
    faqs: [
      {
        question: "Do I own the intellectual property (IP) of the custom AI model?",
        description: "Absolutely. Once the project is completed and paid for, you retain 100% ownership of the custom code and models."
      },
      {
        question: "What if my company doesn't have enough data yet?",
        description: "We can help implement data collection strategies or use pre-trained base models fine-tuned with synthetic data to get you started."
      }
    ]
  },
  {
    slug: "enterprise-ai-development",
    primaryKeyword: "Enterprise AI Development",
    metaTitle: "Enterprise AI Development Solutions | Scalable AI for Business",
    metaDescription: "KlyroSoft provides secure, scalable enterprise AI development solutions designed for large organizations. Modernize your corporate infrastructure with AI.",
    hero: {
      heading: "Secure, Scalable Enterprise AI Development",
      description: "Modernize your corporate infrastructure with our enterprise AI development solutions. We specialize in building secure, highly scalable, and compliant artificial intelligence systems that integrate across multiple departments, breaking down data silos and driving organization-wide intelligence."
    },
    problems: {
      title: "Enterprise-Scale Bottlenecks",
      items: [
        "Massive, fragmented data silos across different global departments.",
        "Strict compliance and security requirements (GDPR, HIPAA, SOC2).",
        "Change management resistance due to steep software learning curves.",
        "High infrastructure costs for running unoptimized legacy software."
      ]
    },
    features: [
      {
        title: "AI-Powered Automation Hubs",
        description: "Centralized platforms that automate complex, multi-step workflows across HR, Finance, and Operations."
      },
      {
        title: "Enterprise Data Lakes",
        description: "Structuring and centralizing vast amounts of corporate data to feed highly accurate machine learning pipelines."
      },
      {
        title: "Robust Security & Compliance",
        description: "Enterprise-grade encryption, role-based access control (RBAC), and full audit trails built into every AI solution."
      }
    ],
    process: [
      {
        step: "1. Enterprise Architecture Audit",
        description: "Comprehensive review of your existing IT infrastructure and security protocols."
      },
      {
        step: "2. Compliance Mapping",
        description: "Ensuring all AI data processing aligns with regional and industry-specific regulations."
      },
      {
        step: "3. Modular Implementation",
        description: "Rolling out AI features department by department to minimize disruption."
      },
      {
        step: "4. Corporate Training",
        description: "Comprehensive onboarding and training programs for your enterprise staff."
      }
    ],
    techStack: ["Databricks", "Snowflake", "AWS Bedrock", "Microsoft Azure Cognitive Services", "Kubernetes", "Kafka", "Elasticsearch"],
    benefits: [
      {
        title: "Organization-Wide Synergy",
        description: "Break down silos by allowing different departments to access centralized, AI-driven insights."
      },
      {
        title: "Risk Mitigation",
        description: "Leverage AI to monitor compliance, detect fraud, and identify operational risks in real-time."
      }
    ],
    industries: ["Banking", "Insurance", "Global Manufacturing", "Telecommunications", "Energy Sector"],
    faqs: [
      {
        question: "How do you ensure data security for enterprise AI?",
        description: "We employ end-to-end encryption, VPC deployments, and strictly adhere to frameworks like SOC2 and ISO 27001."
      },
      {
        question: "Can your AI integrate with our legacy SAP/Oracle systems?",
        description: "Yes, we build custom connectors and APIs to securely bridge the gap between modern AI and legacy ERP systems."
      }
    ]
  }
];
