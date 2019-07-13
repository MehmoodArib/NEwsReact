import React, { Component } from 'react';
import { View } from 'react-native';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { FlatList } from 'react-native-gesture-handler';
// eslint-disable-next-line import/no-cycle
import ListItem from './ListItem';
import { API_KEY } from '../types';
import { Button, CardSection } from './common';

const url = 'https://newsapi.org/v2/top-headlines?'
  + 'country=in&'
  + `apiKey=${API_KEY}`;


const LONG_LIST = [
  'All',
  'List element 1',
  'List element 2',
  'List element 3',
  'List element 4',
  'List element 5',
  'List element 6',
  'List element 7',
  'List element 8',
  'List element 9',
  'List element 10',
  'List element 12',
  'List element 13',
  'List element 14',
  'List element 15',
  'List element 16',
  'List element 17',
  'List element 18',
  'List element 19',
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        articles: [],
      },
      LanguagePickerVisible: false,
      LanguagePickerSelectedItem: { value: 0, label: 'All', selected: true },
      CountryPickerVisible: false,
      CountryPickerSelectedItem: { value: 0, label: 'All', selected: true }
    };
  }

  componentDidMount() {
    fetch(url)
      .then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({
          data
        });
      });
  }

  render() {
    console.log('====================================');
    console.log(this.state.CountryPickerSelectedItem);
    console.log('====================================');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={this.state.data.articles}
          renderItem={({ item }) => <ListItem news={item} />}
        />
        <SinglePickerMaterialDialog
          title="Language"
          scrolled
          items={LONG_LIST.map((row, index) => ({ value: index, label: row }))}
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
          title="Language"
          scrolled
          items={LONG_LIST.map((row, index) => ({ value: index, label: row }))}
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
export default Home;
