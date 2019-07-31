import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWebView extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.url = navigation.getParam('url');
  }

  render() {
    return (
      <WebView
        source={{ uri: this.url }}
      />
    );
  }
}
export default MyWebView;
