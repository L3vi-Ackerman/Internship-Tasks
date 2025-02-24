import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const buttonVariants = cva("py-2 px-4 rounded-3xl text-base md:text-sm  m-1", {
  variants: {
    variant: {
      primary:
        "bg-blue-500 text-white w-[200px] hover:bg-blue-600 hover:brightness-80 transition duration-100 font-semibold",
      secondary:
        "border-blue-500 text-blue-500 border hover:bg-blue-50 hover:opacity-80 transition duration-100",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}
