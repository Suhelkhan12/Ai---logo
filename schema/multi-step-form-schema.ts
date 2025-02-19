import * as z from "zod";

export const multiStepFormSchema = z.object({
  step1: z.object({
    logoname: z.string().min(3, "Name is too short."),
  }),
  step2: z.object({
    logodescription: z
      .string()
      .min(30, "Description should be atleast 30 characters."),
  }),
});

export type MultiStepFormSchemaType = z.infer<typeof multiStepFormSchema>;
