import { db } from './firebase';
import { collection, addDoc, getDocs, query, orderBy, where } from 'firebase/firestore';

export interface ProjectFeature {
  id: string;
  name: string;
  description: string;
  baseHours: number;
  complexity: {
    simple: number;
    medium: number;
    complex: number;
  };
}

export interface EstimateRequest {
  projectType: string;
  complexity: string;
  features: string[];
  timeline: string;
  budget: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}

export interface EstimateResult {
  hours: number;
  cost: number;
  timeline: string;
  breakdown: {
    baseHours: number;
    featureHours: number;
    complexityMultiplier: number;
    hourlyRate: number;
  };
}

export const projectFeatures: ProjectFeature[] = [
  {
    id: "responsive-design",
    name: "Responsive Design",
    description: "Mobile-first responsive layout",
    baseHours: 12,  // Reduced from 20
    complexity: { simple: 1, medium: 1.2, complex: 1.4 }  // Reduced multipliers
  },
  {
    id: "user-auth",
    name: "User Authentication",
    description: "Login, registration, password reset",
    baseHours: 20,  // Reduced from 30
    complexity: { simple: 1, medium: 1.3, complex: 1.6 }  // Reduced multipliers
  },
  {
    id: "database-integration",
    name: "Database Integration",
    description: "Data storage and retrieval",
    baseHours: 15,  // Reduced from 25
    complexity: { simple: 1, medium: 1.2, complex: 1.5 }  // Reduced multipliers
  },
  {
    id: "payment-gateway",
    name: "Payment Integration",
    description: "Stripe, PayPal, or other payment systems",
    baseHours: 25,  // Reduced from 40
    complexity: { simple: 1.1, medium: 1.4, complex: 1.8 }  // Reduced multipliers
  },
  {
    id: "admin-panel",
    name: "Admin Dashboard",
    description: "Content management and analytics",
    baseHours: 35,  // Reduced from 50
    complexity: { simple: 1, medium: 1.3, complex: 2 }  // Reduced multipliers
  },
  {
    id: "api-integration",
    name: "Third-party APIs",
    description: "External service integrations",
    baseHours: 12,  // Reduced from 20
    complexity: { simple: 1, medium: 1.2, complex: 1.6 }  // Reduced multipliers
  },
  {
    id: "real-time-features",
    name: "Real-time Features",
    description: "Chat, notifications, live updates",
    baseHours: 25,  // Reduced from 35
    complexity: { simple: 1.1, medium: 1.5, complex: 2 }  // Reduced multipliers
  },
  {
    id: "search-functionality",
    name: "Advanced Search",
    description: "Filtering, sorting, full-text search",
    baseHours: 15,  // Reduced from 25
    complexity: { simple: 1, medium: 1.2, complex: 1.6 }  // Reduced multipliers
  },
  {
    id: "file-upload",
    name: "File Upload/Management",
    description: "Image/document upload and processing",
    baseHours: 12,  // Reduced from 20
    complexity: { simple: 1, medium: 1.2, complex: 1.5 }  // Reduced multipliers
  },
  {
    id: "email-system",
    name: "Email System",
    description: "Automated emails and notifications",
    baseHours: 10,  // Reduced from 15
    complexity: { simple: 1, medium: 1.1, complex: 1.3 }  // Reduced multipliers
  }
];

export const calculateProjectEstimate = (request: EstimateRequest): EstimateResult => {
  const baseHours = {
    "website": 25,        // Reduced from 40
    "web-app": 50,        // Reduced from 80
    "mobile-app": 80,     // Reduced from 120
    "e-commerce": 65,     // Reduced from 100
    "custom-software": 100 // Reduced from 150
  };

  const complexityMultipliers = {
    "simple": 1,
    "medium": 1.2,        // Reduced from 1.3
    "complex": 1.5        // Reduced from 1.8
  };

  const hourlyRate = 25; // Ultra-competitive pricing for new clients

  // Calculate base hours for project type
  const projectBaseHours = baseHours[request.projectType as keyof typeof baseHours] || 80;

  // Calculate feature hours
  let featureHours = 0;
  request.features.forEach(featureId => {
    const feature = projectFeatures.find(f => f.id === featureId);
    if (feature) {
      const complexityKey = request.complexity as keyof typeof feature.complexity;
      const featureComplexityMultiplier = feature.complexity[complexityKey] || 1;
      featureHours += feature.baseHours * featureComplexityMultiplier;
    }
  });

  // Apply overall complexity multiplier
  const complexityMultiplier = complexityMultipliers[request.complexity as keyof typeof complexityMultipliers] || 1;
  const totalHours = Math.round((projectBaseHours + featureHours) * complexityMultiplier);

  // Calculate cost
  const totalCost = totalHours * hourlyRate;

  // Calculate timeline
  const weeksNeeded = Math.ceil(totalHours / 40); // 40 hours per week
  const timeline = weeksNeeded <= 2 ? "1-2 weeks" :
                  weeksNeeded <= 4 ? "2-4 weeks" :
                  weeksNeeded <= 8 ? "1-2 months" :
                  weeksNeeded <= 12 ? "2-3 months" : "3+ months";

  return {
    hours: totalHours,
    cost: totalCost,
    timeline,
    breakdown: {
      baseHours: projectBaseHours,
      featureHours,
      complexityMultiplier,
      hourlyRate
    }
  };
};

export const submitEstimateRequest = async (
  request: EstimateRequest, 
  estimate: EstimateResult
): Promise<string> => {
  if (!db) {
    throw new Error('Firebase is not configured. Please check your environment variables.');
  }

  try {
    const docRef = await addDoc(collection(db, 'project-estimates'), {
      ...request,
      estimate,
      timestamp: new Date(),
      status: 'new',
      source: 'website-calculator'
    });

    return docRef.id;
  } catch (error) {
    console.error('Error submitting estimate request:', error);
    throw new Error('Failed to submit estimate request. Please try again.');
  }
};

export const getEstimateRequests = async (limit?: number) => {
  if (!db) {
    throw new Error('Firebase is not configured.');
  }

  try {
    const q = limit 
      ? query(collection(db, 'project-estimates'), orderBy('timestamp', 'desc'), limit)
      : query(collection(db, 'project-estimates'), orderBy('timestamp', 'desc'));
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching estimate requests:', error);
    throw new Error('Failed to fetch estimate requests.');
  }
};

export const getEstimatesByEmail = async (email: string) => {
  if (!db) {
    throw new Error('Firebase is not configured.');
  }

  try {
    const q = query(
      collection(db, 'project-estimates'), 
      where('email', '==', email),
      orderBy('timestamp', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching estimates by email:', error);
    throw new Error('Failed to fetch estimates.');
  }
};
