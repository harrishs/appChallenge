import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { JokeContext } from "../App";
import Drawer from "../components/Drawer";

const Joke = (props) => {
  const [joke, setJoke] = React.useContext(JokeContext);

  React.useEffect(() => {
    if (joke.navigate == "true") {
      setJoke({ ...joke, navigate: false, drawer: false });
    }
  });

  return (
    <View>
      {joke.drawer ? <Drawer /> : null}
      <Text>{joke.joke}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Joke;
