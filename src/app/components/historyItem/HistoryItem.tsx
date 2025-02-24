import EllipsisHorizontal from "../icons/EllipsisHorizontal";
import Paragraph from "../typography/paragraph/Paragraph";
import "./historyItem.css";

type Props = {
  onClick: () => void;
};

const HistoryItem = ({ onClick }: Props) => {
  return (
    <div className="historyItem bg-surface-secondary items-space-between hover:bg-surface-tertiary w-100 flex rounded">
      <button
        className="bg-inheritHistoryItem min-w-0 flex-1 p-2 text-left"
        onClick={onClick}
      >
        <Paragraph
          size="xs"
          className="pointer-events-none relative overflow-hidden whitespace-nowrap before:absolute before:right-0 before:top-0 before:h-full before:w-[50px]"
        >
          {"Create React Typescript boilerplate for a Next.js app"}
        </Paragraph>
      </button>
      <button className="rounded p-2">
        <EllipsisHorizontal />
      </button>
    </div>
  );
};

export default HistoryItem;
