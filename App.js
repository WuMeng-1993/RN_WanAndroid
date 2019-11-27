import React, {PureComponent} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {setAxios} from './src/service/setAxios';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.initalInfo = this.initalInfo();
  }

  componentDidMount(): void {
    SplashScreen.hide();
  }

  async initalInfo() {
    const userInfo = await setAxios();
  }

  render() {
    return <View />;
  }
}

export default App;
