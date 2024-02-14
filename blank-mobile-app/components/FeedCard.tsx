// feed card
/* profile pic
- user name
- post content
- like, comment, save, 
 */
import { Image, StyleSheet, Text, View } from "react-native";
import userData from "./../test-data/feedData.json";
import { Avatar } from "./Avatar";

export const FeedCard = ({ data }: any) => (
	<View style={styles.container}>
		<View style={styles.userData}>
			<Avatar avatarImage={data.avatarImage} />
			<Text style={styles.username}>{data.userName}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	avatar: {
		borderRadius: 10,
	},

	container: {
		borderBottomColor: "black",
		borderWidth: 1,
		width: "95%",
		borderRadius: 10,
		margin: 5,
		padding: 10,
		borderBottomWidth: 2,
		backgroundColor: "white",
	},
	userData: {
		flexDirection: "row",
		alignItems: "center",
	},
	username: {
		margin: 10,
		fontSize: 20,
	},
});
