import react from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCalendar from '../screens/HomeCalendar';
import EventCreator from '../screens/EventCreator';

const MainStackNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Calendar"
        component={HomeCalendar}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="New Event" component={EventCreator} />
    </Stack.Navigator>
  );
};
