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
      <Button title="Navigate" color="#841584" onPress={e => setCurrentPage("Navigate")}/>
      <Button title="Find" color="#841584" onPress={e => setCurrentPage("Find")}/>
      <Button title="Profile" color="#841584" onPress={e => setCurrentPage("Profile")}/>
      <Button title="Post" color="#841584" onPress={e => setCurrentPage("Post")}/>
      <Button title="Settings" color="#841584" onPress={e => setCurrentPage("Settings")}/>
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