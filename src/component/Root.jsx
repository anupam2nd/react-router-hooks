import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import DashboardContext from "../context-hooks/DashboardContext";
import { RouterProvider } from "react-router-dom";
import { router } from "../Route/router";

export default function Root() {
  const [first, setfirst] = useState("second");
  const [count, setCount] = useState(0);

  const date = new Date();

  const counHandler = () => {
    setCount((count) => count + 1);
  };

  const [user] = useState({
    name: "Anupam",
    prof: "Developer",
  });

  useEffect(() => {
    console.log("this is root", date.toLocaleTimeString());
    console.log(count);
  }, [first, count]);

  return (
    <>
      {/* 
      <button className="btn btn-primary m-2" onClick={counHandler}>
        click
      </button>

      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider> */}

      <RouterProvider router={router} />
    </>
  );
}
