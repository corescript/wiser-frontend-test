import PropTypes from "prop-types";
import styles from "./PageLoader.module.scss";
import loader from "assets/images/page-loader.gif";

const PageLoader = (props) => {
  const { Tag = "div", variant, className } = props;
  return (
    <Tag
      className={`${styles.PageLoader} ${
        styles[`PageLoader__${variant}`]
      } ${className}`}
    >
      <img src={loader} alt="loader" />
    </Tag>
  );
};

PageLoader.defaultProps = {
  variant: "default",
  className: "",
};

PageLoader.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default PageLoader;
