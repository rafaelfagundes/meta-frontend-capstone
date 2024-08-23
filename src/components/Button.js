import React from "react";

function Button({ children, type }) {
  let style = "primary-text-color secondary-bg-color";
  if (type === "secondary") {
    style = "primary-bg-color white-text-color";
  }
  if (type === "outline") {
    style = "full-width";
  }

  return <button class={`btn ${style}`}>{children}</button>;
}

export default Button;
