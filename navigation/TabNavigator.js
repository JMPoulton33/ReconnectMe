import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  ActivityScreenStackNavigator,
} from './StackNavigator';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [items, setItems] = useState({});
  const [renderCount, setRenderCount] = useState(0);

  const loadItems = async () => {
    try {
      const userId = '6001759c5dc184084a16b971';
      const response = await fetch(`http://localhost:3000/api/users/${userId}`);
      const user = await response.json();
      const userEvents = user.events;
      setItems(userEvents);
    } catch (err) {
      console.log('fetch failed: ', err);
    }
  };

  const loadMockItems = () => {
    setItems({
      '2021-01-01': [
        {
          name: 'Visit from Andy',
          time: '3 PM',
          location: '6 Holborn Street',
          date: '2021-01-01',
          isRequest: true,
        },
      ],
      '2021-01-02': [
        {
          name: 'Shopping in town',
          time: '11 AM',
          location: 'City Centre',
          isRequest: false,
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
      '2021-01-12': [
        {
          name: 'Visit from Andy',
          time: '3 PM',
          location: '6 Holborn Street',
        },
      ],
      '2021-01-13': [
        {
          name: 'Shopping in town',
          time: '11 AM',
        },
      ],
      '2021-01-14': [
        {
          name: 'Chess Club Meeting',
          time: '6 PM',
        },
      ],
      '2021-01-15': [
        {
          name: 'Visit from Beth',
          time: '5.30 PM',
        },
      ],
      '2021-01-16': [
        {
          name:
            "An event that has a really long description just to see what happens to the display of text when there's a lot of it",
          time: '3 PM',
        },
      ],
      '2021-01-17': [],
      '2021-01-18': [
        {
          name: 'Visit from Andy',
          time: '3 PM',
        },
      ],
      '2021-01-19': [
        {
          name: 'Visit from Beth',
          time: '5.30 PM',
        },
      ],
      '2021-01-20': [
        {
          name:
            "An event that has a really long description just to see what happens to the display of text when there's a lot of it",
          time: '3 PM',
        },
      ],
      '2021-01-21': [],
      '2021-01-22': [
        {
          name: 'Visit from Andy',
          time: '3 PM',
        },
      ],
      '2021-01-23': [
        {
          name: 'Visit from Andy',
          time: '3 PM',
          location: '6 Holborn Street',
        },
      ],
      '2021-01-24': [
        {
          name: 'Shopping in town',
          time: '11 AM',
        },
      ],
      '2021-01-25': [
        {
          name: 'Chess Club Meeting',
          time: '6 PM',
        },
      ],
      '2021-01-26': [
        {
          name: 'Visit from Beth',
          time: '5.30 PM',
        },
      ],
      '2021-01-27': [
        {
          name:
            "An event that has a really long description just to see what happens to the display of text when there's a lot of it",
          time: '3 PM',
        },
      ],
      '2021-01-28': [],
      '2021-01-29': [
        {
          name: 'Visit from Andy',
          time: '3 PM',
        },
      ],
      '2021-01-30': [
        {
          name: 'Visit from Beth',
          time: '5.30 PM',
        },
      ],
      '2021-01-31': [
        {
          name:
            "An event that has a really long description just to see what happens to the display of text when there's a lot of it",
          time: '3 PM',
        },
      ],
      '2021-02-01': [],
      '2021-02-02': [
        {
          name: 'Visit from Andy',
          time: '3 PM',
        },
      ],
    });
  };

  const addEventToDate = async (dateKey, newEvent) => {
    const userId = '6001759c5dc184084a16b971';
    const response = await fetch(
      `http://localhost:3000/api/users/${userId}/events/${dateKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(newEvent),
      },
    );
    // const result = await response.json();
    setRenderCount((prev) => prev + 1);
  };

  const toggleIsRequest = async (dateKey, eventId) => {
    const userId = '6001759c5dc184084a16b971';
    await fetch(
      `http://localhost:3000/api/users/${userId}/events/${dateKey}/${eventId}`,
      {
        method: 'PUT',
      },
    );
    // const result = await response.json();
    setRenderCount((prev) => prev + 1);
  };

  useEffect(() => {
    loadItems();
  }, [renderCount]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'today';
          } else if (route.name === 'Activity') {
            iconName = 'add-chart';
          } else if (route.name === 'Settings') {
            iconName = 'settings-applications';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 15,
        },
        animationEnabled: true,
      }}
    >
      <Tab.Screen name="Home">
        {(props) => (
          <MainStackNavigator
            items={items}
            addEventToDate={addEventToDate}
            toggleIsRequest={toggleIsRequest}
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
      <Tab.Screen name="Settings">
        {() => <Text>Settings Go Here</Text>}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
