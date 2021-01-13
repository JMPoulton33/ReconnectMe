import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  ActivityScreenStackNavigator,
} from './StackNavigator';
import mockEventsWeek from '../mocks/mockEventsWeek';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [items, setItems] = useState({});

  const loadItems = async () => {
    await setItems(mockEventsWeek);
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
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {(props) => (
          <MainStackNavigator
            items={items}
            addEventToDate={addEventToDate}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Activity">
        {(props) => (
          <ActivityScreenStackNavigator
            items={items}
            addEventToDate={addEventToDate}
            {...props}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
