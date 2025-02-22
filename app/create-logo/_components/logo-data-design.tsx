"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MultiStepFormSchemaType } from "@/schema/multi-step-form-schema";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LogoDataDesign = () => {
  const [logoData, setLogoData] = useState<MultiStepFormSchemaType | null>(
    null
  );

  useEffect(() => {
    const formData = localStorage.getItem("formdata");
    if (!formData) return;
    setLogoData(JSON.parse(formData));
  }, []);

  return (
    <Card className="mt-6">
      <CardContent className="p-3 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-primary font-sans">
              Logo name
            </h2>
            <p className="text-base md:text-lg capitalize">
              {logoData?.step1.logoname}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-primary font-sans text-wrap">
              Logo Description
            </h2>
            <p className="text-base md:text-lg capitalize">
              {logoData?.step2.logodescription}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-primary font-sans">
              Logo Color Pallete
            </h2>
            <div className="flex items-center gap-4">
              <Circle color={logoData?.step3.firstcolor as string} />
              <Circle color={logoData?.step3.seccondcolor as string} />
              <Circle color={logoData?.step3.thirdcolor as string} />
              <Circle color={logoData?.step3.fourthcolor as string} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-primary font-sans">
              Logo Design
            </h2>
            <p className="text-base md:text-lg capitalize">
              {logoData?.step4.logodesign}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ChangeLogoData = () => {
  const router = useRouter();
  const changeData = () => {
    localStorage.removeItem("formdata");
    router.push("/logo-data");
  };
  return (
    <Button variant={"outline"} onClick={changeData}>
      Change data
    </Button>
  );
};

export { LogoDataDesign, ChangeLogoData };

function Circle({ color }: { color: string }) {
  return (
    <div
      className="size-10 rounded-full"
      style={{ backgroundColor: color }}
    ></div>
  );
}
