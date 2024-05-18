import * as route_paths from "@/router/route-paths";
import { NewsItem } from "@/types/hacker-news";
import * as dateFormatter from "@/utils/date-formatter";
import { FaRegComments } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";

interface Props {
  data: NewsItem;
}
const PostCard = ({ data }: Props): JSX.Element => {
  return (
    <Link to={`${route_paths.POST}/${data.objectID}`}>
      <div className="w-full px-2 py-1.5 border-b-2 border-zinc-100  cursor-pointer hover:bg-fuchsia-100/45">
        <h3 className=" text-slate-700 font-semibold text-sm">{data.title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-slate-500 text-xs">
            {dateFormatter.formatMonthYear(data.created_at)}
          </p>
          <div className="flex items-center gap-4 ">
            {" "}
            <div className="flex items-center gap-2 justify-center">
              <FaRegComments className="text-slate-400" />
              <p className="text-slate-500 text-xs">{data.num_comments}</p>
            </div>{" "}
            <div className="flex items-center gap-2 justify-center">
              <TiArrowSortedUp className="text-slate-400" />
              <p className="text-slate-500 text-xs">{data.points}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
