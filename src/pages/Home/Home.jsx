import TopNews from "components/news/TopNews";
import PropTypes from "prop-types";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={`${styles.Home}`}>
      <div className="container">
        <h1 className="text-center">Welcome to Wi News</h1>
        <h2>See what's trending in your country</h2>
        <div className="top-news">
          <TopNews />
        </div>
      </div>
    </div>
  );
};

Home.defaultProps = {
  className: "",
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
