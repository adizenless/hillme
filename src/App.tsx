import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Navbar from "./components/Navbar/Navbar";
import VerifyAge from "./components/VerifyAge/VerifyAge";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/AboutUs/AboutUs";
import BecomeAPartner from "./pages/BecomerAPartner/BecomeAPartner";
import Contacts from "./pages/Contacts/Contacts";

const Layout = () => {
  const [verified, setVerified] = useLocalStorage("verifiedUserAge", false);
  return (
    <div>
      <Navbar />
      <Outlet />
      {!verified && <VerifyAge verified={verified} setVerified={setVerified} />}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/partner",
        element: <BecomeAPartner />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
