// react
import { NavLink, useNavigate } from "react-router-dom";

// assets
import logo from '../assets/logo.svg';

function Navigation(props){

  const navigate = useNavigate();

  const logoutUser = () => {
    props.setToken(null);
    navigate("/");
  }

  if (props.token) {
    return (
      <nav>
        <div className="logo-box">
          <NavLink to="/" className="logo">
            <img src={logo}/>
          </NavLink>
        </div>
        <NavLink to="/account">
          Account
        </NavLink>
        <a onClick={logoutUser}>
          Logout
        </a>
        <NavLink to="/cart">
          Cart
        </NavLink>
      </nav>
    )
  }

  return (
    <nav>
      <div className="logo-box">
        <NavLink to="/" className="logo">
          <img src={logo}/>
        </NavLink>
      </div>
      <div>
        <NavLink to="/register">
          Register
        </NavLink>
        <NavLink to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation;