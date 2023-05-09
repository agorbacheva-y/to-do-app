import PropTypes from "prop-types";

const Card = ({ children, reverse, create }) => {
  return (
    <div
      className="todo-card"
      style={{
        // if reverse is true set card color to white, if false gray
        backgroundColor: reverse ? "#ffffff" : "#1c1c1c",
        backgroundColor: create ? "#2E2E2E" : "#1c1c1c",
        color: reverse ? "#000000" : "#ffffff",
        padding: create ? "4rem" : "3rem",
      }}
    >
      {children}
    </div>
  );
};

// set a default prop so you don't need to pass in Card component
Card.defaultProps = {
  reverse: false,
  create: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired, //children is a node data type
  reverse: PropTypes.bool, // reverse, create are boolean data types
  create: PropTypes.bool,
};

export default Card;

// can add toggle or button to change theme, color