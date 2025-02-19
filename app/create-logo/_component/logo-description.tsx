import React from "react";
import FormCard from "./form-card";
import {
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { MultiStepFormSchemaType } from "@/schema/multi-step-form-schema";
import { Textarea } from "@/components/ui/textarea";

const LogoDescription = ({
  form,
}: {
  form: UseFormReturn<MultiStepFormSchemaType>;
}) => {
  return (
    <FormCard
      title="Logo description"
      subtitle="Describe how you want your logo to look like."
    >
      <FormField
        control={form.control}
        name="step2.logodescription"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                placeholder="Briefly describe..."
                {...field}
                className="resize-none"
                rows={6}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormCard>
  );
};

export default LogoDescription;
