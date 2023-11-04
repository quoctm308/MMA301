import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function List({ teams, onPressTeam }) {
    return (
        <FlatList
            data={teams}
            keyExtractor={(team) => team.id}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    style={[
                        styles.item,
                        {
                            backgroundColor:
                                itemColor(index)
                        }
                    ]}
                    onPress={() => onPressTeam(item.id)}>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                    <Text style={styles.title}>
                        {item.position}
                    </Text>
                    <Text style={styles.title}>
                        {item.department}
                    </Text>
                    <Text style={styles.title}>
                        {item.salary}
                    </Text>
                </TouchableOpacity>
            )} />
    )
}

function itemColor(index) {
    return `rgba(59, 108, 212, ${Math.max(1 - index / 10, 0.4)})`;
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 1,
        padding: 15,
    },
    title: {
        color: 'white',
    }
})