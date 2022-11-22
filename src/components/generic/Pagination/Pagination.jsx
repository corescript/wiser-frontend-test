import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  const { Tag = "div", variant, className } = props;
  return (
    <Tag
      className={`${styles.Pagination} ${
        styles[`Pagination__${variant}`]
      } ${className}`}
    >
      <ReactPaginate {...props} />
    </Tag>
  );
};

Pagination.defaultProps = {
  variant: "default",
  className: "",
};

Pagination.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Pagination;
