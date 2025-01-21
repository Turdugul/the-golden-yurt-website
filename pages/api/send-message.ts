import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z, ZodError } from 'zod';

// Define the Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name cannot exceed 100 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(100, "Subject cannot exceed 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message cannot exceed 500 characters"),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Validate the incoming request data with Zod
    try {
      const parsedData = contactSchema.parse(req.body);  // Parse and validate the request body
      const { name, email, subject, message } = parsedData;  // Destructure the validated data

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Make sure these environment variables are set
          pass: process.env.EMAIL_PASS, 
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // The email address that receives the message
        subject: `New message from ${name} - ${subject}`,
        text: `Message from: ${name}\n\nEmail: ${email}\n\nMessage: \n${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Your message has been sent successfully!' });
    } catch (error: unknown) {
      // Check if the error is an instance of ZodError
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      
      // General error handling if it's not a ZodError
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
