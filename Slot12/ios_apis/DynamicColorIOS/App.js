import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DynamicColorIOS } from 'react-native';

export default function App() {
  const customDynamicTextColor = DynamicColorIOS({
    dark: 'lightskyblue',
    light: 'red',
  });

  const customContrastDynamicTextColor = DynamicColorIOS({
    dark: 'darkgray',
    light: 'lightgray',
    highContrastDark: 'black',
    highContrastLight: 'white',
  });

  return (
    <View style={styles.container}>
      <Text style={{ color: customDynamicTextColor }}>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
