import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1 from "./screens/Tab1";
import Tab2 from "./screens/Tab2";
import Joke from "./screens/Joke";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./components/HeaderButton";

import Styling from "./constants/Styling";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [drawer, setDrawer] = React.useState(false);
  const headerStyle = {
    headerStyle: {
      backgroundColor: Styling.primaryColor,
    },
    headerTintColor: "#fff",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="headerBtn"
          iconName="notifications-outline"
          onPress={() => {
            setDrawer((prevState) => !prevState);
          }}
        />
      </HeaderButtons>
    ),
  };

  const tabStyle = {
    tabBarActiveTintColor: Styling.secondaryColor,
    tabBarIcon: ({ color }) => (
      <Ionicons name="ios-star" color={color} size={24} />
    ),
  };

  return (
    <>
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen
            name="Joke"
            component={Joke}
            options={{
              headerTitle: "View Joke",
              ...headerStyle,
            }}
          />
        </Stack.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen
            name="Tab1"
            component={Tab1}
            options={{
              headerTitle: "Tab1",
              ...tabStyle,
              ...headerStyle,
            }}
          />
          <Tab.Screen
            name="Tab2"
            component={Tab2}
            options={{
              headerTitle: "Tab2",
              ...tabStyle,
              ...headerStyle,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
