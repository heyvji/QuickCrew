import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import process from "node:process";
import Contact from "./models/contact.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error(err);
}

// API route
app.post("/api/contact", async (req, res) => {
  try{
    const{name, email, subject, message} = req.body;

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });
    await newContact.save();

    res.status(201).json({message: "Message stored in MongoDB"});
  } catch(err){
    res.status(500).json({ error: err.message});
  }
})

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
