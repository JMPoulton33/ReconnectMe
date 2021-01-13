import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  ActivityScreenStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {(props) => <MainStackNavigator test={'test'} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Activity" component={ActivityScreenStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
