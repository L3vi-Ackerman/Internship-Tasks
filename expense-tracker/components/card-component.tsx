import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface cardDetails {
  topic: string;
  amount: string | number;
  description: string;
}
export function CardComponent({ topic, amount, description }: cardDetails) {
  return (
    <div className=" rounded-xl">
      <Card className="w-[300px]">
        <CardHeader>
          <CardDescription>{topic}</CardDescription>

          <CardTitle>{amount}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
