import React from "react";

function Button({ children, type, className }) {
  let style = "primary-text-color secondary-bg-color";
  if (type === "secondary") {
    style = "primary-bg-color white-text-color";
  }
  if (type === "outline") {
    style = "full-width";
  }

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`btn ${style} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
