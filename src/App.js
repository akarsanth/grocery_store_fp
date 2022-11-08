import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { authUser } from "./app/features/auth/auth-actions";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./ProtectedRoutes";
import { fetchUserInfo } from "./app/features/auth/auth-actions";

// Pages
import {
  Home,
  About,
  Events,
  Services,
  Products,
  ContactUs,
  Login,
  Register,
  FAQ,
  Privacy,
  Category,
  ProductDetail,
  ForgotPassword,
  Profile,
  Search,
  Cart,
  Checkout,
  OrderComplete,
} from "./pages";
import Address from "./components/profile/Address";
import Dashboard from "./components/profile/Dashboard";
import Orders from "./components/profile/Orders";
import AccountDetails from "./components/profile/Account";
import ViewOrder from "./components/profile/ViewOrder";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      dispatch(authUser({ refreshToken, grantType: "refresh_token" }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserInfo());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="mail" element={<ContactUs />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="faqs" element={<FAQ />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="product/:id" element={<ProductDetail />} />
        {/* Search */}
        <Route path="search" element={<Search />} />
        <Route path="forgot" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          {/* Account Screen */}
          <Route path="/profile" element={<Profile />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="address" element={<Address />} />
            <Route path="orders" element={<Orders />} />
            <Route path="vieworder/:id" element={<ViewOrder />} />
            <Route path="details" element={<AccountDetails />} />
          </Route>

          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orderComplete" element={<OrderComplete />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
