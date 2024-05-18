import { useState } from "react";
import { FiCornerDownRight } from "react-icons/fi";
import TimeStamp from "./timestamp";
import ReplyToggle from "./reply-toggle";
import { NewsComment } from "@/types/hacker-news";

interface Props {
  data: NewsComment;
}
export default function Reply({ data }: Props) {
  const [expand, setExpand] = useState(false);
  return (
    <section className="flex w-full my-2.5 ">
      <>
        <FiCornerDownRight size={18} className="text-slate-600" />
        <div className="px-2 flex-1">
          <div className="flex items-center gap-3 mb-1 ">
            <h3 className="text-base font-semibold text-slate-800">
              {data.author}
            </h3>
            <p className="text-xs text-slate-400">
              replied <TimeStamp time={data.created_at} />
            </p>
          </div>

          <p
            className="text-sm text-slate-700"
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
          {Boolean(data.children.length) && (
            <div className="px-2">
              <ReplyToggle
                onChange={() => setExpand((state) => !state)}
                repliesCount={data.children.length}
                isSingular={data.children.length < 2}
                toggle={expand}
              />

              {Boolean(expand) && (
                <>
                  {data.children.map((comment: NewsComment) => (
                    <Reply key={comment.id} data={comment} />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </>
    </section>
  );
}
