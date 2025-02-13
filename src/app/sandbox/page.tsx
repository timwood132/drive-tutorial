import Button from "../components/button/Button";
import EllipsisHorizontal from "../components/icons/EllipsisHorizontal";
import Paragraph from "../components/typography/paragraph/Paragraph";
import "../sandbox/sandbox.css";

export default function page() {
  return (
    <Button
      radius="rounded"
      size="sm"
      className="historyItem"
      iconRight={
        <Button
          className={"historyItem__menuBtn"}
          iconLeft={<EllipsisHorizontal />}
        ></Button>
      }
    >
      <Paragraph size="xs">
        {"Create React Typescript boilerplate for a Next.js app"}
      </Paragraph>
    </Button>
  );
}
