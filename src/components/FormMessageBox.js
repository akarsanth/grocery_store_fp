import React from "react";
import Box from "@mui/material/Box";

const FormMessageBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {children}
    </Box>
  );
};

export default FormMessageBox;
