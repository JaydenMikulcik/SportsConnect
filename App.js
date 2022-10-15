import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Bottom_navigator from './components/bottom_navigator';
import Navigation_page from './pages/navigate_page';
import Post_page from './pages/post_page';
import Find_page from './pages/find_page';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sports Connect</Text>
  
      <StatusBar style="auto" />
      <Post_page />
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
