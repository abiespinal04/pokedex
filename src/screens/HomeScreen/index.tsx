import React from 'react';
import {FlatList, Text, ActivityIndicator} from 'react-native';
import {useGetPokemons} from '../../hooks/useGetPokemonList';
import PokemonCard from '../../components/PokemonCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import Searchbar from '../../components/Searchbar';
import Config from 'react-native-config';

const ListFooterComponent = () => {
  return <ActivityIndicator />;
};

const HomeScreen = () => {
  const {data, isLoading, isFetchingNextPage, isError, fetchNextPage} =
    useGetPokemons();
    
  if (isLoading || isError) {
    <LoadingSpinner isLoading={isLoading} isError={isError} />;
  }

  return (
    <FlatList
      ListHeaderComponent={<Searchbar />}
      data={data?.pages.map(page => page?.results).flat()}
      keyExtractor={item => item.name}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() =>
        isFetchingNextPage ? <ListFooterComponent /> : null
      }
      renderItem={({item}) => <PokemonCard name={item.name} url={item.url} />}
    />
  );
};

export default HomeScreen;
