import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp'

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result)
        return null;
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10
    },
    imageStyle: {
        height: 200,
        width: 300,
        marginVertical: 10,
        borderRadius: 10
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    }
});

export default ResultShowScreen;