import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWebView extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.navigation.getParam('url');
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
