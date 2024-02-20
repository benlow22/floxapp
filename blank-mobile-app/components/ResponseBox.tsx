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

export const ResponseBox = ({ data }: any) => (
	<View style={styles.container}>
		<View style={styles.like}>
			<Text style={styles.text}>Like</Text>
			<FontAwesome
				name="thumbs-o-up"
				size={25}
			/>
		</View>
		<View style={styles.like}>
			<Text style={styles.text}>React</Text>
			<FontAwesome
				name="meh-o"
				size={25}
			/>
		</View>
		<View style={styles.like}>
			<Text style={styles.text}>comment</Text>
			<FontAwesome
				name="comment"
				size={25}
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	like: {
		borderRadius: 10,
		alignItems: "center",
		flexDirection: "row-reverse",
		justifyContent: "flex-start",
	},
	postBody: { marginTop: 15 },
	container: {
		paddingLeft: 20,
		backgroundColor: "#e7e7e7",
		flexDirection: "row",
		justifyContent: "space-evenly",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	text: {
		margin: 10,
		fontSize: 15,
	},
});
