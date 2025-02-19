"use client";
import { Form } from "@/components/ui/form";
import {
  multiStepFormSchema,
  MultiStepFormSchemaType,
} from "@/schema/multi-step-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import LogoName from "./logo-name";
import LogoDescription from "./logo-description";
import { useState } from "react";

const formSteps = [LogoName, LogoDescription];

const stepFields: Record<number, keyof MultiStepFormSchemaType> = {
  0: "step1",
  1: "step2",
};

const FormContainer = () => {
  const [step, setStep] = useState<number>(0);

  const CurrentStep = formSteps[step];

  const form = useForm<MultiStepFormSchemaType>({
    resolver: zodResolver(multiStepFormSchema),
    defaultValues: {
      step1: { logoname: "" },
      step2: { logodescription: "" },
    },
    mode: "onTouched",
  });

  const {
    trigger,
    handleSubmit,
    formState: { errors },
  } = form;

  const nextStep = async () => {
    const isValid = await trigger(stepFields[step], { shouldFocus: false });
    if (isValid) {
      setStep((p) => Math.min(p + 1, formSteps.length - 1));
    }
  };
  const prevStep = () => setStep((p) => Math.max(p - 1, 0));

  function onSubmit(values: MultiStepFormSchemaType) {
    console.log({
      values,
      errors,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CurrentStep form={form} />
        <div className="flex items-center justify-between mt-6">
          <Button
            variant={"outline"}
            className="group"
            onClick={prevStep}
            disabled={step === 0}
          >
            <MoveLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>

          {step < formSteps.length - 1 ? (
            <Button className="group" onClick={nextStep}>
              Continue{" "}
              <MoveRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <Button type={"submit"}>Generate logo</Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default FormContainer;
