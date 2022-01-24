import * as React from "react";
import { View, Button, StyleSheet } from "react-native";
import { JokeContext } from "../App";

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
              const jk = {
                joke: data.joke,
                type: data.type,
                setup: data.setup,
                delivery: data.delivery,
              };
              setJoke({
                ...joke,
                joke: data.joke,
                setup: data.setup,
                delivery: data.delivery,
              });
              const title = data.setup ? data.setup : "Press For Joke";
              console.log(joke);
              const body = JSON.stringify({
                to: joke.token,
                title,
              });
              fetch("https://exp.host/--/api/v2/push/send", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Accept-Encoding": "gzip, deflate",
                  "Content-Type": "application/json",
                },
                body,
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
