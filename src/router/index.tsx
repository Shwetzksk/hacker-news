import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "@/pages";
import Post from "@/pages/post";
import * as routePaths from "@/router/route-paths";
import ErrorBoundary from "@/components/error-boundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorBoundary />}>
        <Route path={routePaths.HOME} element={<Home />} />
        <Route path={`${routePaths.POST}/:object_id`} element={<Post />} />
      </Route>
    </>
  )
);

export default router;
