import {Text, ActivityIndicator} from 'react-native';
import React from 'react';

type LoadingSpinnerProps = {
  isLoading: boolean;
  isError: boolean;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>An error occurred</Text>;
  }

  return null;
};

export default LoadingSpinner;
