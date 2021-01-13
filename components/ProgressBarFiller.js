import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { calculateProgressFillerWidth } from '../utils/ActivityFunctions';

const ProgressBarFiller = ({ percentageComplete }) => {
  return (
    <View
      style={[
        styles.filler,
        { width: calculateProgressFillerWidth(percentageComplete, 75, 360) },
      ]}
    >
      <Text style={styles.fillerText}>{percentageComplete}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  filler: {
    backgroundColor: '#23395B',
    borderRadius: 30,
    height: 44,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillerText: {
    fontWeight: 'bold',
    color: '#D9F1F1',
    fontSize: 20,
  },
});

export default ProgressBarFiller;
