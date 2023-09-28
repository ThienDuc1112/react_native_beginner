import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/formHandling/loginScreen";
import ProfileScreen from "../Screen/formHandling/profileScreen";
import Request from "../Screen/formHandling/getRequest";
import MyHeader from "../shared/header";
const Stack = createStackNavigator();

const ValidationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: null, 
          headerShown: true,
          headerTitle: () => <MyHeader title={"Welcome"} showMenu={true} />,
        }}
      ></Stack.Screen>
      <Stack.Screen name="Request" component={Request}></Stack.Screen>
    </Stack.Navigator>
  );
};

export { ValidationStack };
