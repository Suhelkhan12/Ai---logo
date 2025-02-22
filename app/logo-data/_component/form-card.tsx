import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FormCardPropTypes {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const FormCard = ({ children, title, subtitle }: FormCardPropTypes) => {
  return (
    <Card className="font-sans">
      <CardHeader>
        <CardTitle className="text-primary text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default FormCard;
