import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Contact() {
  const data = useOutletContext();

  return (
    <div className="display-4">
      {" "}
      Contact
      <p>
        {" "}
        {data.name} | {data.prof}{" "}
      </p>
    </div>
  );
}
