import React from 'react';
import {
  calculateActivityPercentage,
  countEventsInWeek,
} from '../utils/ActivityFunctions';
import ProgressBarContainer from '../components/ProgressBarContainer';
import ActivityBreakdown from '../components/ActivityBreakdown';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const ActivityScreen = ({ items, addEventToDate }) => {
  const weeklyEventGoal = 10;
  const activityPercentage = calculateActivityPercentage(
    items,
    weeklyEventGoal,
  );
  const currentWeekEventCount = countEventsInWeek(items);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.headingText}>My Activity</Text>
        <ProgressBarContainer percentageComplete={activityPercentage} />
        <ActivityBreakdown
          currentWeekEventCount={currentWeekEventCount}
          activityPercentage={activityPercentage}
          weeklyEventGoal={weeklyEventGoal}
        />
        <Text>Event Suggestions will appear below</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default ActivityScreen;
