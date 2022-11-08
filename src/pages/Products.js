import React from "react";
import { useSelector } from "react-redux";

import Banner from "../components/layout/Banner";
import BreadCrumb from "../components/BreadCrumb";

// Images
import image13 from "../images/13.jpg";
import image14 from "../images/14.jpg";
import image15 from "../images/15.jpg";

import CategoryWiseCatalog from "../components/CategoryWiseCatalog";

const Products = () => {
  const { categories } = useSelector((state) => state.categoryList);

  return (
    <>
      <BreadCrumb page="Best Deals" />
      <Banner>
        <div className="w3l_banner_nav_right_banner3">
          <h3>
            Best Deals For New Products<span className="blink_me"></span>
          </h3>
        </div>
        <div className="w3l_banner_nav_right_banner3_btm">
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img src={image13} alt=" " className="img-responsive" />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Utensils</h4>
            <ol>
              <li>sunt in culpa qui officia</li>
              <li>commodo consequat</li>
              <li>sed do eiusmod tempor incididunt</li>
            </ol>
          </div>
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img src={image14} alt=" " className="img-responsive" />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Hair Care</h4>
            <ol>
              <li>enim ipsam voluptatem officia</li>
              <li>tempora incidunt ut labore et</li>
              <li>vel eum iure reprehenderit</li>
            </ol>
          </div>
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img src={image15} alt=" " className="img-responsive" />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Cookies</h4>
            <ol>
              <li>dolorem eum fugiat voluptas</li>
              <li>ut aliquid ex ea commodi</li>
              <li>magnam aliquam quaerat</li>
            </ol>
          </div>
          <div className="clearfix"> </div>
        </div>

        <div className="w3ls_w3l_banner_nav_right_grid">
          <h3>Popular Brands</h3>
          {categories.map((category) => {
            return (
              <CategoryWiseCatalog key={category.id} category={category} />
            );
          })}
        </div>
      </Banner>
    </>
  );
};

export default Products;
