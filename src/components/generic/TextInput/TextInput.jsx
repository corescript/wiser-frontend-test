import PropTypes from "prop-types";
import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  const {
    Tag = "div",
    variant,
    className,
    type,
    label,
    value,
    onChange,
    placeholder,
  } = props;
  return (
    <Tag
      className={`${styles.TextInput} ${
        styles[`TextInput__${variant}`]
      } ${className}`}
    >
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Tag>
  );
};

TextInput.defaultProps = {
  variant: "default",
  className: "",
  type: "text",
};

TextInput.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
