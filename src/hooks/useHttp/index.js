import { useReducer, useCallback } from "react";
import axios from "axios";
import reducer, { initialState } from "./reducer";
import { requesting, success, error } from "./actionCreators";

const useHttp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(async (config) => {
    dispatch(requesting());

    try {
      const { data } = await axios({
        method: config.method ? config.method : "GET",
        url: config.url,
        data: config.body ? config.body : {},
        headers: config.headers ? config.headers : {},
      });

      dispatch(success(data.data));
    } catch (e) {
      const errors =
        e.response && e.response.data.errors
          ? e.response.data.errors
          : e.message;

      console.log(errors);
      dispatch(error(errors));
    }
  }, []);

  return { state, makeRequest };
};

export default useHttp;
