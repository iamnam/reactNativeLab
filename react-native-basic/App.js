import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import A from './screens/FirstPropsScreen';
import B, {Greeting} from './screens/SecondPropsScreen';
import C from './screens/FirstStateScreen';
import D from './screens/StyleScreen';
import E from './screens/HeightAndWidthScreen';
import F from './screens/HandlingTextInputScreen';

export default class App extends React.Component {
  render() {
    return (
      <F />
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
