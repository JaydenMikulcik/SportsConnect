import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Post_page() {
  return (
    <View style={styles.container}>
      <Text>This is your username</Text>
      <Image
        style={{ width: 250, height: 250 }}
        source={require('../images/Default-profile.jpg')}
        />
      <StatusBar style="auto" />
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