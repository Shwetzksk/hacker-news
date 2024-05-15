import { Input } from "@/components/ui/input";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSearchNews from "@/service/search.query";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputQuery, setInputQuery] = useState("");
  const search = useMemo(() => {
    const value = location.search.slice(1).split("=")[1];
    console.log("query===>", new URLSearchParams(location.search).get("query"));
    return value;
  }, [location]);
  const searchedNews = useSearchNews(search);

  function handleQuery(e) {
    const { value } = e.target;
    setInputQuery(value);
  }

  console.log(searchedNews);

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
    </div>
  );
}

export default Home;
