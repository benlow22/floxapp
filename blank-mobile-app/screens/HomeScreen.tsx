import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export const HomeScreen = () => {
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

	return (
		<View style={styles.layout}>
			<Text style={styles.title}>Home Page</Text>
			<Button
				title="Log out"
				onPress={() => {
					setIsLoggedIn(false);
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
