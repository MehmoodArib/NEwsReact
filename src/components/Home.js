import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, HeaderButton, Item, HiddenItem } from 'react-navigation-header-buttons';
import { View, ActivityIndicator, Text } from 'react-native';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { fetchNews } from '../actions/NewsActions';
import { setCountry, setLanguage } from '../actions/PrefrenceActions';
// eslint-disable-next-line import/no-cycle
import ListItem from './ListItem';
import Countries from '../Countries';
import Languages from '../Languages';
import { Button, CardSection } from './common';
import { BUSINESS, TECHNOLOGY, GENERAL, ENTERTAINMENT, HEALTH, SCIENCE, SPORTS } from '../types';

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
      CountryPickerVisible: false,
    };
  }

  componentWillMount() {
    this.props.fetchNews(this.props.navigation.getParam('Category'), this.props.preference.country.value);
  }

  render() {
    console.log(this.props.news);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={this.props.news.news.articles}
          renderItem={({ item }) => <ListItem news={item} />}
        />
        <SinglePickerMaterialDialog
          title="Language"
          scrolled
          items={Languages.map(_language => ({ value: _language.code, label: _language.name }))}
          visible={this.state.LanguagePickerVisible}
          selectedItem={this.props.preference.language}
          onCancel={() => this.setState({ LanguagePickerVisible: false })}
          onOk={(result) => {
            this.setState({ LanguagePickerVisible: false });
            this.props.setLanguage(result.selectedItem);
          }
          }
        />
        <SinglePickerMaterialDialog
          title="Country"
          scrolled
          items={Countries.map(_country => ({ value: _country.code, label: _country.name }))}
          visible={this.state.CountryPickerVisible}
          selectedItem={this.props.preference.country}
          onCancel={() => this.setState({ CountryPickerVisible: false })}
          onOk={(result) => {
            this.setState({ CountryPickerVisible: false });
            this.props.setCountry(result.selectedItem);
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


function mapStateToProps(state, props) {
  const category = props.navigation.getParam('Category');
  switch (category) {
    case GENERAL:
      return { news: state.generalNews, preference: state.preferenceReducer };
    case BUSINESS:
      return { news: state.businessNews, preference: state.preferenceReducer };
    case HEALTH:
      return { news: state.healthNews, preference: state.preferenceReducer };
    case SCIENCE:
      return { news: state.scienceNews, preference: state.preferenceReducer };
    case SPORTS:
      return { news: state.sportsNews, preference: state.preferenceReducer };
    case TECHNOLOGY:
      return { news: state.technologyNews, preference: state.preferenceReducer };
    case ENTERTAINMENT:
      return { news: state.entertainmentNews, preference: state.preferenceReducer };
    default:
      return { news: [], preference: {} };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchNews, setCountry, setLanguage }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
