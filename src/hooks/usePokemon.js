import { useEffect, useState } from "react";

function usePokemon(name) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (name) {
      setIsLoading(true);

      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
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
    }
  }, [name]);

  return { data, isLoading };
}

export default usePokemon;
