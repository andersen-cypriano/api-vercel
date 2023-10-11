// Add Express
import express from 'express';
import { Resend } from "resend";
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Express
const app = express();

// Create GET request
app.get("/", async (req, res) => {
  
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["acypriano@mtsolucoes.com.br"],
      subject: "hello world",
      html: "<strong>it works!</strong>",
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

export default app