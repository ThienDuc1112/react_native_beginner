import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Screen/welcome";
import MyHeader from "../shared/header";
import Detail from "../Screen/job-details/job";
import PopularJob from "../Screen/popularJob";
const Stack = createStackNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{
          headerShown: true,
          headerTitle: () => <MyHeader title={"Welcome"} showMenu={true} />,
        }}
      ></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};
export { JobStack };
