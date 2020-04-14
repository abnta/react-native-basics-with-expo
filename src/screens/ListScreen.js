import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {
            name: 'Friend #1',
            age: 10
        },
        {
            name: 'Friend #2',
            age: 120
        },
        {
            name: 'Friend #3',
            age: 100
        },
        {
            name: 'Friend #4',
            age: 104
        },
        {
            name: 'Friend #5',
            age: 105
        },
        {
            name: 'Friend #6',
            age: 107
        },
        {
            name: 'Friend #7',
            age: 1078
        },
        {
            name: 'Friend #8',
            age: 10567
        },
        {
            name: 'Friend #9',
            age: 10789
        }
    ]
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => {
            return (friend.name)
        }} 
        data={friends} 
        renderItem={({ item }) => {
        return <Text style={styles.textStyle}> {item.name}- age: {item.age}</Text>
        }} />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;