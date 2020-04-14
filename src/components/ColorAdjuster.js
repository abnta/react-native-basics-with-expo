import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorAdjuster = ({ title, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Button title={`increase ${title}`} onPress={onIncrease} />
            <Button title={`decrease ${title}`} onPress={onDecrease}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorAdjuster