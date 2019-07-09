import React, { Component } from 'react';
import {
  Text, View, Button, alert
} from 'react-native';
// eslint-disable-next-line import/no-cycle
import { DETAIL_SCREEN } from '../Navigation';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  static navigationOptions = {
    headerTitle: 'NEWSREACT',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Details"
        color="#fff"
      />
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate(DETAIL_SCREEN)}
        />
      </View>
    );
  }
}
export default Home;
