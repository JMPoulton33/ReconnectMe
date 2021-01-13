import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCalendar from '../screens/HomeCalendar';
import EventCreator from '../screens/EventCreator';
import ActivityScreen from '../screens/ActivityScreen';

const Stack = createStackNavigator();

const MainStackNavigator = ({ items, addEventToDate }) => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Calendar" options={{ headerShown: false }}>
        {(props) => (
          <HomeCalendar
            items={items}
            addEventToDate={addEventToDate}
            {...props}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="New Event">
        {(props) => <EventCreator {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const ActivityScreenStackNavigator = ({ items, addEventToDate }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Activity" options={{ headerShown: false }}>
        {(props) => (
          <ActivityScreen
            items={items}
            addEventToDate={addEventToDate}
            {...props}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
export { ActivityScreenStackNavigator };
