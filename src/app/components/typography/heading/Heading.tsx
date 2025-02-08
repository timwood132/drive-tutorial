import type React from "react";
import { createElement } from "react";
import "../typography.css";

type Props = {
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: "light" | "regular" | "semibold" | "bold";
  children: React.ReactNode;
};

const Heading = ({ element = "h1", weight = "regular", children }: Props) => {
  return createElement(
    element,
    { className: `heading-${element} weight-${weight} lineHeight-heading` },
    children,
  );
};

export default Heading;
