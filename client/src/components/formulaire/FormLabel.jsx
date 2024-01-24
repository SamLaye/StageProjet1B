import React from "react";

function FormLabel({ style, labelFor, labelName }) {
  return (
    <label for={labelFor} className={style}>
      {labelName}
    </label>
  );
}

export default FormLabel;
