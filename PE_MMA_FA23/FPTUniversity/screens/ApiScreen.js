import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import Axios from 'axios';

function ApiScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/photos');
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="small" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 16, flexDirection: 'row' }}>
                        <Image
                            source={{ uri: item.thumbnailUrl }}
                            style={{ width: 70, height: 70 }}
                        />
                        <Text style={styles.textImg}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textImg: {
        marginLeft: 10,
        alignSelf: 'center',
        fontSize: 18,
    }
});

export default ApiScreen;