import React, { useState } from "react";
import { resetMessageState } from "../app/features/message/message-slice";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Message = ({ message, severity }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(resetMessageState());
    setOpen(false);
  };

  if (Array.isArray(message)) {
    return (
      <div>
        {message.map((msg) => {
          return (
            <Snackbar
              key={msg}
              open={open}
              autoHideDuration={2000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity={severity ? severity : "success"}
                sx={{ width: "100%" }}
              >
                {msg.title}
              </Alert>
            </Snackbar>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity ? severity : "success"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Message;
