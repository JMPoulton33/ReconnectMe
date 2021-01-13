import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ActivityBreakdown = ({
  activityPercentage,
  currentWeekEventCount,
  weeklyEventGoal,
}) => {
  return (
    <View>
      <Text style={styles.bodyText}>
        You currently have {currentWeekEventCount} Events scheduled for this
        week.
      </Text>
      <Text style={styles.bodyText}>
        Schedule {weeklyEventGoal - currentWeekEventCount} more Events to reach
        your Weekly Event Goal.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  bodyText: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 25,
    paddingBottom: 20,
  },
});

export default ActivityBreakdown;
