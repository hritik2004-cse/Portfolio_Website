import sendEmail from "../config/emailjs.config.js";
import Contact from "../models/contact.model.js";

const contact = async (req, res) => {
  try {
    const { firstName, lastName, email, intrest, message } = req.body;

    if (!firstName || !lastName || !email || !intrest || !message) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    await Contact.create({
      firstName,
      lastName,
      email,
      intrest,
      message,
    });

    sendEmail({
      templateId: process.env.TEMPLATE_ID,
      templateParams: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        subject: intrest,
        message: message,
        my_email: "hritiksharma08725@gmail.com",
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export default contact;
