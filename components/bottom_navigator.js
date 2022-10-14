import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Bottom_navigator() {
  return (
    <View style={styles.container}>
      <Button title="Navigate" color="#841584"/>
      <Button title="Find" color="#841584"/>
      <Button title="Profile" color="#841584"/>
      <Button title="Post" color="#841584"/>
      <Button title="Settings" color="#841584"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
    bottom: 1,
  },
});