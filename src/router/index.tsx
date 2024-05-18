import ErrorBoundary from "@/components/error-boundary";
import Layout from "@/components/layout";
import Home from "@/pages";
import News from "@/pages/news";
import * as routePaths from "@/router/route-paths";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorBoundary />} element={<Layout />}>
        <Route path={routePaths.HOME} element={<Home />} />
        <Route path={`${routePaths.POST}/:object_id`} element={<News />} />
      </Route>
    </>
  )
);

export default router;
