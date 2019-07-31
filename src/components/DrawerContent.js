import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DrawerItem from './DrawerItem';
import { fetchSources } from '../actions/SourcesAction';
import { PREFRENCES_SCREEN } from '../Navigation/types';

class DrawerContent extends Component {
  componentDidMount() {
    const { fetchSource: _fetchSources, preference } = this.props;
    _fetchSources({ language: preference.language, country: preference.country });
  }

  componentDidUpdate(prevProps) {
    const { fetchSource: _fetchSources, preference } = this.props;
    if (prevProps.preference.country !== preference.country
      || prevProps.preference.language !== preference.language) {
      _fetchSources({ language: preference.language, country: preference.country });
    }
  }

  render() {
    const { preference, navigation, sources } = this.props;
    return (
      <View>
        <Text style={Styles.textStyle}>Settings</Text>
        <View style={Styles.blackLine} />


        <TouchableWithoutFeedback onPress={() => {
          navigation.navigate(PREFRENCES_SCREEN, { PrefrenceName: 'Language' });
        }}
        >
          <View style={Styles.settingsStyle}>
            <Text style={Styles.textStyle}>Language</Text>
            <Text style={Styles.textStyle}>{preference.language.label}</Text>
          </View>
        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={() => {
          navigation.navigate(PREFRENCES_SCREEN, { PrefrenceName: 'Country' });
        }}
        >
          <View style={Styles.settingsStyle}>
            <Text style={Styles.textStyle}>Country</Text>
            <Text style={Styles.textStyle}>{preference.country.label}</Text>
          </View>
        </TouchableWithoutFeedback>


        <View style={Styles.blackLine} />
        <Text style={Styles.textStyle}>Sources</Text>
        <View style={Styles.blackLine} />

        <FlatList
          data={sources.sources}
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

function mapStateToProps(state) {
  return {
    preference: state.preference,
    sources: state.sourcesReducer.sources,
    status: state.sourcesReducer.status,
    errorMessage: state.sourcesReducer.errorMessage
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchSources }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
