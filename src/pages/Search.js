import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Banner from "../components/layout/Banner";
import useHttp from "../hooks/useHttp";
import { BASE_URL } from "../constants";
import { REQUESTING, SUCCESS } from "../hooks/useHttp/actionTypes";
import ProductList from "../components/product/ProductList";
import EmptyView from "../components/EmptyView";

const { REACT_APP_API_KEY, REACT_APP_WAREHOUSE_ID } = process.env;

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const {
    state: { status, response: products },
    makeRequest,
  } = useHttp();

  useEffect(() => {
    const config = {
      url: `${BASE_URL}/api/v4/product?query=${searchTerm}`,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        "Warehouse-Id": REACT_APP_WAREHOUSE_ID,
      },
    };

    makeRequest(config);
  }, [searchTerm, makeRequest]);

  return (
    <>
      <BreadCrumb page={`Search Term: ${searchTerm}`} />
      <Banner>
        <h3 className="pl-4 py-4">Search results for: {searchTerm}</h3>

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

export default Search;
