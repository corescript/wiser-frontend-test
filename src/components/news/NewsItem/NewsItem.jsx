import Card, { CardLoader } from "components/generic/Card";
import PropTypes from "prop-types";
import styles from "./NewsItem.module.scss";

export const NewsItemLoader = CardLoader;

const NewsItem = (props) => {
  const { Tag = "div", variant, className } = props;

  const news = props.news;

  const handleNewsClick = () => {
    window.open(news.url);
  };

  return (
    <Tag
      className={`${styles.NewsItem} ${
        styles[`NewsItem__${variant}`]
      } ${className}`}
    >
      <Card
        className="card"
        title={news.title}
        image={news.urlToImage}
        description={news.description}
        onClick={handleNewsClick}
      />
    </Tag>
  );
};

NewsItem.defaultProps = {
  variant: "default",
  className: "",
};

NewsItem.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default NewsItem;
