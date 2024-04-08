import {useQuery} from '@tanstack/react-query';
import {fetchPokemonDetails} from '../services/api';

export const useGetPokemonDetails = (url: string) =>
  useQuery<any, Error>({
    queryKey: ['pokemon', url],
    queryFn: () => fetchPokemonDetails(url),
  });
