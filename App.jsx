// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as Updates from "expo-updates";
import * as Device from "expo-device";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import registerNNPushToken from "native-notify";
// import OnboardingScreen from "./screens/OnboardingScreen";
// import LoginScreen from "./screens/LoginScreen";
// import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

function WelcomeScreen() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }
  onDeleteBTN = () => {
    console.log("OnDelete!");
    alert(" OnDelete");
  };
  useEffect(() => {
    return () => {
      onFetchUpdateAsync();
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>
          {Device.manufacturer}: {Device.modelName}
        </Text>
      </View>
      <Button
        color="blue"
        style={styles.button}
        title="Fetch Update"
        onPress={onFetchUpdateAsync}
      />
      <Image style={styles.logo} source={{}} />
      <View style={{ padding: "20" }}>
        <Text style={styles.buttontxt}>
          Walter White's Car Washing Service's !
        </Text>
        <View>
          <Button
            title="Let's Get Started"
            color="blue"
            style={styles.button}
            onPress={() =>
              Alert.alert(
                "Alert Title",
                "alertMessage",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed!"),
                  },
                  { text: "OK", onPress: this.onDeleteBTN },
                ],
                { cancelable: false }
              )
            }
          />
        </View>
      </View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn.dribbble.com/users/470545/screenshots/3451849/slatervroom_drbbbl.gif",
        }}
      />
    </View>
  );
}
export default function App() {
  // registerNNPushToken(22632, "lNJbTZxTsqGUZCd6BfbdW2");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoutename="Welcome"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#109ada",
    paddingVertical: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tinyLogo: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    width: "100%",
    height: 180,
  },
  buttontxt: {
    color: "white",
    backgroundColor: "#109ada",
    textAlign: "center",
    width: "100%",
    padding: 20,
    fontSize: 20,
  },
  button: {
    width: "20",
    height: 300,
    borderRadius: 50,
    backgroundColor: "#109ada",
    textAlign: "center",
    width: "100%",
    padding: 20,
    fontSize: 20,
  },
});
