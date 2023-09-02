import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import AppLoading from "./screens/AppLoading";
import Login from "./screens/Login";
import HomeSolid from "./assets/icons/home_solid.png";
import HomeOutline from "./assets/icons/home_outline.png";
import ProfileSolid from "./assets/icons/profile_solid.png";
import ProfileOutline from "./assets/icons/profile_outline.png";
import { Image, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Stack = createNativeStackNavigator();
const AuthenticatedStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PrivateStack() {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeTabs}
      />
      <AuthenticatedStack.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{ headerShown: false }}
      />
      <AuthenticatedStack.Screen
        name="Fit"
        component={FitScreen}
        options={{ headerShown: false }}
      />
      <AuthenticatedStack.Screen
        name="Rest"
        component={RestScreen}
        options={{ headerShown: false }}
      />
    </AuthenticatedStack.Navigator>
  );
}

export default function AppNavigation() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={AppLoading}
        />
        {user ? (
          <Stack.Screen
            name="Authenticated"
            component={PrivateStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 19,
          borderRadius: 17,
          backgroundColor: "#FFFFFF",
          marginHorizontal: 24,
          shadowColor: "rgba(50, 74, 89, 0.12)",
          shadowOpacity: 0.5,
          shadowOffset: { width: 0, height: 4 },
          position: "absolute",
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;
  if (route.name == "home") {
    icon = focused ? (
      <Image source={HomeSolid} />
    ) : (
      <Image source={HomeOutline} />
    );
  } else if (route.name == "profile") {
    icon = focused ? (
      <Image source={ProfileSolid} />
    ) : (
      <Image source={ProfileOutline} />
    );
  }

  return <View>{icon}</View>;
};
