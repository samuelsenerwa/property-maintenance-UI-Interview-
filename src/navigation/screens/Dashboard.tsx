import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
   <ScrollView>
    <View>
     
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
