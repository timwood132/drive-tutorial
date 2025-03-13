import React from "react";

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
  tertiary:
    "bg-transparent text-gray-700 hover:bg-surface-tertiary-hover focus:bg-surface-tertiary-focus disabled:bg-surface-tertiary-disabled",
  outlined: "border border-gray-500 text-gray-700 bg-transparent",
};

const sizeStyles: Record<NonNullable<Props["size"]>, string> = {
  xs: "p-1 text-xs",
  sm: "p-2 text-sm",
  md: "p-2.5 text-base",
  lg: "p-3 text-lg",
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
