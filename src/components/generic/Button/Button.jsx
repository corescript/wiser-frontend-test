import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { Tag = "button", variant, className, onClick } = props;
  return (
    <Tag
      className={`${styles.Button} ${
        styles[`Button__${variant}`]
      } ${className}`}
      onClick={onClick}
    >
      {props.children}
    </Tag>
  );
};

Button.defaultProps = {
  variant: "default",
  className: "",
};

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
