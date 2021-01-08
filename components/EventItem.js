import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
} from 'react-native';

const EventItem = ({
  eventTitle,
  eventLocation,
  eventTime,
  handleNavigation,
  addEventToDate,
}) => {
  const handleEventPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Edit Event',
          'Create New Event on this Day',
          'See Event Details',
          'Cancel',
        ],
        cancelButtonIndex: 3,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          console.log('Edit Event');
        }
        if (buttonIndex === 1) {
          handleNavigation('New Event', {
            addEventToDate: addEventToDate,
          });
        }
        if (buttonIndex === 2) {
          console.log('See Event Details');
        }
        if (buttonIndex === 3) {
        }
      },
    );
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handleEventPress}>
      <View>
        <Text style={styles.eventItemText}>{eventTitle}</Text>
        <View style={styles.timeLocationContainer}>
          {eventTime ? <Text>{eventTime}</Text> : <Text />}
          {eventLocation ? <Text>{eventLocation}</Text> : <Text />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#97D8D8',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    minHeight: 57.5,
  },
  eventItemText: {
    color: 'black',
    fontSize: 20,
  },
  timeLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default EventItem;
