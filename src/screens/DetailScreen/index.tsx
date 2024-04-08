import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const PokemonDetails = () => {
  const {params} = useRoute();
  const {pokemon} = params || {};

  console.log(pokemon);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={{uri: pokemon?.sprites?.front_default}}
        style={{width: 200, height: 200}}
      />
      <Text>{pokemon?.name}</Text>
      <View
        style={{
          width: '100%',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Text>Weight: {pokemon?.weight}</Text>
        <Text>Height: {pokemon?.height}</Text>
      </View>
    </View>
  );
};

export default PokemonDetails;
