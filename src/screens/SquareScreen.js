import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";

import ColorAdjuster from "./../components/ColorAdjuster";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {
            ...state,
            red: state.red + action.payload,
          };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {
            ...state,
            green: state.green + action.payload,
          };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.payload,
          };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // const [red, setRed] = useState(Math.floor(255*Math.random()));
  // const [green, setGreen] = useState((Math.floor(255*Math.random())));
  // const [blue, setBlue] = useState((Math.floor(255*Math.random())));

  // const setColor = (color, change) => {
  //     switch (color) {
  //         case 'red':
  //             return red+change>255 || red+change<0 ? null : setRed(prev => prev+change)
  //         case 'green':
  //             return green+change>255 || green+change<0 ? null : setGreen(prev => prev+change)
  //         case 'blue':
  //             return blue+change>255 || blue+change<0 ? null : setBlue(prev => prev+change)
  //     }
  // }

  const initialState = {
    red: Math.floor(255 * Math.random()),
    green: Math.floor(255 * Math.random()),
    blue: Math.floor(255 * Math.random()),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { red, green, blue } = state;

  console.log(red, green, blue);

  return (
    <View>
      <ColorAdjuster
        title="red"
        onIncrease={() => dispatch({ type: "change_red", payload: 15 })}
        onDecrease={() => dispatch({ type: "change_red", payload: -15 })}
      />
      <ColorAdjuster
        title="green"
        onIncrease={() => dispatch({ type: "change_green", payload: 15 })}
        onDecrease={() => dispatch({ type: "change_green", payload: -15 })}
      />
      <ColorAdjuster
        title="blue"
        onIncrease={() => dispatch({ type: "chnage_blue", payload: 15 })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -15 })}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
