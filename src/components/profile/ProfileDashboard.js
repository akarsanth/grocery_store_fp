import React, { useState, useEffect } from "react";

import {
  Link as RouterLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/auth/auth-actions";

//////////////////////////////////////
// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import CustomizedGrid from "../grid/CustomizedGrid";
import { locationList } from "./";
import { AccountScreenHeader } from "./";

// Main Component
const ProfileDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedList, setSelectedList] = useState("Dashboard");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // getting the current path from the url
    const list = location.pathname.split("/")[2];

    if (list) {
      setSelectedList(locationList[list].text);
      setSelectedIndex(locationList[list].index);
    } else {
      navigate("/profile/dashboard");
    }
  }, [location.pathname, navigate]);

  return (
    <Box>
      <AccountScreenHeader>
        <Box>
          <Typography variant="h6" sx={{ pb: 1, fontWeight: 700 }}>
            My Profile
          </Typography>
          <Typography variant="body1">{selectedList}</Typography>
        </Box>
      </AccountScreenHeader>

      <Container>
        <CustomizedGrid
          container
          spacing={2}
          columns={{ xs: 1, md: 2 }}
          sx={{ mb: 8, mt: 0 }}
        >
          <Grid item xs={1} md={0.5} sx={{ mb: 3 }}>
            <Box sx={{ bgcolor: "#fff", border: 2, borderColor: "#eee" }}>
              <List
                component="nav"
                aria-label="My Account Page navigation"
                sx={{ py: 2 }}
              >
                <Link
                  to="/profile/dashboard"
                  component={RouterLink}
                  underline="none"
                >
                  <ListItemButton selected={selectedIndex === 0}>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </Link>

                <Link
                  to="/profile/orders"
                  component={RouterLink}
                  underline="none"
                >
                  <ListItemButton
                    selected={selectedIndex === 1 || selectedIndex === 4}
                  >
                    <ListItemText primary="Orders" />
                  </ListItemButton>
                </Link>

                <Link
                  to="/profile/address"
                  component={RouterLink}
                  underline="none"
                >
                  <ListItemButton selected={selectedIndex === 2}>
                    <ListItemText primary="Address" />
                  </ListItemButton>
                </Link>

                <Link
                  to="/profile/details"
                  component={RouterLink}
                  underline="none"
                >
                  <ListItemButton selected={selectedIndex === 3}>
                    <ListItemText primary="Acount Details" />
                  </ListItemButton>
                </Link>

                <ListItemButton onClick={() => dispatch(logout())}>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </List>
            </Box>
          </Grid>
          {/* For Outlet */}
          <Grid item xs={1} md={1.5}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: 2,
                borderColor: "#eee",
                p: 2,
                height: "100%",
              }}
            >
              <Outlet />
            </Box>
          </Grid>
        </CustomizedGrid>
      </Container>
    </Box>
  );
};

export default ProfileDashboard;
