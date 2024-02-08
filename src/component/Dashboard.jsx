import React, { useContext } from "react";
import DashboardContext from "../context-hooks/DashboardContext";

export default function Dashboard({}) {
  const user = useContext(DashboardContext);
  return (
    <div>
      <div className="card">
        <div className="card-header">{user.name}</div>
        <div className="card-body">{user.prof}</div>
      </div>
    </div>
  );
}
