import { createStackNavigator } from "@react-navigation/stack";
import ShowToast from "../Screen/showToast";
import MyHeader from "../shared/header";

const Stack = createStackNavigator();
const ShowStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ShowToast"
        component={ShowToast}
        options={{
          headerTitle: () => <MyHeader title={"Show Toast"} showMenu={true} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export {ShowStack};
