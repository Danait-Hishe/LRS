//import Amhara_Logo from './Amhara_Logo.jpg';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
      <nav className="Navbar">
        <img alt="logo" src={Image} />
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/User">Dashboard</Link>
          <Link><button
            onClick={logOut}
            sx={{
              marginRight: 3,
              marginTop: 2,
              marginLeft: 50,
              marginBottom: 5,
            }}
            variant="contained"
          >
            Log Out
          </button></Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
