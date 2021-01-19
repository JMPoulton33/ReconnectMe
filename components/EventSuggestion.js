import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AddToCalendarButton from './AddToCalendarButton';

const EventSuggestion = ({ confirmSuggestedEvent }) => {
  return (
    <View style={[styles.containerShadow, styles.suggestedEventContainer]}>
      <Text style={styles.titleText}>Saturday Evening Walk</Text>
      <Image
        style={styles.eventImage}
        source={require('../assets/eventImage.jpg')}
      />

      <Text style={[styles.bodyText, styles.locationText]}>
        Kintbury Common
      </Text>
      <View style={styles.dateTimeContainer}>
        <Text style={[styles.bodyText, styles.timeText]}>5:30 PM</Text>
        <Text style={styles.bodyText}>23rd January 2021</Text>
      </View>
      <AddToCalendarButton confirmSuggestedEvent={confirmSuggestedEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  suggestedEventContainer: {
    backgroundColor: '#C4E8E8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  containerShadow: {
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5,
  },
  titleText: {
    fontWeight: '600',
    fontSize: 24,
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
  bodyText: {
    fontWeight: '600',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 5,
  },
  locationText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  eventImage: {
    borderRadius: 5,
    width: 330,
    height: 80,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeText: {
    marginRight: 80,
    marginLeft: 10,
  },
});

export default EventSuggestion;
