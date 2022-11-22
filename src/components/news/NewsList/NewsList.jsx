import TextInput from "components/generic/TextInput";
import useNews from "features/news/useNews";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import NewsItem, { NewsItemLoader } from "../NewsItem";
import styles from "./NewsList.module.scss";
import debounce from "lodash.debounce";
import Pagination from "components/generic/Pagination";

const NewsList = (props) => {
  const { Tag = "div", variant, className } = props;

  const { allNews, getAllNews } = useNews();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const perPageResults = 10;
  const totalPages = totalResults / perPageResults;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchNewsList = useCallback(
    async (config) => {
      setLoading(true);
      const res = await getAllNews(config);
      setTotalResults(res.totalResults);
      setLoading(false);
    },
    [getAllNews]
  );

  const debounceFetch = useCallback(debounce(fetchNewsList, 600), []);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const config = {
      params: {
        q: search || "latest",
        from: "2022-11-21",
        pageSize: 10,
        page,
      },
    };
    if (search.length) {
      debounceFetch(config);
    } else {
      fetchNewsList(config);
    }
  }, [search, page]);

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
          <>
            <NewsItemLoader className="news-item-loader" />
            <NewsItemLoader className="news-item-loader" />
            <NewsItemLoader className="news-item-loader" />
            <NewsItemLoader className="news-item-loader" />
          </>
        ) : (
          <>
            {allNews.map((newsItem) => (
              <NewsItem
                key={newsItem.url}
                news={newsItem}
                className="list-item"
              />
            ))}
          </>
        )}
        {!!allNews.length && (
          <Pagination
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
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
