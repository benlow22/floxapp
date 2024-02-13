import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export const LoginScreen = () => {
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

	return (
		<View style={styles.layout}>
			<Text style={styles.title}>Welcome to Flox</Text>
			<Button
				title="login here"
				onPress={() => {
					setIsLoggedIn(true);
				}}
			/>
			<Text style={styles.p}>Don't have an account?</Text>
			<Button
				title="Sign up here "
				onPress={() => {
					setIsLoggedIn(true);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 32,
		marginBottom: 16,
	},
	p: {
		fontSize: 12,
	},
});