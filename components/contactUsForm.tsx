"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import useContactForm from "@/hooks/useContactForm";
import { useToast } from "@/hooks/use-toast";
import { FormProvider } from "react-hook-form";
import Loading from "./loading";

export const ContactUsForm = () => {
  const { form, onSubmit, isSubmitting } = useContactForm();
  const { toast } = useToast();

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(
          async (data) => {
            try {
              await onSubmit(data); // Call the actual onSubmit logic here
              toast({
                title: "Message Sent!",
                description: "Your message was successfully sent.",
              });
            } catch (error) {
              console.error("Submission error:", error);
              toast({
                title: "Error",
                description: "There was an error sending your message.",
                variant: "destructive",
              });
            }
          },
          (errors) => {
            console.error("Validation Errors:", errors);
            toast({
              title: "Validation Error",
              description: "Please correct the highlighted errors.",
              variant: "destructive",
            });
          }
        )}
        className="space-y-4"
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="name">Name</Label>
              <FormControl>
                <Input placeholder="Enter your name" id="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <FormControl>
                <Input placeholder="Enter your email" id="email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subject Field */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="subject">Subject</Label>
              <FormControl>
                <Input placeholder="Enter subject" id="subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="message">Message</Label>
              <FormControl>
                <Textarea
                  placeholder="Enter your message"
                  id="message"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        {isSubmitting ? (
          <Loading message="Sending..." />
        ) : (
          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
            {isSubmitting ? "Sending..." : "Send Message"} {/* Dynamically change button text */}
          </Button>
        )}
      </form>
    </FormProvider>
  );
};
