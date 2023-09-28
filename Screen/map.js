import { StyleSheet, Text, View, TextInput, Alert,FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, {Marker} from 'react-native-maps';

export default function Map({route}) {
    const {city,longitude,latitude} = route.params; 
    console.log(longitude);
    console.log(latitude);
    const onRegionChange = (region) => {
        console.log(region);
    }
    return (
        <View style={styles.body}>
            <Text style={styles.myText}>{city}</Text>
           <MapView
            style={styles.map}
            onRegionChange={onRegionChange}
            initialRegion={{
                latitude: latitude,
                longitude: 100.5018,
                latitudeDelta: 1.0102095468551724,
                longitudeDelta: 0.5833288282155848
            }} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems:'center'
    },
    map: {
        width: '100%',
        height: '100%',
    },
    myText: {
        fontSize:26,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})