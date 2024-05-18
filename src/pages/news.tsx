import { useState } from "react";
import useFetchTechNews from "@/service/fetch-tech-news.query";
import * as dateFormatter from "@/utils/date-formatter";
import { useParams } from "react-router-dom";
import { NewsComment } from "@/types/hacker-news";
import Comment from "@/components/comment";
import { Button } from "@/components/ui/button";

type NewsParams = {
  object_id: string | undefined;
};
function News(): JSX.Element {
  const params = useParams<NewsParams>();
  const techNews = useFetchTechNews(params.object_id);
  const [limit, setLimit] = useState(10);

  function handleShowMore() {
    setLimit((state) => state + 10);
  }
  if (techNews.isError) throw { status: 404, message: `Cannot find news` };

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
          {techNews.data?.children?.length ? (
            <div className="w-full py-5 ">
              <h3 className="text-lg font-semibold text-fuchsia-800">
                Members Discussion
              </h3>
              <section className="px-3">
                {techNews.data?.children
                  ?.slice(0, limit)
                  ?.map((comment: NewsComment) => (
                    <Comment key={comment.id} data={comment} />
                  ))}
                {Boolean(limit < techNews.data?.children?.length) && (
                  <Button onClick={handleShowMore}>Show More</Button>
                )}
              </section>
            </div>
          ) : null}
        </main>
      )}
    </section>
  );
}

export default News;
