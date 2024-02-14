// used to navigate initial app routes
// if logged in send to home page / feed
// if not logged in, send to sign up/in page

import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { WelcomeScreen } from "../screens/IntroScreen";
import { BottomTabNav } from "./BottomTabNavigator";
import { Button } from "react-native";
import { LoginScreen } from "../screens/LoginScreen";

const Stack = createStackNavigator();

export const AppNavigator = () => {
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
	return (
		<Stack.Navigator>
			{isLoggedIn ? (
				<>
					<Stack.Screen
						name="Flox"
						component={BottomTabNav}
						options={{
							headerRight: () => (
								<Button onPress={() => setIsLoggedIn(false)} title="Logout" />
							),
						}}
					/>
				</>
			) : (
				<>
					<Stack.Screen name="Welcome" component={WelcomeScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
				</>
			)}
		</Stack.Navigator>
	);
};
