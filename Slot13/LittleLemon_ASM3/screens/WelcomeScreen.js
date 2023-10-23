import * as React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    // Add welcome screen code here.
    return <View>
        <View style={styles.logoContainer}>
            <Image style={styles.littleLemonLogo} source={require('../assets/little-lemon-logo.png')} />
        </View>
        <Text style={styles.littleLemonDes}>Little Lemon, your local Mediterranean Bistro</Text>
        <View style={styles.emailButton}>
            <Button
                onPress={() => navigation.navigate('Subscribe')}
                color='white'
                title='Newsletter'>
            </Button>
        </View>
    </View>;
};
const styles = StyleSheet.create({
    logoContainer: {
        paddingTop: 100,
        alignItems: 'center',
    },
    littleLemonLogo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    littleLemonDes: {
        paddingTop: 40,
        fontSize: 15,
        marginLeft: 50,
        marginRight: 50,
        textAlign: 'center',
        flexWrap: 'wrap',
        fontWeight: 'bold',
    },
    emailButton: {
        backgroundColor: '#495e57',
        color: 'white',
        borderRadius: 10,
        marginTop: 250,
        marginLeft: 30,
        marginRight: 30,
    }
});
export default WelcomeScreen;
