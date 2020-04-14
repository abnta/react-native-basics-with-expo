import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const BoxScreen = () => {
    return<View style={styles.viewStyle}>
        <View style={styles.textOneStyle}></View>
        <View style={styles.textTwoStyle}></View>
        <View style={styles.textThreeStyle}></View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'green',
        height: 50,
        width: 50,
        alignSelf: 'flex-end'
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'blue',
        height: 50,
        width: 50
    }
})

export default BoxScreen