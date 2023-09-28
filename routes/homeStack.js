
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/home';
import ViewDetail from '../Screen/viewDetails';
import MyHeader from '../shared/header';

const Stack = createStackNavigator();
const HomeStack = () => {
  const title = "Home Page";
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: 'pink', height: 65 },
        // headerTintColor: '#444',
        headerTitle: () => <MyHeader title={title} />,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'GameZone',
          headerTitle: () => <MyHeader title={title} showMenu={true} />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ViewDetail"
        component={ViewDetail}
        options={{
          title: 'Review Details',
          headerTitle: () => <MyHeader title={"Review Details"} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export {HomeStack};