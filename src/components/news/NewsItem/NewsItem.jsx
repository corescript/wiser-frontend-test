import Card from "components/generic/Card";
import PropTypes from "prop-types";
import styles from "./NewsItem.module.scss";

const NewsItem = (props) => {
  const { Tag = "div", variant, className } = props;

  const news = props.news;

  return (
    <Tag
      className={`${styles.NewsItem} ${
        styles[`NewsItem__${variant}`]
      } ${className}`}
    >
      <Card
        title={news.title}
        image={news.urlToImage}
        description={news.description}
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
