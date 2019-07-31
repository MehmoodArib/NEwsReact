import React, { Component } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { fetchNews } from '../actions/NewsActions';
import { SOURCE } from '../types';
import GenericTemplate from '../GenericTemplate';

class SourceNewsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('sourceName'),
  });

  componentWillMount() {
    const { navigation, fetchNews: _fetchNews } = this.props;
    _fetchNews({ source: navigation.getParam('sourceId'), category: SOURCE });
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

function mapStateToProps(state) {
  return {
    news: state.sourceWiseNews.news,
    status: state.sourceWiseNews.status,
    errorMessage: state.sourceWiseNews.errorMessage
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchNews }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SourceNewsScreen);
