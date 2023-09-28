import { createStackNavigator } from "@react-navigation/stack";
import Competition from "../Screen/multi-choice/competition";
import MyHeader from "../shared/header";

const Stack = createStackNavigator();
const MultiChoiceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Competition"
        component={Competition}
        options={{
          headerShown: true,
          headerTitle: () => <MyHeader title={"Welcome"} showMenu={true} />,
        }}
      />
    </Stack.Navigator>
  );
};

export {MultiChoiceStack} 
