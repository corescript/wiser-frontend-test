import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./TopNews.module.scss";

import { fetchTopNews } from "features/news/actions";
import { useDispatch, useSelector } from "react-redux";
import { topNewsSelector } from "features/news/selectors";

import NewsItem, { NewsItemLoader } from "components/news/NewsItem";

const TopNews = (props) => {
  const { Tag = "div", variant, className } = props;
  const news = useSelector(topNewsSelector);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("us");

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const getTopNews = async () => {
    setLoading(true);
    const config = {
      params: {
        country: country,
      },
    };
    const res = await dispatch(fetchTopNews(config));
    setLoading(false);
  };

  useEffect(() => {
    getTopNews();
  }, [country]);

  return (
    <Tag
      className={`${styles.TopNews} ${
        styles[`TopNews__${variant}`]
      } ${className}`}
    >
      <div className="filter">
        <select value={country} onChange={handleCountry}>
          <option value="us">United States</option>
          <option value="it">Italy</option>
          <option value="gb">United Kingdom</option>
          <option value="de">Germany</option>
          <option value="in">India</option>
        </select>
      </div>
      <div className="list">
        {loading ? (
          <>
            <NewsItemLoader className={"news-item-loader"} />
            <NewsItemLoader className={"news-item-loader"} />
            <NewsItemLoader className={"news-item-loader"} />
            <NewsItemLoader className={"news-item-loader"} />
          </>
        ) : (
          <>
            {news.map((newsItem) => (
              <NewsItem
                key={newsItem.url}
                news={newsItem}
                className="list-item"
              />
            ))}
          </>
        )}
      </div>
    </Tag>
  );
};

TopNews.defaultProps = {
  variant: "default",
  className: "",
};

TopNews.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default TopNews;
