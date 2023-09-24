import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleFormSubmit = () => {
        // Log the email and password
        console.log('Email:', email);
        console.log('Password:', password);
        // You can do something with the email and password here, such as sending them to a server for authentication
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
                style={styles.formUsername}
                placeholder='Email Address'
                placeholderTextColor="#909191"
                value={email}
                onChangeText={handleEmailChange}
                onSubmitEditing={handleFormSubmit}  // Call this function when "OK" is pressed
            />
            <TextInput
                style={styles.formPassword}
                placeholder='Password'
                placeholderTextColor="#909191"
                secureTextEntry={true}
                value={password}
                onChangeText={handlePasswordChange}
                onSubmitEditing={handleFormSubmit}  // Call this function when "OK" is pressed
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
    formUsername: {
        marginLeft: 20,
        marginRight: 20,
        padding: 5,
        fontSize: 12,
        color: '#000',
        backgroundColor: 'white',
    },
    formPassword: {
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        padding: 5,
        fontSize: 12,
        color: '#000',
        backgroundColor: 'white',
    }
});
