"use client";

import { MultiStepFormSchemaType } from "@/schema/multi-step-form-schema";
import { UseFormReturn } from "react-hook-form";
import FormCard from "./form-card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const LogoColorPallete = ({
  form,
}: {
  form: UseFormReturn<MultiStepFormSchemaType>;
}) => {
  return (
    <FormCard
      title="Choose your color pallete"
      subtitle="Pick the color that reflects your brand's personality and create a lasting impression"
    >
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name={"step3.firstcolor"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-primary">
                First color
              </FormLabel>
              <FormControl>
                <Input
                  type={"color"}
                  className="h-10 p-1 cursor-pointer"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"step3.seccondcolor"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-primary">
                Second color
              </FormLabel>
              <FormControl>
                <Input
                  type={"color"}
                  className="h-10 p-1 cursor-pointer"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"step3.thirdcolor"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-primary">
                Third color
              </FormLabel>
              <FormControl>
                <Input
                  type={"color"}
                  className="h-10 p-1 cursor-pointer"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"step3.fourthcolor"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-primary">
                Fourth color
              </FormLabel>
              <FormControl>
                <Input
                  type={"color"}
                  className="h-10 p-1 cursor-pointer"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </FormCard>
  );
};

export default LogoColorPallete;
