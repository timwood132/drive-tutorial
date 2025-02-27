import React from "react";

type Props = {
  children: React.ReactNode;
  open: boolean;
};

const Drawer = ({ children, open }: Props) => {
  return (
    <section
      aria-hidden={!open}
      className={`bg-surface-secondary ml-[-245px] mr-0 w-[245px] p-4 sm:my-4 sm:rounded-2xl ${open && "ml-0 sm:ml-4"} transition-all duration-200 aria-hidden:invisible`}
    >
      {children}
    </section>
  );
};

export default Drawer;
