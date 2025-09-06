import emailjs from "emailjs-com";

// ✅ Replace these with correct IDs from EmailJS dashboard
const SERVICE_ID = "service_kg15";
const TEMPLATE_ID = "template_2yvklqp";
const PUBLIC_KEY = "RcAMM-K4cQkTRIS2h";

export const sendEmail = async (formData) => {
  try {
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Please fill in all required fields.");
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "No subject",
      message: formData.message,
      to_email: "kgiridharini@gmail.com", // ✅ ensures email is sent to you
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return response;
  } catch (error) {
    throw error;
  }
};
