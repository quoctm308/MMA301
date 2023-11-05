import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import products from "./../data/products.json";

function JsonScreen({ navigation }) {
    return (
        <>
            <Text style={styles.title}>Products</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View style={styles.productContainer}>
                        <Text style={styles.productName}>
                            {item.name}
                        </Text>
                        <Text>
                            Brand: {item.brand}
                        </Text>
                        <Text style={styles.productPrice}>
                            Price: ${item.price}
                        </Text>
                    </View>
                )} />
        </>

    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        marginBottom: 50,
        alignSelf: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
    },
    productContainer: {
        marginRight: 140,
        marginLeft: 140,
        padding: 15,
        backgroundColor: 'silver',
        borderRadius: 5,
        marginBottom: 30,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    productPrice: {
        color: 'green',
    }
});

export default JsonScreen;