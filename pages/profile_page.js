import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Bottom_navigator from './components/bottom_navigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is the profile page</Text>
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