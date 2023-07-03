import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.homeTitle}>Hello Screen</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.homeButton}
        onPress={() => navigation.navigate("MainTabs")}
      >
        <Text>Go to another view</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15dea5",
  },
  homeTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#011c37",
  },
  homeButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    width: "50%",
    alignItems: "center",
    marginVertical: 20,
  },
});
