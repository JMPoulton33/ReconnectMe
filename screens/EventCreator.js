import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate, formatTime } from '../utils/ActivityFunctions';
import LoadingSpinner from '../components/LoadingSpinner';

const EventCreator = ({ route, navigation, test }) => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

  const handleEventSubmit = () => {
    setIsLoading(true);
    const { addEventToDate } = route.params;
    const newEvent = {
      name: eventName,
      time: formatTime(time),
      location: location,
      date: formatDate(date),
    };
    const dateKey = formatDate(date);
    addEventToDate(dateKey, newEvent);
    setTimeout(() => {
      setIsLoading(false);
      navigation.goBack();
    }, 500);
  };

  return (
    <View style={styles.container}>
      <LoadingSpinner isLoading={isLoading} loadingMessage={'Creating Event'} />
      <View style={styles.shadowContainer}>
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
          style={[styles.button, styles.buttonShadow]}
          onPress={() => handleEventSubmit()}
        >
          <Text style={styles.buttonText}>Click to Create</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  shadowContainer: {
    backgroundColor: 'white',
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
  picker: {
    marginBottom: 0,
  },
  button: {
    height: 40,
    backgroundColor: '#C4E8E8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  inputContainer: {},
});

export default EventCreator;
