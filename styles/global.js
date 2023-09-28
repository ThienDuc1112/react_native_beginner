import { StyleSheet, Text, View } from 'react-native';



export const globalStyles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    titleText: {
        fontSize: 22,
        color: '#333',
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        fontSize: 18,
        borderRadius: 6,
    }
});

export const images = {
    ratings: {
        '5':require('../assets/rating-5.png'),
        '4':require('../assets/rating-4.png'),
        // '3':require('../assets/rating-3.png'),
        // '2':require('../assets/rating-2.png'),
        // '1':require('../assets/rating-1.png')
    }
};