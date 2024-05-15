import router from "@/router";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ReactQueryProvider from "@/service/react-query-provider";

function App() {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  );
}

export default App;
