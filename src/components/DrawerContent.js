import React, { Component } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { API_KEY } from '../types';
import DrawerItem from './DrawerItem';


const url = 'https://newsapi.org/v2/sources?'
  + `apiKey=${API_KEY}`;

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        sources: [],
      }
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
    return (
      <View >
        <FlatList
          data={this.state.data.sources}
          renderItem={({ item }) => <DrawerItem sources={item} />}
        />
      </View>
    );
  }
}
export default DrawerContent;
