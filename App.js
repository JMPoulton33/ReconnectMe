import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeCalendar from './screens/HomeCalendar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeCalendar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
