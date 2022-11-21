import Navbar from "components/generic/Navbar";
import PropTypes from "prop-types";
import styles from "./MainLayout.module.scss";

const MainLayout = (props) => {
  const { Tag = "div", variant, className } = props;
  return (
    <Tag
      className={`${styles.MainLayout} ${
        styles[`MainLayout__${variant}`]
      } ${className}`}
    >
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </Tag>
  );
};

MainLayout.defaultProps = {
  variant: "default",
  className: "",
};

MainLayout.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default MainLayout;
