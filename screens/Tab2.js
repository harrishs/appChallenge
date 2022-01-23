import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Layout from "../components/Layout";

const Tab2 = (props) => {
  return (
    <Layout>
      <View style={styles.screen}>
        <Text>Tab 2</Text>
        <Button
          title="Tab1"
          onPress={() => {
            props.navigation.navigate("Tab1");
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

export default Tab2;
