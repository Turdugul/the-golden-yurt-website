import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { z } from "zod";

// Define the Zod schema for validation
const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  date: z.string().refine((value) => !isNaN(Date.parse(value)), "Invalid date format"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format (expected HH:mm)"),
  numberOfGuests: z.preprocess((val) => parseInt(val as string, 10), z.number().min(1, "Number of guests must be at least 1")),
  specialRequests: z.string().optional(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Check for email environment variables
    const { EMAIL_USER, EMAIL_PASS } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error("Missing email environment variables");
      return res.status(500).json({ message: "Server configuration error" });
    }

    // Parse and validate request body using Zod
    const parsedBody = reservationSchema.parse(req.body);

    const { name, email, phone, date, time, numberOfGuests, specialRequests } = parsedBody;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER, // Send email to the configured address
      subject: "New Reservation Request",
      text: `
        You have received a new reservation request:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${date}
        Time: ${time}
        Number of Guests: ${numberOfGuests}
        Special Requests: ${specialRequests || "None"}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(200).json({ message: "Reservation confirmed!" });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      console.error("Validation Errors:", error.errors);
      return res.status(400).json({
        message: "Validation Error",
        errors: error.errors.map((e) => e.message),
      });
    }

    // Handle other errors
    console.error("Error sending email:", (error as Error).message || error);
    res.status(500).json({ message: "Failed to send reservation. Please try again later." });
  }
}
