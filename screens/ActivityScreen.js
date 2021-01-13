import React from 'react';
import countEventsInWeek from '../utils/ActivityFunctions';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const ActivityScreen = ({ items, addEventToDate }) => {
  return (
    <SafeAreaView>
      <Text>Activity Bar Component</Text>
      <Text>{countEventsInWeek(items)}</Text>
    </SafeAreaView>
  );
};

export default ActivityScreen;
