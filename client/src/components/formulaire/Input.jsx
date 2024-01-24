import React from "react";

function Input({ text, style, autoFocus, placeholder, id }) {
  return (
    <input
      type={text}
      className={style}
      autoFocus={autoFocus}
      placeholder={placeholder}
      id={id}
    />
  );
}

export default Input;
