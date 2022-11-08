import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ page }) => {
  return (
    <div className="products-breadcrumb">
      <div className="container">
        <ul>
          <li>
            <i className="fa fa-home" aria-hidden="true"></i>
            <Link to="/">Home</Link>
            <span>|</span>
          </li>
          <li>{page}</li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
