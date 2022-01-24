import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1 from "./screens/Tab1";
import Tab2 from "./screens/Tab2";
import Joke from "./screens/Joke";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./components/HeaderButton";
import { LogBox } from "react-native";
import * as Notifications from "expo-notifications";

import Styling from "./constants/Styling";
import { setNotificationHandler } from "expo-notifications";
import { PureComponent } from "react/cjs/react.production.min";

const Tab = createBottomTabNavigator();
export const JokeContext = React.createContext();
LogBox.ignoreLogs(["Require cycle:"]);

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  const [joke, setJoke] = React.useState({
    joke: null,
    drawer: false,
    token: null,
    navigate: false,
  });
  const [notif, setNotif] = React.useState(null);
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
            setJoke((prevState) => ({
              ...prevState,
              drawer: !prevState.drawer,
            }));
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

  React.useEffect(() => {
    Notifications.getPermissionsAsync()
      .then(async (statusObj) => {
        if (statusObj.granted != true) {
          return await Notifications.requestPermissionsAsync({
            ios: {
              allowAlert: true,
              allowBadge: true,
              allowSound: true,
              allowsAnnouncements: true,
            },
          });
        } else {
          return statusObj;
        }
      })
      .then((statusObj) => {
        if (statusObj.granted != true) {
          throw new Error("Notification Permissions Not Granted");
        }
      })
      .then(() => {
        return Notifications.getExpoPushTokenAsync();
      })
      .then((data) => {
        const token = data.data;
        const newObj = {
          ...joke,
          token,
        };
        setJoke(newObj);
      })
      .catch((err) => console.log(err));

    const bgSub = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    const fgSub = Notifications.addNotificationReceivedListener(
      (notification) => {
        const newObj = {
          ...joke,
          navigate: !joke.navigate,
        };
        setJoke(newObj);
      }
    );

    return () => {
      fgSub.remove();
      bgSub.remove();
    };
  }, []);

  return (
    <>
      <JokeContext.Provider value={[joke, setJoke]}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarButton: ["Joke"].includes(route.name)
                ? () => {
                    return null;
                  }
                : undefined,
            })}
          >
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
            <Tab.Screen
              name="Joke"
              component={Joke}
              options={{
                headerTitle: "View Joke",
                ...headerStyle,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </JokeContext.Provider>
    </>
  );
}
