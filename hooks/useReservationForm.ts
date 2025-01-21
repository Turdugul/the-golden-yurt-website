// hooks/useReservationForm.ts
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, Reservation } from "@/schemas/reservationSchema";


const useReservationForm = () => {
  const { toast } = useToast(); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<Reservation>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      numberOfGuests: "",
      specialRequests: "",
    },
  });

  const onSubmit = async (values: Reservation) => {
    setIsSubmitting(true); // Set the submitting state to true
    try {
      const response = await fetch("/api/send-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Request Received!",
          description: "We'll see you soon!",
        });
        form.reset(); // Reset form on success
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error("Error occurred while sending reservation:", error);
      toast({
        title: "Error",
        description: "Something went wrong, please try again.",
      });
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return { form, onSubmit, isSubmitting };
};

export default useReservationForm;
