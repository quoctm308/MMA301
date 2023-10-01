import * as React from 'react';
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#333333',
        }}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: '#EDEFEE' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
