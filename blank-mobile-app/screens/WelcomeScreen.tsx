import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

//any type for now, but will change to specific react-native-nav type
export const WelcomeScreen = ({ navigation }: any) => {
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

	const nav = useNavigation();
	return (
		<View style={styles.layout}>
			<Text style={styles.title}>Welcome to Flox</Text>
			<Button title="login here" onPress={() => navigation.navigate("Login")} />
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
