import * as routePaths from "@/router/route-paths";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <section>
      <nav className="w-full bg-fuchsia-950 text-white px-3 py-1.5">
        <h2 className="w-fit text-white">
          <Link
            to={routePaths.HOME}
            className="w-fit text-white hover:text-current"
          >
            HackerNews
          </Link>
        </h2>
      </nav>

      <Outlet />
    </section>
  );
}

export default Layout;
