import PropTypes from "prop-types";
import {BsPlus} from "react-icons/bs";

const Button = ({ children, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className="btn">
      <BsPlus fontSize="52px" />
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false
};

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default Button;