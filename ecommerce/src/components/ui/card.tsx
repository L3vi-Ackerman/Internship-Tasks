import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "circular";
};

const cardImageVariants = cva("flex item-center justify-center", {
  variants: {
    variant: {
      default: "rounded-lg bg-gray-100",
      circular:
        "flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 transition duration-200 hover:bg-gray-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
const CardImage: React.FC<CardProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <div {...props} className={cn(cardImageVariants({ variant }), className)}>
      {children}
    </div>
  );
};

// Card Title component
const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h2
      className={cn(
        "font-bold text-black cursor-text text-lg md:text-base",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

// Card Content component

// Card Description component
const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={cn("text-xs text-gray-400 font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

const Card: React.FC<CardProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <div {...props} className={cn("flex rounded-lg font-sans", className)}>
      {children}
    </div>
  );
};

export { Card, CardImage, CardTitle, CardDescription };
