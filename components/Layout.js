import React from "react";
import Drawer from "./Drawer";
import { View, StyleSheet } from "react-native";
import { JokeContext } from "../App";

const Layout = (props) => {
  const [joke] = React.useContext(JokeContext);
  return (
    <View>
      {joke.drawer ? <Drawer /> : null}
      {props.children}
    </View>
  );
};

export default Layout;
