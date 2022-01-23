import React from "react";
import Drawer from "./Drawer";
import { View, StyleSheet } from "react-native";

const Layout = (props) => {
  return (
    <View>
      <Drawer />
      {props.children}
    </View>
  );
};

export default Layout;
