import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  const onChangeInput = (newValue) => {
    console.log(newValue);
    setPassword(newValue);
  };
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={(newValue) => onChangeInput(newValue)}
        value={password}
      />
      {password.length < 5 ? (
        <Text>password must be 5 characters long atleast</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 30,
    borderColor: "black",
    borderWidth: 0.25,
  },
});

export default TextScreen;
