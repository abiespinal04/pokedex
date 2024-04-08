import React from 'react';
import {
  Text,
  Image,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useGetPokemonDetails} from '../hooks/useGetPokemonDetails';
import {useNavigation} from '@react-navigation/native';

type PokemonCardProps = {
  name: string;
  url: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({name, url}) => {
  const {navigate} = useNavigation();
  const {data, isLoading, isError} = useGetPokemonDetails(url);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>An error occurred</Text>;
  }

  const handlePress = pokemon => {
    navigate('Details', {pokemon});
  };

  return (
    <Pressable
      onPress={() => handlePress(data)}
      style={({pressed}) => [
        styles.container,
        {backgroundColor: pressed ? '#ddd' : 'white'},
      ]}>
      <Text>{name}</Text>
      <Image style={styles.image} source={{uri: data?.sprites?.front_default}} />
    </Pressable>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
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
