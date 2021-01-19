import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
} from 'react-native';

const EmptyDate = ({ handleNavigation, addEventToDate }) => {
  const handleEmptyDatePress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Create New Event on this Day', 'Cancel'],
        cancelButtonIndex: 1,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          handleNavigation('New Event', {
            addEventToDate: addEventToDate,
          });
        }
        if (buttonIndex === 1) {
        }
      },
    );
  };

  return (
    <TouchableOpacity
      style={[styles.emptyDate, styles.itemShadow]}
      onPress={handleEmptyDatePress}
    >
      <View>
        <Text>This is empty date!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emptyDate: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    minHeight: 57.5,
  },
  itemShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default EmptyDate;
