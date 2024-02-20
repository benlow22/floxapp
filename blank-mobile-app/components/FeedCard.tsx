// feed card
/* profile pic
- user name
- post content
- like, comment, save, 
 */
import { Button, Image, StyleSheet, Text, View } from "react-native";
import userData from "./../test-data/feedData.json";
import { Avatar } from "./Avatar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ResponseBox } from "./ResponseBox";

export const FeedCard = ({ data }: any) => (
	<View style={styles.container}>
		<View style={styles.userData}>
			<Avatar avatarImage={data.avatarImage} />
			<Text style={styles.username}>{data.userName}</Text>
			<FontAwesome
				name="ellipsis-v"
				size={25}
				style={styles.ellipsis}
			/>
		</View>
		<Text style={styles.postBody}>{data.post}</Text>
		<ResponseBox />
	</View>
);

const styles = StyleSheet.create({
	avatar: {
		borderRadius: 10,
	},
	postBody: { margin: 15 },
	ellipsis: { position: "absolute", right: 5, top: 5, color: "#999999" },
	container: {
		borderBottomColor: "black",
		borderWidth: 1,
		width: "95%",
		borderRadius: 10,
		margin: 5,
		paddingTop: 10,
		// paddingBottom: 10,
		borderBottomWidth: 2,
		backgroundColor: "white",
	},
	userData: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		marginRight: 10,
	},
	username: {
		margin: 10,
		fontSize: 20,
	},
});
