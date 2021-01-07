import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
} from 'react-native';

const EmptyDate = ({ handleNavigation }) => {
  const handleEmptyDatePress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Create New Event on this Day', 'Cancel'],
        cancelButtonIndex: 1,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          handleNavigation('Event Creator');
        }
        if (buttonIndex === 1) {
        }
      },
    );
  };

  return (
    <TouchableOpacity style={styles.emptyDate} onPress={handleEmptyDatePress}>
      <View>
        <Text>This is empty date!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default EmptyDate;
