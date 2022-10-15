import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Bottom_navigator from './components/bottom_navigator';

export default function Navigation_page() {
  return (
    <View style={styles.container}>
      <Text>This Page is for navigation</Text>
      <StatusBar style="auto" />
      <Bottom_navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});