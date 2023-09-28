import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({title, showMenu}) {
    const navigation = useNavigation();
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            {showMenu && <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.menu} />}
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText :{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
    },
    menu: {
        position: 'absolute',
        left: 2,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        display: 'flex',
        flexDirection: 'row',
    }
});