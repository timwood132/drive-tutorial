import React from "react";
import "../typography.css";

type Props = {
  children: React.ReactNode;
  weight?: "regular" | "semibold" | "bold";
  size?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg";
  preText?: boolean;
  underline?: boolean;
  italic?: boolean;
};

const Paragraph = ({
  weight = "regular",
  size = "md",
  preText = false,
  underline = false,
  italic = false,
  children,
}: Props) => {
  return (
    <p
      className={`paragraph .lineHeight-paragraph weight-${weight} size-${size} ${preText ? "preText" : ""} ${underline ? "underline" : ""} ${italic ? "italic" : ""}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
