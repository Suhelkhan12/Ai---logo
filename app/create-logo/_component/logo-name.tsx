import React from "react";
import FormCard from "./form-card";
import {
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { MultiStepFormSchemaType } from "@/schema/multi-step-form-schema";

const LogoName = ({
  form,
}: {
  form: UseFormReturn<MultiStepFormSchemaType>;
}) => {
  return (
    <FormCard
      title="Logo name"
      subtitle="Add your Business, App or Website name for creating logo."
    >
      <FormField
        control={form.control}
        name="step1.logoname"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Enter name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormCard>
  );
};

export default LogoName;
