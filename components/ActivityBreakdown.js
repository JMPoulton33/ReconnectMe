import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ActivityBreakdown = ({
  activityPercentage,
  currentWeekEventCount,
  weeklyEventGoal,
}) => {
  return (
    <View>
      {currentWeekEventCount < weeklyEventGoal ? (
        <Text style={styles.bodyText}>
          Schedule {weeklyEventGoal - currentWeekEventCount} more Events to
          reach your Weekly Event Goal.
        </Text>
      ) : (
        <View>
          <Text style={[styles.bodyText, styles.congratulations]}>
            Congratulations!
          </Text>
          <Text style={[styles.bodyText, styles.goalReached]}>
            You've reached your Weekly Goal of {weeklyEventGoal} Events
          </Text>
        </View>
      )}
      <Text style={styles.bodyText}>
        You currently have {currentWeekEventCount} Events scheduled for this
        week
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
  congratulations: {
    fontSize: 30,
    lineHeight: 35,
    paddingBottom: 5,
  },
  goalReached: {
    fontSize: 26,
    lineHeight: 30,
    paddingBottom: 10,
  },
});

export default ActivityBreakdown;
