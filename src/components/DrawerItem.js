import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
  }

  render() {
    const { sources } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <CardSection>
          <Text>{sources.name}</Text>
        </CardSection>
      </TouchableWithoutFeedback>
    );
  }
}
export default ListItem;
