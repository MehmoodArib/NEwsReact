import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { CardSection } from './common';
import NavigationService from '../NavigationService';
import { SPECIAL_SCREEN } from '../Navigation/types';

// eslint-disable-next-line react/prefer-stateless-function
class ListItem extends Component {
  render() {
    const { sources } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => { NavigationService.navigate(SPECIAL_SCREEN, { name: sources.name, id: sources.id }); }}>
        <View>
          <CardSection>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
              {sources.name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default ListItem;
