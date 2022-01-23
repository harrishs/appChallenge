import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { JokeContext } from "../App";
import * as Notifications from "expo-notifications";

import Styling from "../constants/Styling";

const Drawer = (props) => {
  const [joke, setJoke] = React.useContext(JokeContext);
  return (
    <View style={styles.drawer}>
      <Button
        title="Show Me A Joke"
        onPress={() => {
          fetch("https://v2.jokeapi.dev/joke/Any")
            .then((response) => response.json())
            .then((data) => {
              const newObj = { drawer: joke.drawer, joke: data };
              setJoke(newObj);
              const setup =
                joke.type == "single" ? "Continue For Joke" : joke.setup;
              Notifications.scheduleNotificationAsync({
                content: {
                  title: setup,
                  body: "Joke",
                },
                trigger: {
                  seconds: 1,
                },
              });
            })
            .catch((err) => console.log(err));
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
