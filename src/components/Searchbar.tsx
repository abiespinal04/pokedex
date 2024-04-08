import {TextInput, Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {fetchPokemonDetailsByName} from '../services/api';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const Searchbar = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [pokemonName, setSearch] = useState<string>('');

  const onSubmitEditing = async () => {
    try {
      const data = await fetchPokemonDetailsByName(pokemonName?.toLowerCase());
      navigation.navigate('PokemonDetails', {pokemon: data});
    } catch (error) {
      Alert.alert('', "Pokemon doesn't exist");
    }
  };

  return (
    <TextInput
      placeholder="Search"
      style={styles.searchbar}
      onChangeText={setSearch}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchbar: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
