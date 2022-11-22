import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  const { Tag = "nav", variant, className } = props;
  return (
    <Tag
      className={`${styles.Navbar} ${
        styles[`Navbar__${variant}`]
      } ${className}`}
    >
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <NavLink className={"link"} to={"/"}>
              Wi News
            </NavLink>
          </div>
          <ul className="links">
            <li className={"link"}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className={"link"}>
              <NavLink to={"/search"}>Search</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Tag>
  );
};

Navbar.defaultProps = {
  variant: "default",
  className: "",
};

Navbar.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;
