import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeCalendar from './screens/HomeCalendar';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <HomeCalendar />
      </SafeAreaView>
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
