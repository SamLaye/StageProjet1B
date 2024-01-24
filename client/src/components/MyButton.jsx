import React from "react";

function MyButton({
  type,
  style,
  dataBsToggle,
  dataBsTarget,
  dataBsDismiss,
  ariaLabel,
  btnLabel,
}) {
  return (
    <button
      type={type}
      className={style}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
      data-bs-dismiss={dataBsDismiss}
      aria-label={ariaLabel}
    >
      {btnLabel}
    </button>
  );
}

export default MyButton;
