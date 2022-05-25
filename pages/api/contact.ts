import nodemailer from "nodemailer";

export default function (req, res) {
  const {name, email, message} = req.body;

  res.send(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Greka Ecommerce",
    to: email,
    subject: `Feedback from Greka`,
    text: `Gracias por contactarnos ${name}, estaremos en contacto contigo. reply to: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
}
