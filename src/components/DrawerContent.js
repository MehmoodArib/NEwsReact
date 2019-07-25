import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { API_KEY } from '../types';
import DrawerItem from './DrawerItem';
import { CardSection } from './common';
import { PREFRENCES_SCREEN } from '../Navigation/types';

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
      <View>
        <Text style={Styles.textStyle}>Settings</Text>
        <View style={Styles.blackLine} />


        <TouchableWithoutFeedback onPress={() => {
          this.props.navigation.navigate(PREFRENCES_SCREEN, { PrefrenceName: 'Language' });
        }}
        >
          <View style={Styles.settingsStyle}>
            <Text style={Styles.textStyle}>Language</Text>
            <Text style={Styles.textStyle}>English</Text>
          </View>
        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={() => {
          this.props.navigation.navigate(PREFRENCES_SCREEN, { PrefrenceName: 'Country' });
        }}
        >
          <View style={Styles.settingsStyle}>
            <Text style={Styles.textStyle}>Country</Text>
            <Text style={Styles.textStyle}>India</Text>
          </View>
        </TouchableWithoutFeedback>


        <View style={Styles.blackLine} />
        <Text style={Styles.textStyle}>Sources</Text>
        <View style={Styles.blackLine} />
        <FlatList
          data={this.state.data.sources}
          renderItem={({ item }) => <DrawerItem sources={item} />}
        />
      </View>
    );
  }
}
const Styles = {
  settingsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 24,
  },
  blackLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
};

function mapStateToProps(state, props) {
  return { preference: state.preference };
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchSources }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
