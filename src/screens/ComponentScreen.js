import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {

  const myName = 'Ieshan Tapan Sharma!!'
  return (
    <View>
      <Text style={styles.textStyleHeading}>Greeting Started with react-native</Text>
        <Text style={styles.textStyleSubHeading} >My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleHeading: {
    fontSize: 45,
  },
  textStyleSubHeading: {
      fontSize: 20
  }

});

export default ComponentScreen;
