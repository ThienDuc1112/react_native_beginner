import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SqliteStack, SearchStack } from "./sqliteStack";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeIcon = ({ focused }) => (
  <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={24} color={focused ? '#36cfcc' : 'gray'} />
);

const ProfileIcon = ({ focused }) => (
  <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={24} color={focused ? '#36cfcc' : 'gray'} />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={SqliteStack}
        options={{
          headerShown: false,
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          headerShown: false,
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
