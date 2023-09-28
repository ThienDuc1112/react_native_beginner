import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 8,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        padding: 3,
        marginHorizontal: 2,
        marginVertical: 3,
    
    },
    cardContent:{
     marginHorizontal: 18,
     marginVertical: 12,
     display: 'flex',
    }
});