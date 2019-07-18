import React, { Component } from 'react';
import { Text } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Details',

  });

  render() {
    return (
      <Text>Detail SCREEN</Text>
    );
  }
}
export default Detail;
