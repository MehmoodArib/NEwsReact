import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { fetchNews } from '../actions/NewsActions';
// eslint-disable-next-line import/no-cycle
import ListItem from './ListItem';
import {
  BUSINESS,
  TECHNOLOGY,
  GENERAL,
  ENTERTAINMENT,
  HEALTH,
  SCIENCE,
  SPORTS
} from '../types';
import GenericTemplate from '../GenericTemplate';

class Home extends Component {
  componentWillMount() {
    const { navigation, preference, fetchNews: _fetchNews } = this.props;
    _fetchNews({ category: navigation.getParam('category'), country: preference.country });
  }

  componentDidUpdate(prevProps) {
    const { navigation, preference, fetchNews: _fetchNews } = this.props;
    if (prevProps.preference.country !== preference.country
      || prevProps.preference.language !== preference.language) {
      _fetchNews({ category: navigation.getParam('category'), country: preference.country });
    }
  }

  render() {
    const { status, errorMessage, news } = this.props;
    return (
      <GenericTemplate status={status} errorMessage={errorMessage}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <FlatList
            data={news.articles}
            renderItem={({ item }) => <ListItem news={item} />}
          />
        </View>
      </GenericTemplate>
    );
  }
}


function mapStateToProps(state, props) {
  const category = props.navigation.getParam('category');
  switch (category) {
    case GENERAL:
      return {
        news: state.generalNews.news,
        status: state.generalNews.status,
        errorMessage: state.generalNews.errorMessage,
        preference: state.preference
      };
    case BUSINESS:
      return {
        news: state.businessNews.news,
        status: state.businessNews.status,
        errorMessage: state.businessNews.errorMessage,
        preference: state.preference
      };
    case HEALTH:
      return {
        news: state.healthNews.news,
        status: state.healthNews.status,
        errorMessage: state.healthNews.errorMessage,
        preference: state.preference
      };
    case SCIENCE:
      return {
        news: state.scienceNews.news,
        status: state.scienceNews.status,
        errorMessage: state.scienceNews.errorMessage,
        preference: state.preference
      };
    case SPORTS:
      return {
        news: state.sportsNews.news,
        status: state.sportsNews.status,
        errorMessage: state.sportsNews.errorMessage,
        preference: state.preference
      };
    case TECHNOLOGY:
      return {
        news: state.technologyNews.news,
        status: state.technologyNews.status,
        errorMessage: state.technologyNews.errorMessage,
        preference: state.preference
      };
    case ENTERTAINMENT:
      return {
        news: state.entertainmentNews.news,
        status: state.entertainmentNews.status,
        errorMessage: state.entertainmentNews.errorMessage,
        preference: state.preference
      };
    default:
      return { news: [], preference: { a: 1, b: 2 } };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchNews }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
