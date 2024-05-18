import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <section>
      <nav className="w-full bg-fuchsia-950 text-white px-3 py-1.5">
        <h2>HackerNews</h2>
      </nav>
      <Outlet />
    </section>
  );
}

export default Layout;
