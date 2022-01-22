import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tab1 from "./screens/Tab1";
import Tab2 from "./screens/Tab2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab1" component={Tab1} />
        <Stack.Screen name="Tab2" component={Tab2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
