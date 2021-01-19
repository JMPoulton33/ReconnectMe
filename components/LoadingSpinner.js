import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native';

const LoadingSpinner = ({ isLoading, loadingMessage }) => {
  return (
    <Modal transparent={true} animationType="none" visible={isLoading}>
      <View style={styles.blurredBackground}>
        <View style={styles.spinnerContainer}>
          <ActivityIndicator animating={isLoading} size="large" />
          <Text style={styles.spinnerText}>{loadingMessage}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurredBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  spinnerContainer: {
    padding: 13,
    backgroundColor: '#97D8D8',
    borderRadius: 13,
  },
  spinnerText: {
    fontSize: 24,
  },
});

export default LoadingSpinner;
