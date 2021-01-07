import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const EventCreator = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.inputDescriptionText}>Event Name: </Text>
      <TextInput
        style={styles.input}
        value={eventName}
        onChangeText={setEventName}
        placeholder="just an input"
      />
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

      <Text style={styles.inputDescriptionText}>Location: </Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="just an input"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
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
  },
  picker: {
    marginBottom: 20,
  },
});

export default EventCreator;
