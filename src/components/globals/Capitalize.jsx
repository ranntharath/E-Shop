
import React from "react";

function Capitalize({ text }) {
  const capitalized =
    text && typeof text === "string"
      ? text.charAt(0).toUpperCase() + text.slice(1)
      : text;

  return <span>{capitalized}</span>;
}

export default Capitalize;
