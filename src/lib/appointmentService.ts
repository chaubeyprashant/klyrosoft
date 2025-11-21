import { db } from './firebase';
import { collection, addDoc, query, where, getDocs, orderBy } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

export interface Appointment {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  createdAt?: Date;
}

export const bookAppointment = async (appointment: Appointment): Promise<string> => {
  try {
    // Store in Firebase if available
    if (db) {
      const docRef = await addDoc(collection(db, 'appointments'), {
        ...appointment,
        status: 'pending',
        createdAt: new Date(),
      });
      
      // Send email notification
      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
          await emailjs.send(
            serviceId,
            templateId,
            {
              to_name: 'KlyroSoft Team',
              from_name: appointment.name,
              from_email: appointment.email,
              phone: appointment.phone || 'Not provided',
              service: appointment.service,
              date: appointment.date,
              time: appointment.time,
              message: appointment.message || 'No additional message',
              subject: `New Appointment Booking - ${appointment.service}`,
              appointment_date: appointment.date,
              appointment_time: appointment.time,
            },
            publicKey
          );
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the appointment booking if email fails
      }

      return docRef.id;
    } else {
      // Fallback: send email directly
      const subject = `Appointment Booking - ${appointment.service}`;
      const body = `
New Appointment Request:

Name: ${appointment.name}
Email: ${appointment.email}
Phone: ${appointment.phone}
Service: ${appointment.service}
Date: ${appointment.date}
Time: ${appointment.time}
Message: ${appointment.message || 'No additional message'}
      `.trim();

      const mailtoUrl = `mailto:klyrosoft1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl, '_blank');
      
      return 'email-sent';
    }
  } catch (error) {
    console.error('Error booking appointment:', error);
    throw new Error('Failed to book appointment. Please try again or contact us directly.');
  }
};

export const checkAvailability = async (date: string, time: string): Promise<boolean> => {
  if (!db) return true; // If no Firebase, assume available

  try {
    const q = query(
      collection(db, 'appointments'),
      where('date', '==', date),
      where('time', '==', time),
      where('status', '!=', 'cancelled')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty; // Available if no appointments found
  } catch (error) {
    console.error('Error checking availability:', error);
    return true; // Assume available on error
  }
};

export const getAvailableTimeSlots = (date: string): string[] => {
  // Generate time slots from 9 AM to 6 PM
  const slots: string[] = [];
  for (let hour = 9; hour < 18; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return slots;
};

