import React, { Component } from 'react';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Languages from '../Languages';
import Countries from '../Countries';

import { setCountry, setLanguage } from '../actions/PrefrenceActions';

class PrefrencesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('PrefrenceName'),
  });

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
        selectedItem={this.props.preferenceValue}
        onCancel={() => this.props.navigation.pop()}
        onOk={(result) => {
          this.props.setValue(result.selectedItem);
          this.props.navigation.pop();
        }
        }
      />
    );
  }
}
function mapStateToProps(state, ownProps) {
  if (ownProps.navigation.getParam('PrefrenceName') === 'Country') {
    return { preferenceValue: state.preference.country };
  }
  return { preferenceValue: state.preference.language };
}
function mapDispatchToProps(dispatch, ownProps) {
  let setValue;
  if (ownProps.navigation.getParam('PrefrenceName') === 'Country') {
    setValue = setCountry;
  } else {
    setValue = setLanguage;
  }
  return {
    ...bindActionCreators({ setValue }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrefrencesScreen);
