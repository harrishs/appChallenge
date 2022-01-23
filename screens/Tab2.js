import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const Tab2 = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Tab 2</Text>
      <Button
        title="Tab1"
        onPress={() => {
          props.navigation.navigate("Tab1");
        }}
      />
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
