import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added isLoggedIn state

  const handleLoginPress = () => {
    // Toggle login status
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>

      {isLoggedIn ? (
        <Text style={styles.headerText}>You're logged in</Text>
      ) : (
        <>
          <Text style={styles.regularText}>Login to continue</Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </>
      )}
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  statusText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#EDEFEE',
  },
});
