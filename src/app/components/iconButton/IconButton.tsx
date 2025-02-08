import React from "react";
import "./iconButton.css";

type Props = {
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "outlined";
  size?: "xs" | "sm" | "md" | "lg";
  icon?: React.ReactNode;
  radius?: "square" | "rounded" | "circular";
  disabled?: boolean;
};

const IconButton = ({
  className = "",
  onClick,
  variant = "primary",
  size = "md",
  icon,
  radius = "rounded",
  disabled,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`iconButton ${variant} size-${size} ${radius} ${disabled ? "disabled" : ""} ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
