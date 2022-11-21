import TextInput from "components/generic/TextInput";
import useNews from "features/news/useNews";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import NewsItem from "../NewsItem";
import styles from "./NewsList.module.scss";
import debounce from "lodash.debounce";

const NewsList = (props) => {
  const { Tag = "div", variant, className } = props;

  const { allNews, getAllNews } = useNews();
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchNewsList = useCallback(
    async (config) => {
      setLoading(true);
      await getAllNews(config);
      setLoading(false);
    },
    [getAllNews]
  );

  const debounceFetch = useCallback(debounce(fetchNewsList, 600), []);

  useEffect(() => {
    const config = {
      params: {
        q: search || "latest",
        from: "2022-11-21",
      },
    };
    if (search.length) {
      debounceFetch(config);
    } else {
      fetchNewsList(config);
    }
  }, [search]);

  return (
    <Tag
      className={`${styles.NewsList} ${
        styles[`NewsList__${variant}`]
      } ${className}`}
    >
      <div className="controls">
        <div className="search-wrap">
          <TextInput
            className="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
          />
        </div>
      </div>
      <div className="list">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {allNews.map((newsItem) => (
              <NewsItem news={newsItem} className="list-item" />
            ))}
          </>
        )}
      </div>
    </Tag>
  );
};

NewsList.defaultProps = {
  variant: "default",
  className: "",
};

NewsList.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default NewsList;
