import React from "react";

function Button({ children }) {
  return (
    <button class="btn primary-text-color secondary-bg-color">
      {children}
    </button>
  );
}

export default Button;
