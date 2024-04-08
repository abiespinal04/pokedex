import {useQuery} from '@tanstack/react-query';
import {fetchPokemonDetails} from '../services/api';

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
