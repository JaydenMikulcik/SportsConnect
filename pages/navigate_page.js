import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

export default function Navigation_page() {
  const [search, onChangeSearch] = React.useState("Search ...");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSearch}
        value={search}
      />
      <Text>{search}</Text>
      <MapView style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.2,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>
        <Marker 
        coordinate={{
          latitude: 37.78825,
          longitude: -122.2
        }}
        />
        </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});