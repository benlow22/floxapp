// once logged in, create bottom tabs for Feed, Events, Profile...

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TestScreen } from "../screens/testScreen";
import { EventsTab } from "../tab/Events";
import { FeedTab } from "../tab/Feed";
import { ProfileTab } from "../tab/Profile";
import { SettingsTab } from "../tab/Settings";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
const BottomTab = createBottomTabNavigator();

export const BottomTabNav = () => (
	<BottomTab.Navigator screenOptions={{ headerShown: false }}>
		<BottomTab.Screen
			name="Feed"
			component={FeedTab}
			options={{
				tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
			}}
		/>
		<BottomTab.Screen
			name="Profile"
			component={ProfileTab}
			options={{ tabBarIcon: ({ color }) => <TabBarIcon name="meh-o" color={color} /> }}
		/>
		<BottomTab.Screen
			name="Events"
			component={EventsTab}
			options={{ tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} /> }}
		/>
		<BottomTab.Screen
			name="Settings"
			component={SettingsTab}
			options={{ tabBarIcon: ({ color }) => <TabBarIcon name="gears" color={color} /> }}
		/>
	</BottomTab.Navigator>
);
