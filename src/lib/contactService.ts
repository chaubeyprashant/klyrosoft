import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      service: formData.service,
      message: formData.message,
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);

    console.log("Contact form submitted via EmailJS successfully");
  } catch (error) {
    console.error("Error submitting contact form via EmailJS:", error);

    // Optional: fallback to mailto in case EmailJS fails
    const subject = `Contact Form Submission - ${formData.service}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service}
Message: ${formData.message}
    `.trim();

    const mailtoUrl = `mailto:klyrosoft1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
  }
};
