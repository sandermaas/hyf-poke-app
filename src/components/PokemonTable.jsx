import PropTypes from "prop-types";

import Table from "react-bootstrap/Table";

function PokemonTable({ pokemons, onSelect }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        {pokemons.map((pokemon, pokemonIndex) => (
          <tr key={pokemonIndex} onClick={() => onSelect(pokemon)}>
            <td>{pokemonIndex}</td>
            <td>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

PokemonTable.propTypes = {
  pokemons: PropTypes.array,
  onSelect: PropTypes.func,
};

export default PokemonTable;
