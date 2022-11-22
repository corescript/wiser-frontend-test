import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import placeholderImg from "assets/images/placeholder-image.webp";
import Button from "../Button";

export const CardLoader = ({ className }) => {
  return (
    <div className={`${styles.CardLoader} ${className}`}>
      <div className="left shimmer"></div>
      <div className="right">
        <div className="title shimmer"></div>
        <div className="description shimmer"></div>
        <div className="button shimmer"></div>
      </div>
    </div>
  );
};

const Card = (props) => {
  const {
    Tag = "div",
    variant,
    className,
    title,
    description,
    image,
    onClick,
  } = props;
  return (
    <Tag
      className={`${styles.Card} ${styles[`Card__${variant}`]} ${className}`}
    >
      <div className="left">
        <img
          src={image || placeholderImg}
          alt={title}
          onError={(e) => {
            e.target.src = placeholderImg;
          }}
        />
      </div>
      <div className="right">
        <h3 className="title">{title}</h3>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <Button onClick={onClick} className="button">
          Read More
        </Button>
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
