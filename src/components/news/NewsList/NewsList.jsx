import PropTypes from 'prop-types';
import styles from './NewsList.module.scss';

const NewsList = props => {
  const { Tag='div', variant, className } = props;
  return (
    <Tag className={`${styles.NewsList } ${styles[`NewsList__${variant}`]} ${className}`}>
      
    </Tag>
  );
};

NewsList.defaultProps = {
  variant: 'default',
  className: '',
};

NewsList.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default NewsList;