import BlockContent from "@sanity/block-content-to-react";
import { AiFillCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function TimelineEvent({ title, date, content, completed }) {
  return (
    <div className="flex w-full">
      <div className="flex px-6">
        {completed === false ? (
          <AiFillCloseCircle size={40} />
        ) : (
          <AiOutlineCheckCircle size={40} />
        )}
      </div>
      <div className="w-full space-y-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <span>{date}</span>
        {content && <BlockContent blocks={content} />}
      </div>
    </div>
  );
}
