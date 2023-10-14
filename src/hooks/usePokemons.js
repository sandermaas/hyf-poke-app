import { useEffect, useState } from "react";

function usePokemons() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://pokeapi.co/api/v2/pokemon", {
      headers: {
        "Cache-Control": "max-age=604800",
      },
    })
      .then((apiResponse) => apiResponse.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading };
}

export default usePokemons;
