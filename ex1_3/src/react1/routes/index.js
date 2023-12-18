import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BlankLayout from "../layouts/blank/index";
// import HomeLayout from "../layouts/home/index";

import Home from "../pages/home/index";
import Shop from "../pages/shop/index";
import Contact from "../pages/contact/index";

import Login from "../pages/login/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomeLayout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        {/* </Route> */}
        {/* <Route path="/" element={<BlankLayout />}>
          <Route path="login" element={<Login />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
