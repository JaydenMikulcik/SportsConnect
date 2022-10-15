import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Bottom_navigator from './components/bottom_navigator';

import Navigation_page from './pages/navigate_page';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Helo WOrkd 123</Text>
      <Navigation_page />
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
