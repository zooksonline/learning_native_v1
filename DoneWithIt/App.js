import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  const handlePress = () => console.log("text has been cilcked");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello World!!! </Text>

      <TouchableHighlight onPress={() => console.log("image has been tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BEFFC4",
    alignItems: "center",
    justifyContent: "center",
  },
});
