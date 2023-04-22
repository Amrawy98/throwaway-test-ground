import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <nav className="flex justify-between shadow">
      <span className="my-1 ml-1 text-xl">Throwaway Test Ground</span>
      <button
        className="my-1 mr-1 rounded-md border-2 border-black px-1 py-[0.12rem] text-xl"
        onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
      >
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
    </nav>
  );
};

export default Navbar;
