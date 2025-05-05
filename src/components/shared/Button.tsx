
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = "primary", 
  size = "md", 
  children, 
  className,
  ...props 
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-luxe-magenta focus:ring-opacity-50 disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-luxe-magenta text-white hover:bg-luxe-magenta/90": variant === "primary",
          "bg-luxe-charcoal text-white hover:bg-luxe-charcoal/90": variant === "secondary",
          "bg-transparent border border-luxe-magenta text-luxe-magenta hover:bg-luxe-magenta/10": variant === "outline",
          "bg-transparent text-luxe-charcoal hover:bg-luxe-charcoal/10": variant === "ghost",
          "text-xs px-2.5 py-1.5 rounded": size === "sm",
          "text-sm px-4 py-2 rounded-md": size === "md",
          "text-base px-6 py-3 rounded-md": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
