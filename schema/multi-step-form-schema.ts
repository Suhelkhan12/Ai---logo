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
  step3: z.object({
    firstcolor: z.string().min(7),
    seccondcolor: z.string().min(7),
    thirdcolor: z.string().min(7),
    fourthcolor: z.string().min(7),
  }),
  step4: z.object({
    logodesign: z.string(),
  }),
});

export type MultiStepFormSchemaType = z.infer<typeof multiStepFormSchema>;
