// import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import {
  Home,
  About,
  Events,
  Services,
  Products,
  ContactUs,
  Login,
  FAQ,
  Privacy,
} from "./pages";

function App() {
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
        <Route path="faqs" element={<FAQ />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </Layout>
  );
}

export default App;
