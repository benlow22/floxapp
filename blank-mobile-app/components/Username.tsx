import { Button, Image, StyleSheet, Text } from "react-native";
import userData from "./../test-data/feedData.json";
import { useNavigation } from "@react-navigation/native";

type TProps = {
	username: string;
	userProfileUrl: string;
};

const nav = useNavigation();

export const Username = ({ username, userProfileUrl }: TProps) => (
	<Button
		title={username}
		onPress={() => nav.navigate(userProfileUrl)}
	/>
);

const styles = StyleSheet.create({
	avatar: {
		borderRadius: 64,
		width: 64,
		height: 64,
		backgroundColor: "black",
	},
});
