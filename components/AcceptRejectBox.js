import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AcceptRejectBox = ({ toggleIsRequest, eventId, eventDate }) => {
  const handleAcceptPress = () => {
    console.log('accept pressed');
    toggleIsRequest(eventDate, eventId);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleAcceptPress}
        style={[styles.buttonContainer, styles.accept]}
      >
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, styles.reject]}>
        <Text style={styles.buttonText}>Reject</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    padding: 7,
    marginHorizontal: 45,
  },
  buttonText: {
    fontSize: 24,
  },

  accept: {
    backgroundColor: '#95D598',
  },

  reject: {
    backgroundColor: '#FF9292',
  },
});

export default AcceptRejectBox;
