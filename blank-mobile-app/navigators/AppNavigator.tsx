// used to navigate initial app routes
// if logged in send to home page / feed
// if not logged in, send to sign up/in page

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import React, { createContext, useContext, useState } from "react";

export const AppNavigator = () => {
	const { hasUser } = useContext(AuthContext);

	return (
		<Stack.Navigator>
			{hasUser ? (
				<Stack.Screen name="Feed" component={FeedScreen} />
			) : (
				<Stack.Screen name="Login" component={LoginScreen} />
			)}
		</Stack.Navigator>
	);
};
