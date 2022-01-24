import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { JokeContext } from "../App";
import Drawer from "../components/Drawer";

const Tab2 = (props) => {
  const [joke] = React.useContext(JokeContext);

  React.useEffect(() => {
    if (joke.navigate == true) {
      props.navigation.navigate("Joke");
    }
  });

  return (
    <View>
      {joke.drawer ? <Drawer /> : null}
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
