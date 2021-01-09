import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import mockEventsWeek from '../mocks/mockEventsWeek';
import EventItem from '../components/EventItem';
import EmptyDate from '../components/EmptyDate';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeCalendar = ({ navigation }) => {
  const [items, setItems] = useState({});

  const loadItems = async () => {
    await setItems(mockEventsWeek);
  };

  const renderItem = (item) => {
    return (
      <EventItem
        eventTitle={item.name}
        eventTime={item.time}
        eventLocation={item.location}
        handleNavigation={handleNavigation}
        addEventToDate={addEventToDate}
      />
    );
  };

  const renderEmptyDate = () => {
    return (
      <EmptyDate
        handleNavigation={handleNavigation}
        addEventToDate={addEventToDate}
      />
    );
  };

  const handleNavigation = (targetScreen, params) => {
    console.log('params :', params);
    navigation.navigate(targetScreen, params);
  };

  const addEventToDate = (dateKey, newEvent) => {
    setItems((prevState) =>
      prevState[dateKey]
        ? {
            ...prevState,
            [dateKey]: [...prevState[dateKey], newEvent],
          }
        : { ...prevState, [dateKey]: [newEvent] },
    );
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        items={items}
        selected={'2020-01-01'}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        theme={{
          agendaDayTextColor: 'black',
          agendaDayNumColor: 'black',
          agendaDateBackground: 'white',
          // agendaTodayColor: '#97D8D8',
          // agendaKnobColor: '#b8b8b8',
          // calendarBackground: '#D9F1F1',
          backgroundColor: '#ffffff',
          // textSectionTitleColor: '#b6c1cd',
          // textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#6BC7C7',
          // selectedDayTextColor: '#ffffff',
          // todayTextColor: '#00adf5',
          // dayTextColor: '#2d4150',
          // textDisabledColor: '#d9e1e8',
          // dotColor: '#00adf5',
          // selectedDotColor: '#ffffff',
          // arrowColor: 'orange',
          // disabledArrowColor: '#d9e1e8',
          // monthTextColor: 'blue',
          // indicatorColor: 'blue',
          // textDayFontWeight: '300',
          // textMonthFontWeight: 'bold',
          // textDayHeaderFontWeight: '300',
          // textDayFontSize: 16,
          // textMonthFontSize: 16,
          // textDayHeaderFontSize: 16,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyDate: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    minHeight: 57.5,
  },
});

export default HomeCalendar;
