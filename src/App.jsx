import { useState } from "react";

import { Flex, PokemonCount, PokemonTable } from "./components";
import { usePokemon, usePokemons } from "./hooks";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { data: pokemonData, isLoading: isPokemonLoading } =
    usePokemon(selectedPokemon);
  const { data: pokemonsData, isLoading: isPokemonsLoading } = usePokemons();

  return (
    <Flex gap="1rem">
      <div style={{ border: "1px solid red", flexGrow: 1.5 }}>
        <h4>POKEMON LIST</h4>
        {isPokemonsLoading || !pokemonsData ? (
          <p>Loading Pokemon</p>
        ) : (
          <>
            <PokemonCount count={pokemonsData?.count} />

            <PokemonTable
              pokemons={pokemonsData?.results}
              onSelect={(pokemon) => setSelectedPokemon(pokemon.name)}
            />
          </>
        )}
      </div>

      <div style={{ border: "1px solid green", flexGrow: 1 }}>
        <h4>POKEMON DETAILS</h4>

        {isPokemonLoading && <p>LOADING..</p>}
        {pokemonData && (
          <>
            <p>ID: {pokemonData.id}</p>
            <p>NAME: {pokemonData.name}</p>
            <p>HEIGHT: {pokemonData.height}</p>
            <p>WEIGHT: {pokemonData.weight}</p>
          </>
        )}
      </div>
    </Flex>
  );
}

export default App;
