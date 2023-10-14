import PropTypes from "prop-types";

function PokemonCount({ count }) {
  return <p>The total amount of pokemon is {count}</p>;
}

PokemonCount.propTypes = {
  count: PropTypes.number,
};

export default PokemonCount;
