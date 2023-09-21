import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';


const MenuItems = () => {
    const menuItemsToDisplay = [
        { name: 'Hummus', price: '$5.00', id: '1A' },
        { name: 'Moutabal', price: '$5.00', id: '2B' },
        { name: 'Falafel', price: '$7.50', id: '3C' },
        { name: 'Marinated Olives', price: '$5.00', id: '4D' },
        { name: 'Kofta', price: '$5.00', id: '5E' },
        { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
        { name: 'Lentil Burger', price: '$10.00', id: '7G' },
        { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
        { name: 'Kofta Burger', price: '$11.00', id: '9I' },
        { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00', id: '12L' },
        { name: 'Bread Sticks', price: '$3.00', id: '13M' },
        { name: 'Pita Pocket', price: '$3.00', id: '14N' },
        { name: 'Lentil Soup', price: '$3.75', id: '15O' },
        { name: 'Greek Salad', price: '$6.00', id: '16Q' },
        { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
        { name: 'Baklava', price: '$3.00', id: '18S' },
        { name: 'Tartufo', price: '$3.00', id: '19T' },
        { name: 'Tiramisu', price: '$5.00', id: '20U' },
        { name: 'Panna Cotta', price: '$5.00', id: '21V' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.menuItemContainer} key={item.id}>
            <View style={styles.itemText}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={menuItemsToDisplay}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    menuItemContainer: {
        backgroundColor: '#333333',
        margin: 15,
        // marginLeft: 20,
        // marginRight: 20,
        borderRadius: 5,
    },
    itemText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemName: {
        color: 'yellow',
        fontSize: 20,
    },
    itemPrice: {
        fontSize: 20,
        color: 'yellow', // Adjust the color if needed
    },
});


export default MenuItems;