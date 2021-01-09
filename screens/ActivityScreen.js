import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ActivityScreen = () => {
  const formatDate = (date) => {
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

  const getRangeOfDatesInWeek = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const dayOfMonth = startDate.getDate();
    const dayOfWeek = startDate.getDay();

    const distanceFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startDate.setDate(currentDate.getDate() - distanceFromMonday);

    const targetRange = [];
    for (let i = 0; i < 7; i++) {
      const tempDate = new Date(startDate.getTime());
      const tempUTC = new Date(tempDate.setDate(startDate.getDate() + i));
      const tempFormatted = formatDate(tempUTC);
      targetRange.push(tempFormatted);
    }
    return targetRange;
  };

  const mockEventsWeek = {
    '2021-01-01': [
      {
        name: 'Visit from Andy',
        time: '3 PM',
        location: '6 Holborn Street',
      },
    ],
    '2021-01-02': [
      {
        name: 'Shopping in town',
        time: '11 AM',
      },
    ],
    '2021-01-03': [
      {
        name: 'Chess Club Meeting',
        time: '6 PM',
      },
    ],
    '2021-01-04': [
      {
        name: 'Visit from Beth',
        time: '5.30 PM',
      },
    ],
    '2021-01-05': [
      {
        name:
          "An event that has a really long description just to see what happens to the display of text when there's a lot of it",
        time: '3 PM',
      },
    ],
    '2021-01-06': [],
    '2021-01-07': [
      {
        name: 'Visit from Andy',
        time: '3 PM',
      },
    ],
    '2021-01-08': [
      {
        name: 'Visit from Beth',
        time: '5.30 PM',
      },
    ],
    '2021-01-09': [
      {
        name:
          "An event that has a really long description just to see what happens to the display of text when there's a lot of it",
        time: '3 PM',
      },
    ],
    '2021-01-10': [],
    '2021-01-11': [
      {
        name: 'Visit from Andy',
        time: '3 PM',
      },
    ],
  };

  const countEventsInWeek = () => {
    const targetRange = getRangeOfDatesInWeek();
    console.log(targetRange);
    let eventCount = 0;
    for (let dateKey of targetRange) {
      const count = mockEventsWeek[dateKey].length;
      eventCount += count;
    }
    console.log(eventCount);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => countEventsInWeek()}>
        <Text>Activity Bar Component</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivityScreen;
