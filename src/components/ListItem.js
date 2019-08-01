import React, { Component } from 'react';
import {
  Text, TouchableWithoutFeedback, Image, View,
  LayoutAnimation, Platform, UIManager
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Share from 'react-native-share';
import { CardSection, Card, Button } from './common';
import * as actions from '../actions/ItemActions';
import NavigationService from '../NavigationService';
import { MY_WEBVIEW } from '../Navigation/types';

class ListItem extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      // eslint-disable-next-line no-unused-expressions
      UIManager.setLayoutAnimationEnabledExperimental
        && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  // share = async () => {
  //   const shareOptions = {
  //     title: this.props.news.title,
  //     url: this.props.news.url,
  //     failOnCancel: false,
  //   };

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     setResult(JSON.stringify(ShareResponse, null, 2));
  //   } catch (error) {
  //     console.log('Error =>', error);
  //     setResult('error: '.concat(getErrorString(error)));
  //   }
  // };

  renderDescription() {
    const { news, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 26 }}>
            {news.title}
          </Text>
          <Text style={{ flex: 1, fontSize: 22 }}>
            {news.description}
          </Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button buttonText="SOURCE" onPress={() => { NavigationService.navigate(MY_WEBVIEW, { url: news.url }); }} />
            <TouchableWithoutFeedback onPress={{}}>
              <Icon name="share-square" size={35} color="#007aff" />
            </TouchableWithoutFeedback>
          </View>
        </CardSection>
      );
    }
    return (<View />);
  }

  render() {
    const { news, selectNews } = this.props;
    const {
      imageStyle, titleStyle, detailsStyle, whiteText
    } = styles;
    return (
      <Card>
        <Image
          style={imageStyle}
          source={{ uri: news.urlToImage }}
        />
        <TouchableWithoutFeedback onPress={() => selectNews(news.url)}>
          <LinearGradient
            colors={['transparent', '#000000']}
            style={{
              justifyContent: 'flex-end', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0
            }}
          >
            <CardSection style={[detailsStyle, { backgroundColor: 'transparent' }]}>
              <Text style={whiteText}>{news.publishedAt}</Text>
              <Text style={whiteText}>{news.source.name}</Text>
            </CardSection>
            <CardSection style={{ backgroundColor: 'transparent' }}>
              <Text style={titleStyle} ellipsizeMode="tail" numberOfLines={2}>{news.title}</Text>
            </CardSection>
          </LinearGradient>
        </TouchableWithoutFeedback>
        {this.renderDescription()}
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
    color: 'white',
  },
  imageStyle: {
    width: 350,
    height: 350,
    justifyContent: 'flex-end'
  },
  detailsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedNewsUrl === ownProps.news.url;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
