// Add Express
const express = require("express");
const { Resend } = require("resend");
const instanceResend = new Resend("re_LyRE6DiZ_CbHc8WtuiPEFT6Yy9Wsswuxt");

// Initialize Express
const app = express();

// Create GET request
app.get("/", async (req, res) => {
  
  try {
    const data = await instanceResend.emails.send({
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

// Export the Express API
module.exports = app;