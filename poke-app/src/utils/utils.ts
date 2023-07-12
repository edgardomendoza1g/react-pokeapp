import { pokeAPI } from "../services/pokeAPI";

export const fetchPokemonList = async (
  offset: number,
  setPokemonList: React.Dispatch<React.SetStateAction<any[]>>,
  setOriginalPokemonList: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const data = await pokeAPI.getPokemonList(offset, setPokemonList);
    setOriginalPokemonList(data);
    setPokemonList(data);
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    setPokemonList([]);
    setOriginalPokemonList([]);
  }
};

export const fetchTotalCount = async (
  setTotalCount: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const count = await pokeAPI.getTotalPokemonCount();
    setTotalCount(count);
  } catch (error) {
    console.error("Error fetching total count of Pokémon:", error);
    setTotalCount(0);
  }
};

export const handleSearchChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  originalPokemonList: any[],
  setPokemonList: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const searchTerm = e.target.value.trim();

  if (searchTerm === "") {
    setPokemonList(originalPokemonList);
  } else {
    pokeAPI.debouncedSearch(searchTerm, originalPokemonList, setPokemonList);
  }
};

export const handlePreviousPage = (
  offset: number,
  setOffset: React.Dispatch<React.SetStateAction<number>>
) => {
  if (offset >= 25) {
    setOffset(offset - 25);
  }
};

export const handleNextPage = (
  offset: number,
  totalCount: number,
  setOffset: React.Dispatch<React.SetStateAction<number>>
) => {
  if (offset + 25 < totalCount) {
    setOffset(offset + 25);
  }
};

export const handleAddToTeam = (
  pokemon: any,
  teamPokemon: any[],
  setTeamPokemon: React.Dispatch<React.SetStateAction<any[]>>
) => {
  if (
    teamPokemon.length < 6 &&
    !teamPokemon.find((p) => p.name === pokemon.name)
  ) {
    setTeamPokemon([...teamPokemon, pokemon]);
  }
};

export const handleRemoveFromTeam = (
  pokemon: any,
  teamPokemon: any[],
  setTeamPokemon: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setTeamPokemon(teamPokemon.filter((p) => p.name !== pokemon.name));
};