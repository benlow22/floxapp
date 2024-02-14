import { Image, StyleSheet, Text } from "react-native";
import userData from "./../test-data/feedData.json";

export const Avatar = ({ avatarImage }: any) => (
	<>
		<Image
			style={styles.avatar}
			source={{ uri: avatarImage }}
		/>
	</>
);

const styles = StyleSheet.create({
	avatar: {
		borderRadius: 64,
		width: 64,
		height: 64,
		backgroundColor: "black",
	},
});
