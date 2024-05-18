import ErrorBoundary from "@/components/error-boundary";
import Layout from "@/components/layout";
import Home from "@/pages";
import News from "@/pages/news";
import PageNotFound from "@/pages/page-not-found";
import * as routePaths from "@/router/route-paths";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route errorElement={<ErrorBoundary />}>
          <Route
            path={routePaths.HOME}
            element={<Home />}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path={`${routePaths.POST}/:object_id`}
            element={<News />}
            errorElement={<ErrorBoundary />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </>
  )
);

export default router;
