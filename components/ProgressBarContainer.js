import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProgressBarFiller from './ProgressBarFiller';

const ProgressBarContainer = ({ percentageComplete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <ProgressBarFiller percentageComplete={percentageComplete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    position: 'relative',
    height: 50,
    width: 360,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#23395B',
    justifyContent: 'flex-start',
  },
  container: {
    padding: 15,
  },
});

export default ProgressBarContainer;
