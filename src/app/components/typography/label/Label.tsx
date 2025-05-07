import React from "react";
import { sizeClasses, weightClasses } from "../utils";

type Props = {
  children: React.ReactNode;
  weight?: "regular" | "semibold" | "bold";
  size?: "3xs" | "2xs" | "xs" | "sm" | "md";
  underline?: boolean;
  italic?: boolean;
  className?: string;
};

const Label = ({
  weight = "regular",
  size = "md",
  underline = false,
  italic = false,
  children,
  className,
}: Props) => {
  return (
    <p
      className={`${weightClasses[weight]} ${sizeClasses[size]} ${underline ? "underline" : ""} ${italic ? "italic" : ""} ${className ?? ""}`}
    >
      {children}
    </p>
  );
};

export default Label;
