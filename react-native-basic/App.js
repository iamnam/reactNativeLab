import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import A from './screens/FirstPropsScreen';
import B, {Greeting} from './screens/SecondPropsScreen';
import C from './screens/FirstStateScreen';
import D from './screens/StyleScreen';
import E from './screens/HeightAndWidthScreen';
import F from './screens/HandlingTextInputScreen';
import G from './screens/HandlingButtonScreen';
import HandlingButtonScreen2 from './screens/HandlingButtonScreen2';
import ScrollViewScreen from './screens/ScrollViewScreen';
import ListViewScreen1 from './screens/ListViewScreen1';
import NetworkingScreen from './screens/NetworkingScreen';

export default class App extends React.Component {
  render() {
    return (
      <NetworkingScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
