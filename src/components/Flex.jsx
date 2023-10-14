import PropTypes from "prop-types";

function Flex({ children, flexDirection = "row", gap }) {
  return <div style={{ display: "flex", flexDirection, gap }}>{children}</div>;
}

Flex.propTypes = {
  children: PropTypes.node,
  flexDirection: PropTypes.oneOf(["column", "row"]),
  gap: PropTypes.string,
};

export default Flex;
