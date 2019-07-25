import React, { Component } from 'react';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Languages from '../Languages';
import Countries from '../Countries';

import { setCountry, setLanguage } from '../actions/PrefrenceActions';

class PrefrencesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('PrefrenceName'),
  });


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     PrefrenceName: this.props.navigation.getParam('PrefrenceName'),
  //   };
  // }

  constructor(props) {
    super(props);
    if (this.props.navigation.getParam('PrefrenceName') === 'Country') {
      this.data = Countries;
    }
    if (this.props.navigation.getParam('PrefrenceName') === 'Language') {
      this.data = Languages;
    }
  }

  render() {
    return (
      <SinglePickerMaterialDialog
        title={this.props.navigation.getParam('PrefrenceName')}
        scrolled
        visible
        items={this.data.map(_item => ({ value: _item.code, label: _item.name }))}
        selectedItem={this.props.preference.language}
        onCancel={() => this.props.navigation.pop()}
        onOk={(result) => {
          this.props.setCountry(result.selectedItem);
          this.props.navigation.pop();
        }
        }
      />
    );
  }
}
function mapStateToProps(state, props) {
  return { preference: state.preference };
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ setCountry, setLanguage }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrefrencesScreen);
