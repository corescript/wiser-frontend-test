import PropTypes from "prop-types";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { Tag = "div", variant, className, title, description, image } = props;
  return (
    <Tag
      className={`${styles.Card} ${styles[`Card__${variant}`]} ${className}`}
    >
      <div className="left">
        <img src={image} alt={title} />
      </div>
      <div className="right">
        <h3 className="title">{title}</h3>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <button>Read More</button>
      </div>
    </Tag>
  );
};

Card.defaultProps = {
  variant: "default",
  className: "",
};

Card.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
