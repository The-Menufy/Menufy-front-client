import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage";
import Login from "./pages/login";
import Reset from "./pages/resetPassword";
import Register from "./pages/register";
import ResetPasswordEmail from "./pages/resetPasswordEmail";
import ProfilePage from "./pages/profilePage";
import EditProfile from "./pages/editProfile";
import Settings from "./pages/settingPage";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import ProtectedRoute from "./components/ProtectedRoute";
import VerifyCode from "./pages/VerifyCode";
import MenuPage from "./pages/Menus";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

import TestQR from "./pages/TestQR";
import PublicCategoryPage from "./pages/PublicCategoryPage";

const App = () => {
  const location = useLocation(); // Get the current route

  // Define paths where Navbar should be hidden
  const hiddenNavbarRoutes = ["/Login", "/Register"];

  //const cors = require("cors");
  //app.use(cors()); // ✅ Autoriser les appels depuis téléphone

  return (
    <>
      {/* Render Navbar only if the current route is NOT in hiddenNavbarRoutes */}
      {!hiddenNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menus" element={<MenuPage />} />
        <Route path="/category/:menuId" element={<CategoryPage />} />
        <Route path="/products/:categoryId" element={<ProductPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/ResetPasswordEmail" element={<ResetPasswordEmail />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/code" element={<VerifyCode />} />
        <Route path="/testqr" element={<TestQR />} />
        <Route path="/public/menu/:menuId" element={<PublicCategoryPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              {/* <AdminDashboard /> */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/superadmin"
          element={
            <ProtectedRoute requiredRole="superadmin">
              {/* <SuperAdminPanel /> */}
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Render Footer only if the current route is NOT in hiddenNavbarRoutes */}
      {!hiddenNavbarRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
