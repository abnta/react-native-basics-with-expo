import React, { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    const randomRgb = () => {
        const red = Math.floor(255*Math.random());
        const green = Math.floor(255*Math.random());
        const blue = Math.floor(255*Math.random());

        return `rgb(${red},${green},${blue})`;
    }

    const onAddColor = () => {
        setColors(prevState => [...prevState, randomRgb()])
    }

    return <View>
        <Button title="Add a color" onPress={onAddColor} />
        <FlatList
        data = {colors}
        keyExtractor={color => color}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>{
            return <View style={{ 
                height: 100,
                width: 100,
                backgroundColor: item
             }} />
        }}
        />
    </View>
}

const styles = StyleSheet.create({});

export default ColorScreen;