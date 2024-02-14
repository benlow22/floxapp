import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Our global authentication state, with default values
export const AuthContext = createContext<IAuthContext>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
});

type IAuthContext = {
	isLoggedIn: boolean;
	setIsLoggedIn: (loggedIn: boolean) => void;
};
type IChildren = {
	children: React.ReactNode;
};
export const AuthProvider: React.FC<IChildren> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
