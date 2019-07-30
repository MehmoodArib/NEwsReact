import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Status from './Status';
import ToastExample from './ToastExample';

const GenericTemplate = ({
  status,
  errorMessage,
  children
}) => {
  if (status === Status.ERROR) {
    ToastExample.show('Error', ToastExample.SHORT);
    return <Text>{errorMessage}</Text>;
  }

  if (status === Status.DEFAULT || status === Status.LOADING) {
    ToastExample.show('Loading', ToastExample.SHORT);
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }
  ToastExample.show('Succes', ToastExample.SHORT);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
};

export default GenericTemplate;
