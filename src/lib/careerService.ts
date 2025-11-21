import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

export interface CareerForm {
  name: string;
  email: string;
  resume: File;
}

const submitResume = async (formData: CareerForm) => {
  const { name, email, resume } = formData;
  
  if (!name || !email || !resume) {
    throw new Error("All fields are required: name, email, and resume");
  }

  // Upload resume to Firebase Storage
  const storageRef = ref(storage, `resumes/${resume.name}`);
  await uploadBytes(storageRef, resume);
  const downloadURL = await getDownloadURL(storageRef);

  // Save user information to Firebase Firestore
  await addDoc(collection(db, "careers"), {
    name,
    email,
    resume: downloadURL,
    submittedAt: new Date(),
  });
};

export const careerService = {
  submitResume,
};