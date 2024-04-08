import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {capitalizeWord} from '../../utils/strings';

const PokemonDetails = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const {pokemon} = params || {};

  useEffect(() => {
    navigation.setOptions({title: capitalizeWord(pokemon?.name)});
  }, [pokemon?.name]);

  return (
    <View style={styles.detailsContainer}>
      <Image
        source={{uri: pokemon?.sprites?.front_default}}
        style={styles.image}
      />
      <Text style={styles.pokemonName}>{capitalizeWord(pokemon?.name)}</Text>
      <View style={styles.subDetailsContainer}>
        <Text>Weight: {pokemon?.weight}</Text>
        <Text>Height: {pokemon?.height}</Text>
      </View>
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  pokemonName: {fontWeight: '600', fontSize: 24},
  image: {width: 200, height: 200},
  detailsContainer: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    width: '100%',
  },
  subDetailsContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
