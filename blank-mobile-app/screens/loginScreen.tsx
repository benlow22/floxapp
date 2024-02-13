import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const LoginScreen = () => {
	return (
		<View style={styles.layout}>
			<Text style={styles.title}>Welcome to Flox</Text>
			<Button title="login here" onPress={() => {}} />
			<Text style={styles.p}>Don't have an account?</Text>
			<Button title="Sign up here " onPress={() => {}} />
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
