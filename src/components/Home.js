import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton, Item, HiddenItem } from 'react-navigation-header-buttons';
import { View, ActivityIndicator, Text } from 'react-native';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { fetchNews } from '../actions/NewsActions';
// eslint-disable-next-line import/no-cycle
import ListItem from './ListItem';
import Countries from '../Countries';
import Languages from '../Languages';
import { Button, CardSection } from './common';
import { ALL, BUSINESS, TECHNOLOGY, GENERAL, ENTERTAINMENT, HEALTH, SCIENCE, SPORTS } from '../types';

const MaterialIcons = passMeFurther => (
  <HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={24} color="black" />
);


class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'NEWSREACT',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={MaterialIcons}>
        <Item title="search" iconName="menu" onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={MaterialIcons} OverflowIcon={<Icon name="more-vert" size={23} color="black" />}>
        <HiddenItem title="Language(All)" iconName="ios-search" onPress={() => alert('search')} />
        <HiddenItem title="Country(All)" onPress={() => alert('select')} />
      </HeaderButtons>
    )

  });

  constructor(props) {
    super(props);
    this.state = {
      LanguagePickerVisible: false,
      LanguagePickerSelectedItem: { value: '0', label: 'All', selected: true },
      CountryPickerVisible: false,
      CountryPickerSelectedItem: { value: 'in', label: 'India', selected: true }
    };
  }

  componentDidMount() {
    this.props.fetchNews(this.props.navigation.getParam('Category'), this.state.CountryPickerSelectedItem.value);
  }

  getData() {
    switch (this.props.navigation.getParam('Category')) {
      case ALL:
        return this.props.allNews.news.articles;
      case GENERAL:
        return this.props.generalNews.news.articles;
      case BUSINESS:
        return this.props.businessNews.news.articles;
      case HEALTH:
        return this.props.healthNews.news.articles;
      case SCIENCE:
        return this.props.scienceNews.news.articles;
      case SPORTS:
        return this.props.sportsNews.news.articles;
      case TECHNOLOGY:
        return this.props.technologyNews.news.articles;
      case ENTERTAINMENT:
        return this.props.entertainmentNews.news.articles;
      default:
        return {};
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={this.getData()}
          renderItem={({ item }) => <ListItem news={item} />}
        />
        <SinglePickerMaterialDialog
          title="Language"
          scrolled
          items={Languages.map(_language => ({ value: _language.code, label: _language.name }))}
          visible={this.state.LanguagePickerVisible}
          selectedItem={this.state.LanguagePickerSelectedItem}
          onCancel={() => this.setState({ LanguagePickerVisible: false })}
          onOk={(result) => {
            this.setState({ LanguagePickerVisible: false });
            this.setState({ LanguagePickerSelectedItem: result.selectedItem });
          }
          }
        />
        <SinglePickerMaterialDialog
          title="Country"
          scrolled
          items={Countries.map(_country => ({ value: _country.code, label: _country.name }))}
          visible={this.state.CountryPickerVisible}
          selectedItem={this.state.CountryPickerSelectedItem}
          onCancel={() => this.setState({ CountryPickerVisible: false })}
          onOk={(result) => {
            this.setState({ CountryPickerVisible: false });
            this.setState({ CountryPickerSelectedItem: result.selectedItem });
          }
          }
        />
        <CardSection>
          <Button buttonText="Languages" onPress={() => this.setState({ LanguagePickerVisible: true })} />
        </CardSection>
        <CardSection>
          <Button buttonText="Countries" onPress={() => this.setState({ CountryPickerVisible: true })} />
        </CardSection>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    allNews: state.allNews,
    businessNews: state.businessNews,
    entertainmentNews: state.entertainmentNews,
    generalNews: state.generalNews,
    healthNews: state.healthNews,
    scienceNews: state.scienceNews,
    sportsNews: state.sportsNews,
    technologyNews: state.technologyNews
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchNews }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
