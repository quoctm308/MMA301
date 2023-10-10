import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function App() {

  let location = {
    latitude: 0,
    longtitude: 0,
    latitudeDelta: 0.999,
    longtitudeDelta: 0.009
  }
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        mapType='hybrid'
        region={location}
      >
        <Marker coordinate={{ latitude: 16.047079, longitude: 108.206230 }} />
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
});
