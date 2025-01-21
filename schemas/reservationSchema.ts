// src/schemas/reservationSchema.ts
import * as z from "zod";
import { parse, format } from "date-fns";

export const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z
    .string()
    .optional() 
    .transform((value) => {
      if (!value) return ""; 
      try {
        const parsed = parse(value, "hh:mm a", new Date()); 
        if (isNaN(parsed.getTime())) throw new Error(); // Check if the time is valid
        return format(parsed, "HH:mm"); // Return 24-hour format
      } catch {
        throw new Error("Invalid time format"); // Handle invalid time
      }
    })
    .refine(
      (value) => value === "" || /^\d{2}:\d{2}$/.test(value), // Time format validation
      "Invalid time format"
    ),
  numberOfGuests: z.string().min(1, "Please select the number of guests"),
  specialRequests: z.string().optional(), 
});

export type Reservation = z.infer<typeof reservationSchema>;
