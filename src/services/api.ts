import axios from 'axios';

export const fetchPokemons = async (offset: number) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?&limit=${10}&offset=${offset}`,
  );
  return response?.data;
};

export const fetchPokemonDetails = async (url: string) => {
  const response = await axios.get(url);
  return response?.data;
};

export const fetchPokemonDetailsByName = async (name: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response?.data;
};
