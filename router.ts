import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Item from "../pages/Item";
import Checkout from "../pages/Checkout";
import Thanks from "../pages/Thanks";
import Logout from "../pages/Logout";
import Layout from "../components/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/item/:itemId" element={<Item />} />
          <Route path="/checkout/:itemId" element={<Checkout />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
