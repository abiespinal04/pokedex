import {useInfiniteQuery} from '@tanstack/react-query';
import {fetchPokemons} from '../services/api';

type Pokemon = {
  name: string;
  url: string;
};

type Page = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

const getNextPageParam = (lastPage: {next: string}) => {
  const match = lastPage.next.match(/offset=(\d+)/);
  const offset = match ? match[1] : null;
  return offset ? Number(offset) : null;
};

export const useGetPokemons = () =>
  useInfiniteQuery<Page, Error>({
    queryKey: ['pokemons'],
    queryFn: ({pageParam}) => fetchPokemons(pageParam as number),
    getNextPageParam: getNextPageParam,
    initialPageParam: 0,
  });
