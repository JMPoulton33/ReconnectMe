import React, { useState } from 'react';
import {
  calculateActivityPercentage,
  countEventsInWeek,
} from '../utils/ActivityFunctions';
import ProgressBarContainer from '../components/ProgressBarContainer';
import ActivityBreakdown from '../components/ActivityBreakdown';
import EventSuggestion from '../components/EventSuggestion';
import LoadingSpinner from '../components/LoadingSpinner';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const ActivityScreen = ({ items, addEventToDate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggestionAvailable, setIsSuggestionAvailable] = useState(true);
  const weeklyEventGoal = 4;
  const activityPercentage = calculateActivityPercentage(
    items,
    weeklyEventGoal,
  );
  const mockEvent = {
    name: 'Saturday Evening Walk',
    time: '5.30 PM',
    location: 'Kintbury Common',
    date: '2021-01-23',
  };
  const currentWeekEventCount = countEventsInWeek(items);
  const confirmSuggestedEvent = () => {
    setIsLoading(true);
    addEventToDate('2021-01-23', mockEvent);
    setTimeout(() => {
      setIsSuggestionAvailable(false);
      setIsLoading(false);
    }, 500);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <LoadingSpinner isLoading={isLoading} loadingMessage={'Adding Event'} />
      <View style={[styles.container, styles.containerShadow]}>
        <Text style={styles.headingText}>My Activity</Text>
        <ProgressBarContainer percentageComplete={activityPercentage} />
        <ActivityBreakdown
          currentWeekEventCount={currentWeekEventCount}
          activityPercentage={activityPercentage}
          weeklyEventGoal={weeklyEventGoal}
        />
      </View>
      {isSuggestionAvailable ? (
        <View style={[styles.suggestedContainer, styles.containerShadow]}>
          <View>
            <Text style={styles.suggestedText}>Suggested Event</Text>
            <EventSuggestion confirmSuggestedEvent={confirmSuggestedEvent} />
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  suggestedContainer: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  containerShadow: {
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  suggestedText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default ActivityScreen;
