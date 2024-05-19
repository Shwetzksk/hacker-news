import { NewsComment } from "@/types/hacker-news";
import { useState } from "react";
import Reply from "./reply";
import ReplyToggle from "./reply-toggle";
import TimeStamp from "./timestamp";

interface Props {
  data: NewsComment;
}
function Comment({ data }: Props) {
  const [expand, setExpand] = useState(false);
  return (
    <section className="w-full my-5">
      <section className="p-2 border border-zinc-200">
        <div className="flex flex-col md:flex-row  md:items-center gap-x-3 mb-2 md:mb-1 ">
          <h3 className="text-base font-semibold text-slate-800">
            {data.author}
          </h3>
          <p className="text-xs text-slate-400 whitespace-nowrap ">
            commented <TimeStamp time={data.created_at} />
          </p>
        </div>
        <p
          className="text-sm text-slate-700 whitespace-pre-line break-words"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      </section>

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
              {data.children.map((reply) => (
                <Reply key={reply.id} data={reply} />
              ))}
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default Comment;
