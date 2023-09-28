import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../Screen/sqlite/DetailScreen";
import EntryScreen from "../Screen/sqlite/EntryScreen";
import HomeScreen from "../Screen/sqlite/HomeScreen";
import SearchScreen from "../Screen/sqlite/SearchScreen";
import MyHeader from "../shared/header";

const Stack = createStackNavigator();
const SqliteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: () => <MyHeader title={"Welcome"} showMenu={true} />,
        }}
      />
      <Stack.Screen name="Entry" component={EntryScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: true,
          headerTitle: () => <MyHeader title={"Search"} showMenu={true} />,
        }}
      />
    </Stack.Navigator>
  );
};

export { SqliteStack, SearchStack };
