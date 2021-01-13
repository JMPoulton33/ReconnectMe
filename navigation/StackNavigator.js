import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCalendar from '../screens/HomeCalendar';
import EventCreator from '../screens/EventCreator';
import ActivityScreen from '../screens/ActivityScreen';

const Stack = createStackNavigator();

const MainStackNavigator = ({ test }) => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Calendar"
        component={HomeCalendar}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="New Event">
        {(props) => <EventCreator test={test} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const ActivityScreenStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Activity" component={ActivityScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
export { ActivityScreenStackNavigator };