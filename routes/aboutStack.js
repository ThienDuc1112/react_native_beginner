
import { createStackNavigator } from '@react-navigation/stack';
import About from '../Screen/about';
import MyHeader from '../shared/header';
import Login from '../Screen/login';
import Map from '../Screen/map';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: 'pink', height: 65 },
        // headerTintColor: '#444',
      }}
    >
      <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown:false
      }}>
      </Stack.Screen>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About GameZone',
          headerShown:true,
          headerTitle: () => <MyHeader title={"About"} showMenu={false}/>,
        }}
      />
       <Stack.Screen
        name="Map"
        component={Map}
        options={{
          title: 'Map',
          headerShown:true,
          headerTitle: () => <MyHeader title={"Map"} showMenu={false}/>,
        }}
      />
    </Stack.Navigator>
  );
};

export {AboutStack};