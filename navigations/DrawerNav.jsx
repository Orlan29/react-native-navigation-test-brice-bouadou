import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstOption from "../screens/FirstOption";
import OtherScreen from "../screens/OtherScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={FirstOption}
        options={{
          drawerActiveBackgroundColor: "rgba(21, 222, 165, 0.5)",
          drawerActiveTintColor: "#011c37",
        }}
      />
      <Drawer.Screen
        name="Other Screen"
        component={OtherScreen}
        options={{
          drawerActiveBackgroundColor: "rgba(21, 222, 165, 0.5)",
          drawerActiveTintColor: "#011c37",
        }}
      />
    </Drawer.Navigator>
  );
}
