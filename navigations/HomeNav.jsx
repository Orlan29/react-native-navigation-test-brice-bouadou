import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MainTabsNav from "./MainTabNav";

const HomeStack = createStackNavigator();

export default function HomeNav() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="MainTabs"
        component={MainTabsNav}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
