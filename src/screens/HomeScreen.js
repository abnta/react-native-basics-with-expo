import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {

  const onNavigate = (route) => {
    navigate(route);
  }
  return <View>
    <Text style={styles.text}>Hello World!!</Text>
    <Button 
    title="Go to Components Demo"
    onPress={() => onNavigate('Components')}  />
    <Button title="Go To list demo"  onPress={() => onNavigate('List')} />
    <Button title="Go To Image screen demo"  onPress={() => onNavigate('Image')} />
    <Button title="Go To Counter Screen demo"  onPress={() => onNavigate('Counter')} />
    <Button title="Go To Color Screen demo"  onPress={() => onNavigate('Color')} />
    <Button title="Go To Square Screen demo"  onPress={() => onNavigate('Square')} />
    <Button title="Go To Square Text demo"  onPress={() => onNavigate('Text')} />
    <Button title="Go To Box demo"  onPress={() => onNavigate('Box')} />
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
