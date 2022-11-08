import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Banner from "../components/layout/Banner";
import useHttp from "../hooks/useHttp";
import { BASE_URL } from "../constants";
import ProductDetails from "../components/product/ProductDetails";
import { SUCCESS } from "../hooks/useHttp/actionTypes";

const { REACT_APP_API_KEY, REACT_APP_WAREHOUSE_ID } = process.env;

// Main Component
const ProductDetail = () => {
  const params = useParams();
  const id = params.id;

  const {
    state: { status, response: product },
    makeRequest: fetchProduct,
  } = useHttp();

  useEffect(() => {
    const config = {
      url: `${BASE_URL}/api/v4/product/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
      },
    };

    fetchProduct(config);
  }, [id, fetchProduct]);

  return (
    <>
      <BreadCrumb
        page={product ? `${product.categoryTitle} > ${product.title}` : ""}
      />
      <Banner>
        {status === SUCCESS && <ProductDetails product={product} />}
      </Banner>
    </>
  );
};

export default ProductDetail;
