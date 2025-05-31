import React from 'react';
import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';


export function Payment() {
  return (
    <View style={styles.container}>
      <Text>Payment Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
