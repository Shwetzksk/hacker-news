import useFetchTechNews from "@/service/fetch-tech-news.query";
import * as dateFormatter from "@/utils/date-formatter";
import { useParams } from "react-router-dom";
import { NewsComment } from "@/types/hacker-news";
import Comment from "@/components/comment";

type NewsParams = {
  object_id: string | undefined;
};
function Post(): JSX.Element {
  const params = useParams<NewsParams>();
  const techNews = useFetchTechNews(params.object_id);

  if (techNews.isError)
    throw { status: 404, message: `Cannot find news for this id` };
  return (
    <section className="bg-slate-100 min-h-screen py-3">
      {Boolean(techNews.isFetching) && (
        <div className="flex justify-between p-6">
          <p>Loading news....</p>
        </div>
      )}
      {Boolean(!techNews.isFetching) && (
        <main className="w-11/12 mx-auto bg-white shadow-md rounded-md p-5 ">
          <h1 className="text-lg font-semibold">{techNews?.data?.title}</h1>
          <div className="flex flex-col mt-1 gap-0 md:flex-row md:items-center md:gap-3">
            {[
              `Author: ${techNews?.data?.author}`,
              `Created at: ${dateFormatter.formatMonthYear(
                techNews?.data?.created_at
              )}`,
              `Comments: ${techNews?.data?.children.length}`,
            ].map((content, i) => (
              <p key={i} className="text-sm text-slate-500">
                {content}
              </p>
            ))}
          </div>
          <div className="w-full py-5 ">
            <h3 className="text-lg font-semibold text-fuchsia-800">
              Members Discussion
            </h3>
            <section className="px-3">
              {techNews.data?.children?.map((comment: NewsComment) => (
                <Comment key={comment.id} data={comment} />
              ))}
            </section>
          </div>
        </main>
      )}
    </section>
  );
}

export default Post;
