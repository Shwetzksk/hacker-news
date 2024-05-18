import PostCard from "@/components/post-card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import useSearchNews from "@/service/search.query";
import React, { useEffect, useMemo, useState } from "react";
import { IoFileTrayOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { NewsItem } from "@/types/hacker-news";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputQuery, setInputQuery] = useState("");
  const search = useMemo(() => {
    const value = new URLSearchParams(location.search).get("query");
    return value ?? "";
  }, [location]);
  const searchedNews = useSearchNews(search);

  function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputQuery(value);
    if (!value) return navigate(`${location.pathname}`);
  }

  useEffect(() => {
    if (search) {
      setInputQuery(search);
    }
  }, []);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (inputQuery) {
      timer = setTimeout(() => {
        const searchVal = `?query=${inputQuery}`;
        navigate(`${location.pathname}${searchVal}`);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [inputQuery]);

  if (searchedNews.isError)
    throw { status: 404, message: `Cannot find news for this query:${search}` };

  return (
    <section className="bg-slate-100 h-screen flex flex-col items-center ">
      <section className="flex flex-col w-5/6 max-w-11/12 lg:w-4/6  lg:max-w-[700px]  mx-auto bg-white  relative mt-8">
        <Input
          value={inputQuery}
          onChange={handleQuery}
          placeholder="Search news..."
        />

        {Boolean(search) && (
          <main className="w-full max-h-[calc(100vh-150px)] hover:overflow-y-auto overflow-y-hidden rounded-b-md absolute bg-white rounded-md shadow-lg top-10">
            {Boolean(searchedNews.isFetched && !searchedNews?.data?.length) && (
              <div className="flex flex-col justify-center items-center p-4 m-auto h-full ">
                <IoFileTrayOutline size={50} className="text-zinc-300" />
                <p className="text-center text-slate-400">No posts available</p>
              </div>
            )}
            {!searchedNews.isFetching &&
              searchedNews?.data?.map((news: NewsItem) => (
                <PostCard key={news.objectID} data={news} />
              ))}

            {searchedNews.isFetching && (
              <div className="py-5">
                <Skeleton className="w-11/12 mx-auto rounded-md h-6 my-3" />
                <p className="text-sm text-slate-500 text-center">
                  Loading news...
                </p>
              </div>
            )}
          </main>
        )}
      </section>
    </section>
  );
}

export default Home;
