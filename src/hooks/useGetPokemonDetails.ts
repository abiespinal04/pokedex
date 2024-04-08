import {useQuery} from '@tanstack/react-query';
import {fetchPokemonDetails, fetchPokemonDetailsByName} from '../services/api';

type PokemonDetails = {
  sprites: {
    front_default: string;
  };
};

export const useGetPokemonDetails = (url: string) =>
  useQuery<PokemonDetails, Error>({
    queryKey: ['pokemon', url],
    queryFn: () => fetchPokemonDetails(url),
  });

export const useGetPokemonDetailsByName = (name: string) =>
  useQuery<PokemonDetails, Error>({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonDetailsByName(name),
  });
