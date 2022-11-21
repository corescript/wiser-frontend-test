import NewsList from "components/news/NewsList";
import PropTypes from "prop-types";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={`${styles.Search}`}>
      <div className="container">
        <NewsList />
      </div>
    </div>
  );
};

Search.defaultProps = {
  className: "",
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
