import React, { useState } from "react";
import DrawerControls from "../drawerControls/DrawerControls";

type Props = {
  children: React.ReactNode;
  //   open: boolean;
};

const Drawer = ({ children }: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <section
      className={`drawer relative ml-[-245px] mr-0 w-[245px] sm:my-4 sm:ml-4 sm:w-[78px] ${open ? "open ml-0" : ""} transition-all duration-[800ms] ease-[cubic-bezier(0.2,1.13,0.67,1.06)]`}
    >
      <DrawerControls open={open} setOpen={setOpen} />
      <div
        aria-hidden={!open}
        className={`flex h-full flex-col bg-surface-secondary p-4 transition-all duration-[800ms] ease-[cubic-bezier(0.2,1.13,0.67,1.06)] sm:rounded-2xl sm:opacity-0 ${open ? "ml-0 sm:opacity-100" : "invisible pl-0"}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Drawer;
