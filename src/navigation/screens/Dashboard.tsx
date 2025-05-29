import React from 'react';
import { Text } from '@react-navigation/elements';
import { StyleSheet, View, ScrollView } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { typography } from '../../utils/theme';

export function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
   <ScrollView>
    <View>
     <Text style={typography.h1}>Dashboard</Text>
    </View>
   </ScrollView>
    </SafeAreaView>
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
