import { debounce } from "lodash";

export const pokeAPI = {
  getPokemonList: async (offset: number, setPokemonList: Function): Promise<any[]> => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`);
      const data = await response.json();
      
      return data.results;
    } catch (error) {
      console.error("Error fetching Pokemon list:", error);
      return [];
    }
  },
  getTotalPokemonCount: async (): Promise<number> => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      return data.count;
    } catch (error) {
      console.error("Error fetching total count of Pokémon:", error);
      throw error;
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
