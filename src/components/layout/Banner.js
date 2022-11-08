import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Main Component
const Banner = ({ children }) => {
  const { categories } = useSelector((state) => state.categoryList);

  return (
    <div className="banner">
      <div className="w3l_banner_nav_left">
        <nav className="navbar nav_bottom">
          <div className="navbar-header nav_2">
            <button
              type="button"
              className="navbar-toggle collapsed navbar-toggle1"
              data-toggle="collapse"
              data-target="#bs-megadropdown-tabs"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul className="nav navbar-nav nav_1">
              {categories.map((category) => {
                return (
                  <React.Fragment key={category.id}>
                    <li key={category.id}>
                      <Link to={`/category/${category.id}`}>
                        {category.title}
                      </Link>
                    </li>
                    {category.subcategories.map((subCat) => {
                      return (
                        <li key={subCat.id}>
                          <Link to={`/category/${subCat.id}`}>
                            {subCat.title}
                          </Link>
                        </li>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>

      <div className="w3l_banner_nav_right mb-3">{children}</div>
      <div className="clearfix"></div>
    </div>
  );
};

export default Banner;
