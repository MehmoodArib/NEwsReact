import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { CardSection } from './common';
import NavigationService from '../NavigationService';
import { SOURCE_NEWS_SCREEN } from '../Navigation/types';

// eslint-disable-next-line react/prefer-stateless-function
class ListItem extends Component {
  render() {
    const { sources } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          NavigationService.navigate(SOURCE_NEWS_SCREEN,
            { sourceName: sources.name, sourceId: sources.id });
        }}
      >
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
