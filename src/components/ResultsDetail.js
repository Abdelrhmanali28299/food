import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.titleStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        marginLeft: 15
    },
    titleStyle: {
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 5
    }
});

export default ResultsDetail;