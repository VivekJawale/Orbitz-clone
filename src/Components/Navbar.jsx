import { Link } from "react-router-dom";
import "./Navbar.css";
 const Navbar = () => {
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img
              className="nav-img"
              src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"alt=""
            ></img>
          </Link>
          <p
            
          >
            More Travels
          </p>
        </div>
        <div className="nav-right">
          <div>Espanol</div>
          <div>List your Property</div>
          <div>Support</div>
          <div>Trips</div>
          <div
           
          >
            Sign in 
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;