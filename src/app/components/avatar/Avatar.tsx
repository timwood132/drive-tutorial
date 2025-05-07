import Button from "../button/Button";
import avatar from "./avatar.png";
import Image from "next/image";
import Paragraph from "../typography/paragraph/Paragraph";
import Label from "../typography/label/Label";

type Props = {
  name: string;
  email: string;
};

const Avatar = ({ name, email }: Props) => {
  return (
    <Button
      aria-label="avatar"
      id="avatar"
      variant="outlined"
      className="gap-4 rounded-lg group-[.drawer]:justify-start"
      iconLeft={<Image alt={"avatar"} src={avatar} className="min-w-12" />}
    >
      <div className="flex flex-col items-start justify-center gap-1 overflow-hidden py-2">
        <Paragraph
          size="2xs"
          weight="semibold"
          className="ellipsis text-left text-foreground-primary"
        >
          {name}
        </Paragraph>
        <Label
          className="ellipsis text-left text-foreground-tertiary"
          size="2xs"
        >
          {email}
        </Label>
      </div>
    </Button>
  );
};

export default Avatar;
