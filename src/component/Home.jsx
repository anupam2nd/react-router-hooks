import React from "react";
import { Link, Outlet, Route } from "react-router-dom";

export default function Home() {
  const person = {
    name: "Anupam",
    prof: "Developer",
  };

  return (
    <>
      <div className="nav-bar">
        <ul className="nav nav-pills m-1 p-3">
          <li className="nav-item m-2">
            <Link className="nav-item" to={"/"} replace>
              home
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-item" to={"/about"}>
              About
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-item" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-item" to={"/book"}>
              Book
            </Link>
          </li>
        </ul>
      </div>
      <p className="lead">Home</p>

      <Outlet context={person} />
    </>
  );
}
