import { Text } from "react-native";
import Notification from "../screens/Notification";
import Setting from "../screens/Setting";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNav from "./DrawerNav";

const MainTabs = createBottomTabNavigator();

export default function MainTabsNav() {
  return (
    <MainTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#15dea5" : "#555", fontSize: 12 }}>
            {route.name}
          </Text>
        ),
      })}
    >
      <MainTabs.Screen
        name="Home"
        component={DrawerNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-home" size={24} color="#15dea5" />
            ) : (
              <Ionicons name="home-outline" size={24} />
            ),
        }}
      />
      <MainTabs.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-notifications" size={24} color="#15dea5" />
            ) : (
              <Ionicons name="ios-notifications" size={24} />
            ),
        }}
      />
      <MainTabs.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="settings" size={24} color="#15dea5" />
            ) : (
              <Ionicons name="settings-outline" size={24} />
            ),
        }}
      />
    </MainTabs.Navigator>
  );
}
