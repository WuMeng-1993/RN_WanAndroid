import React, {PureComponent} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {
    SplashScreen.hide();
  }

  render() {
    return <View />;
  }
}

export default App;
