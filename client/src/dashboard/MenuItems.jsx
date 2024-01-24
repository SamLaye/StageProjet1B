import React from "react";
import { Link } from "react-router-dom";

export default function MenuItems({ MenuItemIcon, MenuItemName, MenuPath }) {
  return (
    <Link to={MenuPath} className="anotherLinkSidebar">
      <li className="row my-3 fw-bold MenuItemsColor">
        <i
          className={`col-2 bi ${MenuItemIcon} text-center text-md-start fs-5 my-auto `}
        ></i>
        <span className="d-none d-md-inline my-auto text-capitalize col-10">
          {MenuItemName}
        </span>
      </li>
    </Link>
  );
}
