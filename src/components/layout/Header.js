import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/features/auth/auth-actions";
import { setCategoryList } from "../../app/features/category/categoryList-slice";

import { BASE_URL } from "../../constants";
import { SUCCESS } from "../../hooks/useHttp/actionTypes";
import useHttp from "../../hooks/useHttp/index";
import SearchBar from "../Header/SearchBar";
import CartButton from "../Header/CartButton";

const { REACT_APP_WAREHOUSE_ID, REACT_APP_API_KEY } = process.env;

/////////////////////////////////
// Component Function
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth);

  const {
    state: { status, response },
    makeRequest: fetchCategories,
  } = useHttp();

  useEffect(() => {
    const config = {
      url: `${BASE_URL}/api/v4/category`,
      headers: {
        "Content-Type": "application/json",
        "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
        "Api-Key": REACT_APP_API_KEY,
      },
    };

    fetchCategories(config);
  }, [fetchCategories]);

  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(setCategoryList(response));
    }
  }, [status, dispatch, response]);

  return (
    <>
      <div className="agileits_header fixed">
        <div className="w3l_offers">
          <Link to="/products">Today's special Offers !</Link>
        </div>
        {/* Search */}
        <SearchBar />
        <CartButton />

        <div className="w3l_header_right">
          <ul>
            <li
              className={`dropdown profile_details_drop ${
                dropdownOpen ? "open" : ""
              }`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span className="caret"></span>
              </a>
              <div className="mega-dropdown-menu">
                <div className="w3ls_vegetables">
                  <ul
                    className="dropdown-menu drp-mnu"
                    style={{ display: dropdownOpen ? "block" : "none" }}
                  >
                    {!isAuthenticated ? (
                      <>
                        <li>
                          <Link to="login">Login</Link>
                        </li>
                        <li>
                          <Link to="register">Sign Up</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <button onClick={() => dispatch(logout())}>
                            Logout
                          </button>
                        </li>

                        <li>
                          <button
                            onClick={() => {
                              navigate("/profile");
                            }}
                          >
                            Profile
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w3l_header_right1">
          <h2>
            <Link to="mail">Contact Us</Link>
          </h2>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left">
            <h1>
              <Link to="/">
                <span>Grocery</span> Store
              </Link>
            </h1>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="special_items">
              <li>
                <Link to="events">Events</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="about">About Us</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="products">Best Deals</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>(+0123) 234
                567
              </li>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:store@grocery.com">store@grocery.com</a>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
