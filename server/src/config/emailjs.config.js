const sendEmail = async ({templateId, templateParams}) => {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: process.env.SERVICE_ID,
      template_id: templateId,
      user_id: process.env.PUBLIC_KEY,
      accessToken: process.env.PRIVATE_KEY,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const errMsg = await response.text;
    throw new Error(errMsg);
  }

  return response;
};

export default sendEmail;
