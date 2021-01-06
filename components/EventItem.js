import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EventItem = (props) => {
  const handleEventPress = () => {
    console.log('event pressed');
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handleEventPress}>
      <View>
        <Text style={styles.eventItemText}>{props.eventTitle}</Text>
        <View style={styles.timeLocationContainer}>
          <Text>{props.eventTime}</Text>
          {props.eventLocation ? (
            <Text>{props.eventLocation}</Text>
          ) : (
            <Text>No location provided</Text>
          )}
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
});

export default EventItem;
