import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  message: z.string().min(20, "Message must contain at least 20 characters"),
  email: z.string().email('Please enter a valid email address'),
});
