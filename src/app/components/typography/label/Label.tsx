import React from "react";
import "../typography.css";

type Props = {
  children: React.ReactNode;
  weight?: "regular" | "semibold" | "bold";
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  underline?: boolean;
  italic?: boolean;
};

const Label = ({
  weight = "regular",
  size = "md",
  underline = false,
  italic = false,
  children,
}: Props) => {
  return (
    <p
      className={`label weight-${weight} size-${size} ${underline ? "underline" : ""} ${italic ? "italic" : ""}`}
    >
      {children}
    </p>
  );
};

export default Label;
