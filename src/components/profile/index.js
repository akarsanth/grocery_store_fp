import Box from "@mui/material/Box";
// Styled components
import { styled } from "@mui/material/styles";

export const AccountScreenHeader = styled(Box)(({ theme }) => ({
  height: 120,
  backgroundColor: theme.palette.secondary.light,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  padding: `${theme.spacing(3)} 0`,
  textAlign: "center",
  marginBottom: theme.spacing(5),
}));

export const locationList = {
  dashboard: {
    index: 0,
    text: "Dashboard",
  },

  orders: {
    index: 1,
    text: "Orders",
  },

  address: {
    index: 2,
    text: "Address",
  },

  details: {
    index: 3,
    text: "Account Details",
  },

  vieworder: {
    index: 4,
    text: "View Order",
  },
};
