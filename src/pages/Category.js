import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Banner from "../components/layout/Banner";
import useHttp from "../hooks/useHttp";
import { BASE_URL } from "../constants";
import { REQUESTING, SUCCESS } from "../hooks/useHttp/actionTypes";
import ProductList from "../components/product/ProductList";
import EmptyView from "../components/EmptyView";

const { REACT_APP_API_KEY, REACT_APP_WAREHOUSE_ID } = process.env;

// Main component
const CategoryPage = () => {
  const [category, setCategory] = useState("");
  const { categories } = useSelector((state) => state.categoryList);
  const params = useParams();
  const id = params.id;

  const {
    state: { status, response: products },
    makeRequest,
  } = useHttp();

  useEffect(() => {
    const category = categories.find(
      (category) => category.id === parseInt(id)
    );

    setCategory(category?.title);

    // fetching products
    const config = {
      url: `${BASE_URL}/api/v4/product?categoryId=${id}`,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
      },
    };

    makeRequest(config);
  }, [id, categories, makeRequest]);

  return (
    <>
      <BreadCrumb page={category} />
      <Banner>
        <h3 className="pl-4 py-4">Product(s) under the category: {category}</h3>

        {status === REQUESTING && (
          <div className="pl-4 pt-2">
            <CircularProgress />
          </div>
        )}

        {status === SUCCESS && (
          <>
            {products.length === 0 ? (
              <EmptyView />
            ) : (
              <ProductList products={products} />
            )}
          </>
        )}
      </Banner>
    </>
  );
};

export default CategoryPage;
