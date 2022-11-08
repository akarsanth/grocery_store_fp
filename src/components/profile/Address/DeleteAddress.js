import React, { useEffect } from "react";

///////////////////////////////////////
// Redux
import { useSelector, useDispatch } from "react-redux";

//
import useHttp from "../../../hooks/useHttp";
import { BASE_URL } from "../../../constants";
import {
  updateErrorMessage,
  updateSuccessMessage,
} from "../../../app/features/message/message-slice";

// MUI
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ERROR, REQUESTING, SUCCESS } from "../../../hooks/useHttp/actionTypes";

const { REACT_APP_API_KEY } = process.env;

// Main component
const DeleteAddress = ({ addressId, setAddressChange }) => {
  const dispatch = useDispatch();
  const {
    state: { status, response },
    makeRequest,
  } = useHttp();

  // Token
  const { accessToken } = useSelector((state) => state.auth);

  const deleteHandler = () => {
    const config = {
      url: `${BASE_URL}/api/v4/delivery-address/${addressId}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": REACT_APP_API_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    };

    makeRequest(config);
  };

  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(updateSuccessMessage("Address deleted successfully!"));
      setAddressChange(true);
    }

    if (status === ERROR) {
      dispatch(updateErrorMessage("Address could not be deleted. Try again!"));
    }
  }, [status, dispatch, setAddressChange]);

  return (
    <LoadingButton
      loading={status === REQUESTING}
      variant="outlined"
      color="secondary"
      startIcon={<DeleteIcon />}
      onClick={deleteHandler}
    >
      Delete Address
    </LoadingButton>
  );
};

export default DeleteAddress;
