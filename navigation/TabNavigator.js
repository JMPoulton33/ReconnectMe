import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  ActivityScreenStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [items, setItems] = useState({});

  const loadItems = async () => {
    try {
      const userId = '6001759c5dc184084a16b971';
      const response = await fetch(`http://localhost:3000/api/users/${userId}`);
      const user = await response.json();
      const userEvents = user.events;
      setItems(userEvents);
    } catch (err) {
      console.log('fetch failed', err);
    }
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
