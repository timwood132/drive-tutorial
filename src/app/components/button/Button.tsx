import React from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
