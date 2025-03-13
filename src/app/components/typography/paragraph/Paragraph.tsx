import React from "react";
import { weightClasses } from "../utils";

type Props = {
  children: React.ReactNode;
  weight?: "regular" | "semibold" | "bold";
  size?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg";
  uppercase?: boolean;
  underline?: boolean;
  italic?: boolean;
  className?: string;
};

const sizeClasses = {
  "3xs": "text-[10px]", // Tailwind has no native `xxxs`
  "2xs": "text-xs", // 12px
  xs: "text-sm", // 14px
  sm: "text-base", // 16px
  md: "text-lg", // 18px
  lg: "text-xl", // 20px
};

const Paragraph = ({
  weight = "regular",
  size = "md",
  uppercase = false,
  underline = false,
  italic = false,
  children,
  className,
}: Props) => {
  return (
    <p
      className={`leading-[1.5] ${weightClasses[weight]} ${sizeClasses[size]} ${
        uppercase ? "uppercase" : ""
      } ${underline ? "underline" : ""} ${italic ? "italic" : ""} ${className ?? ""}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
