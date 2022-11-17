import PropTypes from 'prop-types';
import styles from './NewsDetail.module.scss';

const NewsDetail = () => {
  return (
    <div className={`${styles.NewsDetail }`}>
    </div>
  );
};

NewsDetail.defaultProps = {
  className: '',
};

NewsDetail.propTypes = {
  className: PropTypes.string,
};

export default NewsDetail;