import * as React from 'react';
import { ScrollView, Text, StyleSheet, Image, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle="white" contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.img} source={require('./img/logo.png')} />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>

      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center'
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center'
  },
  img: {
    width: 100,
    height: 100
  }
});
