export interface PokemonIndividualProps {
  name: string;
  url: string;
}
export interface PokemonProps  {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface PokemonDetail {
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  name:string;
  height:number;
  weight:number;
}
