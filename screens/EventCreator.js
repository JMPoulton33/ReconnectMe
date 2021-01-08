import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const EventCreator = ({ route, navigation }) => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setTime(currentTime);
  };

  const formatDate = () => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return year + '-' + month + '-' + dt;
  };

  const formatTime = () => {
    return time.toLocaleTimeString(navigator.language, {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const handleEventSubmit = () => {
    const { addEventToDate } = route.params;
    const newEvent = {
      name: eventName,
      time: formatTime(),
      location: location,
    };
    const dateKey = formatDate();
    addEventToDate(dateKey, newEvent);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputDescriptionText}>Event Name: </Text>
        <TextInput
          style={styles.input}
          value={eventName}
          onChangeText={setEventName}
          placeholder="Enter the Name of your New Event Here"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputDescriptionText}>Location: </Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Enter the Location of your New Event Here"
        />
      </View>

      <DateTimePicker
        style={styles.picker}
        display="spinner"
        value={date}
        mode="date"
        onChange={handleDateChange}
      />

      <DateTimePicker
        style={styles.picker}
        display="spinner"
        value={time}
        mode="time"
        onChange={handleTimeChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleEventSubmit()}
      >
        <Text>Click to Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
  inputDescriptionText: {
    color: 'black',
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  picker: {
    marginBottom: 0,
  },
  button: {
    height: 40,
    backgroundColor: '#97d8d8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {},
});

export default EventCreator;
