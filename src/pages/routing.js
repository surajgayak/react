import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./error.page";

import HomePageLayout from "./layouts";
import AdminLayout from "./layouts/admin.layout";

import AdminDashboard from "./admin/admin-dashboard.component";

import Fe from "./fe";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SellerLayout from "./layouts/seller.layout";
import SellerDashboard from "./seller/dashboard.page";
import PrivateLayout from "../config/permission.service";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "../reducers/user.slicer";
// import { BannerList } from "admin/banner/BannerList";
const Routing = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("accessToken") ?? null;

  useEffect(() => {
    if (token) {
      dispatch(getLoggedInUser({ test: "Value" }));
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<Fe.HomePage />} />

            <Route path="login" element={<Fe.Auth.LoginPage />} />

            <Route path="register" element={<Fe.Auth.RegisterPage />} />
            <Route path="/activate/:token" element={<Fe.Auth.ActivateUser />} />
            <Route
              path="forgot-password"
              element={<Fe.Auth.ForgetPassword />}
            />
            <Route
              path="category/:catSlug"
              element={<Fe.CategoryDetail />}
            ></Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>

          {/* <Route path="/admin" element={<AdminLayout />}> */}
          <Route
            path="/admin"
            element={<PrivateLayout role="admin" component={<AdminLayout />} />}
          >
            <Route index element={<AdminDashboard />} />
            <Route path="banner" element={<></>} />
          </Route>

          <Route
            path="/seller"
            element={
              <PrivateLayout role="seller" component={<SellerLayout />} />
            }
          >
            <Route index element={<SellerDashboard />} />
          </Route>

          <Route path="/customer" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
