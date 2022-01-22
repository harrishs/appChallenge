import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tab1 = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Tab 1</Text>
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

export default Tab1;
