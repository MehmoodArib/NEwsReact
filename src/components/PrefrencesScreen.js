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
    const { navigation } = this.props;
    if (navigation.getParam('PrefrenceName') === 'Country') {
      this.data = Countries;
    }
    if (navigation.getParam('PrefrenceName') === 'Language') {
      this.data = Languages;
    }
  }

  render() {
    const { navigation, setValue, preferenceValue } = this.props;
    return (
      <SinglePickerMaterialDialog
        title={navigation.getParam('PrefrenceName')}
        scrolled
        visible
        items={this.data.map(_item => ({ value: _item.code, label: _item.name }))}
        selectedItem={preferenceValue}
        onCancel={() => navigation.pop()}
        onOk={(result) => {
          setValue(result.selectedItem);
          navigation.pop();
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
