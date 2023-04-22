import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Outlet, matchPath, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const { isAuthenticated } = useAuth0();
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated && !matchPath("/checkout", currentPath)) {
      navigate("/checkout");
    }
    if (!isAuthenticated && !matchPath("/", currentPath)) {
      navigate("/");
    }
  }, [isAuthenticated]);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
