import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Bottom_navigator() {
    
    const [currentpage, setCurrentPage] = useState("Profile");

  return (
    <View style={styles.container}>
        <Text>{currentpage}</Text>
      <Button style={styles.button} title="Navigate" color="#841584" onPress={e => setCurrentPage("Play")}/>
      <Button title="Profile" color="#841584" onPress={e => setCurrentPage("Profile")}/>
      <Button title="Find" color="#841584" onPress={e => setCurrentPage("Join")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
    bottom: 1,
  },

  button: {
    flex: 1
  }
});