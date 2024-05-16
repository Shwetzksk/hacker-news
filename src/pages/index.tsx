import PostCard from "@/components/post-card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import useSearchNews from "@/service/search.query";
import { useEffect, useMemo, useState } from "react";
import { IoFileTrayOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputQuery, setInputQuery] = useState("");
  const search = useMemo(() => {
    const value = new URLSearchParams(location.search).get("query");
    return value ?? "";
  }, [location]);
  const searchedNews = useSearchNews(search);

  function handleQuery(e) {
    const { value } = e.target;
    setInputQuery(value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const search = inputQuery ? `?query=${inputQuery}` : "";
      navigate(`${location.pathname}${search}`);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [inputQuery]);

  return (
    <section className="bg-slate-100 h-screen flex flex-col items-center justify-center">
      <nav className="w-full bg-fuchsia-950 text-white px-3 py-1.5">
        <h2>HackerNews</h2>
      </nav>
      <section className="flex flex-col items-center  max-w-[700px] w-4/6 mx-auto bg-white rounded-md shadow-lg m-auto">
        <Input
          value={inputQuery}
          onChange={handleQuery}
          placeholder="Search news..."
        />

        {Boolean(search) && (
          <main className="w-full h-[calc(100vh-100px)] hover:overflow-y-auto overflow-y-hidden rounded-b-md">
            {Boolean(searchedNews.isFetched && !searchedNews?.data?.length) && (
              <div className="flex flex-col justify-center items-center p-4 m-auto h-full ">
                <IoFileTrayOutline size={50} className="text-zinc-300" />
                <p className="text-center text-slate-400">No posts available</p>
              </div>
            )}
            {!searchedNews.isFetching &&
              searchedNews?.data?.map((news) => (
                <PostCard key={news.objectID} data={news} />
              ))}

            {searchedNews.isFetching && (
              <>
                <Skeleton className="w-11/12 mx-auto rounded-md h-6 my-3" />
                <p className="text-sm text-slate-500 text-center">
                  Loading news...
                </p>
              </>
            )}
          </main>
        )}
      </section>
    </section>
  );
}

export default Home;
