import { debounce } from "lodash";

export const pokeAPI = {
  getPokemonList: async (setPokemonList: Function): Promise<any[]> => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=25"
      );
      const data = await response.json();
      setPokemonList(data.results);
      return data.results;
    } catch (error) {
      console.error("Error fetching data from pokemonList:", error);
      return [];
    }
  },

  getPokemonDetail: async (id: number): Promise<any> => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from pokemon detail:", error);
      throw error;
    }
  },

  debouncedSearch: debounce(
    (searchTerm: string, pokemonList: any[], callback: Function) => {
      // Perform search operation here
      const filteredResults = pokemonList.filter((pokemon: any) =>
        pokemon.name.includes(searchTerm)
      );

      // Call the callback function with search results
      callback(filteredResults);
    },
    300
  ),
};
