import React, { useEffect } from "react";
import useHttp from "../hooks/useHttp";
import ProductList from "./product/ProductList";
import { BASE_URL } from "../constants";

const { REACT_APP_API_KEY, REACT_APP_WAREHOUSE_ID } = process.env;

// Main Component
const CategoryWiseCatalog = ({ category }) => {
  const { id, title } = category;

  const {
    state: { response: products },
    makeRequest,
  } = useHttp();

  useEffect(() => {
    const config = {
      url: `${BASE_URL}/api/v4/product?categoryId=${id}`,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
      },
    };

    makeRequest(config);
  }, [id, makeRequest]);

  return (
    <>
      {products && products.length > 0 && (
        <div className="w3ls_w3l_banner_nav_right_grid1">
          <h6>{title}</h6>
          <ProductList products={products} />

          <div className="clearfix"> </div>
        </div>
      )}
    </>
  );
};

export default CategoryWiseCatalog;
