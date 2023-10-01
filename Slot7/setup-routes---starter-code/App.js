import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import AppNavigator from './Navigator';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <>
      <LittleLemonHeader />
      <AppNavigator />
      <LittleLemonFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

