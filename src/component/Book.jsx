import React from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  //   console.log({ id });
  return (
    <>
      <p className="display-6">Book : {id} </p>
    </>
  );
}
