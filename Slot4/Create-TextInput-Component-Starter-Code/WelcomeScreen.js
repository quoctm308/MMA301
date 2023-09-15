import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  const [inputText, setInputText] = useState('');

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        placeholderTextColor="#EDEFEE" // Text color when input is unfocused
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    fontSize: 16,
    padding: 10,
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    backgroundColor: 'white' // Text color when input is focused
  },
});