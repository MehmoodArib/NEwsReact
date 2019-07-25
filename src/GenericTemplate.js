import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Status from './Status';

const GenericTemplate = ({
  status,
  errorMessage,
  children
}) => {
  if (status === Status.ERROR) {
    return <Text>{errorMessage}</Text>;
  }

  if (status === Status.DEFAULT || status === Status.LOADING) {
    console.log("Loading");
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  );
};

export default GenericTemplate;
