import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary" | "secondary";
};

const inputVariants = cva(
  "px-4 w-[300px] rounded-lg text-sm border border-black text-sm font-sans",
  {
    variants: {
      variant: {
        primary:
          "border-2 focus:outline-none transition duration-100 rounded-full",
        secondary:
          "border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-100",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export function Input({ className, variant, ...props }: InputProps) {
  return (
    <input {...props} className={cn(inputVariants({ variant }), className)} />
  );
}
