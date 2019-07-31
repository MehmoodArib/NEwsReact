import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItem from './ListItem';
import { fetchSearch } from '../actions/NewsActions';
import GenericTemplate from '../GenericTemplate';
import { SEARCH } from '../types';

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Icon name="search" size={18} color="#007aff" light />
        <TextInput
          style={{ marginLeft: 10 }}
          autoFocus
          placeholder="Search"
          onChangeText={navigation.getParam('setSearchText')}
          onSubmitEditing={navigation.getParam('onSubmitted')}
        />
      </View>
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.setSearchText = this.setSearchText.bind(this);
    this.onSubmitted = this.onSubmitted.bind(this);
  }

  componentWillMount() {
    const { navigation } = this.props;
    navigation.setParams({ setSearchText: this.setSearchText });
    navigation.setParams({ onSubmitted: this.onSubmitted });
  }

  onSubmitted() {
    const { searchText, fetchSearch: _fetchSearch } = this.state;
    _fetchSearch({ category: SEARCH, searchText });
  }

  setSearchText(searchText) {
    this.setState({ searchText });
  }

  render() {
    const { status, errorMessage, news } = this.props;
    const { searchText } = this.state;
    if (searchText === '') {
      return null;
    }
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
    news: state.searchReducer.news,
    status: state.searchReducer.status,
    errorMessage: state.searchReducer.errorMessage
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchSearch }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
