import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/layout/Banner";
import { useSelector } from "react-redux";

// Images
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";
import image9 from "../images/9.jpg";
import image10 from "../images/10.jpg";
import image11 from "../images/11.png";

import CategoryWiseCatalog from "../components/CategoryWiseCatalog";

const Home = () => {
  const { categories } = useSelector((state) => state.categoryList);

  return (
    <>
      <Banner>
        <section className="slider">
          <div className="flexslider">
            <ul className="slides">
              <li style={{ listStyle: "none" }}>
                <div className="w3l_banner_nav_right_banner">
                  <h3>
                    Make your <span>food</span> with Spicy.
                  </h3>
                  <div className="more">
                    <Link
                      to="products"
                      className="button--saqui button--round-l button--text-thick"
                      data-text="Shop now"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </Banner>

      {/* Banner Bottom */}
      <div className="banner_bottom">
        <div className="wthree_banner_bottom_left_grid_sub"></div>
        <div className="wthree_banner_bottom_left_grid_sub1">
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img src={image4} alt=" " className="img-responsive" />
              <div className="wthree_banner_bottom_left_grid_pos">
                <h4>
                  Discount Offer <span>25%</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img src={image5} alt=" " className="img-responsive" />
              <div className="wthree_banner_btm_pos">
                <h3>
                  introducing <span>best store</span> for <i>groceries</i>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img src={image6} alt=" " className="img-responsive" />
              <div className="wthree_banner_btm_pos1">
                <h3>
                  Save <span>Upto</span> $10
                </h3>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
      </div>

      {/*  Top Brands */}
      <div className="top-brands">
        <div className="container">
          <h3>Hot Offers</h3>
          {categories.length > 1 && (
            <CategoryWiseCatalog category={categories[1]} noHeading />
          )}
        </div>
      </div>

      {/* Fresh Vegetables */}
      <div className="fresh-vegetables">
        <div className="container">
          <h3>Top Products</h3>
          <div className="w3l_fresh_vegetables_grids">
            <div className="col-md-3 w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left">
              <div className="w3l_fresh_vegetables_grid2">
                <ul>
                  {categories.map((category) => {
                    return (
                      <li key={category.id}>
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <Link to={`/category/${category.id}`}>
                          {category.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-9 w3l_fresh_vegetables_grid_right">
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <img src={image8} alt=" " className="img-responsive" />
                </div>
              </div>
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <div className="w3l_fresh_vegetables_grid1_rel">
                    <img src={image7} alt=" " className="img-responsive" />
                    <div className="w3l_fresh_vegetables_grid1_rel_pos">
                      <div className="more m1">
                        <Link
                          className="button--saqui button--round-l button--text-thick"
                          to="products"
                        >
                          Shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w3l_fresh_vegetables_grid1_bottom">
                  <img src={image10} alt=" " className="img-responsive" />
                  <div className="w3l_fresh_vegetables_grid1_bottom_pos">
                    <h5>Special Offers</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <img src={image9} alt=" " className="img-responsive" />
                </div>
                <div className="w3l_fresh_vegetables_grid1_bottom">
                  <img src={image11} alt=" " className="img-responsive" />
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="agileinfo_move_text">
                <div className="agileinfo_marquee">
                  <h4>
                    get <span className="blink_me">25% off</span> on first order
                    and also get gift voucher
                  </h4>
                </div>
                <div className="agileinfo_breaking_news">
                  <span> </span>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
