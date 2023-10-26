import * as React from 'react';
import { useState } from 'react';
import { validateEmail } from '../utils';
import { View, Text, StyleSheet, Button, Image, TextInput, Alert } from 'react-native';

const SubscribeScreen = () => {

    const [inputValue, setInputValue] = React.useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const checkEmail = (email) => {
        const isValid = validateEmail(email);
        setIsValidEmail(isValid);
    }

    const createAlert = () => {
        if (!inputValue) {
            alert('Please enter an email first');
            return;
        }

        Alert.alert('Thanks for subscribing!');
    }

    const createTwoButtonAlert = () =>
        Alert.alert('Hey!', 'Thanks for subscribing, stay tuned!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    // Add subscribe screen code here
    return <View>
        <View style={styles.logoContainer}>
            <Image style={styles.littleLemonLogo} source={require('../assets/little-lemon-logo-grey.png')} />
        </View>
        <Text style={styles.littleLemonDes}>Subscribe to our newsletter for our latest delicious recipes</Text>
        <TextInput
            style={styles.inputSection}
            placeholder='Input your email...'
            value={inputValue}
            onChangeText={text => {
                setInputValue(text);
                checkEmail(text);
            }}
        />
        <View style={styles.emailButton}>
            <Button
                color='#495e57'
                title='Subscribe'
                disabled={!isValidEmail}
                onPress={createAlert}>
            </Button>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    littleLemonLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    littleLemonDes: {
        marginTop: 25,
        fontSize: 15,
        marginLeft: 50,
        marginRight: 50,
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    inputSection: {
        marginTop: 20,
        padding: 10,
        marginRight: 30,
        marginLeft: 30,
        borderRadius: 10,
        backgroundColor: 'silver',
    },
    emailButton: {
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
    }
});

export default SubscribeScreen;
