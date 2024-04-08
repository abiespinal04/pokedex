import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {NavigationProp} from '@react-navigation/native';

type Pokemon = {
  name: string;
  sprites: {front_default: string};
  weight: number;
  height: number;
};

export type ScreenNames = ['Home', 'PokemonDetails'];
export type RootStackParamList = {
  Home: undefined;
  PokemonDetails: {pokemon: Pokemon} | undefined;
};

export type StackParamList = NavigationProp<RootStackParamList>;

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'PokemonDetails'
>;

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonDetails" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
