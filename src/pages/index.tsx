import { Input } from "@/components/ui/input";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSearchNews from "@/service/search.query";
import { FaRegComments } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputQuery, setInputQuery] = useState("");
  const search = useMemo(() => {
    const value = new URLSearchParams(location.search).get("query");
    return value ?? "";
  }, [location]);
  //   const searchedNews = useSearchNews(search);

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
    <div>
      <Input
        value={inputQuery}
        onChange={handleQuery}
        placeholder="Search news..."
      />

      <PostCard />
    </div>
  );
}

export default Home;

function PostCard({}) {
  return (
    <div>
      <div>
        <h3 className="font-bold">Title</h3>
        <p>desc</p>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <p>3 days ago</p>
        <div className="flex items-center gap-2 justify-center">
          <FaRegComments />
          <p>20</p>
        </div>{" "}
        <div className="flex items-center gap-2 justify-center">
          <TiArrowSortedUp />
          <p>20</p>
        </div>
      </div>
    </div>
  );
}
