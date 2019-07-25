import React, { Component } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { fetchNews } from '../actions/NewsActions';
import { SOURCE } from '../types';
import GenericTemplate from '../GenericTemplate';

class Special extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Special',
  });


  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.getParam('name'),
      id: this.props.navigation.getParam('id'),
    };
  }

  componentWillMount() {
    this.props.fetchNews({ source: this.state.id, category: SOURCE, country: 'in' });
  }

  render() {
    return (
      <GenericTemplate status={this.props.status} errorMessage={this.props.errorMessage}>
        <FlatList
          data={this.props.news.articles}
          renderItem={({ item }) => <ListItem news={item} />}
        />
      </GenericTemplate>
    );
  }
}

function mapStateToProps(state) {
  return { news: state.sourceWiseNews.news, status: state.sourceWiseNews.status, errorMessage: state.sourceWiseNews.errorMessage, preference: state.preference };
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchNews }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Special);
