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
import LogoColorPallete from "./logo-color-pallete";
import { useState } from "react";
import LogoDeisgn from "./logo-design";

const formSteps = [LogoName, LogoDescription, LogoColorPallete, LogoDeisgn];

const stepFields: Record<number, keyof MultiStepFormSchemaType> = {
  0: "step1",
  1: "step2",
  2: "step3",
  3: "step4",
};

const FormContainer = () => {
  const [step, setStep] = useState<number>(0);

  const CurrentStep = formSteps[step];

  const form = useForm<MultiStepFormSchemaType>({
    resolver: zodResolver(multiStepFormSchema),
    defaultValues: {
      step1: { logoname: "" },
      step2: { logodescription: "" },
      step3: {
        firstcolor: "#000000",
        seccondcolor: "#000000",
        thirdcolor: "#000000",
        fourthcolor: "#000000",
      },
      step4: {
        logodesign: "",
      },
    },
    mode: "onSubmit",
  });

  const { trigger, handleSubmit } = form;

  const nextStep = async () => {
    if (stepFields[step]) {
      const isValid = await trigger(stepFields[step], { shouldFocus: false });
      if (!isValid) return;
    }

    if (step < formSteps.length - 1)
      setStep((p) => Math.min(p + 1, formSteps.length - 1));
  };

  const prevStep = () => setStep((p) => Math.max(p - 1, 0));

  function onSubmit(values: MultiStepFormSchemaType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CurrentStep form={form} />
        <div className="flex items-center justify-between mt-6">
          {step > 0 && (
            <Button
              variant={"outline"}
              type={"button"}
              className="group"
              onClick={prevStep}
            >
              <MoveLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
          )}
          {step < formSteps.length - 1 && (
            <Button className="group" type={"button"} onClick={nextStep}>
              Continue{" "}
              <MoveRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
          {step == formSteps.length - 1 && <Button>Generate logo</Button>}
        </div>
      </form>
    </Form>
  );
};

export default FormContainer;
