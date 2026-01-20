"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Component = "button",
  ...props
}: ButtonProps & { as?: React.ElementType }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 active:scale-95",
    secondary: "bg-accent text-foreground hover:bg-accent/80 active:scale-95",
    outline:
      "border border-foreground/10 bg-transparent hover:bg-accent active:scale-95",
    ghost: "bg-transparent hover:bg-accent active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
