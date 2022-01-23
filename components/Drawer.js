import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Styling from "../constants/Styling";

const Drawer = (props) => {
  return (
    <View style={styles.drawer}>
      <Button
        title="Show Me A Joke"
        onPress={() => {
          props.navigation.navigate("Joke");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    height: "100%",
    width: "30%",
    backgroundColor: Styling.primaryColor,
    color: "#fff",
  },
});

export default Drawer;
