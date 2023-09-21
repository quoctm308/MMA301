import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#333333" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <LittleLemonHeader />
        <MenuItems />
        <LittleLemonFooter />
      </SafeAreaView>
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

