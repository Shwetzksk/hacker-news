import useFetchTechNews from "@/service/fetch-tech-news.query";
import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  const searchedNews = useFetchTechNews(params.object_id);

  return <div>Post</div>;
}

export default Post;
