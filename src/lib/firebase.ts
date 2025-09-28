import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Check if Firebase config is properly set up
const isConfigValid = Object.values(firebaseConfig).every(value => 
  value && 
  value !== "your-api-key" && 
  value !== "your-project-id" && 
  value !== "your-project-id-here" &&
  value !== "123456789" &&
  value !== "1:123456789:web:abcdef123456"
);

// Initialize Firebase only if config is valid
let app: any = null;
let db: any = null;

if (isConfigValid) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Firebase:', error);
    app = null;
    db = null;
  }
} else {
  console.warn('Firebase configuration is missing or incomplete. Please check your .env file.');
  console.warn('Required environment variables:');
  console.warn('- VITE_FIREBASE_API_KEY');
  console.warn('- VITE_FIREBASE_AUTH_DOMAIN');
  console.warn('- VITE_FIREBASE_PROJECT_ID');
  console.warn('- VITE_FIREBASE_STORAGE_BUCKET');
  console.warn('- VITE_FIREBASE_MESSAGING_SENDER_ID');
  console.warn('- VITE_FIREBASE_APP_ID');
  console.warn('Contact form will use fallback method until Firebase is configured.');
}

// Export Firebase instances
export { db };

export default app;
