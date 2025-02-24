"use client";
import HistoryItem from "../components/historyItem/HistoryItem";
import "../sandbox/sandbox.css";

export default function page() {
  return (
    <div>
      {/* <Button
        radius="rounded"
        size="sm"
        className="historyItem"
        iconRight={<EllipsisHorizontal />}
      >
        <Paragraph size="xs">
          {"Create React Typescript boilerplate for a Next.js app"}
        </Paragraph>
      </Button>
      <Button disabled>
        <Paragraph size="xs">{"Test Button"}</Paragraph>
      </Button> */}
      <HistoryItem onClick={() => console.log("clicked")} />
    </div>
  );
}
