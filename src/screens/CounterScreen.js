import React, { useReducer } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase_counter': 
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'decrease_counter':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
};

const CounterScreen = () => {

    const initialState = {
        counter: 0
    };

    const [ { counter }, dispatch] = useReducer(reducer, initialState);

    return <View>
        <Button title="Increase" onPress={() => dispatch({type: 'increase_counter'}) }/>
        <Button title="Decrease" onPress={() => dispatch({ type: 'decrease_counter' })}/>
        <Text>Current Counter: {counter}</Text>
        </View>
}

const styles = StyleSheet.create({})

export default CounterScreen;