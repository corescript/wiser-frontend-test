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
        <div className="logo">
          <NavLink className={"link"} to={"/"}>
            Wi News
          </NavLink>
        </div>
        <div className="links">
          <NavLink className={"link"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"link"} to={"/search"}>
            Search
          </NavLink>
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
