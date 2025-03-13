import type React from "react";
import { createElement } from "react";
import { weightClasses } from "../utils";

type Props = {
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: "light" | "regular" | "semibold" | "bold";
  children: React.ReactNode;
};

const sizeClasses = {
  h1: "text-[2rem]",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-base",
  h6: "text-sm",
};

const Heading = ({ element = "h1", weight = "regular", children }: Props) => {
  return createElement(
    element,
    {
      className: `${sizeClasses[element]} ${weightClasses[weight]} leading-[1.3]`,
    },
    children,
  );
};

export default Heading;
