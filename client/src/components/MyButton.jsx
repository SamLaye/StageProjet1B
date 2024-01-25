import React from "react";

function MyButton({
  type,
  style,
  dataBsToggle,
  dataBsTarget,
  dataBsDismiss,
  ariaLabel,
  btnLabel,
  onClick,
}) {
  return (
    <button
      type={type}
      className={style}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
      data-bs-dismiss={dataBsDismiss}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {btnLabel}
    </button>
  );
}

export default MyButton;
