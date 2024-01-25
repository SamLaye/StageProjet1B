import React from "react";

function Input({
  type,
  style,
  autoFocus,
  placeholder,
  id,
  value,
  onChange,
  required,
  name,
}) {
  return (
    <input
      type={type}
      className={style}
      autoFocus={autoFocus}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
    />
  );
}

export default Input;
