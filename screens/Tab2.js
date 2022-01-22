import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tab2 = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Tab 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tab2;
