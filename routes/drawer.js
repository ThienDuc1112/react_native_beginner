import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import {HomeStack} from "./homeStack";
import {AboutStack} from "./aboutStack";
import {ShowStack} from "./showStack";
import {JobStack} from './jobStack';
import { ValidationStack } from "./loginStack";
import {MultiChoiceStack} from "./multichoiceStack"
import {SqliteStack} from "./sqliteStack";
import MyHeader from '../shared/header';
import BottomTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();
const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator
     initialRouteName="My Home"
     screenOptions={{
      headerShown: false,
      headerTitle: () => <MyHeader title={"GameZone"} />,
    }}>
      <Drawer.Screen name="My Home"
       component={HomeStack} />
      <Drawer.Screen name="About Information" component={AboutStack} />
      <Drawer.Screen name="Toast" component={ShowStack} />
      <Drawer.Screen name="Jobs" component={JobStack} />
      <Drawer.Screen name="Validation" component={ValidationStack} />
      <Drawer.Screen name="Multi-choice task" component={MultiChoiceStack} />
      <Drawer.Screen name="SQLite Databases" component={BottomTabNavigator}/>
    </Drawer.Navigator>
  );
};


export default RootDrawerNavigator;
