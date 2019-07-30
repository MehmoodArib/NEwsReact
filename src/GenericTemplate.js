import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-navigation';
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
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
};

export default GenericTemplate;
