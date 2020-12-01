import React from 'react';
import { View } from 'react-native';

export default function EmptyDay(props) {
  const { styles } = props;
  return(
    <View style={styles.dayWrapper}>
      <View style={styles.dayButton} />
    </View>
  );
}