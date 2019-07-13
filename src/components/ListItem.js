import React, { Component } from 'react';
import {
  Text, TouchableWithoutFeedback, View, ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CardSection, Card } from './common';
import NavigationService from '../NavigationService';
// eslint-disable-next-line import/no-cycle
import { DETAIL_SCREEN } from '../Navigation';

class ListItem extends Component {
  onRowPress() {
    NavigationService.navigate(DETAIL_SCREEN);
  }

  render() {
    const { news } = this.props;
    const { imageStyle, titleStyle, detailsStyle, whiteText } = styles;
    return (

      <Card>
        <ImageBackground
          style={imageStyle}
          source={{ uri: news.urlToImage }}
        />
        <TouchableWithoutFeedback onPress={this.onRowPress}>
          <LinearGradient
            colors={['transparent', '#000000']}
            style={{ justifyContent: 'flex-end', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
          >
            <CardSection style={[detailsStyle, { backgroundColor: 'transparent' }]}>
              <Text style={whiteText}>{news.publishedAt}</Text>
              <Text style={whiteText}>{news.source.name}</Text>
            </CardSection>
            <CardSection style={{ backgroundColor: 'transparent' }}>
              <Text style={titleStyle} ellipsizeMode="tail" numberOfLines={2}>{news.title}</Text>
            </CardSection>
            <CardSection style={{ backgroundColor: 'transparent' }}>
              <Text style={whiteText} ellipsizeMode="tail" numberOfLines={2}>{news.description}</Text>
            </CardSection>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </Card>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  whiteText: {
    color: 'white'
  },
  imageStyle: {
    width: 400,
    height: 400,
    justifyContent: 'flex-end'
  },
  detailsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};


export default ListItem;
