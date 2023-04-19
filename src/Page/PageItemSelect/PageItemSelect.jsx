import React from "react";
import { Link } from "react-router-dom";

function PageItemSelect(props) {
  return (
    <ul className="page_item_select">
       <li>
        <Link className="item_select_link" to="/Page/New/New.jsx">
          <span className="item_title">Главная</span>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.88906 5L0 1.11094L1.11094 0L6.11094 5L1.11094 10L0 8.88906L3.88906 5Z" fill="#E0BEA2"/>
          </svg>
        </Link>
      </li>
      <li>
        <Link className="item_select_link">
          <span className="item_title">{props.select}</span>
        </Link>
      </li>
    </ul>
  );
}

export default PageItemSelect;
