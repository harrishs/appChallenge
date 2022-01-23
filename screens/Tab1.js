import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Layout from "../components/Layout";

const Tab1 = (props) => {
  return (
    <Layout>
      <View style={styles.screen}>
        <Text>Tab 1</Text>
        <Button
          title="Tab2"
          onPress={() => {
            props.navigation.navigate("Tab2");
          }}
        />
      </View>
    </Layout>
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
