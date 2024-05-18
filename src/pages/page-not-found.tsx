import pageNotFound from "@/assets/404.svg";
import { Button } from "@/components/ui/button";
import * as routePaths from "@/router/route-paths";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className=" flex flex-col items-center justify-center gap-3 h-screen">
      <img
        src={pageNotFound}
        alt="Page not found (404)"
        className="w-11/12 min-w-52 max-w-[450px]"
      />
      <Link to={routePaths.HOME}>
        <Button>Take back home</Button>
      </Link>
    </section>
  );
}

export default PageNotFound;
