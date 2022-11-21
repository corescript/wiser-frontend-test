import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allNewsSelector } from "./selectors";
import { fetchAllNews } from "./actions.js";

const useNews = (props) => {
  const dispatch = useDispatch();
  const allNews = useSelector(allNewsSelector);
  const [loading, setLoading] = useState(false);
  const getAllNews = async (config) => {
    setLoading(true);
    const res = await dispatch(fetchAllNews(config)).unwrap();
    setLoading(false);
    return res.data;
  };
  return {
    allNews,
    getAllNews,
    loading,
  };
};

export default useNews;
