import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

function MainScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.title}>React Native App</Text>
            <View style={styles.buttonApp}>
                <Button title="Json" onPress={() => navigation.navigate('JsonScreen')}>
                    <Text>Json</Text>
                </Button>
            </View>
            <View style={styles.buttonApp}>
                <Button title="Api" onPress={() => navigation.navigate('ApiScreen')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 40,
    },
    buttonApp: {
        borderRadius: 30,
        paddingTop: 30,
        paddingBottom: 30,
        marginLeft: 150,
        marginRight: 150,
    },
});

export default MainScreen;