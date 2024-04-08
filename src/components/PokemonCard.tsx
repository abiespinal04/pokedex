import React, {useCallback} from 'react';
import {Text, Image, Pressable, StyleSheet} from 'react-native';
import {useGetPokemonDetails} from '../hooks/useGetPokemonDetails';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import LoadingSpinner from './LoadingSpinner';

type PokemonCardProps = {
  name: string;
  url: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({name, url}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {data, isLoading, isError} = useGetPokemonDetails(url);

  const handlePress = useCallback(
    (pokemon: typeof data) => {
      navigation.navigate('PokemonDetails', {pokemon});
    },
    [navigation],
  );

  if (isLoading || isError) {
    return <LoadingSpinner isLoading={isLoading} isError={isError} />;
  }

  return (
    <Pressable
      onPress={() => handlePress(data)}
      style={({pressed}) => [
        styles.container,
        {backgroundColor: pressed ? '#ddd' : 'white'},
      ]}>
      <Image
        style={styles.image}
        source={{uri: data?.sprites?.front_default}}
      />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
  },
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
});
