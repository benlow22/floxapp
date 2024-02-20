import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Feed } from "../screens/Feed";
import feedData from "../test-data/feedData.json";
import { FeedCard } from "../components/FeedCard";

export function FeedTab() {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.heading}>Latest Feed </Text>
			{feedData.data.map((data) => (
				<FeedCard
					data={data}
					key={data.id}
				/>
			))}
			<Feed />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
		backgroundColor: "#eeeeee",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	heading: {
		alignContent: "flex-start",
	},
});
