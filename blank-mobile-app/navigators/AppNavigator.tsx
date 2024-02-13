// used to navigate initial app routes
// if logged in send to home page / feed
// if not logged in, send to sign up/in page

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoginScreen } from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { BottomTabNav } from "./BottomTabNavigator";

export const AppNavigator = () => {
	const { isLoggedIn } = useContext(AuthContext);
	return (
		<Stack.Navigator>
			{isLoggedIn ? (
				<Stack.Screen name="Flox" component={BottomTabNav} />
			) : (
				<Stack.Screen name="Login" component={LoginScreen} />
			)}
		</Stack.Navigator>
	);
};
