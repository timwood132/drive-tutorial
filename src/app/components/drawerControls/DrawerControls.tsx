import type { Dispatch, SetStateAction } from "react";
import Button from "../button/Button";
import Pencil from "../icons/Pencil";
import Collapse from "../icons/Collapse";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DrawerControls = ({ open, setOpen }: Props) => {
  return (
    <div
      className={`absolute right-4 top-4 z-10 flex items-center justify-center`}
    >
      <Button
        variant="tertiary"
        iconLeft={<Pencil />}
        size="sm"
        radius="circular"
      />
      <Button
        variant="tertiary"
        iconLeft={
          <Collapse
            className={`${open ? "" : "rotate-180"} transition-all duration-[600ms] ease-[cubic-bezier(0.2,1.13,0.67,1.06)]`}
          />
        }
        size="sm"
        radius="circular"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default DrawerControls;
