import React from "react";
import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outlined";
  size?: "xs" | "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  radius?: "square" | "rounded" | "circular";
  children?: React.ReactNode;
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outlined";
  size?: "xs" | "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  radius?: "square" | "rounded" | "circular";
  children?: React.ReactNode;
}

const baseStyles =
  "flex items-center justify-between transition-all duration-200 cursor-pointer";

const variantStyles: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-surface-interactive-primary hover:bg-surface-interactive-primary-hover focus:bg-surface-interactive-primary-focus active:hover:bg-surface-interactive-primary-press disabled:bg-surface-primary-disabled text-white disabled:text-foreground-disabled",
  secondary: "bg-gray-200 text-gray-800",
  tertiary: "bg-gray-100 text-gray-700",
  outlined: "border border-gray-500 text-gray-700 bg-transparent",
};

const sizeStyles: Record<NonNullable<Props["size"]>, string> = {
  xs: "p-1 text-xs [&>svg]:h-4 [&>svg]:w-4",
  sm: "p-2 text-sm [&>svg]:h-5 [&>svg]:w-5",
  md: "p-2.5 text-base [&>svg]:h-6 [&>svg]:w-6",
  lg: "p-3 text-lg [&>svg]:h-7 [&>svg]:w-7",
};

const radiusStyles: Record<NonNullable<Props["radius"]>, string> = {
  square: "rounded-none",
  rounded: "rounded",
  circular: "rounded-full",
};

const Button: React.FC<Props> = ({
  className = "",
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  radius = "rounded",
  children,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${radiusStyles[radius]} ${className}`}
      type={type}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;
