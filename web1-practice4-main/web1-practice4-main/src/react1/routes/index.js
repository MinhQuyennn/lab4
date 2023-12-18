import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlankLayout from "react1/layouts/blank";
import HomeLayout from "react1/layouts/home";

import Home from "react1/pages/home";
import Shop from "react1/pages/shop";
import Contact from "react1/pages/contact";

import Login from "react1/pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/" element={<BlankLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
