/* eslint-disable @next/next/no-img-element */
"use client";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MultiStepFormSchemaType } from "@/schema/multi-step-form-schema";
import { UseFormReturn } from "react-hook-form";
import FormCard from "./form-card";
import { LogoDesign } from "@/data/logo-design";

const LogoDeisgn = ({
  form,
}: {
  form: UseFormReturn<MultiStepFormSchemaType>;
}) => {
  return (
    <FormCard
      title="Choose your logo style"
      subtitle="Select the type of logo design the best represents your brand's unique identity."
    >
      <FormField
        control={form.control}
        name="step4.logodesign"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <RadioGroup
                defaultValue={field.value}
                onValueChange={field.onChange}
                className="grid grid-cols-2  md:grid-cols-3 gap-4 lg:gap-6"
              >
                {LogoDesign.map((it) => (
                  <div key={it.id}>
                    <div className=" relative cursor-pointer">
                      <img
                        src={it.image}
                        alt={it.name}
                        className="object-cover rounded-lg"
                      />
                      <RadioGroupItem
                        id={it.id}
                        value={it.name}
                        className=" absolute z-10 inset-0 w-full h-full rounded-lg border-0"
                      />
                    </div>
                    <p className="text-xs md:text-sm capitalize text-center mt-2 font-medium">
                      {it.name}
                    </p>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </FormCard>
  );
};

export default LogoDeisgn;
