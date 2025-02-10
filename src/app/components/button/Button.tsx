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

const Button = ({
  className = "",
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  radius = "rounded",
  disabled,
  children,
  type = "button",
  ...props
}: Props) => {
  return (
    <button
      className={`iconButton ${variant} size-${size} ${radius} ${disabled ? "disabled" : ""} ${className}`}
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
