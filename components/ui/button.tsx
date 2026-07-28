import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-sm font-medium tracking-wide transition-all duration-300 ease-silk hover:scale-[1.03] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-ivory hover:bg-charcoal-soft shadow-soft",
        wine: "bg-wine text-ivory hover:bg-wine-dark shadow-soft",
        outline: "border border-charcoal/20 bg-transparent text-charcoal hover:bg-charcoal hover:text-ivory",
        ghost: "bg-transparent text-charcoal hover:bg-champagne/40",
        link: "text-wine underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
