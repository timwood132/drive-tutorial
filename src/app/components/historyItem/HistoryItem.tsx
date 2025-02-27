import EllipsisHorizontal from "../icons/EllipsisHorizontal";
import Paragraph from "../typography/paragraph/Paragraph";
import "./historyItem.css";

type Props = {
  onClick: () => void;
};

const HistoryItem = ({ onClick }: Props) => {
  return (
    <div className="historyItem bg-surface-secondary hover:bg-surface-tertiary w-100 grid items-center overflow-hidden rounded-lg">
      <button className="p-2 text-left" onClick={onClick}>
        <Paragraph
          size="2xs"
          className="pointer-events-none relative overflow-hidden whitespace-nowrap before:absolute before:right-0 before:top-0 before:h-full before:w-[50px]"
        >
          {"Create React Typescript boilerplate for a Next.js app"}
        </Paragraph>
      </button>
      <button className="historyItem__menuBtn mx-2 rounded-full transition-all duration-200">
        <EllipsisHorizontal />
      </button>
    </div>
  );
};

export default HistoryItem;
