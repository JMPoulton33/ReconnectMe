import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeCalendar from './screens/HomeCalendar';
import EventCreator from './screens/EventCreator';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="Calendar"
          component={HomeCalendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="New Event" component={EventCreator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
