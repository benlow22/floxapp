import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

//any type for now, but will change to specific react-native-nav type

export const LoginScreen = ({ navigation }: any) => {
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
	const nav = useNavigation();

	return (
		<View style={styles.layout}>
			<Text style={styles.title}>Please Log in</Text>
			<TextInput style={styles.input} placeholder="Username" />
			<TextInput style={styles.input} placeholder="Password" secureTextEntry />
			<Text style={styles.note}>Forgot Password *make a link*</Text>

			<Button
				title="Log in"
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
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: "20%",
	},
	title: {
		fontSize: 32,
		marginBottom: 16,
	},
	p: {
		fontSize: 12,
	},
	input: {
		padding: 8,
		fontSize: 18,
		backgroundColor: "#e3e3e3",
		width: "60%",
		borderRadius: 10,
		margin: 10,
	},
	note: {
		color: "pink",
	},
});
