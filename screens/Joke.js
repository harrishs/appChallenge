import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Layout from "../components/Layout";

const dummyData = {
  error: false,
  category: "Pun",
  type: "single",
  joke: "I'm reading a book about anti-gravity. It's impossible to put down!",
  flags: {
    nsfw: false,
    religious: false,
    political: false,
    racist: false,
    sexist: false,
    explicit: false,
  },
  id: 126,
  safe: true,
  lang: "en",
};

const Joke = (props) => {
  return (
    <Layout>
      <View style={styles.screen}>
        <Text>{dummyData.joke}</Text>
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

export default Joke;
