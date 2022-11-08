import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "../Message";

import { useSelector } from "react-redux";

const styles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const Layout = ({ children }) => {
  const { success, info, error, isLoading } = useSelector(
    (state) => state.message
  );
  return (
    <div style={styles}>
      <Header />
      <main>{children}</main>
      <Footer />

      {/* Global message component */}
      {isLoading && <Message message="Requesting......" severity="info" />}
      {success && <Message message={success} />}
      {info && <Message message={info} severity="warning" />}
      {error && <Message message={error} severity="error" />}
    </div>
  );
};

export default Layout;
